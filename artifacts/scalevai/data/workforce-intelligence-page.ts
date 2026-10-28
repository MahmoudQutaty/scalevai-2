export const workforceIntelligencePage = {
  title: "Workforce Intelligence | AI Presence & Attendance Verification | ScaleVAI",
  description:
    "Ground-truth attendance and presence verification for enterprises across the UAE and GCC – eliminating card gaming, tailgating, and blind spots with real-time dashboards and anomaly alerts.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/services" },
  ],
  category: "AI PRESENCE & ATTENDANCE VERIFICATION",
  heading: ["Workforce", "Intelligence"],
  bookCall: "Book a call",
  howItWorks: "See how it works ↓",
  scanLabel: "Animated illustration of AI presence verification",
  floor: "LIVE · Floor 3",
  camera: "Cam 04",
  verified: "Verified ✓",
  unmatched: "Unmatched ✕",
  alertTitle: "Anomaly detected",
  alertDescription: "Unusual hours, Entrance B",
  scanSteps: ["Scan", "Analyze", "Cross-check", "Confirm", "Presence verified"],
  metrics: [
    { kind: "count", value: 100, suffix: "%", label: "Entry and exit coverage" },
    { kind: "count", value: 85, suffix: "%+", label: "Less manual CCTV review time" },
    { kind: "text", value: "8–12 wks", label: "Typical deployment" },
    { kind: "text", value: "Existing", label: "Works with the cameras you have" },
  ],
  people: [
    { left: "12%", top: "34%", delay: "0s", unmatched: false },
    { left: "36%", top: "48%", delay: "-3s", unmatched: false },
    { left: "62%", top: "30%", delay: "-5s", unmatched: true },
    { left: "78%", top: "52%", delay: "-1.5s", unmatched: false },
  ],
  problem: {
    label: "THE PROBLEM",
    heading: "Card systems don’t tell you the truth",
    paragraphs: [
      "Badge-in, badge-out systems are trivially gamed. Security teams are left reviewing hours of CCTV footage after the fact, with no real-time visibility into who is actually on site.",
      "Workforce Intelligence replaces guesswork with ground-truth, computer-vision-based presence verification, giving facility and HR teams a live, accurate picture of attendance across every floor and every entrance.",
    ],
    challenges: [
      {
        icon: "⇄",
        title: "Buddy punching",
        description: "A colleague badges in for someone who isn’t there.",
      },
      {
        icon: "⇥",
        title: "Tailgating",
        description: "Following someone through an open door, unseen by the reader.",
      },
      {
        icon: "▭",
        title: "Cards left at a desk",
        description: "The badge says present. The person isn’t.",
      },
      {
        icon: "▶",
        title: "CCTV reviewed after the fact",
        description: "Hours of footage, with no real-time view of who is on site.",
      },
    ],
    truthLead: "Ground truth,",
    truthRest: " not guesswork: a live picture of attendance on every floor and at every entrance.",
  },
  process: {
    label: "HOW IT WORKS",
    heading: "Four steps from camera feed to trusted attendance data.",
    description:
      "Workforce Intelligence turns your CCTV and access data into a real-time picture of who is genuinely on site, without relying on cards alone.",
    ctaHeading: "Ready for ground-truth workforce visibility?",
    ctaDescription:
      "Talk to ScaleVAI about deploying Workforce Intelligence across your sites.",
    ctaLabel: "Book a call",
    steps: [
      {
        number: "01",
        title: "Capture",
        description:
          "Existing or new cameras at entrances, exits, and floors feed a continuous, privacy-conscious video stream.",
      },
      {
        number: "02",
        title: "Verify",
        description:
          "Computer vision confirms real presence, eliminating card gaming, tailgating, and buddy punching automatically.",
      },
      {
        number: "03",
        title: "Alert",
        description:
          "Anomalies such as unauthorized access, unusual hours, and blind-spot activity trigger real-time alerts to your team.",
      },
      {
        number: "04",
        title: "Report",
        description:
          "A live management dashboard and exportable reports feed straight into HR, payroll, and compliance workflows.",
      },
    ],
  },
  capabilities: {
    label: "KEY CAPABILITIES",
    heading: "Everything you need to trust your attendance data",
    cards: [
      {
        title: "Multi-floor, multi-site coverage",
        description:
          "One dashboard for every floor, building, or site, no matter how many entrances you have.",
        colors: ["#1d4ed8", "#7c3aed"],
      },
      {
        title: "Real-time anomaly alerts",
        description:
          "Get notified the moment something looks wrong, instead of finding out in next week’s audit.",
        colors: ["#b91c1c", "#7f1d1d"],
      },
      {
        title: "HR & payroll integration",
        description:
          "Verified attendance data flows directly into your existing HR and payroll systems.",
        colors: ["#0e7490", "#2563eb"],
      },
      {
        title: "Privacy-conscious by design",
        description:
          "Built to verify presence, not to surveil, and configurable to your organization’s data policies.",
        colors: ["#047857", "#0e7490"],
      },
      {
        title: "Works with existing cameras",
        description:
          "No forklift upgrade required. Workforce Intelligence runs on the CCTV infrastructure you already have.",
        colors: ["#312e81", "#0ea5e9"],
      },
      {
        title: "Executive-ready reporting",
        description:
          "Exportable, audit-ready reports for management, compliance, and workforce planning.",
        colors: ["#86198f", "#2563eb"],
      },
    ],
  },
  caseStudy: {
    label: "PROVEN IN THE FIELD",
    deployment: "LIVE DEPLOYMENT · DUBAI, UAE",
    heading: "Leading UAE real estate developer",
    description:
      "5-floor office, 300+ staff. The card system had no exit tracking and no anomaly detection. ScaleVAI deployed AI presence verification across all floors, with a real-time management dashboard.",
    metrics: [
      { value: 100, suffix: "%", label: "Entry and exit coverage" },
      { value: 85, suffix: "%+", label: "Reduction in manual CCTV review time" },
      { value: 5, suffix: "", label: "Floors covered" },
      { value: 300, suffix: "+", label: "Staff on site" },
    ],
    dashboardTitle: "Presence dashboard",
    dashboardStatus: "● Live",
    floors: ["Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5"],
    floorCoverage: "100%",
    chartCaption: "Entry and exit coverage by floor",
  },
} as const;
