import {
  Text,
  ListItem,
  IconButton,
  HStack,
  Flex,
  Box,
  useToast,
} from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { deleteTrackThunk } from "../../redux/thunks/tracksThunks";
import React from "react";

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
  const dispatch = useDispatch();
  const toast = useToast();

  const deleteTrack = (toast, id: string): void => {
    dispatch(deleteTrackThunk(toast, id));
  };
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
              onClick={(event: React.MouseEvent) => {
                deleteTrack(toast, id);
              }}
            />
          </HStack>
        </TrackItemContainer>
      </Box>
    </ListItem>
  );
};

export default MyTracksItem;
