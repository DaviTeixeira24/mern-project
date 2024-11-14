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
          gradientTo="yellow.600"
          bgClip="text"
          fontSize={{ base: "4xl", sm: "5xl" }}
          fontWeight="extrabold"
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          <Link to={"/"}>Tudaqui Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"create"}>
            <Button bg="yellow.300">
              <FaPlusSquare fontSize={20} />
            </Button>
          </Link>
          <ColorModeToggle />
        </HStack>
      </Flex>
    </Container>
  );
};
