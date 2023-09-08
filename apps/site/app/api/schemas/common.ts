import { z } from "zod";

/**
 * A physical address.
 */
export const Location = z.object({
  /**
   * Street address.
   */
  address: z.string().optional(),

  /**
   * Postal or ZIP code.
   */
  postalCode: z.string().optional(),

  /**
   * City or locality.
   */
  city: z.string().optional(),

  /**
   * State or region.
   */
  region: z.string().optional(),

  /**
   * Country code.
   */
  countryCode: z.string().optional(),
});

/**
 * API error responses.
 */
const APIError = z.object({
  /**
   * The error message.
   */
  message: z.string(),
});

export type LocationType = z.infer<typeof Location>;
export type APIErrorType = z.infer<typeof APIError>;
