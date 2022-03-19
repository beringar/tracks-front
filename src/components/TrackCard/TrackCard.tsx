import {
  Text,
  Box,
  Center,
  useColorModeValue,
  Stack,
  Heading,
  Avatar,
  Image,
} from "@chakra-ui/react";
import TimeAgo from "timeago-react";
import { Track } from "../../types/Track";

interface TrackCardProps {
  track: Track;
}

const TrackCard = ({
  track: { id, image, name, description, createdAt },
}: TrackCardProps): JSX.Element => {
  const bgCard = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700", "white");

  return (
    <Center as="li" key={id}>
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
          <Image
            src={image}
            alt={"gasimba"}
            objectFit={"cover"}
            h={"210px"}
            w={"full"}
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            <TimeAgo datetime={createdAt} />
          </Text>
          <Heading color={headingColor} fontSize={"2xl"} fontFamily={"body"}>
            {name}
          </Heading>
          <Text color={"gray.500"}>{description}</Text>
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
  );
};

export default TrackCard;
