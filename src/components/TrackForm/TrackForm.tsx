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
  Switch,
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
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
      <FormControl isRequired mb={3}>
        <FormLabel>Track name</FormLabel>
        <Input
          variant="filled"
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
            variant="filled"
            placeholder="select one..."
            {...register("refuge", {
              required: "you have to select a refuge",
            })}
          >
            <option value="mallafre">Refugi Ernest Mallafré</option>
            <option value="gerdar">Refugi del Gerdar</option>
            <option value="amitges">Refugi d&apos;Amitges</option>
            <option value="jmblanc">Refugi Josep Maria Blanc</option>
            <option value="colomers">Refugi de Colomèrs</option>
            <option value="colomina">Refugi Colomina</option>
            <option value="saboredo">Refugi de Saboredo</option>
            <option value="restanca">Refugi de Restanca</option>
            <option value="ventosa">Refugi de Ventosa i Calvell</option>
            <option value="pla">Refugi del Pla</option>
          </Select>
          {errors.refuge && <AlertInfo title={errors.refuge.message} />}
        </FormControl>
        <FormControl
          as="fieldset"
          isRequired
          {...register("difficulty", {
            required: "you have to select a level of difficulty",
          })}
        >
          <FormLabel as="legend">track difficulty</FormLabel>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio
                value="low"
                colorScheme="green"
                {...register("difficulty")}
              >
                low
              </Radio>
              <Radio
                value="normal"
                colorScheme="yellow"
                {...register("difficulty")}
              >
                normal
              </Radio>
              <Radio value="high" colorScheme="red" {...register("difficulty")}>
                high
              </Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>
            Be honest, please! Show respect to the Mountains
          </FormHelperText>
          {errors.difficulty && <AlertInfo title={errors.difficulty.message} />}
        </FormControl>
      </Stack>
      <FormControl display="flex" alignItems="center" mb={6}>
        <FormLabel htmlFor="kidsswitch" mb="0">
          Kids friendly
        </FormLabel>
        <Switch id="kidsswitch" colorScheme="pink" {...register("kids")} />
      </FormControl>
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
