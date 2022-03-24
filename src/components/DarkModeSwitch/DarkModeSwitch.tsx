import { useColorMode, IconButton } from "@chakra-ui/react";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      fontWeight={"medium"}
      fontSize={"lg"}
      variant="ghost"
      _hover={{ bg: "rgba(0,0,0,.2)" }}
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <BiSun /> : <BsMoon />}
      onClick={toggleColorMode}
      _focus={{ boxShadow: "none" }}
    />
  );
};
