import Image from "next/image";
import { HStack } from "@chakra-ui/react";
import LowDifficulty from "../../../public/img/low-difficulty.svg";
import NormalDifficulty from "../../../public/img/normal-difficulty.svg";
import HighDifficulty from "../../../public/img/high-difficulty.svg";
import KidsFriendly from "../../../public/img/kids-friendly.svg";

interface TrackBadgesProps {
  difficulty: string;
  kids: boolean;
}

const getDifficultyBadge = (difficulty: string): JSX.Element => {
  switch (difficulty) {
    case "low":
      return (
        <Image
          src={LowDifficulty.src}
          width="53"
          height="35"
          layout="fixed"
          alt="low difficulty track"
        />
      );
    case "high":
      return (
        <Image
          src={HighDifficulty.src}
          width="53"
          height="35"
          layout="fixed"
          alt="high difficulty track"
        />
      );
    case "normal":
    default:
      return (
        <Image
          src={NormalDifficulty.src}
          width="53"
          height="35"
          layout="fixed"
          alt="normal difficulty track"
        />
      );
  }
};

const TrackBadges = ({ difficulty, kids }: TrackBadgesProps): JSX.Element => {
  return (
    <HStack gap="10px">
      {getDifficultyBadge(difficulty)}
      {kids && (
        <Image
          src={KidsFriendly.src}
          width="53"
          height="35"
          layout="fixed"
          alt="kids friendly track"
        />
      )}
    </HStack>
  );
};

export default TrackBadges;
