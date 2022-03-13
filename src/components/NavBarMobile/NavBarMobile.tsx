import {
  Flex,
  Link,
  Container,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { DarkModeSwitch } from "../DarkModeSwitch/DarkModeSwitch";

import styled from "@emotion/styled";
import { FiHome, FiHeart, FiPlusSquare, FiUser } from "react-icons/fi";

const CTA = "Login";

const StickyNavMobile = styled(Flex)`
  position: fixed;
  z-index: 999;
  bottom: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const NavBarMobile = () => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.800", "lightgreen");
  return (
    <StickyNavMobile bg={bg} boxShadow="inner">
      <Container maxW="container.lg">
        <Flex w="100%" px="6" py="5" align="center" justify="space-between">
          <NextLink href="/home" passHref>
            <Link color={color}>
              <Icon as={FiHome} w={6} h={6} />
            </Link>
          </NextLink>
          <NextLink href="/favourite-tracks" passHref>
            <Link color={color}>
              <Icon as={FiHeart} w={6} h={6} />
            </Link>
          </NextLink>
          <NextLink href="/new-track" passHref>
            <Link color={color}>
              <Icon as={FiPlusSquare} w={6} h={6} />
            </Link>
          </NextLink>
          <NextLink href="/my-profile" passHref>
            <Link color={color}>
              <Icon as={FiUser} w={6} h={6} />
            </Link>
          </NextLink>
          <DarkModeSwitch />
        </Flex>
      </Container>
    </StickyNavMobile>
  );
};

export default NavBarMobile;
