/**
 * A physical address.
 */
export interface Location {
  address?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  countryCode?: string;
}

export interface APIError {
  message: string;
}
