import type { NextPage } from "next";
import { Container, Heading } from "@chakra-ui/react";
import TrackForm from "../../components/TrackForm/TrackForm";

const AddNewTrackPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Container
        w={"full"}
        maxW="3xl"
        centerContent
        m={"0 auto"}
        p={0}
        alignItems="stretch"
      >
        <Heading as="h1" size="lg" mb={3}>
          Add new track
        </Heading>
        <TrackForm />
      </Container>
    </>
  );
};

export default AddNewTrackPage;
