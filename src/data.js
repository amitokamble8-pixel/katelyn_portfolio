/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ------------------------------------------------------------------
   LINKS
   ------------------------------------------------------------------
   Every section below supports links. Fill one in and it appears on the
   site; leave it "" or [] and nothing renders. Nothing breaks either way.

     link    ""  →  nothing is clickable
             "/work/slug"        internal route (uses the router)
             "https://…"         external (opens in a new tab)
             "/certificates/x.pdf"  a file in /public

             On a card, this makes the WHOLE card clickable.
             On an award or interest row, the whole row.

     links   []  →  no link row
             [{ label: "Watch the clip", href: "https://…" }]

             A row of one or more named links at the bottom of the item.
             Use this when something has several destinations, or when
             the label matters ("Certificate", "Live site", "Highlights").

   `link` and `links` can both be used on the same item — the card-wide
   link sits underneath, the named links sit on top and win the click.
   ------------------------------------------------------------------
   SOURCE NOTES — October 2026
   ------------------------------------------------------------------
   Built from Katelyn's CV only. Search "TODO" for details the CV does
   not state (dates, locations, organisation names, logos, CV file,
   predicted score). Search "NOTE" for judgement calls to confirm.
   ================================================================== */

export const PROFILE = {
  first: "Katelyn",
  last: "Baffo",
  fullName: "Katelyn Asantewaa Baffo",
  // NOTE: tagline is a suggestion drawn from the CV's themes; confirm.
  tagline: "RESEARCHER • COMMUNITY LEADER • CREATIVE MIND",
  // NOTE: the CV gives no intended field of study — this headline is inferred
  // from her interest in human behaviour and well-being. Confirm before using.
  altTagline: "Aspiring Psychology & Well-being Student",
  location: "Accra, Ghana",
  // NOTE: both are in the CV — confirm the family is happy for them to be public.
  email: "",
  phone: "",
  bio: [
    "I am curious about what shapes how people think, feel, and thrive — and that curiosity runs through both my studies and the work I do in my community. Whether I am researching, teaching children on a Sunday, or helping a local business present itself, I like work that combines analytical thinking with real contact with people.",
    "I'm currently pursuing the IB Diploma at Cornerstone International Academy in East Legon, studying Geography, English Literature, and Business Management at Higher Level, alongside French, Biology, and Mathematics at Standard Level. My Extended Essay is a 4,000-word independent research project on how regular physical activity affects the mental well-being of teenagers, and Theory of Knowledge has sharpened my critical thinking and argumentation by asking why we seek knowledge.",
    "Outside the classroom, I have helped revitalise La Bawaleshie Kindergarten School, fed children in Madina, and dedicate an hour most Sundays to teaching at my children's service. I have volunteered as a model to promote the local wig brand Hair Senta, taken part in an upcycled fashion project, and I play tennis twice a week, bake on weekends, and have hiked the Aburi Mountains.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    achievement: "",
    wespa: "",
    twitter: "",
    youtube: "",
    instagram: "",
  },
  cv: "/placeholder.pdf", // TODO: add the CV PDF here
  photo: "/placeholder.png",
  aboutPhoto: "/placeholder.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  {
    label: "Community & Leadership", to: "/volunteering",
  },

  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Experience & engagement (renders as "Work Experience" cards) ----
   The whole card already links to /work/{slug}. Use `links` for anything
   extra: a write-up, a certificate, a video. ---- */

export const EXPERIENCE = [
  {
    slug: "hair-senta-brand-promotion",
    role: "Volunteer Model & Brand Promoter",
    org: "Hair Senta",
    logo: "", // TODO: add logo file if available
    location: "", // TODO: not stated in the CV (likely Accra — confirm)
    dates: "", // TODO: not stated in the CV
    meta: "Volunteer ·",
    badge: "Brand Promotion",
    desc: "Volunteered to model for Hair Senta, a local wig brand, and to help promote the business — combining creative presentation with a practical sense of how small businesses reach their customers.",
    // TODO: the CV gives no campaign details, channels or outcomes — refine these bullets.
    bullets: [
      "Modelled for a local wig brand to support its marketing",
      "Helped promote the business and its products to potential customers",
      "Applied creative and practical skills in a real business setting",
    ],
    tags: ["Brand Promotion", "Modelling", "Marketing", "Local Business"],
    links: [],
    featured: true,
  },
  {
    slug: "childrens-service-teaching",
    role: "Volunteer Teacher",
    org: "Children's Service", // TODO: church/organisation name not stated in the CV
    logo: "",
    location: "", // TODO: not stated in the CV
    dates: "Present",
    meta: "Most Sundays ·",
    badge: "Teaching",
    desc: "Dedicates an hour most Sundays to teaching at a children's service, building communication, patience, and leadership while supporting young learners.",
    bullets: [
      "Teaches children for an hour most Sundays",
      "Develops public speaking and communication skills with a young audience",
      "Demonstrates a consistent, ongoing commitment to service",
    ],
    tags: ["Teaching", "Community Service", "Public Speaking"],
    links: [],
    featured: true,
  },
  {
    slug: "la-bawaleshie-kindergarten",
    role: "Volunteer",
    org: "La Bawaleshie Kindergarten School",
    logo: "",
    location: "", // TODO: not stated in the CV
    dates: "", // TODO: not stated in the CV
    meta: "CAS · Community Service ·",
    badge: "Volunteer",
    desc: "Took part in revitalising La Bawaleshie Kindergarten School, contributing to a better learning environment for young children in the community.",
    // TODO: the CV does not say what the revitalisation involved — add specifics.
    bullets: [
      "Contributed to revitalising a kindergarten school's learning environment",
      "Worked alongside others as part of a community service effort",
    ],
    tags: ["Community Service", "Education", "CAS"],
    links: [],
    featured: false,
  },
];

/* ---- Projects ----
   `link` makes the whole card clickable (a live site, a repo, a paper).
   `links` adds a named row instead — use it when there are several. ---- */

export const PROJECTS = [
  {
    name: "Extended Essay — Physical Activity & Teenage Mental Well-being",
    org: "IB Extended Essay · Independent Research",
    meta: "In progress · 4,000 words",
    desc: "Conducting independent research to author a 4,000-word essay on how regular physical activity affects the mental well-being of teenagers, bringing together her interests in human behaviour, health, and well-being.",
    tags: ["Independent Research", "Mental Well-being", "Physical Activity", "Human Behaviour"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "Upcycled Fashion Project",
    org: "Creative Project · CAS",
    meta: "", // TODO: dates and details not stated in the CV
    desc: "Took part in an upcycled fashion project, combining creativity with sustainability by giving existing materials a new purpose.",
    tags: ["Upcycling", "Fashion", "Sustainability", "Creativity"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "Theory of Knowledge",
    org: "IB Diploma Programme",
    meta: "Ongoing",
    desc: "Developed strong critical thinking and argumentation skills by analysing why we seek knowledge.",
    tags: ["Critical Thinking", "Argumentation", "Epistemology"],
    link: "",
    links: [],
    featured: false,
  },
];

/* ---- Achievements ----
   `link` makes the whole row clickable. `links` adds named links below
   the description — handy for "Certificate" plus "Write-up".
   NOTE: the CV lists no awards, prizes or grades. These rows are academic and
   service milestones from the CV — replace with real awards if any exist. ---- */

export const AWARDS = [
  {
    icon: "🎓",
    title: "IB Diploma Programme — Three Higher Level Subjects",
    meta: "Cornerstone International Academy · Expected July 2027",
    detail: "Studying Geography, English Literature, and Business Management at Higher Level, alongside French, Biology, and Mathematics at Standard Level.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "📝",
    title: "Extended Essay — Independent Research",
    meta: "IB Diploma Programme · In progress",
    detail: "Authoring a 4,000-word independent research essay on how regular physical activity affects the mental well-being of teenagers.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🤝",
    title: "Community Service — CAS",
    meta: "Creativity, Activity, Service",
    detail: "Contributed to community initiatives including revitalising La Bawaleshie Kindergarten School, feeding children in Madina, and teaching at a children's service most Sundays.",
    link: "",
    links: [],
    featured: true,
  },
];

/* ---- Areas of interest & independent learning ---- */

export const ARTICLES = [
  {
    title: "Human Behaviour & Well-being",
    outlet: "Exploring what shapes how people think, act, and thrive",
    link: "",
    links: [],
  },
  {
    title: "Physical Activity & Mental Health",
    outlet: "Researching how regular exercise affects the mental well-being of teenagers through her Extended Essay",
    link: "",
    links: [],
  },
  {
    title: "Business & Brand Promotion",
    outlet: "How local businesses market themselves — through HL Business Management and hands-on promotion for Hair Senta",
    link: "",
    links: [],
  },
  {
    title: "Geography & Literature",
    outlet: "Higher Level study of people, places, and the stories told about them",
    link: "",
    links: [],
  },
  {
    title: "Community Service & Education",
    outlet: "Supporting children's learning and well-being through teaching, outreach, and school revitalisation",
    link: "",
    links: [],
  },
  {
    title: "Sustainable Fashion & Creativity",
    outlet: "Upcycling, fashion, and baking as forms of creative expression",
    link: "",
    links: [],
  },
];

/* ---- Leadership, service & activities ----
   Stats take a single `link` (the chip becomes clickable).
   Orgs take `link` for the whole card and `links` for named links.
   NOTE: the CV gives no counts or hours — these stats are factual markers
   from the CV; swap in real figures (hours, children reached) if available. ---- */

export const VOLUNTEER = {
  stats: [
    { value: "3", label: "Community Service Initiatives", link: "" },
    { value: "1 hr", label: "Teaching Most Sundays", link: "" },
    { value: "3 HL", label: "IB Higher Level Subjects", link: "" },
  ],
  orgs: [
    {
      name: "Children's Service",
      role: "Volunteer Teacher · Most Sundays",
      desc: "Dedicates an hour most Sundays to teaching at a children's service, building communication and leadership while supporting young learners.",
      link: "",
      links: [],
    },
    {
      name: "La Bawaleshie Kindergarten School",
      role: "School Revitalisation", // TODO: add dates
      desc: "Helped revitalise La Bawaleshie Kindergarten School, contributing to a better learning environment for young children.",
      link: "",
      links: [],
    },
    {
      name: "Child Feeding Outreach — Madina",
      role: "Community Outreach", // TODO: organiser and dates not stated in the CV
      desc: "Took part in feeding children in Madina, supporting the well-being of children in the community.",
      link: "",
      links: [],
    },
    {
      name: "Hair Senta",
      role: "Volunteer Model & Brand Promoter",
      desc: "Volunteered her time to model for and promote a local wig business.",
      link: "",
      links: [],
    },
  ],
};

/* ---- Sport, music & activities (renders on the /sports route) ----
   `links` is the useful one here — clubs, performance videos,
   certificates — since one activity usually has several. ---- */

export const SPORTS = [
  {
    icon: "🎾",
    name: "Tennis",
    desc: "Plays tennis twice a week, building fitness, focus, and discipline — a personal link to the relationship between physical activity and well-being that she explores in her Extended Essay.",
    link: "",
    links: [],
  },
  {
    icon: "⛰️",
    name: "Hiking — Aburi Mountains",
    desc: "Took part in a hiking trip to the Aburi Mountains, enjoying the outdoors and the challenge of the climb.",
    link: "",
    links: [],
  },
  {
    icon: "🧁",
    name: "Weekend Baking",
    desc: "Bakes on weekends as a creative and practical outlet.",
    link: "",
    links: [],
  },
  {
    icon: "👗",
    name: "Fashion & Modelling",
    desc: "Explores fashion through an upcycled fashion project and volunteer modelling for the wig brand Hair Senta.",
    link: "",
    links: [],
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Research & Analysis",
    items: ["Independent Research", "Critical Thinking", "Argumentation", "Academic Writing"],
  },
  {
    group: "Speaking & Leadership",
    items: ["Public Speaking", "Teamwork", "Collaboration", "Teaching"],
  },
  {
    group: "Creative & Business",
    items: ["Brand Promotion", "Modelling", "Upcycled Fashion", "Baking"],
  },
  {
    group: "Technical",
    items: ["Editing", "Basic Coding"],
  },
  {
    group: "Languages",
    items: ["English", "Twi (Intermediate)", "French (IB SL)"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "Cornerstone International Academy",
    location: "East Legon, Accra, Ghana",
    level: "International Baccalaureate (IB) Diploma Programme",
    dates: "Expected July 2027",
    gpa: "", // TODO: the CV gives no predicted score
    coursework: [
      "Geography HL",
      "English Literature HL",
      "Business Management HL",
      "French SL",
      "Biology SL",
      "Mathematics SL",
      "Extended Essay",
      "Theory of Knowledge",
    ],
    link: "",
    links: [],
  },
];

/* ---- Test scores — no standardised test results appear in the CV.
   Export kept so any component importing it does not break. ---- */

export const TEST_SCORES = [];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* Entries with an empty href are filtered out by the Footer. */
export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
  { label: "GitHub", href: PROFILE.socials.github },
  { label: "YouTube", href: PROFILE.socials.youtube },
  { label: "Instagram", href: PROFILE.socials.instagram },
];
