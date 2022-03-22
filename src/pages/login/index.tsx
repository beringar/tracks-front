import type { NextPage } from "next";
import NextLink from "next/link";
import { Container, Heading, Text, VStack, Button } from "@chakra-ui/react";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Container
        w={"full"}
        maxW="3xl"
        centerContent
        m={"0 auto"}
        p={0}
        alignItems="stretch"
      >
        <Heading as="h1" size="lg" my={5} textAlign="center">
          Login
        </Heading>
        <LoginForm />
        <VStack spacing="18px" mt={5}>
          <Text>Don&apos;t have an account?</Text>
          <NextLink href="/register" passHref>
            <Button variant="outline">Click here to register now!</Button>
          </NextLink>
        </VStack>
      </Container>
    </>
  );
};

export default LoginPage;
