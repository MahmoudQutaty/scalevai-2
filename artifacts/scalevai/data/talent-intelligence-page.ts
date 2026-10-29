export const talentIntelligencePage = {
  title: "Talent Intelligence | AI Candidate Scoring & Screening | ScaleVAI",
  description:
    "AI candidate scoring, semantic resume matching and automated screening for enterprises in the UAE and GCC. Arabic and English parsing, native ATS integration, explainable shortlists. Your team makes every hiring decision.",
  video: "/Talent%20Intelligence.mp4",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/services" },
  ],
  category: "AI CANDIDATE SCORING & SCREENING",
  heading: ["Talent", "Intelligence"],
  lead:
    "AI candidate scoring, semantic resume matching, and automated screening for enterprises across the UAE and GCC – cutting review time by up to 75% with native ATS integration.",
  metrics: [
    { kind: "count", value: 75, suffix: "%", label: "Less screening time (up to)" },
    { kind: "text", value: "< 4 hrs", label: "To shortlist 1,200 applicants" },
    { kind: "text", value: "AR + EN", label: "Native Arabic and English parsing" },
    { kind: "count", value: 100, suffix: "%", label: "Hiring decisions stay with your team" },
  ],
  problem: {
    heading: "Keyword filters miss great candidates. Manual screening takes weeks.",
    paragraphs: [
      "In the UAE and GCC, competitive job postings draw hundreds or thousands of applicants within days. Hiring teams spend 30 to 40 hours reading resumes manually, or rely on blunt keyword filters that reject exceptional candidates who phrase their accomplishments differently.",
      "Talent Intelligence transforms candidate evaluation with deep semantic matching. It understands skills in context, evaluates actual project depth, scores profiles against your custom role rubrics, and delivers an explainable shortlist to your recruiters in minutes.",
    ],
    stats: [
      { value: "30–40 hrs", label: "spent reading resumes manually for a single role" },
      { value: "100s–1000s", label: "of applicants within days of a competitive posting" },
    ],
  },
  examples: [
    {
      line: "Grew regional revenue 3x by leading a 12-person team",
      rejected: "✕ Rejected: title keyword not found",
      matched: "✓ Matched: leadership and commercial depth",
    },
    {
      line: "Built the Gulf onboarding programme from scratch",
      rejected: "✕ Rejected: job-title keyword not found",
      matched: "✓ Matched: transferable people-ops skills",
    },
    {
      line: "Delivered 40 store openings across the GCC",
      rejected: "✕ Rejected: keyword mismatch",
      matched: "✓ Matched: large-scale delivery experience",
    },
  ],
  process: {
    heading: "From applicant surge to an interview-ready shortlist.",
    description:
      "Talent Intelligence integrates with your existing careers portal and ATS to rank candidates objectively against the competencies that predict success.",
    ctaHeading: "Ready to accelerate your hiring pipeline?",
    ctaDescription:
      "Talk to ScaleVAI about implementing Talent Intelligence for your enterprise recruitment team.",
    steps: [
      {
        number: "01",
        title: "Define",
        description: "Set weighted criteria, must-haves, certifications, and cultural competencies tailored to the role.",
        tags: ["Weighted criteria", "Must-haves", "Certifications"],
      },
      {
        number: "02",
        title: "Ingest",
        description: "Inbound CVs in English and Arabic are parsed, structured, and normalized automatically.",
        tags: ["English", "Arabic", "Normalized"],
      },
      {
        number: "03",
        title: "Score",
        description: "AI evaluates experience depth, domain authority, and fit, generating transparent match explanations.",
        tags: ["Experience depth", "Domain authority", "Fit"],
      },
      {
        number: "04",
        title: "Interview",
        description: "Recruiters advance the top tier with generated interview guides addressing specific candidate nuances.",
        tags: ["Top tier", "Interview guides"],
      },
    ],
  },
  capabilities: [
    {
      title: "Semantic Candidate Scoring",
      description: "Evaluates career progression, verified achievements, and transferable skills rather than rigid keyword counts.",
      colors: ["#1d4ed8", "#7c3aed"],
    },
    {
      title: "Bilingual Arabic & English",
      description: "Native processing for regional Arabic and English resumes, recognizing Gulf institutional credentials and certifications.",
      colors: ["#047857", "#0e7490"],
    },
    {
      title: "Two-Way ATS Synchronization",
      description: "Syncs directly with Workday, SAP SuccessFactors, Greenhouse, Lever, and custom HRIS without disrupting team workflows.",
      colors: ["#0e7490", "#2563eb"],
    },
  ],
  ats: ["Workday", "SAP SuccessFactors", "Greenhouse", "Lever", "Custom HRIS"],
  audiences: [
    {
      title: "High-growth GCC enterprises",
      description: "Scale hiring across commercial divisions, retail stores, and support functions without adding headcount to your internal recruiting team.",
      benefit: "Scale hiring without adding recruiters",
      colors: ["#1d4ed8", "#7c3aed"],
    },
    {
      title: "Staffing & executive search firms",
      description: "Deliver qualified client shortlists in 24 hours instead of a full week, winning more competitive search mandates and increasing placement ratios.",
      benefit: "Shortlists in 24 hours, not a week",
      colors: ["#b45309", "#f59e0b"],
    },
    {
      title: "Healthcare & specialized industries",
      description: "Screen for specialized licenses, medical board certifications, and mandatory regulatory compliance before hiring manager interviews.",
      benefit: "Licenses and certifications screened first",
      colors: ["#047857", "#10b981"],
    },
  ],
  useCase: {
    heading: "Shortlisting 1,200 applicants in under 4 hours",
    description:
      "A major regional retail group receiving 1,200 applications per campaign configured Talent Intelligence with weighted role rubrics. The team received a stack-ranked top 40 candidates complete with score justifications and targeted interview prompts on day one.",
  },
  responsible: [
    {
      icon: "✓",
      title: "Your team decides",
      description: "Talent Intelligence is an augmentative decision-support engine. It surfaces top candidates with transparent justifications, while leaving 100% of interview, hiring, and rejection decisions to your recruiters.",
    },
    {
      icon: "⛨",
      title: "Built for UAE data law",
      description: "Processing adheres strictly to the UAE Personal Data Protection Law and GDPR standards.",
    },
    {
      icon: "▣",
      title: "Isolated by default",
      description: "Applicant information is processed within isolated enterprise instances and is never used to train external public models.",
    },
  ],
  faq: [
    {
      question: "How does Talent Intelligence integrate with our ATS?",
      answer: "Talent Intelligence connects via secure REST APIs or native webhooks to your ATS (Workday, SuccessFactors, Greenhouse, Lever, etc.). Inbound applications are scored automatically and scores appear directly inside your recruiter dashboard.",
    },
    {
      question: "Is candidate data kept confidential and secure?",
      answer: "Yes. Data processing adheres strictly to the UAE Personal Data Protection Law and GDPR standards. Applicant information is processed within isolated enterprise instances and is never used to train external public models.",
    },
    {
      question: "Does it handle Arabic resumes accurately?",
      answer: "Yes. The platform provides full native Arabic and bilingual parsing, understanding regional Gulf qualifications, ministry credentials, and local employment terms.",
    },
    {
      question: "Does the AI make final hiring decisions?",
      answer: "No. Talent Intelligence is an augmentative decision-support engine. It prioritizes and surfaces top candidates with transparent justifications, while leaving 100% of interview, hiring, and rejection decisions to your human recruitment team.",
    },
  ],
  related: [
    {
      slug: "people-assistant",
      title: "People Assistant",
      summary: "An AI assistant that resolves routine payroll, leave, and policy queries.",
    },
    {
      slug: "workforce-intelligence",
      title: "Workforce Intelligence",
      summary: "Ground-truth attendance and presence verification that eliminates card gaming, tailgating, and blind spots.",
    },
    {
      slug: "ai-workflow-automation",
      title: "AI Workflow Automation",
      summary: "Automation of high-volume manual processes such as document handling, supplier billing, and compliance checks.",
    },
  ],
  finalCta: {
    heading: "Ready to accelerate your hiring pipeline?",
    description: "Talk to ScaleVAI about implementing Talent Intelligence for your enterprise recruitment team.",
    bookCall: "Book a call",
  },
  contact: {
    heading: "Book a call about Talent Intelligence.",
    description: "Speak directly with a senior consultant. Dubai, UAE · scale@scalevai.com",
    formHeading: "Speak with our experts",
    success: "Thanks, we have recorded your enquiry (demo).",
  },
} as const;
