import type { Location } from "./common";

export type Races = Race[];

export interface Race {
  id: string;
  basics?: Basics;
  event?: Event;
  result?: Result;
}

interface Basics {
  bib?: number;
  id?: number;
}

interface Event {
  name?: string;
  distance?: string;
  date?: Date;
  location?: Location;
}

interface Result {
  pace?: string;
  time?: string;
}
