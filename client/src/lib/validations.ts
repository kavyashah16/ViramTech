import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z
    .string()
    .optional()
    .refine((phone) => {
      if (!phone) return true;
      const indianPhoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$/;
      return indianPhoneRegex.test(phone.replace(/[\s-]/g, ""));
    }, "Please enter a valid Indian phone number"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
