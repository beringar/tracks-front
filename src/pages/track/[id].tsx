import TrackCard from "../../components/TrackCard/TrackCard";
import { Track } from "../../types/Track";
import { useSelector } from "react-redux";
import { RootState, wrapper } from "../../redux/store";
import { GetStaticPaths, GetStaticProps } from "next";
import { loadTrackThunk } from "../../redux/thunks/tracksThunks";

const TrackItemPage = (): JSX.Element => {
  const track: Track = useSelector((state: RootState) => state.track);

  return <TrackCard track={track} />;
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const id = context.params?.id;
    await store.dispatch<any>(loadTrackThunk(id as string));
    return {
      props: {},
      revalidate: 20,
    };
  }
);

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks`
  );
  const { tracks } = await response.json();

  return {
    paths: tracks.map((track) => ({ params: { id: `${track.id}` } })),
    fallback: "blocking",
  };
};

export default TrackItemPage;