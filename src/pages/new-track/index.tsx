import type { NextPage } from "next";
import { Heading, Text } from "@chakra-ui/react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const AddNewTrackPage: NextPage = (): JSX.Element => {
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
