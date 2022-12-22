import { Track } from "../../types/Track";
import { useSelector } from "react-redux";
import { RootState, wrapper } from "../../redux/store";
import { loadTrackThunk } from "../../redux/thunks/tracksThunks";
import TrackEditForm from "../../components/TrackEditForm/TrackEditForm";
import { Container, Heading } from "@chakra-ui/react";

const EditTrackPage = (): JSX.Element => {
  const track: Track = useSelector((state: RootState) => state.track);

  return (
    <Container
      w={"full"}
      maxW="3xl"
      centerContent
      m={"0 auto"}
      p={0}
      alignItems="stretch"
    >
      <Heading as="h1" size="lg" mb={3}>
        Update track
      </Heading>
      <TrackEditForm track={track} />
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = context.params?.id;
    await store.dispatch<any>(loadTrackThunk(id as string));

    return {
      props: {},
    };
  }
);

export default EditTrackPage;
