import type { NextPage } from "next";
import { Heading, Text } from "@chakra-ui/react";
import { wrapper } from "../../redux/store";

const AddNewTrackPage: NextPage = () => {
  return (
    <>
      <Heading as="h1" size="lg" textAlign="center">
        Add new track
      </Heading>
      <Text textAlign="center">
        (this page will be shown and accessible only to logged in users)
      </Text>
    </>
  );
};

export default AddNewTrackPage;
