import { ITrack } from "./ITrack";

export interface IActionGetAllTracks {
  type: string;
  payload: ITrack[] | undefined;
}
