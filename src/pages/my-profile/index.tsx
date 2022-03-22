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
import NextLink from "next/link";

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
      title: "LOGOUT succesful!",
      description: `Come back soon ${name}!`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    router.push("/home");
  };

  const userTracks = tracks
    .filter(({ user: { id } }) => id === user.id)
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
      {userTracks.length === 0 && (
        <VStack>
          <Text>You have no tracks yet!</Text>
          <NextLink href="/new-track" passHref>
            <Button variant="outline">Click here to add a new track!</Button>
          </NextLink>
        </VStack>
      )}
      <MyTracksList tracks={userTracks} />
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
