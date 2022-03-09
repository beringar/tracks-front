import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Link,
  Container,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Logo from "../../public/logo.svg";

const CTA = "Login";

const NavBar = () => {
  const bg = useColorModeValue("green", "black");
  const color = useColorModeValue("white", "lightgreen");
  return (
    <chakra.header bg={bg} id="header">
      <Container maxW="container.lg">
        <Flex w="100%" px="6" py="5" align="center" justify="space-between">
          <HStack spacing={3}>
            <Image src={Logo.src} h="50px" alt="Tracks Logo" />
            <Heading as="h1" size="lg" color={color}>
              Tracks
            </Heading>
          </HStack>
          <HStack as="nav" spacing="5">
            <NextLink href="/" passHref>
              <Link color={color}>Home</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link color={color}>My favourite tracks</Link>
            </NextLink>
            <NextLink href="/" passHref>
              <Link color={color}>Add new track</Link>
            </NextLink>
          </HStack>
          <HStack>
            <NextLink href="/" passHref>
              <Button
                leftIcon={<ArrowRightIcon />}
                colorScheme="gray"
                size="sm"
              >
                {CTA}
              </Button>
            </NextLink>
            <DarkModeSwitch />
          </HStack>
        </Flex>
      </Container>
    </chakra.header>
  );
};

export default NavBar;
