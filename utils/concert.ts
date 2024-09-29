export interface Url {
  target: string | undefined;
  kind: "Tickets Unavailable" | "Tickets" | "Video";
}

export interface Concert {
  date: string;
  location: string;
  image: string;
  url?: Url;
}
