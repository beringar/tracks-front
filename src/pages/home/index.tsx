import type { NextPage } from "next";
import { SimpleGrid } from "@chakra-ui/react";
import { Track } from "../../types/Track";
import { useSelector } from "react-redux";
import { RootState, wrapper } from "../../redux/store";
import { loadAllTracksThunk } from "../../redux/thunks/tracksThunks";
import TrackCard from "../../components/TrackCard/TrackCard";

const HomePage: NextPage = (): JSX.Element => {
  const tracks: Track[] = useSelector((state: RootState) => state.tracks);

  const sortedTracks = tracks
    .slice()
    .sort(
      (a: Track, b: Track) => +new Date(b.createdAt) - +new Date(a.createdAt)
    );

  return (
    <>
      <SimpleGrid
        as="ul"
        minChildWidth="300px"
        spacing="15px"
        alignItems="start"
      >
        {sortedTracks.map((track: Track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default HomePage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await loadAllTracksThunk(store.dispatch);

    return {
      props: {},
    };
  }
);
