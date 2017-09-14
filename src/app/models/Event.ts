export interface Event {
  $key?: string;
  host_name?: string;
  host_id?: string;
  event_name?: string;
  event_id?: string;
  street_address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  date?: string;
  start_time?: string;
  end_time?: string;
  applicants?: object;
}
