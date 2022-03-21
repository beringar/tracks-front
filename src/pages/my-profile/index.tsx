import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootState, wrapper } from "../../redux/store";
import {
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import MyTracksList from "../../components/MyTracksList/MyTracksList";
import { Track } from "../../types/Track";
import { loadAllTracksThunk } from "../../redux/thunks/tracksThunks";
import { useRouter } from "next/router";
import { setUserAction } from "../../redux/actions/userActionCreator/userActionCreator";

const MyProfilePage: NextPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();
  const tracks: Track[] = useSelector((state: RootState) => state.tracks);
  const user = useSelector((state: RootState) => state.user);

  const logout = () => {
    const name = user.name;
    localStorage.removeItem("userToken");
    dispatch(setUserAction({}));
    toast({
      title: "LOGOUT succesfully!",
      description: `Come back soon ${name}!`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    router.push("/home");
  };

  const sortedTracks = tracks
    .slice()
    .sort(
      (a: Track, b: Track) => +new Date(b.createdAt) - +new Date(a.createdAt)
    );

  return (
    <Container
      w={"full"}
      maxW="3xl"
      centerContent
      m={"0 auto"}
      p={0}
      alignItems="stretch"
    >
      <Heading as="h1" size="md" mb={3} textAlign={"center"}>
        My profile
      </Heading>
      <VStack spacing="10px">
        <Text>name: {user.name}</Text>
        <Text>username: {user.username}</Text>
        <Button borderRadius="md" colorScheme="yellow" onClick={logout}>
          Logout
        </Button>
      </VStack>
      <Divider my={4} />
      <Heading as="h1" size="md" mb={3} textAlign={"center"}>
        My Tracks
      </Heading>
      <MyTracksList tracks={sortedTracks} />
    </Container>
  );
};

export default MyProfilePage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await loadAllTracksThunk(store.dispatch);

    return {
      props: {},
    };
  }
);
