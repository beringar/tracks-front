import type { NextPage } from "next";
import { Heading, Container, Text } from "@chakra-ui/react";

const MyFavouriteTracksPage: NextPage = () => {
  return (
    <Container maxW="container.lg" py={4}>
      <Heading as="h1" size="lg" textAlign="center">
        My favourite tracks
      </Heading>
      <Text>(will be shown and accessible only to logged in users)</Text>
    </Container>
  );
};

export default MyFavouriteTracksPage;
