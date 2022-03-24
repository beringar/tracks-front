import {
  Input,
  useToast,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  chakra,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import AlertInfo from "../AlertInfo/AlertInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setSubmittingAction,
  unsetSubmittingAction,
} from "../../redux/actions/ApiActionCreator/ApiActionCreator";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import Backpack from "../../../public/img/backpack.png";

interface RegisteredUser {
  username?: string;
  name?: string;
}

const RegisterForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isSubmitting } = useSelector((state: RootState) => state);
  const [registeredUser, setRegisteredUser] = useState<RegisteredUser>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(setSubmittingAction());
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TRACKS_API_URL}users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    if (response.ok) {
      toast({
        title: "REGISTER successful!",
        description: `you have been registered with username ${data.username}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      const { name, username } = data;
      setRegisteredUser({ name, username });
    } else {
      toast({
        title: "Register FAILED!",
        description: `${responseData.message}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    dispatch(unsetSubmittingAction());
  };

  if (registeredUser.username) {
    return (
      <>
        <Heading as="h1" size="xl" my={2} textAlign="center">
          Hi,{" "}
          <chakra.span fontWeight={"bold"}>{registeredUser.name}</chakra.span>!
        </Heading>
        <Text fontSize={"xl"} textAlign="center" mb={2}>
          You&apos;ve been registered with username{" "}
          <chakra.span fontWeight={"bold"}>
            {registeredUser.username}
          </chakra.span>
        </Text>
        <Text textAlign="center">
          Now you can login to start adding your own tracks!
        </Text>
        <LoginForm />
      </>
    );
  }

  return (
    <VStack spacing="12px">
      <Image src={Backpack.src} h="25vh" alt="Backpack" />
      <Box
        maxW={"445px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"xl"}
        mx="auto"
        p={6}
      >
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
          <FormControl isRequired mb={4}>
            <FormLabel>name</FormLabel>
            <Input
              type="text"
              placeholder="your name"
              variant="filled"
              {...register("name", {
                required: "Please enter a name",
                minLength: {
                  value: 4,
                  message: "Name is too short, hikkie!",
                },
                maxLength: {
                  value: 16,
                  message: "Too long! Too much to climb!",
                },
              })}
            />
            {errors.name && <AlertInfo title={errors.name.message} />}
          </FormControl>

          <FormControl isRequired mb={4}>
            <FormLabel>username</FormLabel>
            <Input
              type="text"
              placeholder="choose a unique username :)"
              variant="filled"
              {...register("username", {
                required: "Please enter a username",
                pattern: {
                  value: /^[a-zA-Z0-9]*$/,
                  message:
                    "Only letters and numbers are allowed! No symbols! No whitespaces!",
                },
                minLength: {
                  value: 4,
                  message: "Username is too short!",
                },
                maxLength: {
                  value: 16,
                  message: "Too long! What's that..!",
                },
              })}
            />
            {errors.username && <AlertInfo title={errors.username.message} />}
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="create a strong password"
              variant="filled"
              {...register("password", {
                required: "Please enter a password",
                pattern: {
                  value: /^[a-zA-Z0-9]*$/,
                  message: "Only letters and numbers are allowed!",
                },
                minLength: {
                  value: 4,
                  message: "Too short, want to be hacked?",
                },
                maxLength: {
                  value: 12,
                  message: "Too long! You won't remember!",
                },
              })}
            />
            {errors.password && <AlertInfo title={errors.password.message} />}
          </FormControl>
          <Center>
            <Button
              borderRadius="md"
              colorScheme="green"
              type="submit"
              isLoading={isSubmitting}
              loadingText="Signing up..."
            >
              Register
            </Button>
          </Center>
        </form>
      </Box>
      <VStack spacing="18px">
        <Text>Already have an account?</Text>
        <NextLink href="/login" passHref>
          <Button variant="outline">Click here to login now!</Button>
        </NextLink>
      </VStack>
    </VStack>
  );
};

export default RegisterForm;
