import type { NextPage } from "next";
import Image from "next/image";
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Spinner,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Track } from "../../types/Track";
import { useDispatch, useSelector } from "react-redux";
import TRootState from "../../types/TRootState";
import { loadAllTracksThunk } from "../../redux/thunks/tracksThunks";

const HomePage: NextPage = () => {
  const tracks: Track[] = useSelector<TRootState, any>((state) => state.tracks);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(loadAllTracksThunk(toast));
  }, [dispatch, toast]);

  const bgCard = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700", "white");

  return (
    <>
      {!tracks.length && (
        <Flex direction="column" align="center" justify="center">
          <Heading as="h2" size="lg" textAlign="center" p={4}>
            Loading tracks...
          </Heading>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.500"
            boxSize={24}
          />
        </Flex>
      )}
      <SimpleGrid
        as="ul"
        minChildWidth="300px"
        spacing="15px"
        alignItems="start"
      >
        {tracks.map((track: Track) => (
          <Center as="li" key={track.id}>
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
    </>
  );
};

export default HomePage;
