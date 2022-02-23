import { Resume, Work } from "../schemas/resume";

const work: Work[] = [
  {
    id: "0",
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
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
    name: "Goldman Sachs",
    description: "Goldman Sachs Developer is a financial technology platform.",
    position: "Vice President, Product Design",
    url: new URL("https://developer.gs.com"),
    startDate: new Date("December 2019"),
    location: {
      city: "New York",
      region: "New York",
      countryCode: "US",
    },
  },
];

export const data: Resume = {
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
  work,
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
};
