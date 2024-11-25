import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { ProductCard } from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products = [] } = useProductStore(); // Exemplo de fallback

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts();
    };

    fetchData();
  }, [fetchProducts]);
  console.log("Produtos:", products);
  return (
    <Container maxW="container.x1" py={12}>
      <VStack gap={8}>
        <Text
          fontSize={"30px"}
          fontWeight={"bold"}
          bgGradient="to-r"
          gradientFrom="yellow.300"
          gradientTo="yellow.500"
          bgClip="text"
          textAlign={"center"}
        >
          Produtos Atuais 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          gap={10}
          w={"full"}
          textAlign={"center"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize="x1"
            textAlign={"center"}
            fontWeight={"bold"}
            color={"gray.500"}
          >
            Nenhum produto encontrado 😓 {""}
            <Link to={"create"}>
              <Text
                as="span"
                color={"yellow.300"}
                _hover={{ textDecoration: "underline" }}
              >
                Crie um Produto
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
