import { z } from "zod";
import { validateEmailWithDomain } from "./validateMail";

const sanitizeText = (value: string) =>
  value
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const sanitizeEmail = (value: string) => sanitizeText(value).toLowerCase();

export const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });

export const contactSchema = z.object({
  name: z.preprocess(
    (value) => (typeof value === "string" ? sanitizeText(value) : value),
    z
      .string()
      .min(2, "* El nombre es requerido")
      .max(60, "El nombre es demasiado largo")
  ),
  email: z.preprocess(
    (value) => (typeof value === "string" ? sanitizeEmail(value) : value),
    z
      .string()
      .min(1, "* El email es requerido")
      .email("Escribe un email valido")
      .max(254, "El email es demasiado largo")
      .refine(validateEmailWithDomain, "Escribe un dominio de email valido")
  ),
  challenge: z.preprocess(
    (value) => (typeof value === "string" ? sanitizeText(value) : value),
    z
      .string()
      .min(4, "Escribe un mensaje mas claro")
      .max(1000, "El mensaje es demasiado largo")
  ),
});

export type ContactPayload = z.infer<typeof contactSchema>;
