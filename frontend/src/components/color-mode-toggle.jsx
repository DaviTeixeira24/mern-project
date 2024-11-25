import { Button } from "@chakra-ui/react";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button
      aria-label="toggle color mode"
      onClick={toggleColorMode}
      bg={{ base: "gray.200", _dark: "gray.800" }}
    >
      {theme === "light" ? <IoMdMoon /> : <FaSun />}
    </Button>
  );
}

export default ColorModeToggle;
