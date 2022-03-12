import type { NextPage } from "next";
import Image from "next/image";
import {
  Heading,
  Container,
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ITrack } from "../types/ITrack";
import { useDispatch, useSelector } from "react-redux";
import TRootState from "../types/TRootState";
import { loadAllTracks } from "../redux/thunks/tracksThunks";

const Home: NextPage = () => {
  const tracks: ITrack[] = useSelector<TRootState, any>(
    (state) => state.tracks
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllTracks);
  }, [dispatch]);

  const bgCard = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700", "white");

  return (
    <Container maxW="container.lg" pt={4} mb="100px">
      <Heading as="h2" size="md" textAlign="center">
        de moment és read CSR...
      </Heading>
      {!tracks.length && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      <SimpleGrid minChildWidth="300px" spacing="15px" alignItems="start">
        {tracks.map((track: ITrack) => (
          <Center key={track.id}>
            <Box
              maxW={"445px"}
              w={"full"}
              bg={bgCard}
              boxShadow={"2xl"}
              rounded={"xl"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image src={track.image} alt={"gasimba"} layout={"fill"} />
              </Box>
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {track.difficulty}
                </Text>
                <Heading
                  color={headingColor}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  {track.name}
                </Heading>
                <Text color={"gray.500"}>{track.description}</Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar bg="green.500" name={"Beren"} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>Beren</Text>
                  <Text color={"gray.500"}>March 2022</Text>
                </Stack>
              </Stack>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
