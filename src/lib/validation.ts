/**
 * Form validation utilities.
 * Uses native validation patterns - no external dependencies.
 */

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_PATTERN = /^[a-zA-Z\s\-']{1,100}$/;
const MAX_MESSAGE_LENGTH = 5000;

/**
 * Sanitize string input to prevent XSS.
 * Strips HTML tags and trims whitespace.
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .trim();
}

/**
 * Validate contact form submission.
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  const firstName = sanitizeInput(data.firstName);
  if (!firstName) {
    errors.firstName = "First name is required";
  } else if (!NAME_PATTERN.test(firstName)) {
    errors.firstName = "First name contains invalid characters";
  }

  const lastName = sanitizeInput(data.lastName);
  if (!lastName) {
    errors.lastName = "Last name is required";
  } else if (!NAME_PATTERN.test(lastName)) {
    errors.lastName = "Last name contains invalid characters";
  }

  const email = sanitizeInput(data.email).toLowerCase();
  if (!email) {
    errors.email = "Email is required";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address";
  }

  const interest = sanitizeInput(data.interest);
  const validInterests = [
    "digital",
    "living",
    "global",
    "partnership",
    "careers",
    "other",
  ];
  if (!interest) {
    errors.interest = "Please select an option";
  } else if (!validInterests.includes(interest)) {
    errors.interest = "Invalid selection";
  }

  const message = sanitizeInput(data.message);
  if (!message) {
    errors.message = "Message is required";
  } else if (message.length < 10) {
    errors.message = "Message is too short";
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Rate limiting helper for client-side submission throttling.
 * Returns true if submission should be blocked.
 */
export function isRateLimited(
  lastSubmitTime: number | null,
  cooldownMs: number = 30000
): boolean {
  if (!lastSubmitTime) return false;
  return Date.now() - lastSubmitTime < cooldownMs;
}
