import { Track } from "./Track";

export interface Action {
  type: string;
}

export interface ILoadAllTracksAction extends Action {
  tracks: Track[];
}

export interface IUpdateTracksAction extends Action {
  track: Track;
}
