import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import { NavBar } from "./components/NavBar";
import { EditProductPage } from "./pages/EditProductPage";

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={{ base: "gray.100", _dark: "gray.900" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit" element={<EditProductPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
