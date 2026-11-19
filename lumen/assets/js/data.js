/* ============================================================
   Lumen — demo content
   A small, hand-written curriculum so every screen has real data.
   ============================================================ */

const DB = {
  courses: [
    {
      id: 'bio',
      title: 'Cells & systems',
      subject: 'Biology',
      tone: 'mint',
      level: 'Beginner',
      hours: 4.5,
      blurb: 'A clear tour of the cell — from membranes and organelles to how life stores and uses energy.',
      why: 'Biology is the study of the only known systems that maintain themselves. Understanding cells gives you the vocabulary for everything from medicine to ecology.',
      core: 'A cell is a bounded, self-maintaining system. Its membrane decides what enters and leaves, its organelles divide the work, and its DNA carries the instructions for rebuilding and reproducing the whole thing.',
      callout: 'Structure follows function at every scale. When you meet a new organelle, first ask: what job does its shape make possible?',
      keyIdeas: [
        'Cells are the smallest unit that can be called alive.',
        'Compartmentalisation lets incompatible reactions happen side by side.',
        'Information flows from DNA to RNA to protein, then back through feedback.'
      ],
      terms: ['Cell membrane', 'Organelle', 'ATP', 'Gene expression'],
      modules: [
        {
          title: 'The building blocks',
          lessons: [
            { id: 'bio-1', title: 'Cell theory', mins: 12 },
            { id: 'bio-2', title: 'The plasma membrane', mins: 14 },
            { id: 'bio-3', title: 'Organelles, part 1', mins: 16 }
          ]
        },
        {
          title: 'Energy & information',
          lessons: [
            { id: 'bio-4', title: 'Mitochondria & energy', mins: 13 },
            { id: 'bio-5', title: 'DNA and gene expression', mins: 18 },
            { id: 'bio-6', title: 'Cell division', mins: 15 }
          ]
        }
      ]
    },
    {
      id: 'calc',
      title: 'Calculus I: limits & derivatives',
      subject: 'Mathematics',
      tone: 'sky',
      level: 'Intermediate',
      hours: 6,
      blurb: 'Build an intuition for change — limits, continuity, and the derivative without the fog.',
      why: 'Derivatives are the mathematics of change. They show up anywhere a quantity depends on another: speed, growth, cost, and probability.',
      core: 'A derivative is the instant-by-instant version of a rate. Instead of measuring change across a whole interval, you shrink the interval towards zero and see what value the ratio approaches.',
      callout: 'If you can sketch the slope, you understand the derivative. The algebra is there to make the sketch exact.',
      keyIdeas: [
        'A limit describes where a function is heading, not always where it lands.',
        'The derivative is a limit of average rates of change.',
        'Rules like the chain rule are shortcuts for patterns you could expand by hand.'
      ],
      terms: ['Limit', 'Derivative', 'Rate of change', 'Chain rule'],
      modules: [
        {
          title: 'Limits',
          lessons: [
            { id: 'calc-1', title: 'What is a limit?', mins: 15 },
            { id: 'calc-2', title: 'Continuity', mins: 12 },
            { id: 'calc-3', title: 'Limits at infinity', mins: 14 }
          ]
        },
        {
          title: 'Derivatives',
          lessons: [
            { id: 'calc-4', title: 'The derivative defined', mins: 16 },
            { id: 'calc-5', title: 'Power, product, quotient', mins: 18 },
            { id: 'calc-6', title: 'The chain rule', mins: 15 },
            { id: 'calc-7', title: 'Rates of change in practice', mins: 14 }
          ]
        }
      ]
    },
    {
      id: 'psych',
      title: 'Introduction to psychology',
      subject: 'Psychology',
      tone: 'peach',
      level: 'Beginner',
      hours: 3.5,
      blurb: 'How we think, remember, and behave — the essentials of the mind, backed by research.',
      why: 'Psychology is useful because attention, memory, and motivation govern how you study as much as what you study.',
      core: 'Memory is not a recording; it is a reconstruction. Encoding, storage, and retrieval are separate stages, and each one can fail in a predictable way.',
      callout: 'Retrieval beats rereading. Every time you pull an idea from memory, you make it easier to find again.',
      keyIdeas: [
        'Working memory is small and easy to overload.',
        'Sleep and spacing consolidate what you learned.',
        'Testing yourself is a learning tool, not just a measurement.'
      ],
      terms: ['Encoding', 'Working memory', 'Retrieval', 'Conditioning'],
      modules: [
        {
          title: 'The mind & memory',
          lessons: [
            { id: 'psych-1', title: 'How memory works', mins: 14 },
            { id: 'psych-2', title: 'Attention & perception', mins: 12 },
            { id: 'psych-3', title: 'Learning & conditioning', mins: 13 }
          ]
        },
        {
          title: 'People & behaviour',
          lessons: [
            { id: 'psych-4', title: 'Motivation', mins: 11 },
            { id: 'psych-5', title: 'Social influence', mins: 15 },
            { id: 'psych-6', title: 'Personality', mins: 13 }
          ]
        }
      ]
    },
    {
      id: 'hist',
      title: 'Modern world history',
      subject: 'History',
      tone: 'sand',
      level: 'Beginner',
      hours: 5,
      blurb: 'From empires to the atomic age — the turning points that still shape today.',
      why: 'History is a set of arguments about cause and consequence, not a list of dates. Learning to weigh evidence makes the present easier to read.',
      core: 'Modern history is shaped by the collision of industrial power, empire, and ideology. Events that look sudden usually sit on top of decades of structural pressure.',
      callout: 'When a turning point feels inevitable in hindsight, ask what alternatives existed at the time.',
      keyIdeas: [
        'Industrialisation reorganised work, cities, and war.',
        'Empires exported tension as often as they exported goods.',
        'Post-war institutions were built to stop the last war from repeating.'
      ],
      terms: ['Industrialisation', 'Imperialism', 'Appeasement', 'Cold War'],
      modules: [
        {
          title: 'Empires & revolutions',
          lessons: [
            { id: 'hist-1', title: 'The Industrial Revolution', mins: 16 },
            { id: 'hist-2', title: 'Revolutions of 1848', mins: 13 },
            { id: 'hist-3', title: 'The age of empire', mins: 15 }
          ]
        },
        {
          title: 'The world at war',
          lessons: [
            { id: 'hist-4', title: 'Causes of World War I', mins: 14 },
            { id: 'hist-5', title: 'The interwar years', mins: 12 },
            { id: 'hist-6', title: 'World War II', mins: 17 },
            { id: 'hist-7', title: 'The Cold War begins', mins: 14 }
          ]
        }
      ]
    },
    {
      id: 'chem',
      title: 'General chemistry',
      subject: 'Chemistry',
      tone: 'lavender',
      level: 'Intermediate',
      hours: 5.5,
      blurb: 'Atoms, bonds, and reactions explained step by step, with the maths kept human.',
      why: 'Chemistry connects the microscopic rules of matter to the macroscopic world you can see, smell, and measure.',
      core: 'Atoms bond because the resulting arrangement is more stable than the separate pieces. Most of chemistry is bookkeeping for electrons and energy.',
      callout: 'Balance the atoms first, then worry about the arithmetic. A balanced equation is the skeleton of every calculation.',
      keyIdeas: [
        'The periodic table is a map of electron arrangement.',
        'Bonds break and form; energy is absorbed or released.',
        'Stoichiometry is ratios, not magic.'
      ],
      terms: ['Atom', 'Mole', 'Bond energy', 'Equilibrium'],
      modules: [
        {
          title: 'Matter & atoms',
          lessons: [
            { id: 'chem-1', title: 'Atomic structure', mins: 13 },
            { id: 'chem-2', title: 'The periodic table', mins: 12 },
            { id: 'chem-3', title: 'Chemical bonds', mins: 16 }
          ]
        },
        {
          title: 'Reactions',
          lessons: [
            { id: 'chem-4', title: 'Stoichiometry', mins: 18 },
            { id: 'chem-5', title: 'Acids & bases', mins: 15 },
            { id: 'chem-6', title: 'Reaction rates', mins: 14 }
          ]
        }
      ]
    },
    {
      id: 'cs',
      title: 'Intro to programming',
      subject: 'Computer science',
      tone: 'rose',
      level: 'Beginner',
      hours: 4,
      blurb: 'Learn to think like a programmer — variables, logic, functions, and a first real project.',
      why: 'Programming is a way of making your thinking precise. Once you can break a problem into steps, you can teach a computer to carry them out.',
      core: 'Programs are layers of abstraction. Variables hold state, control flow chooses what happens next, and functions package a piece of behaviour so it can be reused.',
      callout: 'When a program misbehaves, believe the evidence. Print the value, follow the branch, and let the machine show you where your model diverges.',
      keyIdeas: [
        'A program is data plus instructions executed in order.',
        'Functions make programs smaller and easier to test.',
        'Most bugs are mismatches between what you wrote and what you assumed.'
      ],
      terms: ['Variable', 'Function', 'Control flow', 'Debugging'],
      modules: [
        {
          title: 'Foundations',
          lessons: [
            { id: 'cs-1', title: 'How programs work', mins: 12 },
            { id: 'cs-2', title: 'Variables & types', mins: 11 },
            { id: 'cs-3', title: 'Control flow', mins: 14 }
          ]
        },
        {
          title: 'Building things',
          lessons: [
            { id: 'cs-4', title: 'Functions', mins: 13 },
            { id: 'cs-5', title: 'Your first project', mins: 20 },
            { id: 'cs-6', title: 'Debugging', mins: 12 }
          ]
        }
      ]
    }
  ],

  decks: [
    {
      id: 'cell-structures',
      title: 'Cell structures',
      subject: 'Biology',
      tone: 'mint',
      description: 'Organelles and the jobs they do.',
      lastStudied: '2 days ago',
      custom: false,
      cards: [
        { front: 'Powerhouse of the cell', back: 'Mitochondria — they generate most of the cell’s ATP through aerobic respiration.' },
        { front: 'Controls what enters and leaves the cell', back: 'The plasma membrane, a selectively permeable phospholipid bilayer.' },
        { front: 'Contains DNA in eukaryotic cells', back: 'The nucleus, wrapped in a double membrane with nuclear pores.' },
        { front: 'Site of protein synthesis', back: 'Ribosomes — free in the cytosol or attached to the rough ER.' },
        { front: 'Packages and ships proteins', back: 'The Golgi apparatus.' },
        { front: 'Breaks down waste with enzymes', back: 'Lysosomes.' },
        { front: 'Uses sunlight to make glucose', back: 'Chloroplasts, found in plant cells.' },
        { front: 'Jelly-like fluid around organelles', back: 'Cytosol.' }
      ]
    },
    {
      id: 'derivative-rules',
      title: 'Derivative rules',
      subject: 'Mathematics',
      tone: 'sky',
      description: 'The rules worth knowing cold.',
      lastStudied: 'Yesterday',
      custom: false,
      cards: [
        { front: 'd/dx (xⁿ)', back: 'n · xⁿ⁻¹' },
        { front: 'd/dx (sin x)', back: 'cos x' },
        { front: 'd/dx (cos x)', back: '−sin x' },
        { front: 'Product rule: (fg)′', back: 'f′g + fg′' },
        { front: 'Quotient rule: (f/g)′', back: '(f′g − fg′) / g²' },
        { front: 'Chain rule', back: 'd/dx f(g(x)) = f′(g(x)) · g′(x)' },
        { front: 'd/dx (eˣ)', back: 'eˣ' },
        { front: 'd/dx (ln x)', back: '1/x, for x > 0' }
      ]
    },
    {
      id: 'spanish-verbs',
      title: 'Spanish core verbs',
      subject: 'Languages',
      tone: 'peach',
      description: 'Eight verbs that unlock a conversation.',
      lastStudied: '4 days ago',
      custom: false,
      cards: [
        { front: 'to be — permanent, identity', back: 'ser' },
        { front: 'to be — temporary, state', back: 'estar' },
        { front: 'to have', back: 'tener' },
        { front: 'to go', back: 'ir' },
        { front: 'to do / to make', back: 'hacer' },
        { front: 'to know — facts', back: 'saber' },
        { front: 'to know — people, places', back: 'conocer' },
        { front: 'to want', back: 'querer' }
      ]
    },
    {
      id: 'psych-theorists',
      title: 'Psychologists & theories',
      subject: 'Psychology',
      tone: 'lavender',
      description: 'Who said what, and why it stuck.',
      lastStudied: '1 week ago',
      custom: false,
      cards: [
        { front: 'Classical conditioning', back: 'Ivan Pavlov' },
        { front: 'Operant conditioning & reinforcement', back: 'B. F. Skinner' },
        { front: 'Stages of cognitive development', back: 'Jean Piaget' },
        { front: 'Hierarchy of needs', back: 'Abraham Maslow' },
        { front: 'The forgetting curve', back: 'Hermann Ebbinghaus' },
        { front: 'Zone of proximal development', back: 'Lev Vygotsky' },
        { front: 'Attachment theory', back: 'John Bowlby' },
        { front: 'Social learning theory', back: 'Albert Bandura' }
      ]
    }
  ],

  quizzes: [
    {
      id: 'cell-basics',
      title: 'Cell biology basics',
      subject: 'Biology',
      tone: 'mint',
      difficulty: 'Easy',
      minutes: 5,
      description: 'Five questions on the parts of a cell and what they do.',
      questions: [
        {
          q: 'Which organelle is known as the powerhouse of the cell?',
          options: ['The nucleus', 'The mitochondrion', 'The Golgi apparatus', 'The ribosome'],
          answer: 1,
          explanation: 'Mitochondria produce most of the cell’s ATP through aerobic respiration, which is why they are called the powerhouse.'
        },
        {
          q: 'What does the plasma membrane primarily control?',
          options: ['DNA replication', 'Protein folding', 'What enters and leaves the cell', 'The speed of cell division'],
          answer: 2,
          explanation: 'The membrane is selectively permeable: it controls the movement of substances into and out of the cell.'
        },
        {
          q: 'Which molecule carries genetic instructions?',
          options: ['ATP', 'DNA', 'Glucose', 'Cholesterol'],
          answer: 1,
          explanation: 'DNA stores the genetic instructions. RNA helps translate those instructions into proteins.'
        },
        {
          q: 'Ribosomes are responsible for…',
          options: ['Making proteins', 'Digesting waste', 'Storing water', 'Producing lipids'],
          answer: 0,
          explanation: 'Ribosomes assemble amino acids into proteins, either free in the cytosol or on the rough ER.'
        },
        {
          q: 'Which process do cells use to divide for growth and repair?',
          options: ['Osmosis', 'Photosynthesis', 'Meiosis', 'Mitosis'],
          answer: 3,
          explanation: 'Mitosis produces two genetically identical cells for growth and repair. Meiosis produces gametes.'
        }
      ]
    },
    {
      id: 'derivative-checkpoint',
      title: 'Derivative checkpoint',
      subject: 'Mathematics',
      tone: 'sky',
      difficulty: 'Medium',
      minutes: 6,
      description: 'A quick check of the core differentiation rules.',
      questions: [
        {
          q: 'What is the derivative of x²?',
          options: ['x', '2x', 'x²', '2'],
          answer: 1,
          explanation: 'Using the power rule, d/dx x² = 2x²⁻¹ = 2x.'
        },
        {
          q: 'A derivative measures…',
          options: ['The area under a curve', 'The average value of a function', 'The instantaneous rate of change', 'The maximum of a function'],
          answer: 2,
          explanation: 'The derivative describes how a function changes at a single instant, not across an interval.'
        },
        {
          q: 'What is d/dx of sin x?',
          options: ['−cos x', 'cos x', 'tan x', '−sin x'],
          answer: 1,
          explanation: 'The derivative of sin x is cos x. The derivative of cos x is −sin x.'
        },
        {
          q: 'Which is the product rule for f(x)g(x)?',
          options: ['f′g′', 'f′g + fg′', 'f′g − fg′', '(f′ + g′)(fg)'],
          answer: 1,
          explanation: 'Differentiate the first times the second, plus the first times the derivative of the second.'
        }
      ]
    },
    {
      id: 'memory-learning',
      title: 'Memory & learning',
      subject: 'Psychology',
      tone: 'peach',
      difficulty: 'Easy',
      minutes: 4,
      description: 'Test the ideas that change how you study.',
      questions: [
        {
          q: 'Which memory store holds information briefly, for around 20–30 seconds?',
          options: ['Long-term memory', 'Sensory memory', 'Short-term memory', 'Procedural memory'],
          answer: 2,
          explanation: 'Short-term (working) memory holds a small amount of information for a brief period unless it is rehearsed.'
        },
        {
          q: 'Classical conditioning was first demonstrated by…',
          options: ['B. F. Skinner', 'Ivan Pavlov', 'Jean Piaget', 'Abraham Maslow'],
          answer: 1,
          explanation: 'Pavlov showed that a neutral stimulus could trigger a response after being paired with an unconditioned stimulus.'
        },
        {
          q: 'The tendency to recall the first items in a list better is called…',
          options: ['The recency effect', 'The primacy effect', 'Chunking', 'Spacing'],
          answer: 1,
          explanation: 'The primacy effect describes stronger recall for items at the beginning of a list. The recency effect covers the end.'
        },
        {
          q: 'Who described the forgetting curve?',
          options: ['Hermann Ebbinghaus', 'Lev Vygotsky', 'Albert Bandura', 'John Bowlby'],
          answer: 0,
          explanation: 'Ebbinghaus found that forgetting is rapid at first and then levels off — a case for spaced review.'
        }
      ]
    },
    {
      id: 'world-war-ii',
      title: 'World War II',
      subject: 'History',
      tone: 'sand',
      difficulty: 'Medium',
      minutes: 5,
      description: 'Causes, turning points, and the end of the war.',
      questions: [
        {
          q: 'In which year did World War II end?',
          options: ['1943', '1944', '1945', '1946'],
          answer: 2,
          explanation: 'The war in Europe ended in May 1945 and in the Pacific in September 1945.'
        },
        {
          q: 'Which event brought the United States into the war?',
          options: ['The invasion of Poland', 'The attack on Pearl Harbor', 'The fall of France', 'The Battle of Britain'],
          answer: 1,
          explanation: 'Japan’s attack on Pearl Harbor in December 1941 led the United States to declare war.'
        },
        {
          q: 'D-Day refers to…',
          options: ['The evacuation at Dunkirk', 'The Normandy landings', 'The bombing of Dresden', 'The liberation of Paris'],
          answer: 1,
          explanation: 'D-Day was 6 June 1944, when Allied forces landed on the beaches of Normandy.'
        },
        {
          q: 'The policy of appeasement is most associated with…',
          options: ['The 1930s governments of Britain and France', 'The Soviet Union after 1945', 'The United States in 1917', 'The League of Nations in 1920'],
          answer: 0,
          explanation: 'Britain and France tried to avoid war by conceding to Hitler’s early territorial demands, most famously at Munich in 1938.'
        }
      ]
    }
  ]
};

window.DB = DB;

/* One short, written-to-be-read summary and detail for each lesson. */
const LESSON_NOTES = {
  'bio-1': {
    summary: "All living things are made of cells, and every new cell comes from an existing cell.",
    detail: "Hooke first described cell walls in cork, but it took Schleiden, Schwann, and Virchow to turn scattered observations into cell theory. The third part — every cell from a cell — matters most: it makes life a continuous process rather than a series of fresh starts."
  },
  'bio-2': {
    summary: "The plasma membrane is a phospholipid bilayer that decides what enters and leaves the cell.",
    detail: "Its permeability is selective, not absolute: small nonpolar molecules diffuse through, water moves by osmosis, and ions or large polar molecules need channels and transporters. The fluid mosaic model adds proteins, cholesterol, and carbohydrates to that picture."
  },
  'bio-3': {
    summary: "Each organelle is a compartment tuned to one job, and the cell’s efficiency comes from that division of labour.",
    detail: "The nucleus stores DNA and assembles ribosomes; the endoplasmic reticulum folds and ships proteins; the Golgi modifies and sorts them. Tracing a protein from ribosome to membrane is the clearest way to remember the route."
  },
  'bio-4': {
    summary: "Mitochondria turn the chemical energy in food into ATP, the cell’s usable energy currency.",
    detail: "The inner membrane folds into cristae to increase the surface area for the electron transport chain. Most ATP comes from oxidative phosphorylation, which is why oxygen is so central to complex life."
  },
  'bio-5': {
    summary: "Gene expression is the controlled path from DNA to RNA to protein.",
    detail: "Transcription copies a gene into mRNA; translation reads that message at the ribosome. Control points along the way let a cell make only what it needs, when it needs it — which is why two cells with the same genome can behave completely differently."
  },
  'bio-6': {
    summary: "Cell division copies and separates genetic material so each daughter cell gets a complete set.",
    detail: "Mitosis produces identical body cells; meiosis halves the chromosome number to make gametes. Checkpoints in the cycle catch damaged DNA before the cell commits to dividing."
  },
  'calc-1': {
    summary: "A limit describes the value a function approaches, even if it never reaches it.",
    detail: "The notation lim x→a f(x) = L means you can make f(x) as close to L as you like by choosing x close enough to a. The point itself can be undefined — or defined somewhere else entirely."
  },
  'calc-2': {
    summary: "A function is continuous at a point when its limit exists, the function is defined there, and the two agree.",
    detail: "Continuity is a promise of no jumps, holes, or breaks at that point. Most familiar functions are continuous on their domains, which is what lets you substitute a value directly instead of analysing a limit."
  },
  'calc-3': {
    summary: "Limits at infinity describe long-run behaviour: what a function settles toward as x grows without bound.",
    detail: "For rational functions, compare the highest powers in the numerator and denominator. Equal degrees give the ratio of leading coefficients; a larger denominator degree pulls the limit toward zero; a larger numerator degree means the function grows without bound."
  },
  'calc-4': {
    summary: "The derivative is the instantaneous rate of change of a function at a point.",
    detail: "It is defined as the limit of the difference quotient as h approaches zero. Geometrically it is the slope of the tangent line; physically it is velocity when the function is position."
  },
  'calc-5': {
    summary: "Power, product, and quotient rules let you differentiate combinations without returning to the limit definition.",
    detail: "The product rule is (fg)′ = f′g + fg′, and the quotient rule is (f/g)′ = (f′g − fg′)/g². A quick sanity check: the quotient rule’s numerator has a minus sign and the denominator is squared."
  },
  'calc-6': {
    summary: "The chain rule differentiates composed functions by multiplying the outer derivative by the inner derivative.",
    detail: "For f(g(x)), take the derivative of the outside while leaving the inside intact, then multiply by g′(x). Think layers: peel the outside, then differentiate what remains."
  },
  'calc-7': {
    summary: "Derivatives become useful when you attach them to real quantities and units.",
    detail: "For related rates, write an equation linking the quantities, differentiate both sides with respect to time, then substitute what you know. Keep units visible — they catch sign errors and missing factors."
  },
  'psych-1': {
    summary: "Memory is a reconstruction built across encoding, storage, and retrieval, not a recording played back.",
    detail: "Working memory holds only a few items at once, while long-term memory has effectively unlimited capacity but needs good retrieval cues. Spacing and self-testing strengthen the routes back to an idea."
  },
  'psych-2': {
    summary: "Attention is a limited filter that decides which of the incoming signals get processed.",
    detail: "Selective attention lets you follow one voice in a noisy room, but it also makes you miss obvious things outside the focus — inattentional blindness. Perception then fills in the gaps using expectation and context."
  },
  'psych-3': {
    summary: "Learning is a relatively permanent change in behaviour or knowledge that comes from experience.",
    detail: "Classical conditioning pairs a neutral stimulus with a reflexive response; operant conditioning shapes behaviour through reinforcement and punishment. Timing and consistency decide how strong the association becomes."
  },
  'psych-4': {
    summary: "Motivation is the set of processes that start, direct, and sustain behaviour.",
    detail: "Intrinsic motivation comes from interest or meaning; extrinsic motivation comes from rewards or pressure. Self-determination theory argues that autonomy, competence, and relatedness are the three needs that keep motivation healthy."
  },
  'psych-5': {
    summary: "Other people shape what we think, feel, and do — often without us noticing.",
    detail: "Conformity, compliance, and obedience are different levels of social pressure. Asch’s line studies and Milgram’s obedience studies show how strongly the situation can override personal judgement."
  },
  'psych-6': {
    summary: "Personality describes stable patterns of thinking, feeling, and behaving that distinguish people.",
    detail: "Trait models such as the Big Five summarise personality along openness, conscientiousness, extraversion, agreeableness, and neuroticism. Traits predict tendencies, not specific actions in every situation."
  },
  'hist-1': {
    summary: "The Industrial Revolution moved production from hand tools and workshops to machines, factories, and mass markets.",
    detail: "It began in Britain in the late eighteenth century, powered first by water and then by coal and steam. Urbanisation, wage labour, and new transport networks changed how ordinary people lived and worked."
  },
  'hist-2': {
    summary: "The revolutions of 1848 swept Europe with demands for liberal constitutions, national unity, and social reform.",
    detail: "They began in Sicily and France, then spread to the German states, Austria, Hungary, and Italy. Most were suppressed within a year, but their ideas outlasted the regimes that crushed them."
  },
  'hist-3': {
    summary: "The age of empire was a period of rapid European expansion and competition for territory overseas.",
    detail: "Industrial economies needed raw materials and markets, while nationalism and prestige pushed governments to claim colonies. The result was a global order built on unequal power — and a source of tensions that fed into 1914."
  },
  'hist-4': {
    summary: "World War I grew from a web of alliances, imperial rivalry, militarism, and nationalism, triggered by the assassination of Archduke Franz Ferdinand.",
    detail: "The July Crisis turned a regional dispute between Austria-Hungary and Serbia into a continental war through mobilisation schedules and alliance commitments. No single cause explains it; the system made escalation hard to stop."
  },
  'hist-5': {
    summary: "The interwar years were shaped by unresolved peace terms, economic collapse, and the rise of authoritarian movements.",
    detail: "The Treaty of Versailles imposed reparations and territorial losses on Germany, while the Great Depression destabilised democracies everywhere. In that vacuum, fascist and militarist regimes gained ground."
  },
  'hist-6': {
    summary: "World War II was a global conflict fought over territory, ideology, and the balance of power between states.",
    detail: "It began with Germany’s invasion of Poland in 1939 and expanded after Pearl Harbor in 1941. The war ended in 1945 with the defeat of Germany and Japan, leaving the Holocaust and the atomic bomb as its darkest legacies."
  },
  'hist-7': {
    summary: "The Cold War was a prolonged strategic rivalry between the United States and the Soviet Union, fought through ideology, alliances, and proxy conflicts.",
    detail: "Europe divided along the Iron Curtain, and competition spread to Asia, Africa, and Latin America. Nuclear deterrence kept the superpowers from direct war, but not from costly interventions."
  },
  'chem-1': {
    summary: "An atom is a nucleus of protons and neutrons surrounded by electrons in allowed energy levels.",
    detail: "The atomic number counts protons and defines the element; the mass number adds neutrons. Isotopes share the same element identity but differ in neutron count and mass."
  },
  'chem-2': {
    summary: "The periodic table arranges elements by atomic number and groups them by repeating chemical behaviour.",
    detail: "Elements in the same column share valence electron counts and therefore similar reactivity. Moving across a period, nuclear charge rises and atomic radius generally falls."
  },
  'chem-3': {
    summary: "Chemical bonds form when atoms gain, lose, or share electrons to reach a more stable arrangement.",
    detail: "Ionic bonds transfer electrons between metals and nonmetals; covalent bonds share electrons between nonmetals; metallic bonds pool electrons across a lattice. Bond type helps predict melting points, solubility, and conductivity."
  },
  'chem-4': {
    summary: "Stoichiometry uses mole ratios from a balanced equation to predict how much of each substance reacts or forms.",
    detail: "Balance the equation first, convert masses to moles, apply the ratio, then convert back to the requested unit. The mole is just a counting unit that connects the atomic scale to measurable amounts."
  },
  'chem-5': {
    summary: "Acids donate protons and bases accept them; their strength is measured by how far that transfer goes.",
    detail: "pH is the negative logarithm of hydrogen-ion concentration, so each unit is a tenfold change. Strong acids dissociate almost completely, while weak acids establish an equilibrium."
  },
  'chem-6': {
    summary: "Reaction rate measures how quickly reactants turn into products, and it depends on collisions that succeed.",
    detail: "Higher concentration, temperature, and surface area generally increase the rate by increasing the frequency or energy of collisions. A catalyst provides a lower-energy pathway without being consumed."
  },
  'cs-1': {
    summary: "A program is a sequence of instructions a computer follows to transform input into output.",
    detail: "Source code is written for people, then translated by a compiler or interpreter into instructions the machine can execute. Data and instructions both live in memory, which is why the distinction between them is more fluid than it first appears."
  },
  'cs-2': {
    summary: "Variables name stored values, and types describe what kind of value is stored and what operations make sense.",
    detail: "Declaring a variable reserves a way to refer to a value; assigning changes that value. Choosing clear names and consistent types prevents a large share of small bugs."
  },
  'cs-3': {
    summary: "Control flow decides which instructions run and how many times.",
    detail: "Conditionals choose between paths; loops repeat a block while a condition holds. Watch the boundary: off-by-one errors usually live at the first or last iteration."
  },
  'cs-4': {
    summary: "Functions package a reusable behaviour behind a name, with inputs and usually one output.",
    detail: "Parameters are the placeholders in the definition; arguments are the values passed in. Keeping functions small and single-purpose makes them easier to test and reuse."
  },
  'cs-5': {
    summary: "A first project turns separate language features into one small program you can run and improve.",
    detail: "Start with something you would actually use — a habit tracker, a unit converter, a quiz. Build the smallest version that works, then add one feature at a time."
  },
  'cs-6': {
    summary: "Debugging is the process of finding out why a program behaves differently from what you intended.",
    detail: "Read the error message, reproduce the problem reliably, and narrow the location before changing code. A hypothesis you can test beats a random edit every time."
  }
};

window.LESSON_NOTES = LESSON_NOTES;
