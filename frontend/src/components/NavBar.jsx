import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import ColorModeToggle from "./color-mode-toggle";

export const NavBar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="to-r"
          gradientFrom="yellow.300"
          gradientTo="yellow.500"
          bgClip="text"
          fontSize="2rem"
          fontWeight="extrabold"
          textTransform={"uppercase"}
        >
          <Link to={"/"}>Tudaqui Store 🛒</Link>
        </Text>

        <HStack gap={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button bg={{ base: "gray.200", _dark: "gray.800" }}>
              <FaPlusSquare fontSize={20} />
            </Button>
          </Link>
          <ColorModeToggle />
        </HStack>
      </Flex>
    </Container>
  );
};
