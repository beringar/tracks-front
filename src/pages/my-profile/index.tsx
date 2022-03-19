import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState, wrapper } from "../../redux/store";
import { Heading } from "@chakra-ui/react";
import MyTracksList from "../../components/MyTracksList/MyTracksList";
import { Track } from "../../types/Track";
import { loadAllTracksThunk } from "../../redux/thunks/tracksThunks";

const MyProfilePage: NextPage = (): JSX.Element => {
  const tracks: Track[] = useSelector((state: RootState) => state.tracks);

  const sortedTracks = tracks
    .slice()
    .sort(
      (a: Track, b: Track) => +new Date(b.createdAt) - +new Date(a.createdAt)
    );

  return (
    <>
      <Heading as="h1" size="md" mb={3}>
        My Tracks
      </Heading>
      <MyTracksList tracks={sortedTracks} />
    </>
  );
};

export default MyProfilePage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await loadAllTracksThunk(store.dispatch);

    return {
      props: {},
    };
  }
);
