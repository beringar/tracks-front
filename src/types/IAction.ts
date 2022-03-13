import { ITrack } from "./ITrack";

export interface Action {
  type: string;
}

export interface ILoadAllTracksAction extends Action {
  tracks: ITrack[];
}
