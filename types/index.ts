export interface Resource {
  id: string;
  name: string;
}

export interface Event {
  id: string;
  resourceId: string;
  start: Date;
  end: Date;
  duration: number;
}

export interface Day {
  date: Date;
  events: Event[];
}

export interface Calendar {
  days: Day[];
  resources: Resource[];
}