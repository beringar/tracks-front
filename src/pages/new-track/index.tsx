import type { NextPage } from "next";
import { Heading, Container } from "@chakra-ui/react";

const AddNewTrackPage: NextPage = () => {
  return (
    <Container maxW="container.lg" py={4}>
      <Heading as="h1" size="lg" textAlign="center">
        Add new track page (will be shown and accessible only to logged in
        users)
      </Heading>
    </Container>
  );
};

export default AddNewTrackPage;
