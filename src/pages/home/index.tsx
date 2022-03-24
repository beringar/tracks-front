import type { NextPage } from "next";
import {
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { Track } from "../../types/Track";
import { useSelector } from "react-redux";
import { RootState, wrapper } from "../../redux/store";
import { loadAllTracksThunk } from "../../redux/thunks/tracksThunks";
import TrackCard from "../../components/TrackCard/TrackCard";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

const HomePage: NextPage = (): JSX.Element => {
  const tracks: Track[] = useSelector((state: RootState) => state.tracks);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const sortedTracks = tracks
    .slice()
    .sort(
      (a: Track, b: Track) => +new Date(b.createdAt) - +new Date(a.createdAt)
    );

  const searchData = (value) => {
    setSearchTerm(value);
    if (searchTerm !== "") {
      const filteredData = sortedTracks.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(sortedTracks);
    }
  };

  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          placeholder="Search..."
          onChange={(e) => searchData(e.target.value)}
          mb={3}
          variant="filled"
        />
      </InputGroup>
      <SimpleGrid
        as="ul"
        minChildWidth="300px"
        spacing="15px"
        alignItems="start"
      >
        {searchTerm.length > 1
          ? filteredResults.map((track: Track) => (
              <TrackCard key={track.id} track={track} />
            ))
          : sortedTracks.map((track: Track) => (
              <TrackCard key={track.id} track={track} />
            ))}
      </SimpleGrid>
    </>
  );
};

export default HomePage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await loadAllTracksThunk(store.dispatch);

    return {
      props: {},
    };
  }
);
