import dynamic from "next/dynamic";
import { useMemo } from "react";
import TrackDetail from "../../components/TrackDetail/TrackDetail";
import { Track } from "../../types/Track";
import { useSelector } from "react-redux";
import { RootState, wrapper } from "../../redux/store";
import { GetStaticPaths, GetStaticProps } from "next";
import { loadTrackThunk } from "../../redux/thunks/tracksThunks";
import { Button, Center, Heading, Spinner, VStack } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

const TrackItemPage = (): JSX.Element => {
  const track: Track = useSelector((state: RootState) => state.track);
  const MapComponentNoSSR = useMemo(
    () =>
      dynamic(() => import("../../components/MapComponent/MapComponent"), {
        loading: () => (
          <VStack my={6} spacing="18px">
            <Spinner size="xl" />
            <Heading textAlign={"center"}>Track map is loading...</Heading>
          </VStack>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <>
      <TrackDetail track={track} />
      <MapComponentNoSSR gpxUrl={track.gpx} />
      <Center my={4}>
        <a download href={track.gpx}>
          <Button
            leftIcon={<FiDownload />}
            borderRadius="md"
            colorScheme="green"
          >
            Download track
          </Button>
        </a>
      </Center>
    </>
  );
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
