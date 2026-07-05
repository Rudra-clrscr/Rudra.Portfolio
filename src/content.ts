/**
 * ──────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF CONTENT
 *  Edit everything about your portfolio here. Every section on the site reads
 *  from this file, so you never have to touch the components.
 * ──────────────────────────────────────────────────────────────────────────
 */

export type Social = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type ProjectExperience = {
  title: string;
  role: string;
  period: string;
  problem: string;
  built: string;
  impact: string;
  tech: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  description: string;
  kind: "work" | "education";
};

export type Certification = {
  title: string;
  issuer: string;
};

export const siteContent = {
  profile: {
    name: "Rudra Pratap Singh",
    headline: "Aspiring Data Scientist & Backend Developer",
    // Rotating roles shown by the hero typewriter effect.
    roles: [
      "Data Scientist",
      "Backend Developer",
      "Problem Solver",
      "B.Tech CSE Student",
    ],
    // GitHub username — powers the GitHub activity section (contribution graph).
    githubUser: "Rudra-clrscr",
    tagline:
      "B.Tech CSE student who turns data into insight and ideas into working backends — from AI-driven safety systems to exploratory data analysis.",
    about:
      "I'm a second-year B.Tech Computer Science & Engineering student with a strong " +
      "foundation in programming and a genuine enthusiasm for building things that work. " +
      "I split my time between data science — exploratory analysis with Python, Pandas, " +
      "and Seaborn — and backend development with Flask and SQLAlchemy. I love taking a " +
      "project from a rough idea to a deployed product, whether that's an AI-driven travel " +
      "safety platform or digging insights out of large public datasets. I'm eager to apply " +
      "what I know to real-world problems and keep learning along the way.",
    location: "Bareilly, Uttar Pradesh, India",
    email: "rpsbareilly06@gmail.com",
    // Portrait shown in the hero. Drop a new file at public/hero-photo.jpg to swap.
    photo: "/hero-photo.jpg",
    // Drop your real PDF at public/resume.pdf to make this button work.
    resumeUrl: "/resume.pdf",
    socials: [
      { label: "GitHub", href: "https://github.com/Rudra-clrscr" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rudra-pratap-singh-8798aa311/",
      },
    ] as Social[],
  },

  quickFacts: [
    { label: "Education", value: "B.Tech CSE '28" },
    { label: "Focus", value: "Data & Backend" },
    { label: "Projects", value: "3 shipped" },
    { label: "Based in", value: "Bareilly, India" },
  ],

  // Animated count-up stats (rendered in the About section).
  metrics: [
    { value: 3, suffix: "", label: "Projects shipped" },
    { value: 8800, suffix: "+", label: "Data points analyzed" },
    { value: 3, suffix: "", label: "Certifications" },
    { value: 7.8, suffix: "", label: "Current CGPA" },
  ],

  skills: [
    {
      category: "Languages",
      items: ["Python", "Java"],
    },
    {
      category: "Data & Analysis",
      items: ["Pandas", "NumPy", "Seaborn", "Matplotlib"],
    },
    {
      category: "Backend & Tools",
      items: ["Flask", "SQLAlchemy", "REST APIs", "SQL", "Git", "DSA (Java)"],
    },
  ] as SkillGroup[],

  // Compact showcase cards.
  projects: [
    {
      title: "SAFAR — Travel Together",
      description:
        "An AI-driven travel safety platform with a Flask backend powering user, group, chat, and safety workflows — featuring anomaly detection, geo-fencing, panic alerts, and SMS/OTP.",
      tech: ["Flask", "SQLAlchemy", "Python", "Twilio"],
      repoUrl: "https://github.com/Rudra-clrscr/SAFAR-1",
    },
    {
      title: "Netflix Movies & TV Shows — EDA",
      description:
        "Exploratory data analysis of 8,800+ Netflix titles across 12 features, uncovering content mix, country distribution, release trends, and dominant genres.",
      tech: ["Python", "Pandas", "NumPy", "Seaborn"],
      repoUrl: "https://github.com/Rudra-clrscr/Netflix",
    },
    {
      title: "IPL Cricket Data Analysis",
      description:
        "EDA on IPL match and ball-by-ball datasets to study team, player, and venue performance — exploring win margins, toss impact, and season-wise patterns.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
      repoUrl: "https://github.com/Rudra-clrscr/IPL_EDA",
    },
  ] as Project[],

  // Longer-form, in-depth project write-ups (case studies).
  projectExperience: [
    {
      title: "SAFAR — Travel Together",
      role: "Backend Developer",
      period: "Personal Project",
      problem:
        "Groups travelling together need a reliable way to stay coordinated and safe — sharing location, communicating, and getting help fast when something goes wrong.",
      built:
        "Architected and developed the backend in Flask with SQLAlchemy, REST APIs, session management, and normalized schemas to power user, group, chat, and safety workflows. Added AI-driven safety intelligence: Isolation Forest anomaly detection, GPS-based geo-fencing, dynamic safety scoring, panic alerts, and SMS/OTP flows via Twilio.",
      impact:
        "Delivered real-time protection — automatically flagging anomalous activity and enabling instant panic alerts so travellers and their groups can respond quickly.",
      tech: [
        "Flask",
        "SQLAlchemy",
        "REST APIs",
        "Isolation Forest",
        "Twilio",
        "Python",
      ],
    },
    {
      title: "Netflix Movies & TV Shows — EDA",
      role: "Data Analyst",
      period: "Personal Project",
      problem:
        "Netflix's catalogue is huge and varied — understanding what it actually contains requires structured exploration of thousands of titles.",
      built:
        "Performed exploratory data analysis on 8,800+ titles across 12 features using Python (Pandas, NumPy, Seaborn), with clear visualizations of content mix, geography, release timing, and ratings/genres.",
      impact:
        "Surfaced clear insights: a content mix of roughly 70% movies, concentration in the US, India, and UK, a marked surge in releases post-2010, and the dominant ratings and genres.",
      tech: ["Python", "Pandas", "NumPy", "Seaborn"],
    },
  ] as ProjectExperience[],

  experience: [
    {
      title: "B.Tech in Computer Science & Engineering",
      org: "SRMS CET, Bareilly",
      period: "2024 — 2028 (Expected)",
      description: "Current CGPA: 7.8 / 10. Coursework across programming, data science, and core CS.",
      kind: "education",
    },
    {
      title: "Higher Secondary (Class 12)",
      org: "Bishop Conrad Senior Secondary School, Bareilly",
      period: "2024",
      description: "Scored 72.4% in the Higher Secondary examination.",
      kind: "education",
    },
    {
      title: "Secondary School (Class 10)",
      org: "Bishop Conrad Senior Secondary School, Bareilly",
      period: "2022",
      description: "Scored 83.2% in the Secondary School examination.",
      kind: "education",
    },
  ] as TimelineItem[],

  certifications: [
    {
      title: "Foundation Level in Programming and Data Science",
      issuer: "IIT Madras",
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
    },
    {
      title: "Business Analytics & Text Mining Modeling using Python",
      issuer: "IIT Roorkee (NPTEL)",
    },
  ] as Certification[],

  contact: {
    heading: "Let's work together",
    blurb:
      "Open to internships and opportunities in data science and backend development. Have a role, project, or idea in mind? Send a message and I'll get back to you.",
    // Get a form id at https://formspree.io and set NEXT_PUBLIC_FORMSPREE_ID in .env.local
    // (or paste it directly below). Until then the form shows a friendly notice.
    formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
  },
} as const;

export type SiteContent = typeof siteContent;
