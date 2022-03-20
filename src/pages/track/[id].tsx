import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";
import TrackCard from "../../components/TrackCard/TrackCard";
import { Track } from "../../types/Track";
import { useSelector } from "react-redux";
import { RootState, wrapper } from "../../redux/store";
import { GetStaticPaths, GetStaticProps } from "next";
import { loadTrackThunk } from "../../redux/thunks/tracksThunks";

const TrackItemPage = (): JSX.Element => {
  const router = useRouter();
  const track: Track = useSelector((state: RootState) => state.track);

  if (router.isFallback) {
    return <Text>Loading....</Text>;
  }
  return <TrackCard track={track} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks`
  );
  const { tracks } = await response.json();

  return {
    paths: tracks.map((track) => ({ params: { id: `${track.id}` } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const id = context.params?.id;
    await store.dispatch<any>(loadTrackThunk(id as string));
    return {
      props: { id },
      revalidate: 20,
    };
  }
);

export default TrackItemPage;
