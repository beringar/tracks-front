import {
  Input,
  useToast,
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
  Switch,
  CheckboxGroup,
  Checkbox,
  Textarea,
  Image,
  Square,
  VStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import LowDifficulty from "../../../public/img/low-difficulty.svg";
import NormalDifficulty from "../../../public/img/normal-difficulty.svg";
import HighDifficulty from "../../../public/img/high-difficulty.svg";
import KidsFriendlyForm from "../../../public/img/kids-friendly-form.svg";
import {
  FaLeaf,
  FaSun,
  FaCanadianMapleLeaf,
  FaSnowflake,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import AlertInfo from "../AlertInfo/AlertInfo";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateTrackThunk } from "../../redux/thunks/tracksThunks";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";

const TrackEditForm = ({ track }): JSX.Element => {
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();
  const { isSubmitting } = useSelector((state: RootState) => state);
  const [trackToUpdate, setTrackToUpdate] = useState(track);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: trackToUpdate,
  });

  const onSubmit = async (data) => {
    const updateResult = await dispatch(
      updateTrackThunk(track.id, data, toast)
    );
    router.push("/home");
  };

  const onChangeSwitchCheckboxes = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTrackToUpdate({
      ...trackToUpdate,
      kids: event.target.checked,
    });
  };

  const setDifficulty = (value) => {
    setTrackToUpdate({
      ...trackToUpdate,
      difficulty: value,
    });
  };

  const setSeasons = (values) => {
    setTrackToUpdate({
      ...trackToUpdate,
      seasons: values,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="name">track name</FormLabel>
        <Input
          id="name"
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
        mb={4}
      >
        <FormControl isRequired>
          <FormLabel htmlFor="refuge">refuge of departure</FormLabel>
          <Select
            id="refuge"
            variant="filled"
            placeholder="select one..."
            {...register("refuge", {
              required: "You have to select a refuge",
            })}
          >
            <option value="Mallafré">Refugi Ernest Mallafré</option>
            <option value="Gerdar">Refugi del Gerdar</option>
            <option value="Amitges">Refugi d&apos;Amitges</option>
            <option value="Josep Maria Blanc">Refugi Josep Maria Blanc</option>
            <option value="Colomèrs">Refugi de Colomèrs</option>
            <option value="Colomina">Refugi Colomina</option>
            <option value="Saboredo">Refugi de Saboredo</option>
            <option value="Restanca">Refugi de Restanca</option>
            <option value="Ventosa i Calvell">
              Refugi de Ventosa i Calvell
            </option>
            <option value="Pla de la Font">Refugi del Pla de la Font</option>
          </Select>
          {errors.refuge && <AlertInfo title={errors.refuge.message} />}
        </FormControl>
        <FormControl
          isRequired
          {...register("difficulty", {
            required: "You have to select a level of difficulty",
          })}
        >
          <FormLabel htmlFor="difficulty">track difficulty</FormLabel>
          <RadioGroup
            id="difficulty"
            name="difficulty"
            onChange={setDifficulty}
            value={trackToUpdate?.difficulty}
          >
            <HStack spacing="18px">
              <Radio
                value="low"
                colorScheme="green"
                {...register("difficulty")}
              >
                <VStack spacing="3px">
                  <Square size="50px" bg="green.100" borderRadius="md" px={1}>
                    <Image
                      src={LowDifficulty.src}
                      h="50px"
                      alt="low difficulty track"
                    />
                  </Square>
                  <Text fontSize="sm">low</Text>
                </VStack>
              </Radio>
              <Radio
                value="normal"
                colorScheme="yellow"
                {...register("difficulty")}
              >
                <VStack spacing="3px">
                  <Square size="50px" bg="green.100" borderRadius="md" px={1}>
                    <Image
                      src={NormalDifficulty.src}
                      h="50px"
                      alt="normal difficulty track"
                    />
                  </Square>
                  <Text fontSize="sm">normal</Text>
                </VStack>
              </Radio>
              <Radio value="high" colorScheme="red" {...register("difficulty")}>
                <VStack spacing="3px">
                  <Square size="50px" bg="green.100" borderRadius="md" px={1}>
                    <Image
                      src={HighDifficulty.src}
                      h="50px"
                      alt="high difficulty track"
                    />
                  </Square>
                  <Text fontSize="sm">high</Text>
                </VStack>
              </Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>
            Be honest, please! Show respect to the Mountains
          </FormHelperText>
          {errors.difficulty && <AlertInfo title={errors.difficulty.message} />}
        </FormControl>
      </Stack>
      <FormControl display="flex" alignItems="center" mb={4}>
        <Image
          src={KidsFriendlyForm.src}
          h="20px"
          alt="kids friendly track"
          marginEnd={"6px"}
        />
        <FormLabel htmlFor="kidsswitch" mb="0">
          Kids friendly
        </FormLabel>
        <Switch
          id="kidsswitch"
          colorScheme="pink"
          {...register("kids")}
          isChecked={trackToUpdate?.kids}
          onChange={onChangeSwitchCheckboxes}
        />
      </FormControl>
      <FormControl
        as="fieldset"
        isRequired
        mb={4}
        {...register("seasons", {
          required: "You have to select at least one recommended season",
        })}
      >
        <FormLabel as="legend">recommended seasons</FormLabel>
        <CheckboxGroup
          colorScheme="green"
          onChange={setSeasons}
          value={trackToUpdate?.seasons}
        >
          <HStack spacing={4}>
            <Checkbox value="spring" {...register("seasons")}>
              <Icon as={FaLeaf} w={7} h={7} color="#32CD32" />
            </Checkbox>
            <Checkbox value="summer" {...register("seasons")}>
              <Icon as={FaSun} w={7} h={7} color="#FFD700" />
            </Checkbox>
            <Checkbox value="autumn" {...register("seasons")}>
              <Icon as={FaCanadianMapleLeaf} w={7} h={7} color="#9d4e15" />
            </Checkbox>
            <Checkbox value="winter" {...register("seasons")}>
              <Icon as={FaSnowflake} w={7} h={7} color="#33ccff" />
            </Checkbox>
          </HStack>
        </CheckboxGroup>
        {errors.seasons && <AlertInfo title={errors.seasons.message} />}
      </FormControl>
      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="description">description</FormLabel>
        <Textarea
          id="description"
          placeholder="decribe here your track (main waypoints, difficulties, must see spots...) Max. length: 2000 characters"
          resize="vertical"
          variant="filled"
          h={120}
          {...register("description", {
            required: "Please enter a track description",
            minLength: {
              value: 60,
              message: "Track description is too short, be original!",
            },
            maxLength: {
              value: 2000,
              message: "Too long! Leave some surpises to other hikkers!",
            },
          })}
        />
        {errors.description && <AlertInfo title={errors.description.message} />}
      </FormControl>
      <FormControl mb={4}>
        <FormLabel htmlFor="image">cover image</FormLabel>
        <Input
          size="lg"
          fontSize="md"
          py={2}
          id="image"
          name="image"
          variant="filled"
          type="file"
          placeholder="choose a nice picture..."
          {...register("image")}
        />
        {errors.image && <AlertInfo title={errors.image.message} />}
      </FormControl>
      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="image">GPX track file</FormLabel>
        <Input
          size="lg"
          fontSize="md"
          py={2}
          id="gpx"
          name="gpx"
          variant="filled"
          type="file"
          {...register("gpx")}
        />
        {errors.gpx && <AlertInfo title={errors.gpx.message} />}
      </FormControl>
      <Center>
        <Button
          borderRadius="md"
          colorScheme="green"
          type="submit"
          isLoading={isSubmitting}
          loadingText="Updating track..."
        >
          Update track
        </Button>
      </Center>
    </form>
  );
};

export default TrackEditForm;
