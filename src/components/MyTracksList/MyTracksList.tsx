import { List } from "@chakra-ui/react";
import MyTracksItem from "../../components/MyTracksItem/MyTracksItem";
import { ITrack } from "../../types/ITrack";

interface MyTracksListProps {
  tracks: ITrack[];
}

const MyTracksList = ({ tracks }: MyTracksListProps): JSX.Element => (
  <List spacing={3}>
    {tracks.map((track: ITrack) => (
      <MyTracksItem key={track.id} name={track.name} id={track.id} />
    ))}
  </List>
);

export default MyTracksList;
