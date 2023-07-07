import { Center, Flex, Text, Image, Box, Link, Icon } from "@chakra-ui/react";
import React from "react";
import Layout from "../src/components/App/Layout";
import { IoPaperPlane, IoPaperPlaneOutline } from "react-icons/io5";
import { useRouter } from "next/router";
// import Link from "next/link";

const App = () => {
    const router = useRouter();
  return (
    <Flex w="full" direction="column" justify="space-between">
      <Layout />
      <Flex direction="column" w="full" align="center">
        <Flex direction="column" w="1200px" mt={28} align="center">
          <Text
            fontSize="50"
            bgGradient="linear(to-r, #00F0FF, #53AF28)"
            bgClip="text"
            fontWeight={600}
          >
            Lecture Mate
          </Text>
          <Image src="/guides.png" w="1000px" pointerEvents="none" />
          <Flex gap={4} mt={5} textAlign="center">
            <Flex direction="column" w="300px" gap={5}>
              <Text fontSize={20} fontWeight={600}>
                Usage
              </Text>
              <Box
                bg="#E2F0E2"
                display="flex"
                alignItems="center"
                height="100px"
                px={2}
                py={2}
                borderRadius="md"
                color="#333333"
              >
                "Generate 3 theory questions on the topic [insert topic here]"{" "}
              </Box>
              <Box
                bg="#E2F0E2"
                display="flex"
                alignItems="center"
                height="100px"
                px={2}
                py={2}
                borderRadius="md"
                color="#333333"
              >
                "List 10 items of [insert question] and explain them"
              </Box>
            </Flex>
            <Flex direction="column" w="300px" gap={5}>
              <Text fontSize={20} fontWeight={600}>
                Tips
              </Text>
              <Box
                bg="#E2F0E2"
                display="flex"
                alignItems="center"
                height="100px"
                px={2}
                py={2}
                borderRadius="md"
                color="#333333"
              >
                Always remember to copy the token before asking any question
              </Box>
              <Box
                bg="#E2F0E2"
                display="flex"
                alignItems="center"
                height="100px"
                px={2}
                py={2}
                borderRadius="md"
              >
                <Text>
                  Merged PDF is the best way to use Lecture Mate, you can merge
                  your pdfs{" "}
                  <Link
                    href="https://www.ilovepdf.com/merge_pdf"
                    target="_blank"
                    color="#005103"
                    fontWeight={600}
                  >
                    here
                  </Link>
                </Text>
              </Box>
            </Flex>
            <Flex direction="column" w="300px" gap={5}>
              <Text fontSize={20} fontWeight={600}>
                Limitations
              </Text>
              <Box
                bg="#E2F0E2"
                display="flex"
                alignItems="center"
                height="100px"
                px={2}
                py={2}
                borderRadius="md"
                color="#333333"
              >
                Calculations are not supported yet, but we'll keep working on
                that
              </Box>
              <Box
                bg="#E2F0E2"
                display="flex"
                alignItems="center"
                height="100px"
                px={2}
                py={2}
                borderRadius="md"
                color="#333333"
              >
                File uploads are limited to one pdf per time, uploading a new
                file clears the chat history{" "}
              </Box>
            </Flex>
          </Flex>

          <Flex
            w="800px"
            mt={28}
            boxShadow="md"
            justify="space-between"
            bg="#E2F0E2"
            color="#808680"
            _hover={{ border: "1px solid #005103 "}}
            p={5}
            borderRadius="md"
            cursor="pointer"
            onClick={() => router.push('/app/chat')}
          >
            Start Chat
            <Icon as={IoPaperPlaneOutline} w="5" h="5" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
