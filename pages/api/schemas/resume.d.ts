import type { Location } from "./common";

export type Resume = {
  basics?: Basics;
  work?: Work[];
  education?: Education[];
};

interface Occupation {
  /**
   * The start date of an occupation.
   */
  startDate?: Date;

  /**
   * The end date of an occupation.
   * @note If an end date is not provided, implementations should default to the current day.
   */
  endDate?: Date;
}

export interface Work extends Occupation {
  id: string;
  /**
   * The name of the organization.
   */
  name?: string;

  location?: Location;

  description?: string;

  position?: string;

  url?: URL;

  summary?: string;

  highlights?: string[];
}

interface Education extends Occupation {
  name?: string;

  location?: Location;

  url?: URL;

  area?: string;

  studyType?: string;
}

/**
 * An online presence.
 */
interface Profile {
  /**
   * The name of the network or platform.
   */
  network?: string;

  /**
   * Username on the platform.
   */
  username?: string;

  /**
   * URL to the profile on the platform.
   */
  url?: URL;
}

/**
 * Basic information of an individual.
 */
interface Basics {
  /**
   * Name of the individual.
   * @see https://www.w3.org/International/questions/qa-personal-names
   */
  name?: string;

  /**
   * The primary position of the individual.
   * @example Design Technologist
   */
  label?: string;

  /**
   * URL to a JPEG or PNG image.
   */
  image?: string;

  /**
   * Email address to contact the individual.
   * @example: chris@drouk.as
   */
  email?: string;

  /**
   * Phone numbers specified in any format.
   * @example 123-456-7890
   */
  phone?: string;

  /**
   * URL to the individuals website.
   * @example https://drouk.as
   */
  url?: URL;

  /**
   * A short bio about the individual.
   */
  summary?: string;

  /**
   * Where the individual is located.
   * */
  location?: Location;

  /**
   * An array of social media networks the individual is on.
   * */
  profiles?: Profile[];
}
