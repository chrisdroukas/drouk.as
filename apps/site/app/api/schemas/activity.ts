import { z } from "zod";

/**
 * A roll-up of metrics pertaining to a set of
 * activities. Values are in seconds and meters.
 *
 * @see https://developers.strava.com/docs/reference/#api-models-ActivityTotal
 */
export const ActivityTotal = z.object({
  /**
   * The number of activities considered in this total.
   */
  count: z.number().nullable().optional(),

  /**
   * The total distance covered by the considered activities.
   */
  distance: z.number().nullable().optional(),

  /**
   * The total moving time of the considered activities.
   */
  moving_time: z.number().nullable().optional(),

  /**
   * The total elapsed time of the considered activities.
   */
  elapsed_time: z.number().nullable().optional(),

  /**
   * The total elevation gain of the considered activities.
   */
  elevation_gain: z.number().nullable().optional(),

  /**
   * The total number of achievements of the considered activities.
   */
  achievement_count: z.number().nullable().optional(),
});

/**
 * A set of rolled-up statistics and totals for an athlete.
 *
 * @see https://developers.strava.com/docs/reference/#api-models-ActivityStats
 */
export const ActivityStats = z.object({
  /**
   * The longest distance ridden by the athlete.
   */
  biggest_ride_distance: z.number().nullable().optional(),

  /**
   * The highest climb ridden by the athlete.
   */
  biggest_climb_elevation_gain: z.number().nullable().optional(),

  /**
   * The recent (last 4 weeks) ride stats for the athlete.
   */
  recent_ride_totals: ActivityTotal.optional(),

  /**
   * The recent (last 4 weeks) run stats for the athlete.
   */
  recent_run_totals: ActivityTotal.optional(),

  /**
   * The recent (last 4 weeks) swim stats for the athlete.
   */
  recent_swim_totals: ActivityTotal.optional(),

  /**
   * The year to date ride stats for the athlete.
   */
  ytd_ride_totals: ActivityTotal.optional(),

  /**
   * The year to date run stats for the athlete.
   */
  ytd_run_totals: ActivityTotal.optional(),

  /**
   * The year to date swim stats for the athlete.
   */
  ytd_swim_totals: ActivityTotal.optional(),

  /**
   * The all time ride stats for the athlete.
   */
  all_ride_totals: ActivityTotal.optional(),

  /**
   * The all time run stats for the athlete.
   */
  all_run_totals: ActivityTotal.optional(),

  /**
   * The all time swim stats for the athlete.
   */
  all_swim_totals: ActivityTotal.optional(),
});

export type ActivityTotalType = z.infer<typeof ActivityTotal>;
export type ActivityStatsType = z.infer<typeof ActivityStats>;
