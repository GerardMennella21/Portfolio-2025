import React from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Button,
  Grid,
  GridItem,
  Card,
  CardBody,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageSEO } from '../hooks/usePageSEO';

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);
const MotionText = motion.create(Text);

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </MotionBox>
  );
};

const HomePage: React.FC = () => {
  usePageSEO({
    title: 'Home',
    description: 'Gerard Mennella - Full Stack Gen AI Engineer specializing in React, TypeScript, Node.js, and AI-powered web applications. Explore my portfolio and projects.',
    keywords: 'Gerard Mennella, Full Stack Developer, Gen AI Engineer, React, TypeScript, Node.js, AI Integration, Portfolio',
    ogTitle: 'Gerard Mennella - Full Stack Gen AI Engineer',
    ogDescription: 'Full Stack Gen AI Engineer specializing in building exceptional digital experiences with cutting-edge AI technologies.'
  });

  return (
    <Box pt="80px" minHeight="100vh">
      {/* Hero Section */}
      <Container maxW="1200px" py={20}>
        <MotionVStack
          spacing={8}
          textAlign="center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Box
              as="img"
              src="/images/headshot.png"
              alt="Gerard Mennella"
              w={{ base: "150px", md: "180px" }}
              h={{ base: "150px", md: "180px" }}
              borderRadius="full"
              objectFit="cover"
              border="4px solid"
              borderColor="brand.400"
              boxShadow="0 8px 32px rgba(37, 99, 235, 0.3)"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 12px 40px rgba(37, 99, 235, 0.4)",
              }}
            />
          </MotionBox>
          
          <MotionText
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            bgGradient="linear(to-r, brand.400, brand.600)"
            bgClip="text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Gerard Mennella
          </MotionText>
          
          <MotionText
            fontSize={{ base: 'xl', md: '2xl' }}
            color="gray.400"
            maxW="800px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Gen AI Engineer specializing in building exceptional digital experiences
            with cutting-edge AI technologies
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HStack spacing={4} pt={4}>
              <Button
                as={Link}
                to="/projects"
                size="lg"
                bgGradient="linear(to-r, brand.400, brand.600)"
                color="white"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                }}
                transition="all 0.3s ease"
              >
                View My Work
              </Button>
              <Button
                as={Link}
                to="/about"
                size="lg"
                variant="outline"
                borderColor="brand.400"
                color="brand.400"
                _hover={{
                  bg: 'brand.400',
                  color: 'white',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s ease"
              >
                About Me
              </Button>
            </HStack>
          </MotionBox>
        </MotionVStack>
      </Container>

      {/* About Preview Section */}
      <AnimatedSection delay={0.2}>
        <Box bg="gray.900" py={20}>
          <Container maxW="1200px">
            <VStack spacing={8} textAlign="center">
              <Heading
                size="xl"
                bgGradient="linear(to-r, brand.400, brand.600)"
                bgClip="text"
              >
                About Me
              </Heading>
              <Text
                fontSize="lg"
                color="gray.300"
                maxW="800px"
                lineHeight="tall"
              >
                I'm a passionate Full Stack Developer with expertise in Gen AI technologies,
                React, TypeScript, Node.js, and modern web development practices. I love
                creating innovative solutions that push the boundaries of what's possible.
              </Text>
              <Button
                as={Link}
                to="/about"
                variant="ghost"
                color="brand.400"
                _hover={{ bg: 'brand.900' }}
                rightIcon={<Text>→</Text>}
              >
                Learn More
              </Button>
            </VStack>
          </Container>
        </Box>
      </AnimatedSection>

      {/* Skills Preview Section */}
      <AnimatedSection delay={0.4}>
        <Container maxW="1200px" py={20}>
          <VStack spacing={12}>
            <Heading
              size="xl"
              textAlign="center"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
            >
              Technical Expertise
            </Heading>
            
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
              gap={6}
              w="full"
            >
              {[
                {
                  title: 'Frontend Development',
                  skills: ['React', 'TypeScript', 'Next.js', 'Chakra UI', 'Framer Motion'],
                },
                {
                  title: 'Backend Development',
                  skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express.js'],
                },
                {
                  title: 'AI & Machine Learning',
                  skills: ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face'],
                },
              ].map((category) => (
                <GridItem key={category.title}>
                  <Card
                    bg="gray.800"
                    borderColor="gray.700"
                    _hover={{
                      borderColor: 'brand.400',
                      transform: 'translateY(-4px)',
                    }}
                    transition="all 0.3s ease"
                    h="full"
                  >
                    <CardBody>
                      <VStack spacing={4} align="start">
                        <Heading size="md" color="brand.400">
                          {category.title}
                        </Heading>
                        <VStack spacing={2} align="start">
                          {category.skills.map((skill) => (
                            <Text key={skill} color="gray.300" fontSize="sm">
                              • {skill}
                            </Text>
                          ))}
                        </VStack>
                      </VStack>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </Container>
      </AnimatedSection>

      {/* Projects Preview Section */}
      <AnimatedSection delay={0.6}>
        <Box bg="gray.900" py={20}>
          <Container maxW="1200px">
            <VStack spacing={8} textAlign="center">
              <Heading
                size="xl"
                bgGradient="linear(to-r, brand.400, brand.600)"
                bgClip="text"
              >
                Featured Projects
              </Heading>
              <Text fontSize="lg" color="gray.300" maxW="600px">
                Here are some of my recent projects showcasing my skills in full-stack
                development and AI integration.
              </Text>
              <Button
                as={Link}
                to="/projects"
                size="lg"
                bgGradient="linear(to-r, brand.400, brand.600)"
                color="white"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                }}
                transition="all 0.3s ease"
              >
                View All Projects
              </Button>
            </VStack>
          </Container>
        </Box>
      </AnimatedSection>

      {/* Contact Preview Section */}
      <AnimatedSection delay={0.8}>
        <Container maxW="1200px" py={20}>
          <VStack spacing={8} textAlign="center">
            <Heading
              size="xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
            >
              Let's Work Together
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="600px">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                bgGradient="linear(to-r, brand.400, brand.600)"
                color="white"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                }}
                transition="all 0.3s ease"
              >
                Get In Touch
              </Button>
              <Button
                as={Link}
                to="/resume"
                size="lg"
                variant="outline"
                borderColor="brand.400"
                color="brand.400"
                _hover={{
                  bg: 'brand.400',
                  color: 'white',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s ease"
              >
                View Resume
              </Button>
            </HStack>
          </VStack>
        </Container>
      </AnimatedSection>
    </Box>
  );
};

export default HomePage;