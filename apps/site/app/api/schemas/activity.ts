/**
 * A set of rolled-up statistics and totals for an athlete.
 *
 * @see https://developers.strava.com/docs/reference/#api-models-ActivityStats
 */
export interface ActivityStats {
  /**
   * The longest distance ridden by the athlete.
   */
  biggest_ride_distance?: number;

  /**
   * The highest climb ridden by the athlete.
   */
  biggest_climb_elevation_gain?: number;

  /**
   * The recent (last 4 weeks) ride stats for the athlete.
   */
  recent_ride_totals?: ActivityTotal;

  /**
   * The recent (last 4 weeks) run stats for the athlete.
   */
  recent_run_totals?: ActivityTotal;

  /**
   * The recent (last 4 weeks) swim stats for the athlete.
   */
  recent_swim_totals?: ActivityTotal;

  /**
   * The year to date ride stats for the athlete.
   */
  ytd_ride_totals?: ActivityTotal;

  /**
   * The year to date run stats for the athlete.
   */
  ytd_run_totals?: ActivityTotal;

  /**
   * The year to date swim stats for the athlete.
   */
  ytd_swim_totals?: ActivityTotal;

  /**
   * The all time ride stats for the athlete.
   */
  all_ride_totals?: ActivityTotal;

  /**
   * The all time run stats for the athlete.
   */
  all_run_totals?: ActivityTotal;

  /**
   * The all time swim stats for the athlete.
   */
  all_swim_totals?: ActivityTotal;
}

/**
 * A roll-up of metrics pertaining to a set of
 * activities. Values are in seconds and meters.
 *
 * @see https://developers.strava.com/docs/reference/#api-models-ActivityTotal
 */
interface ActivityTotal {
  /**
   * The number of activities considered in this total.
   */
  count?: number;

  /**
   * The total distance covered by the considered activities.
   */
  distance?: number;

  /**
   * The total moving time of the considered activities.
   */
  moving_time?: number;

  /**
   * The total elapsed time of the considered activities.
   */
  elapsed_time?: number;

  /**
   * The total elevation gain of the considered activities.
   */
  elevation_gain?: number;

  /**
   * The total number of achievements of the considered activities.
   */
  achievement_count?: number;
}
