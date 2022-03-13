import type { NextPage } from "next";
import {
  Heading,
  Container,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  IconButton,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FiMapPin, FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import styled from "@emotion/styled";

const TrackItemContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const MyProfilePage: NextPage = () => {
  return (
    <>
      <Heading as="h1" size="md" mb={3}>
        My Tracks
      </Heading>
      <List spacing={3}>
        <ListItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <TrackItemContainer>
              <Text my={2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </Text>
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
                />
              </HStack>
            </TrackItemContainer>
          </Box>
        </ListItem>
        <ListItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <TrackItemContainer>
              <Text my={2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </Text>
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
                />
              </HStack>
            </TrackItemContainer>
          </Box>
        </ListItem>
        <ListItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <TrackItemContainer>
              <Text my={2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </Text>
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
                />
              </HStack>
            </TrackItemContainer>
          </Box>
        </ListItem>
      </List>
    </>
  );
};

export default MyProfilePage;
