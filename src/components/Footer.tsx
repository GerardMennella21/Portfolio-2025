import React from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <MotionBox
      as="footer"
      bg="gray.900"
      borderTop="1px solid"
      borderColor="gray.700"
      mt={20}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Container maxW="1200px" py={8}>
        <VStack spacing={4}>
          <Text
            fontSize="lg"
            fontWeight="600"
            bgGradient="linear(to-r, brand.400, brand.600)"
            bgClip="text"
          >
            Gerard Mennella
          </Text>
          
          <Text fontSize="sm" color="gray.400" textAlign="center">
            Full Stack Gen AI Engineer
          </Text>

          <HStack spacing={4}>
            <Link
              href="mailto:gerard@example.com"
              isExternal
              color="gray.400"
              _hover={{ color: "brand.400", transform: "translateY(-2px)" }}
              transition="all 0.3s ease"
            >
              Email <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              href="https://linkedin.com/in/gerardmennella"
              isExternal
              color="gray.400"
              _hover={{ color: "brand.400", transform: "translateY(-2px)" }}
              transition="all 0.3s ease"
            >
              LinkedIn <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              href="https://github.com/gerardmennella"
              isExternal
              color="gray.400"
              _hover={{ color: "brand.400", transform: "translateY(-2px)" }}
              transition="all 0.3s ease"
            >
              GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>

          <Text fontSize="xs" color="gray.500" pt={4}>
            &copy; {currentYear} Gerard Mennella. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </MotionBox>
  );
};

export default Footer;