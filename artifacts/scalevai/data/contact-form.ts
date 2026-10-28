// Functional form/validation copy, separate from the approved marketing copy.
export const contactFieldNames = ["name", "company", "email", "phone", "interest", "message"] as const;
export type ContactField = (typeof contactFieldNames)[number];
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export const contactLimits = { name: 120, company: 160, email: 254, phone: 40, message: 5000 } as const;

export const contactFeedback = {
  pending: "Submitting…",
  invalid: "Please check the highlighted fields.",
  unavailable: "We couldn’t process your enquiry. Your details are still here; please try again.",
  invalidJson: "The request body must be valid JSON.",
  tooLarge: "The enquiry is too large. Please shorten your message.",
  validation: {
    name: "Enter your full name using at least two characters.",
    email: "Enter a valid business email address.",
    phone: "Enter a valid phone number, or leave it blank.",
    interest: "Choose A service, An industry, or Partnering.",
    message: "Enter a message.",
    nameLength: "Use no more than 120 characters for your name.",
    companyLength: "Use no more than 160 characters for your company.",
    emailLength: "Use no more than 254 characters for your email.",
    phoneLength: "Use no more than 40 characters for your phone number.",
    messageLength: "Use no more than 5,000 characters for your message.",
  },
} as const;
