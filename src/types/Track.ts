export interface Track {
  name: string;
  refuge: string;
  difficulty: string;
  kids: boolean;
  seasons: string[];
  description: string;
  image: string;
  gpx: string;
  id: string;
  user: TrackUser;
  createdAt: string;
  updatedAt: string;
}

export interface TrackUser {
  username: string;
  id: string;
}
