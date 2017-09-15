export interface Event {
  $key?: string;
  hostName?: string;
  hostId?: string;
  eventName?: string;
  eventId?: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  eventDate?: string;
  startTime?: string;
  endTime?: string;
  applicants?: object;
}
