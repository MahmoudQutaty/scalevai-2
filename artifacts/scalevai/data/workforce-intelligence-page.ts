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
} as const;
