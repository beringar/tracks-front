import {
  Image,
  Flex,
  HStack,
  Link,
  Container,
  Heading,
  useColorModeValue,
  Avatar,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";
import NextLink from "next/link";
import { DarkModeSwitch } from "../DarkModeSwitch/DarkModeSwitch";
import Logo from "../../../public/logo.svg";
import styled from "@emotion/styled";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 1100;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const NavBar = ({ user }) => {
  const backgroundColor = useColorModeValue("#008000d9", "#16161dd9");
  const textColor = useColorModeValue("white", "lightgreen");

  return (
    <StickyNav bg={backgroundColor}>
      <Container maxW="container.lg">
        <Flex w="100%" px="2" py="5" align="center" justify="space-between">
          <NextLink href={"/home"} passHref>
            <Link _hover={{ textDecoration: "none" }}>
              <HStack spacing={3}>
                <Image src={Logo.src} h="50px" alt="Tracks Logo" />
                <Heading as="h1" size="lg" color={textColor}>
                  Tracks
                </Heading>
              </HStack>
            </Link>
          </NextLink>
          <HStack as="nav" spacing="5">
            <NextLink href="/home" passHref>
              <Link color={textColor}>All tracks</Link>
            </NextLink>
            {user.username && (
              <NextLink href="/new-track" passHref>
                <Link color={textColor}>Add new track</Link>
              </NextLink>
            )}
          </HStack>
          <HStack spacing="24px">
            {user.username ? (
              <NextLink href="/my-profile" passHref>
                <HStack as="button" spacing="10px">
                  <Avatar size="sm" />
                  <Text fontWeight="bold" color={textColor}>
                    {user.username}
                  </Text>
                </HStack>
              </NextLink>
            ) : (
              <NextLink href="/login" passHref>
                <IconButton aria-label="Login" icon={<FiLogIn />} isRound />
              </NextLink>
            )}
            <DarkModeSwitch />
          </HStack>
        </Flex>
      </Container>
    </StickyNav>
  );
};

export default NavBar;
