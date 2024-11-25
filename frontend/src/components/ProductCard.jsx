import { Box, Heading, HStack, Button, Image, Text } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();

  const handleDeletePoduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    if (!success) {
      console.log(message);
    } else {
      console.log(message);
    }
  };
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "1x" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2} textAlign={"left"}>
          {product.name}
        </Heading>

        <Text
          fontWeight={"bold"}
          fontSize={"x1"}
          bg={{ base: "gray.100", _dark: "gray.900" }}
          mb={4}
          textAlign={"left"}
        >
          R${product.price}
        </Text>
        <HStack gap={2}>
          <Button
            bg={"red.500"}
            onClick={() => handleDeletePoduct(product._id)}
          >
            <FaTrashAlt />
          </Button>
          <Link to={"/edit"}>
            <Button bg={"yellow.300"}>
              <FaEdit />
            </Button>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};
