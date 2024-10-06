import { ResumeType, WorkType } from "#/app/api/schemas/resume";

const work: WorkType[] = [
  {
    id: "0",
    name: "Washington Post Labs",
    description:
      "Washington Post Labs was an experimental media group focused on personalized news and information.",
    position: "Product Designer",
    url: "https://wapo.st",
    startDate: new Date(2012, 4, 1),
    endDate: new Date(2014, 0, 1),
    location: {
      city: "Washington",
      region: "District of Columbia",
      countryCode: "US",
    },
    summary:
      "Designed Washington Post Social Reader — the first frictionless social reader application on Facebook — scaling to a peak MAU of 17 million.",
    highlights: [
      "Transitioned Social Reader from a Facebook application to an independent web app, improving user retention.",
      "Designed engaging experiences like newsfeed customization, sharing tools, and contextual topic recommendations.",
      "Modernized iOS application to introduce support for iPad.",
    ],
  },
  {
    id: "1",
    name: "Trove News",
    description:
      "Trove News was a social news aggregation service originating from Washington Post Labs technology.",
    position: "Product Designer",
    url: "https://en.wikipedia.org/wiki/Trove_(app)",
    startDate: new Date(2014, 0, 1),
    endDate: new Date(2015, 10, 1),
    location: {
      city: "Washington",
      region: "District of Columbia",
      countryCode: "US",
    },
    summary:
      "Led interface design, user experience, research and testing for Trove's iOS, Apple Watch and web applications. Focused on deliberate, scalable information architecture, maximizing user retention and streamlining new user acquisition.",
    highlights: [
      "Designed end-to-end experience for user-curated newsfeeds.",
      "Designed engaging experiences like newsfeed customization, sharing tools, and contextual topic recommendations.",
      "Modernized iOS application to introduce support for iPad.",
    ],
  },
  {
    id: "2",
    name: "SocialCode",
    description:
      "SocialCode was a multiplatform performance advertisement management, analytics, and reporting service.",
    position: "Product Designer",
    url: "https://socialcode.com",
    startDate: new Date(2015, 10, 1),
    endDate: new Date(2017, 2, 1),
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
    url: "https://priceline.com",
    startDate: new Date(2017, 2, 1),
    endDate: new Date(2019, 0, 1),
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
    url: "https://marquee.gs.com",
    startDate: new Date(2019, 0, 1),
    endDate: new Date(2019, 11, 1),
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
    url: "https://developer.gs.com",
    startDate: new Date(2019, 11, 1),
    location: {
      city: "New York",
      region: "New York",
      countryCode: "US",
    },
  },
];

export const data: ResumeType = {
  basics: {
    name: "Chris Droukas",
    label: "Product Engineer",
    email: "chris@drouk.as",
    url: "https://drouk.as",
    summary:
      "Chris Droukas is a product engineer in New York, designing at Goldman Sachs for Goldman Sachs Developer and Marquee. Previously: Priceline, SocialCode, and Washington Post Labs.",
    location: {
      city: "New York",
      region: "New York",
      countryCode: "US",
    },
    profiles: [
      {
        network: "LinkedIn",
        username: "chrisdroukas",
        url: "https://linkedin.com/in/chrisdroukas",
      },
      {
        network: "GitHub",
        username: "chrisdroukas",
        url: "https://github.com/chrisdroukas",
      },
      {
        network: "Stack Overflow",
        username: "chris-droukas",
        url: "https://stackoverflow.com/users/1313761/chris-droukas",
      },
    ],
  },
  work,
  education: [
    {
      name: "American University",
      area: "Public Communication",
      studyType: "Bachelor of Arts",
      url: "https://american.edu",
      startDate: new Date(2008, 7, 1),
      endDate: new Date(2012, 4, 1),
      location: {
        city: "Washington",
        region: "District of Columbia",
        countryCode: "US",
      },
    },
  ],
};
