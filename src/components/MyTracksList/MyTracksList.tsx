import { List } from "@chakra-ui/react";
import MyTracksItem from "../../components/MyTracksItem/MyTracksItem";
import { Track } from "../../types/Track";

interface MyTracksListProps {
  tracks: Track[];
}

const MyTracksList = ({ tracks }: MyTracksListProps): JSX.Element => (
  <List spacing={3}>
    {tracks.map((track: Track) => (
      <MyTracksItem key={track.id} name={track.name} id={track.id} />
    ))}
  </List>
);

export default MyTracksList;
