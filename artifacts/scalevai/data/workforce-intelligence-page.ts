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
} as const;
