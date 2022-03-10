import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTracks = createAsyncThunk(
  "tracks/getAllTracks",
  async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks`
    );

    return response.data;
  }
);
