import { Image, HStack } from "@chakra-ui/react";
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
          h={["30px", "40px"]}
          alt="low difficulty track"
        />
      );
    case "high":
      return (
        <Image
          src={HighDifficulty.src}
          h={["30px", "40px"]}
          alt="high difficulty track"
        />
      );
    case "normal":
    default:
      return (
        <Image
          src={NormalDifficulty.src}
          h={["30px", "40px"]}
          alt="normal difficulty track"
        />
      );
  }
};

const TrackBadges = ({ difficulty, kids }: TrackBadgesProps): JSX.Element => {
  return (
    <HStack spacing="10px">
      {getDifficultyBadge(difficulty)}
      {kids && (
        <Image
          src={KidsFriendly.src}
          h={["30px", "40px"]}
          alt="kids friendly track"
        />
      )}
    </HStack>
  );
};

export default TrackBadges;
