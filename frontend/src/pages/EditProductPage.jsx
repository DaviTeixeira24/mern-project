import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Input, VStack, Container, Spinner } from "@chakra-ui/react";

export const EditProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      console.error("ID do produto não está definido.");
      setError("ID não encontrado.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Erro ao buscar produto.");
        }
        const data = await res.json();
        setProductData(data);
      } catch (err) {
        console.error("Erro ao buscar produto:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <p>Erro: {error}</p>;

  return (
    <Container>
      <VStack spacing={4}>
        <Input
          value={productData?.name || ""}
          onChange={(e) =>
            setProductData({ ...productData, name: e.target.value })
          }
        />
        <Input
          value={productData?.price || ""}
          onChange={(e) =>
            setProductData({
              ...productData,
              price: parseFloat(e.target.value),
            })
          }
        />
        <Input
          value={productData?.image || ""}
          onChange={(e) =>
            setProductData({ ...productData, image: e.target.value })
          }
        />
        <Button onClick={() => console.log("Atualizar produto")}>
          Atualizar Produto
        </Button>
      </VStack>
    </Container>
  );
};

export default EditProductPage;
