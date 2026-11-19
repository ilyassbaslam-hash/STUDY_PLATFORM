/* ============================================================
   Lumen — icons and interface shell
   ============================================================ */

(function () {
  'use strict';

  const { $, $$, esc, initials, allDecks, deckProgress } = window.App;
  const Store = window.Store;

  const ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v18H6.5A2.5 2.5 0 0 1 4 18.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v18h4.5a2.5 2.5 0 0 0 2.5-2.5z"/>',
    cards: '<rect x="3" y="6" width="13" height="15" rx="2.5"/><path d="M8 3h10.5A2.5 2.5 0 0 1 21 5.5V17"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.3 9a2.8 2.8 0 1 1 4.1 2.5c-.9.5-1.4 1.1-1.4 2v.3"/><path d="M12 17.5h.01"/>',
    note: '<path d="M5 3h9l5 5v13H5z"/><path d="M14 3v5h5"/><path d="M8.5 12h7M8.5 16h4.5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M8 3v4M16 3v4M3 10h18"/>',
    chart: '<path d="M3 17l5-5 4 3 8-8"/><path d="M16 7h4v4"/>',
    settings: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/><path d="M1 14h6M9 8h6M17 16h6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    arrowLeft: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    arrowDown: '<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>',
    arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    chevronRight: '<path d="m9 5 7 7-7 7"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="m5 12 5 5L20 7"/>',
    flame: '<path d="M12 22c4 0 7-2.7 7-6.6 0-3.2-2.2-5.4-4.2-7.3-.9-.9-1.8-1.9-2.3-3.2-.2-.5-.9-.6-1.2-.1C9 9 10 10.5 10 12c0 1.2-.7 2-1.6 2-.8 0-1.4-.5-1.8-1.2-.2-.4-.8-.5-1-.1A7.6 7.6 0 0 0 5 15.4C5 19.3 8 22 12 22Z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    sparkle: '<path d="M12 3v6M12 15v6M3 12h6M15 12h6"/><path d="m5.6 5.6 3.4 3.4M15 15l3.4 3.4M18.4 5.6 15 9M9 15l-3.4 3.4"/>',
    play: '<path d="m8 5 11 7-11 7z"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/><path d="M10 10v7M14 10v7"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-3.5-7.1"/><path d="M21 3v6h-6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    award: '<circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    eye: '<path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.8"/>',
    eyeOff: '<path d="m3 3 18 18"/><path d="M10.6 6.2A10.5 10.5 0 0 1 12 6c6.4 0 10 6 10 6a17.6 17.6 0 0 1-3.1 3.7M6.2 6.7A16.7 16.7 0 0 0 2 12s3.6 6 10 6a9.7 9.7 0 0 0 4.6-1.1"/><path d="M9.9 9.9a2.8 2.8 0 0 0 4 4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    logout: '<path d="M9 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
    volume: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
    zap: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/>',
    school: '<path d="M3 9.5 12 4l9 5.5-9 5.5z"/><path d="M7 12v5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5v-5"/><path d="M21 9.5V16"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5h.01"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"/>',
    minus: '<path d="M5 12h14"/>'
  };

  function icon(name, cls = '') {
    return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.info}</svg>`;
  }

  function logo() {
    return `<span class="logo-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5"/><circle cx="12" cy="12" r="2.3"/></svg></span>`;
  }

  let initialized = false;

  function hydrateIcons(root = document) {
    $$('[data-icon]', root).forEach((el) => {
      el.innerHTML = icon(el.getAttribute('data-icon'), el.getAttribute('data-icon-class') || '');
      el.setAttribute('aria-hidden', 'true');
    });
  }

  function updateThemeButtons() {
    const dark = document.documentElement.dataset.theme === 'dark';
    $$('[data-theme-toggle]').forEach((btn) => {
      btn.innerHTML = icon(dark ? 'sun' : 'moon');
      btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('title', dark ? 'Light mode' : 'Dark mode');
    });
  }

  function setTheme(theme, persist = true) {
    document.documentElement.dataset.theme = theme;
    if (persist) {
      Store.data.theme = theme;
      Store.save();
    }
    updateThemeButtons();
  }

  function toggleTheme() {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  }

  function toast(message, type = 'success') {
    let stack = $('.toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.className = 'toast-stack';
      document.body.appendChild(stack);
    }
    const el = document.createElement('div');
    el.className = `toast${type === 'error' ? ' toast-error' : ''}`;
    el.innerHTML = `${icon(type === 'success' ? 'check' : type === 'error' ? 'alert' : 'info')}<span>${esc(message)}</span>`;
    stack.appendChild(el);
    setTimeout(() => {
      el.classList.add('out');
      setTimeout(() => el.remove(), 280);
    }, 2600);
  }

  function openDialog(id) {
    const dialog = document.getElementById(id);
    if (!dialog || typeof dialog.showModal !== 'function') return;
    dialog.showModal();
    const field = dialog.querySelector('input:not([type="hidden"]), select, textarea');
    if (field) setTimeout(() => field.focus(), 60);
  }

  function closeDialog(id) {
    const dialog = typeof id === 'string' ? document.getElementById(id) : id;
    if (dialog && dialog.open) dialog.close();
  }

  function openNav() { document.body.classList.add('nav-open'); }
  function closeNav() { document.body.classList.remove('nav-open'); }

  const PAGE_META = {
    dashboard: { nav: 'dashboard', label: 'Dashboard' },
    courses: { nav: 'courses', label: 'Courses' },
    course: { nav: 'courses', label: 'Course' },
    lesson: { nav: 'courses', label: 'Lesson' },
    flashcards: { nav: 'flashcards', label: 'Flashcards' },
    study: { nav: 'flashcards', label: 'Study session' },
    quizzes: { nav: 'quizzes', label: 'Quizzes' },
    quiz: { nav: 'quizzes', label: 'Quiz' },
    notes: { nav: 'notes', label: 'Notes' },
    planner: { nav: 'planner', label: 'Planner' },
    progress: { nav: 'progress', label: 'Progress' },
    settings: { nav: 'settings', label: 'Settings' },
    search: { nav: '', label: 'Search' }
  };

  const NAV_GROUPS = [
    {
      label: 'Study',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: 'home', href: 'dashboard.html' },
        { id: 'courses', label: 'Courses', icon: 'book', href: 'courses.html' },
        { id: 'flashcards', label: 'Flashcards', icon: 'cards', href: 'flashcards.html' },
        { id: 'quizzes', label: 'Quizzes', icon: 'quiz', href: 'quizzes.html' }
      ]
    },
    {
      label: 'Organize',
      items: [
        { id: 'notes', label: 'Notes', icon: 'note', href: 'notes.html' },
        { id: 'planner', label: 'Planner', icon: 'calendar', href: 'planner.html' },
        { id: 'progress', label: 'Progress', icon: 'chart', href: 'progress.html' }
      ]
    }
  ];

  function dueCards() {
    return allDecks().reduce((sum, deck) => {
      const p = deckProgress(deck);
      return sum + Math.max(0, p.total - p.known);
    }, 0);
  }

  function navLink(item, active) {
    const isActive = item.id === active;
    return `<a class="nav-item${isActive ? ' active' : ''}" href="${item.href}"${isActive ? ' aria-current="page"' : ''}>
      ${icon(item.icon)}<span>${item.label}</span>
      ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
    </a>`;
  }

  function mountShell(options = {}) {
    const sidebar = $('#sidebar');
    const topbar = $('#topbar');
    if (!sidebar || !topbar) return;

    const page = options.page || document.body.dataset.page || 'dashboard';
    const meta = PAGE_META[page] || { nav: page, label: 'Lumen' };
    const active = options.active || meta.nav;
    const profile = Store.data.profile;
    const ini = initials(profile.name);
    const tone = profile.avatarTone && profile.avatarTone !== 'default' ? ` data-tone="${esc(profile.avatarTone)}"` : '';
    const navDue = dueCards();

    sidebar.innerHTML = `
      <a class="brand" href="dashboard.html" aria-label="Lumen — dashboard">${logo()}<span>Lumen</span></a>
      <nav class="side-nav" aria-label="Primary navigation">
        ${NAV_GROUPS.map((group) => `
          <div class="nav-group">
            <div class="nav-label">${group.label}</div>
            ${group.items.map((item) => navLink({
              ...item,
              badge: item.id === 'flashcards' && navDue ? navDue : null
            }, active)).join('')}
          </div>
        `).join('')}
      </nav>
      <div class="side-foot">
        ${navLink({ id: 'settings', label: 'Settings', icon: 'settings', href: 'settings.html' }, active)}
        <div class="side-user">
          <a class="avatar" href="settings.html"${tone}>${ini}</a>
          <div class="side-user-meta">
            <a class="side-user-name" href="settings.html">${esc(profile.name)}</a>
            <span class="side-user-mail">${esc(profile.email)}</span>
          </div>
          <a class="icon-btn sm" href="login.html" aria-label="Log out" title="Log out">${icon('logout')}</a>
        </div>
      </div>`;

    topbar.innerHTML = `
      <div class="topbar-left">
        <button class="icon-btn menu-btn" type="button" data-menu aria-label="Open navigation">${icon('menu')}</button>
        <span class="topbar-crumb">${esc(meta.label)}</span>
      </div>
      <form class="top-search" role="search" action="search.html">
        <span data-icon="search"></span>
        <input class="input" type="search" name="q" placeholder="Search anything…" aria-label="Search Lumen" autocomplete="off">
        <span class="kbd">/</span>
      </form>
      <div class="top-actions">
        <a class="icon-btn mobile-search" href="search.html" aria-label="Search">${icon('search')}</a>
        <a class="streak-chip" href="progress.html" title="Study streak">${icon('flame')}<span>${profile.streak || 0} day${Number(profile.streak) === 1 ? '' : 's'}</span></a>
        <button class="icon-btn" type="button" data-theme-toggle aria-label="Switch theme"></button>
        <a class="avatar avatar-sm" href="settings.html" aria-label="Your profile"${tone}>${ini}</a>
      </div>`;

    if (!$('.nav-overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'nav-overlay';
      overlay.setAttribute('data-menu-close', '');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.appendChild(overlay);
    }

    init();
  }

  function onDocumentClick(event) {
    const closer = event.target.closest('[data-close]');
    if (closer) {
      const dialog = closer.closest('dialog');
      if (dialog) dialog.close();
      return;
    }

    if (event.target.closest('[data-theme-toggle]')) {
      toggleTheme();
      return;
    }

    if (event.target.closest('[data-menu]')) {
      openNav();
      return;
    }

    if (event.target.closest('[data-menu-close]')) {
      closeNav();
      return;
    }

    if (event.target.tagName === 'DIALOG') {
      event.target.close();
    }
  }

  function onDocumentKeydown(event) {
    if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
      closeNav();
      return;
    }
    if (event.key === '/' && !initializedWithTyping(event.target)) {
      const input = $('.top-search input') || $('.big-search input');
      if (input) {
        event.preventDefault();
        input.focus();
        input.select();
      }
    }
  }

  function initializedWithTyping(target) {
    return window.App.isTyping(target);
  }

  function init() {
    if (initialized) {
      hydrateIcons();
      updateThemeButtons();
      return;
    }
    initialized = true;
    setTheme(Store.data.theme || 'light', false);
    document.documentElement.classList.toggle('reduce-motion', !!Store.data.settings.reduceMotion);
    hydrateIcons();
    updateThemeButtons();
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onDocumentKeydown);
  }

  window.UI = {
    ICONS, icon, logo, hydrateIcons, setTheme, toggleTheme, updateThemeButtons,
    toast, openDialog, closeDialog, openNav, closeNav,
    mountShell, init
  };
})();
