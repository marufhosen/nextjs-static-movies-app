import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const movies = ({ posts }) => {
  console.log(posts);
  return (
    <Box width="80%" m="auto" mt="4em">
      <SimpleGrid columns={[1, 2, 3, 5]} gap={6}>
        {posts.map((post) => (
          <GridItem bg="#5a29a6">
            <AspectRatio maxW="100%" ratio={2 / 3}>
              <Image width="100%" src={post.show.image.original}></Image>
            </AspectRatio>
            <Flex padding="10px">
              <Box color="white" fontSize="md" textTransform="uppercase">
                {post.show.name}
              </Box>
              <Button size="sm">View Details</Button>
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default movies;