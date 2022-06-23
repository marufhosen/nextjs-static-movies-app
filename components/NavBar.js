import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box
      width="90%"
      m="auto"
      color="#ffff"
      bg="#5a29a6"
      px="20px"
      borderRadius="md"
    >
      <Flex>
        <Box p="2">
          <Heading size="md" textTransform="uppercase">
            Movie's World
          </Heading>
        </Box>
        <Spacer />
        <Flex mt="6px">
          <Box>
            <Link href="/">Home</Link>
          </Box>
          <Box ml="30px">
            <Link href="/movies">movies</Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
