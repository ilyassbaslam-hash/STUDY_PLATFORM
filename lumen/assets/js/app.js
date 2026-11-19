/* ============================================================
   Lumen — state and data helpers
   A single localStorage store plus small utilities shared
   by every page.
   ============================================================ */

(function () {
  'use strict';

  const DB = window.DB;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const KEY = 'lumen.v1';

  const pad = (n) => String(n).padStart(2, '0');
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const uid = () => Math.random().toString(36).slice(2, 9);
  const dateKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const todayKey = () => dateKey(new Date());
  const dayName = () => DAYS[(new Date().getDay() + 6) % 7];
  const greeting = () => {
    const h = new Date().getHours();
    return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
  };
  const initials = (name) => {
    const parts = String(name || 'Learner').trim().split(/\s+/).filter(Boolean);
    return ((parts[0] || 'L')[0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  };
  const nameFromEmail = (email) => {
    const local = String(email || '').split('@')[0].replace(/[._-]+/g, ' ').trim();
    if (!local) return 'Learner';
    return local.split(/\s+/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  const isTyping = (el) => el && (el.matches('input, textarea, select') || el.isContentEditable);

  function isoDaysAgo(days) {
    const d = new Date();
    d.setDate(d.getDate() - days);
    return d.toISOString();
  }

  function formatMinutes(mins) {
    const value = Math.max(0, Math.round(Number(mins) || 0));
    const h = Math.floor(value / 60);
    const m = value % 60;
    if (h && m) return `${h}h ${m}m`;
    if (h) return `${h}h`;
    return `${m}m`;
  }

  function formatDate(value, opts = { month: 'short', day: 'numeric' }) {
    if (!value) return '';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', opts);
  }

  function relativeDate(value) {
    if (!value) return '';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '';
    const days = Math.floor((Date.now() - d.getTime()) / 86400000);
    if (days <= 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return formatDate(d);
  }

  function seedActivity() {
    const out = {};
    const base = [38, 56, 30, 64, 42, 74, 22];
    for (let i = 125; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const weeklyBase = base[(d.getDay() + 6) % 7];
      const noise = ((i * 37) % 29) - 9;
      let minutes = Math.max(0, weeklyBase + noise);
      if (i % 13 === 0) minutes = 0;
      out[dateKey(d)] = minutes;
    }
    out[todayKey()] = 24;
    return out;
  }

  function seedLessons() {
    const history = {
      'bio-1': 6, 'bio-2': 5, 'bio-3': 5, 'bio-4': 3,
      'calc-1': 7, 'calc-2': 6,
      'psych-1': 4, 'psych-2': 1
    };
    const out = {};
    Object.keys(history).forEach((id) => { out[id] = { done: true, at: isoDaysAgo(history[id]) }; });
    return out;
  }

  function seedNotes() {
    return [
      {
        id: 'n1',
        title: 'Cell membrane — quick summary',
        tag: 'Biology',
        updated: isoDaysAgo(1),
        body: 'The plasma membrane is a phospholipid bilayer: hydrophilic heads face outward, hydrophobic tails face inward.\n\nWhat crosses easily?\n• Small, nonpolar molecules such as O₂ and CO₂\n• Water, slowly, via osmosis\n\nWhat needs help?\n• Ions and large polar molecules need channels or transporters\n\nExam angle: selective permeability is about control, not just separation.'
      },
      {
        id: 'n2',
        title: 'Derivative rules cheat sheet',
        tag: 'Mathematics',
        updated: isoDaysAgo(2),
        body: 'Power rule: d/dx xⁿ = n · xⁿ⁻¹\n\nProduct: (fg)′ = f′g + fg′\nQuotient: (f/g)′ = (f′g − fg′) / g²\nChain: d/dx f(g(x)) = f′(g(x)) · g′(x)\n\nRemember: the chain rule is about layers. Differentiate the outside, keep the inside, then multiply by the derivative of the inside.'
      },
      {
        id: 'n3',
        title: 'Memory: three stages, three effects',
        tag: 'Psychology',
        updated: isoDaysAgo(3),
        body: 'Encoding: getting information in\nStorage: keeping it over time\nRetrieval: getting it back out\n\nThree useful effects\n• Primacy — the first items stick\n• Recency — the last items are fresh\n• Spacing — revisiting over days beats one long session\n\nAction: turn rereading into recall. Close the notes, write what you remember, then check.'
      },
      {
        id: 'n4',
        title: 'WWII timeline — the short version',
        tag: 'History',
        updated: isoDaysAgo(5),
        body: '1914 — war begins after the assassination of Archduke Franz Ferdinand\n1917 — the US enters; Russian Revolution\n1918 — armistice\n1939 — Germany invades Poland\n1941 — Pearl Harbor; the US enters WWII\n1944 — D-Day\n1945 — the war ends\n\nEssay seed: was WWII a continuation of WWI or a distinct break? Build the case both ways before choosing.'
      }
    ];
  }

  function seedTasks() {
    return [
      { id: 't1', day: 'Mon', time: '09:00', title: 'Read: Cell theory', course: 'Biology', tone: 'mint', done: false },
      { id: 't2', day: 'Mon', time: '16:00', title: 'Practice derivative rules', course: 'Mathematics', tone: 'sky', done: false },
      { id: 't3', day: 'Tue', time: '12:30', title: 'Flashcards: Cell structures', course: 'Biology', tone: 'mint', done: false },
      { id: 't4', day: 'Tue', time: '18:00', title: 'Write summary notes', course: 'Study skills', tone: 'lavender', done: false },
      { id: 't5', day: 'Wed', time: '10:00', title: 'Quiz: Memory & learning', course: 'Psychology', tone: 'peach', done: false },
      { id: 't6', day: 'Wed', time: '17:30', title: 'Review quiz mistakes', course: 'Psychology', tone: 'peach', done: false },
      { id: 't7', day: 'Thu', time: '15:00', title: 'Read: The chain rule', course: 'Mathematics', tone: 'sky', done: false },
      { id: 't8', day: 'Thu', time: '19:00', title: 'Plan next week', course: 'Planning', tone: 'sand', done: false },
      { id: 't9', day: 'Fri', time: '09:30', title: 'Flashcards: Spanish verbs', course: 'Languages', tone: 'peach', done: false },
      { id: 't10', day: 'Fri', time: '14:00', title: 'Practice quiz: WWII', course: 'History', tone: 'sand', done: false },
      { id: 't11', day: 'Sat', time: '10:00', title: 'Deep work — 45 minutes', course: 'Focus', tone: 'lavender', done: false },
      { id: 't12', day: 'Sun', time: '18:00', title: 'Weekly review', course: 'Focus', tone: 'lavender', done: false }
    ];
  }

  function defaultState() {
    return {
      theme: 'light',
      profile: {
        name: 'Alex Rivera',
        email: 'alex@lumen.app',
        goal: 'Pass my finals',
        subjects: ['Biology', 'Mathematics', 'Psychology'],
        dailyMinutes: 45,
        streak: 9,
        joined: isoDaysAgo(34),
        avatarTone: 'lavender',
        onboarded: true
      },
      settings: {
        reminders: true,
        sounds: false,
        reduceMotion: false
      },
      lessons: seedLessons(),
      quizzes: {
        'cell-basics': { best: 80, last: 80, attempts: 1, lastAt: isoDaysAgo(2) },
        'memory-learning': { best: 75, last: 75, attempts: 1, lastAt: isoDaysAgo(4) }
      },
      cards: {
        'cell-structures': { known: [0, 1, 2, 3, 4, 5], lastStudied: isoDaysAgo(2) },
        'derivative-rules': { known: [0, 1, 2, 3], lastStudied: isoDaysAgo(1) },
        'spanish-verbs': { known: [0, 1], lastStudied: isoDaysAgo(4) },
        'psych-theorists': { known: [0, 1, 2, 3, 4, 5, 6, 7], lastStudied: isoDaysAgo(7) }
      },
      decks: [],
      notes: seedNotes(),
      tasks: seedTasks(),
      lessonNotes: {},
      activity: seedActivity()
    };
  }

  function loadState() {
    const base = defaultState();
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return base;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved !== 'object') return base;
      return {
        ...base,
        ...saved,
        profile: { ...base.profile, ...(saved.profile || {}) },
        settings: { ...base.settings, ...(saved.settings || {}) },
        lessons: saved.lessons || base.lessons,
        quizzes: saved.quizzes || base.quizzes,
        cards: saved.cards || base.cards,
        decks: Array.isArray(saved.decks) ? saved.decks : base.decks,
        notes: Array.isArray(saved.notes) ? saved.notes : base.notes,
        tasks: Array.isArray(saved.tasks) ? saved.tasks : base.tasks,
        lessonNotes: saved.lessonNotes && typeof saved.lessonNotes === 'object' ? saved.lessonNotes : base.lessonNotes,
        activity: saved.activity || base.activity
      };
    } catch (err) {
      return base;
    }
  }

  let state = loadState();

  const Store = {
    get data() { return state; },
    save() {
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (err) { /* storage unavailable */ }
    },
    reset() {
      try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
      state = defaultState();
      Store.save();
    },
    addActivity(minutes) {
      const key = todayKey();
      state.activity[key] = (Number(state.activity[key]) || 0) + Math.max(0, Math.round(minutes));
      Store.save();
    }
  };

  /* ----- Curriculum helpers ---------------------------------- */
  const getCourse = (id) => DB.courses.find((c) => c.id === id) || null;

  function courseLessons(course) {
    if (!course) return [];
    return course.modules.flatMap((mod, moduleIndex) =>
      mod.lessons.map((lesson) => ({
        ...lesson,
        courseId: course.id,
        moduleTitle: mod.title,
        moduleIndex,
        lessonIndexInModule: mod.lessons.indexOf(lesson)
      }))
    );
  }

  function findLesson(courseId, lessonId) {
    const course = getCourse(courseId) || DB.courses[0];
    const lessons = courseLessons(course);
    if (!lessons.length) return null;
    return lessons.find((l) => l.id === lessonId) || lessons[0];
  }

  function courseProgress(course) {
    const lessons = courseLessons(course);
    const done = lessons.filter((l) => state.lessons[l.id] && state.lessons[l.id].done).length;
    return { done, total: lessons.length, pct: lessons.length ? Math.round((done / lessons.length) * 100) : 0 };
  }

  function nextIncomplete(course) {
    return courseLessons(course).find((l) => !(state.lessons[l.id] && state.lessons[l.id].done)) || null;
  }

  function continueTarget() {
    const done = Object.entries(state.lessons)
      .filter(([, value]) => value && value.done)
      .sort((a, b) => new Date(b[1].at || 0) - new Date(a[1].at || 0));

    for (const [lessonId] of done) {
      for (const course of DB.courses) {
        const lessons = courseLessons(course);
        const index = lessons.findIndex((l) => l.id === lessonId);
        if (index === -1) continue;
        const next = lessons.slice(index + 1).find((l) => !(state.lessons[l.id] && state.lessons[l.id].done));
        if (next) return { course, lesson: next };
      }
    }

    for (const course of DB.courses) {
      const next = nextIncomplete(course);
      if (next) return { course, lesson: next };
    }

    const course = DB.courses[0];
    const lesson = courseLessons(course)[0];
    return { course, lesson };
  }

  function findCourseByLesson(lessonId) {
    return DB.courses.find((course) => courseLessons(course).some((l) => l.id === lessonId)) || null;
  }

  function serialLesson(course, lessonId) {
    const lessons = courseLessons(course);
    const index = Math.max(0, lessons.findIndex((l) => l.id === lessonId));
    return { lessons, index, prev: lessons[index - 1] || null, next: lessons[index + 1] || null };
  }

  /* ----- Decks & quizzes -------------------------------------- */
  function allDecks() {
    return DB.decks.concat(state.decks || []);
  }

  function getDeck(id) {
    return allDecks().find((deck) => deck.id === id) || null;
  }

  function deckProgress(deck) {
    const record = state.cards[deck.id] || {};
    const total = deck.cards.length;
    const valid = (record.known || []).filter((i) => Number.isInteger(i) && i >= 0 && i < total);
    const known = new Set(valid).size;
    return { known, total, pct: total ? Math.round((known / total) * 100) : 0 };
  }

  function getQuiz(id) {
    return DB.quizzes.find((quiz) => quiz.id === id) || null;
  }

  function quizStats(id) {
    return state.quizzes[id] || null;
  }

  function quizAverage() {
    const scores = DB.quizzes.map((quiz) => quizStats(quiz.id)).filter(Boolean).map((s) => s.best);
    if (!scores.length) return 0;
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  function recordQuiz(id, score) {
    const previous = state.quizzes[id] || { best: 0, attempts: 0, last: 0 };
    state.quizzes[id] = {
      best: Math.max(previous.best || 0, score),
      last: score,
      attempts: (previous.attempts || 0) + 1,
      lastAt: new Date().toISOString()
    };
    Store.save();
  }

  function overallStats() {
    let lessonsDone = 0;
    let lessonsTotal = 0;
    DB.courses.forEach((course) => {
      const progress = courseProgress(course);
      lessonsDone += progress.done;
      lessonsTotal += progress.total;
    });

    let cardsKnown = 0;
    let cardsTotal = 0;
    allDecks().forEach((deck) => {
      const progress = deckProgress(deck);
      cardsKnown += progress.known;
      cardsTotal += progress.total;
    });

    const week = last7().reduce((sum, day) => sum + day.minutes, 0);

    return {
      lessonsDone,
      lessonsTotal,
      cardsKnown,
      cardsTotal,
      quizAverage: quizAverage(),
      weekMinutes: week,
      streak: state.profile.streak || 0
    };
  }

  /* ----- Activity & dates ------------------------------------- */
  function getActivity(key) {
    return Number(state.activity[key]) || 0;
  }

  function last7() {
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = dateKey(d);
      out.push({
        key,
        date: d,
        label: d.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2),
        fullLabel: d.toLocaleDateString('en-US', { weekday: 'short' }),
        minutes: getActivity(key),
        today: i === 0
      });
    }
    return out;
  }

  function weekDates() {
    const now = new Date();
    const mondayOffset = (now.getDay() + 6) % 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() - mondayOffset);
    monday.setHours(0, 0, 0, 0);
    return DAYS.map((label, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return {
        day: label,
        date: d,
        dateNum: d.getDate(),
        key: dateKey(d),
        today: dateKey(d) === todayKey()
      };
    });
  }

  function weekRangeLabel() {
    const week = weekDates();
    const start = week[0].date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const endDate = week[6].date;
    const end = endDate.toLocaleDateString('en-US', { month: endDate.getMonth() === week[0].date.getMonth() ? undefined : 'short', day: 'numeric' });
    return `${start} – ${end}`;
  }

  function todayTasks() {
    return (state.tasks || []).filter((task) => task.day === dayName());
  }

  /* ----- Presentation helpers --------------------------------- */
  function ring(percent, options = {}) {
    const size = options.size || 96;
    const stroke = options.stroke || 7;
    const value = clamp(Number(percent) || 0, 0, 100);
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - value / 100);
    return `<svg class="ring ${options.className || ''}" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
      <circle class="ring-track" cx="${size / 2}" cy="${size / 2}" r="${radius}"></circle>
      <circle class="ring-value" cx="${size / 2}" cy="${size / 2}" r="${radius}" stroke-dasharray="${circumference.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"></circle>
    </svg>`;
  }

  function monogram(course) {
    return (course.subject || course.title || 'L').charAt(0).toUpperCase();
  }

  function param(name, fallback = '') {
    try {
      const value = new URLSearchParams(window.location.search).get(name);
      return value == null || value === '' ? fallback : value;
    } catch (err) {
      return fallback;
    }
  }

  const App = {
    $, $$, DAYS, KEY,
    clamp, esc, uid, dateKey, todayKey, dayName, greeting, initials, nameFromEmail, isTyping,
    isoDaysAgo, formatMinutes, formatDate, relativeDate,
    getCourse, courseLessons, findLesson, courseProgress, nextIncomplete, continueTarget,
    findCourseByLesson, serialLesson,
    allDecks, getDeck, deckProgress, getQuiz, quizStats, quizAverage, recordQuiz, overallStats,
    getActivity, last7, weekDates, weekRangeLabel, todayTasks,
    ring, monogram, param
  };

  window.App = App;
  window.Store = Store;
})();
