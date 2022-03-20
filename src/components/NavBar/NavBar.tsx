import {
  Image,
  Flex,
  Button,
  HStack,
  Link,
  Container,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { DarkModeSwitch } from "../DarkModeSwitch/DarkModeSwitch";
import Logo from "../../../public/logo.svg";
import styled from "@emotion/styled";

const CTA = "Login";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 999;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const NavBar = () => {
  const bg = useColorModeValue("green", "black");

  const color = useColorModeValue("white", "lightgreen");
  return (
    <StickyNav bg={bg}>
      <Container maxW="container.lg">
        <Flex w="100%" px="2" py="5" align="center" justify="space-between">
          <HStack spacing={3}>
            <Image src={Logo.src} h="50px" alt="Tracks Logo" />
            <Heading as="h1" size="lg" color={color}>
              Tracks
            </Heading>
          </HStack>
          <HStack as="nav" spacing="5">
            <NextLink href="/home" passHref>
              <Link color={color}>Home</Link>
            </NextLink>
            <NextLink href="/new-track" passHref>
              <Link color={color}>Add new track</Link>
            </NextLink>
          </HStack>
          <HStack>
            <NextLink href="/my-profile" passHref>
              <Button leftIcon={<ArrowRightIcon />} size="sm" variant="ghost">
                {CTA}
              </Button>
            </NextLink>
            <DarkModeSwitch />
          </HStack>
        </Flex>
      </Container>
    </StickyNav>
  );
};

export default NavBar;
