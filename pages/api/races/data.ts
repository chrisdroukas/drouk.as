import { Races } from "../schemas/races";

export const data: Races = [
  {
    id: "0",
    basics: {
      bib: 3597,
    },
    event: {
      name: "2022 Gridiron 4M presented by The FLAG Art Foundation",
      distance: "4 miles",
      date: new Date("2022-02-13T09:00:00"),
      location: {
        address: "Central Park",
        city: "New York",
        region: "New York",
        countryCode: "US",
      },
    },
    result: {
      pace: "08:26",
      time: "0:33:41",
    },
  },
  {
    id: "1",
    event: {
      name: "NYRR Al Gordon 4M",
      distance: "4 miles",
      date: new Date("2022-02-26T08:00:00"),
      location: {
        address: "Prospect Park",
        city: "Brooklyn",
        region: "New York",
        countryCode: "US",
      },
    },
  },
  {
    id: "2",
    event: {
      name: "NYRR Washington Heights Salsa, Blues, and Shamrocks 5K",
      distance: "5 kilometers",
      date: new Date("2022-03-06T09:00:00"),
      location: {
        address: "Washington Heights",
        city: "New York",
        region: "New York",
        countryCode: "US",
      },
    },
  },
  {
    id: "3",
    event: {
      name: "Run as One 4M Presented by JPMorgan Chase",
      distance: "4 miles",
      date: new Date("2022-04-03T08:30:00"),
      location: {
        address: "Central Park",
        city: "New York",
        region: "New York",
        countryCode: "US",
      },
    },
  },
  {
    id: "4",
    event: {
      name: "NYCRUNS Brooklyn Half Marathon",
      distance: "13.1 miles",
      date: new Date("2022-04-24T08:30:00"),
      location: {
        address: "McCarren Park",
        city: "Brooklyn",
        region: "New York",
        countryCode: "US",
      },
    },
  },
  {
    id: "5",
    event: {
      name: "RBC Brooklyn Half",
      distance: "13.1 miles",
      date: new Date("2022-05-21T07:00:00"),
      location: {
        address: "Prospect Park",
        city: "Brooklyn",
        region: "New York",
        countryCode: "US",
      },
    },
  },
];
