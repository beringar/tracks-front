import {
  VStack,
  Input,
  useToast,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import AlertInfo from "../AlertInfo/AltertInfo";

const RegisterForm = (): JSX.Element => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toast({
      title: "Submitted!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Center>
      <Box
        maxW={"445px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"xl"}
        mx="auto"
        p={6}
      >
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
          <VStack>
            <FormControl>
              <FormLabel>name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
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

            <FormControl>
              <FormLabel>username</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: "Please enter a username",
                  pattern: {
                    value: /^[a-zA-Z0-9]*$/,
                    message:
                      "Only letters and numbers are allowed! No whitespaces!",
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
            <FormControl>
              <FormLabel>password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
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

            <Button borderRadius="md" colorScheme="green" type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default RegisterForm;
