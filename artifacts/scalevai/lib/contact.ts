import { z } from "zod";
import { interestOptions } from "@/data/home-sections";
import { contactFeedback, contactLimits } from "@/data/contact-form";

const copy = contactFeedback.validation;

export const contactSchema = z.object({
  name: z.string({ required_error: copy.name, invalid_type_error: copy.name }).trim().min(2, copy.name).max(contactLimits.name, copy.nameLength),
  company: z.string().trim().max(contactLimits.company, copy.companyLength).optional(),
  email: z.string({ required_error: copy.email, invalid_type_error: copy.email }).trim().email(copy.email).max(contactLimits.email, copy.emailLength),
  phone: z.string().trim().max(contactLimits.phone, copy.phoneLength)
    .refine((value) => value === "" || (/^[+()\d.\s-]+$/.test(value) && value.replace(/\D/g, "").length >= 6), copy.phone).optional(),
  interest: z.enum(interestOptions, { errorMap: () => ({ message: copy.interest }) }),
  message: z.string({ required_error: copy.message, invalid_type_error: copy.message }).trim().min(1, copy.message).max(contactLimits.message, copy.messageLength),
});

export type ContactEnquiry = z.infer<typeof contactSchema>;
