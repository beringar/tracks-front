import {
  Text,
  Box,
  Center,
  useColorModeValue,
  Stack,
  Heading,
  Avatar,
  Image,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import TimeAgo from "timeago-react";
import { Track } from "../../types/Track";
import { FiEye } from "react-icons/fi";
import { useRouter } from "next/router";
import TrackBadges from "../TrackBadges/TrackBadges";

interface TrackCardProps {
  track: Track;
}

const TrackCard = ({
  track: { id, image, name, difficulty, kids, refuge, updatedAt, user },
}: TrackCardProps): JSX.Element => {
  const router = useRouter();
  const bgCard = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700", "white");
  const viewIconColor = useColorModeValue("green", "lightgreen");

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
            {refuge}
          </Text>
          <Heading
            color={headingColor}
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
          >
            {name}
          </Heading>
          <TrackBadges difficulty={difficulty} kids={kids} />
        </Stack>
        <Flex mt={6} justify="space-between" align="center">
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{user.username}</Text>
            <Text color={"gray.500"}>
              <TimeAgo datetime={updatedAt} />
            </Text>
          </Stack>
          <IconButton
            color={viewIconColor}
            variant="ghost"
            size="lg"
            aria-label="View Track"
            icon={<FiEye />}
            onClick={(event: React.MouseEvent) => {
              router.push(`/track/${id}`);
            }}
          />
        </Flex>
      </Box>
    </Center>
  );
};

export default TrackCard;
