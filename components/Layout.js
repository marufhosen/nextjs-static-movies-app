import NavBar from "./NavBar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box bg="#4c1d95" minHeight="100vh" p={4}>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
