import { z } from "zod";
import { Location } from "./common";

/**
 * Common properties for any occupation.
 */
export const Occupation = z.object({
  /**
   * The start date of an occupation.
   */
  startDate: z.coerce.date().optional(),

  /**
   * The end date of an occupation.
   *
   * @note If an end date is not provided, implementations
   * should default to the current day.
   */
  endDate: z.coerce.date().optional(),
});

/**
 * Details about work experience.
 */
export const Work = Occupation.extend({
  /**
   * The identifier for the work experience.
   */
  id: z.string(),

  /**
   * The name of the organization.
   */
  name: z.string().optional(),

  /**
   * The physical location of the workplace.
   */
  location: Location.optional(),

  /**
   * A brief description of the job role or project.
   */
  description: z.string().optional(),

  /**
   * The title or position held at the organization.
   */
  position: z.string().optional(),

  /**
   * URL to the organization's website or relevant resource.
   */
  url: z.string().url().optional(),

  /**
   * Summary of the job or role responsibilities.
   */
  summary: z.string().optional(),

  /**
   * Highlights or key achievements at the job.
   */
  highlights: z.array(z.string()).optional(),
});

/**
 * Information about educational background.
 */
export const Education = Occupation.extend({
  /**
   * The name of the educational institution.
   */
  name: z.string().optional(),

  /**
   * The physical location of the educational institution.
   */
  location: Location.optional(),

  /**
   * URL to the educational institution's website or relevant resource.
   */
  url: z.string().url().optional(),

  /**
   * Area of study or major.
   */
  area: z.string().optional(),

  /**
   * Type of degree obtained.
   */
  studyType: z.string().optional(),
});

/**
 * An online presence.
 */
export const Profile = z.object({
  /**
   * The name of the network or platform.
   */
  network: z.string().optional(),

  /**
   * Username on the platform.
   */
  username: z.string().optional(),

  /**
   * URL to the profile on the platform.
   */
  url: z.string().url().optional(),
});

/**
 * Basic information of an individual.
 */
export const Basics = z.object({
  /**
   * Name of the individual.
   */
  name: z.string().optional(),

  /**
   * The primary position of the individual.
   */
  label: z.string().optional(),

  /**
   * URL to a JPEG or PNG image.
   */
  image: z.string().optional(),

  /**
   * Email address to contact the individual.
   */
  email: z.string().optional(),

  /**
   * Phone numbers specified in any format.
   */
  phone: z.string().optional(),

  /**
   * URL to the individuals website.
   */
  url: z.string().url().optional(),

  /**
   * A short bio about the individual.
   */
  summary: z.string().optional(),

  /**
   * Where the individual is located.
   */
  location: Location.optional(),

  /**
   * An array of social media networks the individual is on.
   */
  profiles: z.array(Profile).optional(),
});

/**
 * A complete resume.
 */
export const Resume = z.object({
  /**
   * Basic information of an individual.
   */
  basics: Basics,

  /**
   * Work history of the individual.
   */
  work: z.array(Work).optional(),

  /**
   * Educational background of the individual.
   */
  education: z.array(Education).optional(),
});

export type OccupationType = z.infer<typeof Occupation>;
export type WorkType = z.infer<typeof Work>;
export type EducationType = z.infer<typeof Education>;
export type ProfileType = z.infer<typeof Profile>;
export type BasicsType = z.infer<typeof Basics>;
export type ResumeType = z.infer<typeof Resume>;
