import Image from "next/image";
import {
  Text,
  Box,
  useColorModeValue,
  Stack,
  Heading,
  chakra,
  HStack,
  Icon,
} from "@chakra-ui/react";
import TimeAgo from "timeago-react";
import { Track } from "../../types/Track";
import LowDifficulty from "../../../public/img/low-difficulty.svg";
import NormalDifficulty from "../../../public/img/normal-difficulty.svg";
import HighDifficulty from "../../../public/img/high-difficulty.svg";
import KidsFriendly from "../../../public/img/kids-friendly.svg";
import {
  FaLeaf,
  FaSun,
  FaCanadianMapleLeaf,
  FaSnowflake,
} from "react-icons/fa";

interface TrackCardProps {
  track: Track;
}

const TrackItem = ({
  track: {
    id,
    image,
    name,
    difficulty,
    kids,
    refuge,
    updatedAt,
    user,
    seasons,
    description,
  },
}: TrackCardProps): JSX.Element => {
  const headingColor = useColorModeValue("gray.700", "white");

  return (
    <>
      <Box
        h={["160px", "300px"]}
        bg={"gray.100"}
        mb={3}
        pos={"relative"}
        mx={-4}
        mt={-4}
        borderBottomRadius="md"
      >
        <Image
          src={image}
          alt={name}
          objectFit={"cover"}
          layout="fill"
          sizes="320 640 750 1024"
          priority
        />
      </Box>
      <Box px={[0, 3]}>
        <Heading
          as="h1"
          color={headingColor}
          fontSize={["2xl", "4xl"]}
          fontWeight={600}
          my={2}
        >
          {name}
        </Heading>
        <Text>
          Refuge of departure:{" "}
          <chakra.span
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"md"}
          >
            {refuge}
          </chakra.span>
        </Text>
        <Stack direction={["column", "row"]}>
          <HStack alignItems={"baseline"} gap="8px">
            <Text>
              Track difficulty:{" "}
              <chakra.span fontWeight={"bold"}>{difficulty}</chakra.span>
            </Text>
            {difficulty === "low" && (
              <Image
                src={LowDifficulty.src}
                width="53"
                height="35"
                layout="fixed"
                alt="low difficulty track"
              />
            )}
            {difficulty === "normal" && (
              <Image
                src={NormalDifficulty.src}
                width="53"
                height="35"
                layout="fixed"
                alt="normal difficulty track"
              />
            )}
            {difficulty === "high" && (
              <Image
                src={HighDifficulty.src}
                width="53"
                height="35"
                layout="fixed"
                alt="high difficulty track"
              />
            )}
          </HStack>
          {kids && (
            <HStack alignItems={"baseline"} gap="8px">
              <Text>Suitable for children</Text>
              <Image
                src={KidsFriendly.src}
                width="53"
                height="35"
                layout="fixed"
                alt="kids friendly track"
              />
            </HStack>
          )}
        </Stack>
        <HStack wrap={"wrap"} mt={3} mb={5}>
          <Text>Recommended seasons:</Text>
          <HStack wrap={"wrap"}>
            {seasons.includes("spring") && (
              <>
                <Icon as={FaLeaf} w={7} h={7} color="#32CD32" />
                <Text fontSize={"sm"}>spring</Text>
              </>
            )}
            {seasons.includes("summer") && (
              <>
                <Icon as={FaSun} w={7} h={7} color="#FFD700" />
                <Text fontSize={"sm"}>summer</Text>
              </>
            )}
            {seasons.includes("autumn") && (
              <>
                <Icon as={FaCanadianMapleLeaf} w={7} h={7} color="#9d4e15" />
                <Text fontSize={"sm"}>autumn</Text>
              </>
            )}
            {seasons.includes("winter") && (
              <>
                <Icon as={FaSnowflake} w={7} h={7} color="#33ccff" />
                <Text fontSize={"sm"}>winter</Text>
              </>
            )}
          </HStack>
        </HStack>
        <Text>{description}</Text>
        <HStack wrap={"wrap"} fontSize={"sm"}>
          <Text my={3}>
            track created by{" "}
            <chakra.span fontWeight={600}>{user.username}</chakra.span>
          </Text>
          <Text color={"gray.500"}>
            <TimeAgo datetime={updatedAt} />
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default TrackItem;
