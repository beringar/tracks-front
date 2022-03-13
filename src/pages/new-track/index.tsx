import type { NextPage } from "next";
import { Heading, Container, Text } from "@chakra-ui/react";

const AddNewTrackPage: NextPage = () => {
  return (
    <Container maxW="container.lg" py={4}>
      <Heading as="h1" size="lg" textAlign="center">
        Add new track
      </Heading>
      <Text>
        (this page will be shown and accessible only to logged in users)
      </Text>
    </Container>
  );
};

export default AddNewTrackPage;
