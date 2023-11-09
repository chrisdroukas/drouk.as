import { z } from "zod";

import { Location } from "./common";

/**
 * Schema for a single road race.
 */
export const Race = z.object({
  /**
   * Unique identifier for the race.
   */
  id: z.string(),

  /**
   * Basic information such as bib number and runner ID.
   */
  basics: z
    .object({
      /**
       * Bib number for the race.
       */
      bib: z.number().optional(),

      /**
       * Runner's ID.
       */
      id: z.number().optional(),
    })
    .optional(),

  /**
   * Details about the race event.
   */
  event: z
    .object({
      /**
       * Name of the event.
       */
      name: z.string().optional(),

      /**
       * Distance of the race.
       */
      distance: z.string().optional(),

      /**
       * Date of the race.
       */
      date: z.date().optional(),

      /**
       * Location of the race.
       */
      location: Location.optional(),
    })
    .optional(),

  /**
   * Results of the race.
   */
  result: z
    .object({
      /**
       * Pace of the runner.
       */
      pace: z.string().optional(),

      /**
       * Finish time of the runner.
       */
      time: z.string().optional(),
    })
    .optional(),
});

/**
 * Schema for an array of road races.
 */
export const Races = z.array(Race);

export type RaceType = z.infer<typeof Race>;
export type RacesType = z.infer<typeof Races>;
