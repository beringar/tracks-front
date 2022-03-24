import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const AlertInfo = (props): JSX.Element => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{props.title}</AlertTitle>
    </Alert>
  );
};

export default AlertInfo;
