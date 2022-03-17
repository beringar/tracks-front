import {
  VStack,
  Input,
  useToast,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Select,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
  Stack,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import AlertInfo from "../AlertInfo/AltertInfo";

const TrackForm = (): JSX.Element => {
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
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
      <FormControl isRequired mb={3}>
        <FormLabel>Track name</FormLabel>
        <Input
          type="text"
          placeholder="tip: add the names of departure and arrival spots"
          {...register("name", {
            required: "Please enter a track name",
            minLength: {
              value: 8,
              message: "Track name is too short, be original!",
            },
            maxLength: {
              value: 90,
              message: "Too long! Too much to climb!",
            },
          })}
        />
        {errors.name && <AlertInfo title={errors.name.message} />}
      </FormControl>
      <Stack
        direction={["column", null, "row"]}
        spacing="24px"
        w={"full"}
        mb={3}
      >
        <FormControl isRequired>
          <FormLabel>refuge of departure</FormLabel>
          <Select
            placeholder="select one..."
            {...register("refuge", {
              required: "you have to select a refuge",
            })}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          {errors.refuge && <AlertInfo title={errors.refuge.message} />}
        </FormControl>
        <FormControl as="fieldset" isRequired>
          <FormLabel as="legend">track difficulty</FormLabel>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio value="low">low</Radio>
              <Radio value="normal">normal</Radio>
              <Radio value="high">high</Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>
            Be honest, please! Show respect to the Mountains
          </FormHelperText>
        </FormControl>
      </Stack>
      <Text fontSize="md">
        form in development....(submit does nothing, validation name and refuge
        OK. TODO: add icons difficulty as SVG. Add Kids switch true/false // add
        textarea description // add fileUpload image and GPX file)
      </Text>
      <Center>
        <Button borderRadius="md" colorScheme="green" type="submit">
          Add new track
        </Button>
      </Center>
    </form>
  );
};

export default TrackForm;
