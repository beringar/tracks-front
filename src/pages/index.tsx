import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAllTracks, tracksSelector } from "../features/tracks";
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
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Track } from "../types/Track";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(tracksSelector);

  useEffect(() => {
    (async () => {
      dispatch(getAllTracks());
    })();
  }, [dispatch]);

  const bgCard = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700", "white");

  return (
    <Container maxW="container.lg">
      <Heading as="h2" size="md">
        de moment és read CSR...
      </Heading>
      <SimpleGrid minChildWidth="300px" spacing="15px">
        {data.tracks.map((track: Track) => (
          <Center key={track.id} py={6}>
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
