import {
  Text,
  ListItem,
  IconButton,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import styled from "@emotion/styled";

const TrackItemContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

interface MyTracksItemProps {
  name: string;
  id: string;
}

const MyTracksItem = ({ name, id }: MyTracksItemProps): JSX.Element => {
  const onClickDelete = () => {};

  return (
    <ListItem>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <TrackItemContainer>
          <Text my={2}>{name}</Text>
          <HStack spacing="10px">
            <IconButton
              colorScheme="green"
              aria-label="View Track"
              icon={<FiEye />}
              isRound
            />
            <IconButton
              colorScheme="yellow"
              aria-label="Edit track"
              icon={<FiEdit />}
              isRound
            />
            <IconButton
              colorScheme="red"
              aria-label="Remove track"
              icon={<FiTrash2 />}
              isRound
              onClick={onClickDelete}
            />
          </HStack>
        </TrackItemContainer>
      </Box>
    </ListItem>
  );
};

export default MyTracksItem;
