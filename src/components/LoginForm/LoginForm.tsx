import {
  Input,
  useToast,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../redux/store";
import { loginUserThunk } from "../../redux/thunks/userThunks";
import AlertInfo from "../AlertInfo/AlertInfo";
import Backpack from "../../../public/img/backpack.png";

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();
  const { isSubmitting, user } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (user.username) {
      router.push("/home");
    }
  }, [user, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(loginUserThunk(toast, data));
  };

  return (
    <VStack>
      <Image src={Backpack.src} h="25vh" alt="Backpack" p={2} />
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
            <FormLabel>username</FormLabel>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="your username"
              variant="filled"
              {...register("username", {
                required: "Please enter a username",
              })}
            />
            {errors.username && <AlertInfo title={errors.username.message} />}
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="your password"
              variant="filled"
              {...register("password", {
                required: "Please enter a password",
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
              loadingText="Logging in..."
            >
              Login
            </Button>
          </Center>
        </form>
      </Box>
    </VStack>
  );
};

export default LoginForm;
