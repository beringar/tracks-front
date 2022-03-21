import { useColorMode, Switch, IconButton } from "@chakra-ui/react";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      fontWeight={["normal", "medium", "bold"]}
      fontSize={["xs", "sm", "lg", "xl"]}
      variant="ghost"
      _hover={{ bg: "rgba(0,0,0,.2)" }}
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <BiSun /> : <BsMoon />}
      onClick={toggleColorMode}
      color="white"
      _focus={{ boxShadow: "none" }}
    />
  );
};
