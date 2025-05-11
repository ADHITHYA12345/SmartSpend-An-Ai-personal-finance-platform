import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "smartspend", // Unique app ID
  name: "SmartSpend",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
