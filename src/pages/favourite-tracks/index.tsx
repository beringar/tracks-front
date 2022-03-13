import type { NextPage } from "next";
import { Heading, Container, Text } from "@chakra-ui/react";

const MyFavouriteTracksPage: NextPage = () => {
  return (
    <>
      <Heading as="h1" size="lg" textAlign="center">
        My favourite tracks
      </Heading>
      <Text textAlign="center">
        (will be shown and accessible only to logged in users)
      </Text>
    </>
  );
};

export default MyFavouriteTracksPage;
