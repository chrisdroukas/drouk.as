import type { NextApiRequest, NextApiResponse } from "next";

type Resume = {
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

/**
 * A physical address.
 */
interface Location {
  address?: string;

  postalCode?: string;
  city?: string;

  region?: string;

  countryCode?: string;
}

interface Work extends Occupation {
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

const Resume = (req: NextApiRequest, res: NextApiResponse<Resume>) => {
  res.status(200).json({
    basics: {
      name: "Chris Droukas",
      label: "Design Technologist",
      email: "chris@drouk.as",
      url: new URL("https://drouk.as"),
      summary:
        "Chris Droukas is a design technologist in New York, designing at Goldman Sachs for Goldman Sachs Developer and Marquee. Previously: Priceline, SocialCode, and Washington Post Labs.",
      location: {
        city: "New York",
        region: "New York",
        countryCode: "US",
      },
      profiles: [
        {
          network: "LinkedIn",
          username: "chrisdroukas",
          url: new URL("https://linkedin.com/in/chrisdroukas"),
        },
        {
          network: "GitHub",
          username: "chrisdroukas",
          url: new URL("https://github.com/chrisdroukas"),
        },
        {
          network: "Stack Overflow",
          username: "chris-droukas",
          url: new URL("https://stackoverflow.com/users/1313761/chris-droukas"),
        },
      ],
    },
    work: [
      {
        name: "Goldman Sachs",
        description:
          "Goldman Sachs Developer is a financial technology platform.",
        position: "Vice President, Product Design",
        url: new URL("https://developer.gs.com"),
        startDate: new Date("December 2019"),
        location: {
          city: "New York",
          region: "New York",
          countryCode: "US",
        },
      },
      {
        name: "Goldman Sachs",
        description:
          "Goldman Sachs Marquee is an integrated storefront for institutional client services.",
        position: "Product Designer",
        url: new URL("https://marquee.gs.com"),
        startDate: new Date("January 2019"),
        endDate: new Date("December 2019"),
        location: {
          city: "New York",
          region: "New York",
          countryCode: "US",
        },
      },
      {
        name: "Priceline",
        description:
          "Priceline is an online travel agency specializing in discount rates for hotels, airfare, and car rentals.",
        position: "Design Lead",
        url: new URL("https://priceline.com"),
        startDate: new Date("April 2017"),
        endDate: new Date("January 2019"),
        location: {
          city: "New York",
          region: "New York",
          countryCode: "US",
        },
      },
      {
        name: "SocialCode",
        description:
          "SocialCode was a multiplatform performance advertisement management, analytics, and reporting service.",
        position: "Product Designer",
        url: new URL("https://socialcode.com"),
        startDate: new Date("November 2015"),
        endDate: new Date("March 2017"),
        location: {
          city: "Washington",
          region: "District of Columbia",
          countryCode: "US",
        },
      },
      {
        name: "Trove News",
        description:
          "Trove News was a social news aggregation service originating from Washington Post Labs technology.",
        position: "Product Designer",
        url: new URL("https://en.wikipedia.org/wiki/Trove_(app)"),
        startDate: new Date("January 2014"),
        endDate: new Date("November 2015"),
        location: {
          city: "Washington",
          region: "District of Columbia",
          countryCode: "US",
        },
      },
      {
        name: "Washington Post Labs",
        description:
          "Washington Post Labs was an experimental media group focused on personalized news and information.",
        position: "Product Designer",
        url: new URL("https://wapo.st"),
        startDate: new Date("May 2012"),
        endDate: new Date("January 2014"),
        location: {
          city: "Washington",
          region: "District of Columbia",
          countryCode: "US",
        },
      },
    ],
    education: [
      {
        name: "American University",
        area: "Public Communication",
        studyType: "Bachelor of Arts",
        url: new URL("https://american.edu"),
        startDate: new Date("August 2008"),
        endDate: new Date("May 2012"),
        location: {
          city: "Washington",
          region: "District of Columbia",
          countryCode: "US",
        },
      },
    ],
  });
};

export default Resume;
