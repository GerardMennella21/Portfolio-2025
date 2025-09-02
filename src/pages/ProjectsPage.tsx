import React, { useState } from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Card,
  CardBody,
  Heading,
  Button,
  Badge,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageSEO } from '../hooks/usePageSEO';
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, ViewIcon } from '@chakra-ui/icons';

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

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

const ProjectsPage: React.FC = () => {
  usePageSEO({
    title: 'Projects',
    description: 'Explore Gerard Mennella\'s portfolio of full-stack projects featuring AI integration, React applications, and modern web development.',
    keywords: 'Gerard Mennella, Projects, Portfolio, React Projects, AI Applications, Full Stack Projects, Web Development',
    ogTitle: 'Gerard Mennella Projects - Full Stack Portfolio',
    ogDescription: 'Showcase of innovative full-stack projects featuring AI integration, modern web technologies, and creative solutions.'
  });
  const [currentProject, setCurrentProject] = useState(0);
  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

  const projects = [
    {
      title: 'AI-Powered Content Generator',
      description: 'A full-stack web application that uses OpenAI\'s GPT models to generate various types of content including articles, social media posts, and marketing copy.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Real-time Chat Application',
      description: 'A modern chat application with real-time messaging, file sharing, and AI-powered chat moderation features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Comprehensive admin dashboard for e-commerce management with analytics, inventory tracking, and AI-driven insights.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'React', 'Python', 'FastAPI', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Smart Task Manager',
      description: 'Intelligent task management system that uses ML to prioritize tasks and suggest optimal scheduling.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Node.js', 'TensorFlow', 'MySQL', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Weather Prediction App',
      description: 'Weather application with machine learning models for enhanced prediction accuracy and beautiful data visualization.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Python', 'scikit-learn', 'AWS', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for social media performance tracking with AI-powered sentiment analysis.',
      image: '/api/placeholder/400/250',
      technologies: ['Angular', 'Django', 'PyTorch', 'MongoDB', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);

  const nextSlide = () => {
    setCurrentProject((prev) => 
      prev + slidesPerView >= projects.length ? 0 : prev + slidesPerView
    );
  };

  const prevSlide = () => {
    setCurrentProject((prev) => 
      prev === 0 ? Math.max(0, projects.length - slidesPerView) : prev - slidesPerView
    );
  };

  const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ 
    project, 
    index 
  }) => (
    <MotionCard
      bg="gray.800"
      borderColor="gray.700"
      overflow="hidden"
      h="full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      _hover={{
        borderColor: 'brand.400',
        transform: 'translateY(-8px)',
      }}
      style={{ transition: 'all 0.3s ease' }}
    >
      <Box
        h="200px"
        bg="gray.700"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow="hidden"
      >
        <Text color="gray.500" fontSize="sm">
          Project Screenshot
        </Text>
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(79, 143, 255, 0.1))"
        />
      </Box>
      
      <CardBody>
        <VStack spacing={4} align="start" h="full">
          <VStack spacing={2} align="start" flex={1}>
            <Heading size="md" color="brand.400">
              {project.title}
            </Heading>
            <Text color="gray.300" fontSize="sm" lineHeight="tall">
              {project.description}
            </Text>
          </VStack>
          
          <Box w="full">
            <VStack spacing={3} align="start">
              <Box>
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    mr={2}
                    mb={2}
                    px={2}
                    py={1}
                    bg="gray.700"
                    color="gray.300"
                    fontSize="xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </Box>
              
              <HStack spacing={3} w="full">
                <Button
                  size="sm"
                  leftIcon={<ViewIcon />}
                  bgGradient="linear(to-r, brand.400, brand.600)"
                  color="white"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
                  }}
                  transition="all 0.3s ease"
                  flex={1}
                >
                  Live Demo
                </Button>
                <Button
                  size="sm"
                  leftIcon={<ExternalLinkIcon />}
                  variant="outline"
                  borderColor="gray.600"
                  color="gray.300"
                  _hover={{
                    borderColor: 'brand.400',
                    color: 'brand.400',
                  }}
                  transition="all 0.3s ease"
                  flex={1}
                >
                  Code
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </CardBody>
    </MotionCard>
  );

  return (
    <Box pt="80px" minHeight="100vh">
      <Container maxW="1200px" py={12}>
        {/* Header */}
        <AnimatedSection>
          <VStack spacing={6} textAlign="center" mb={16}>
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
            >
              My Projects
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="800px">
              Here's a showcase of my recent work, featuring full-stack applications,
              AI integrations, and innovative solutions built with modern technologies.
            </Text>
          </VStack>
        </AnimatedSection>

        {/* Featured Projects Carousel */}
        <AnimatedSection delay={0.2}>
          <VStack spacing={8} mb={20}>
            <Heading size="lg" color="brand.400" textAlign="center">
              Featured Projects
            </Heading>
            
            <Box position="relative" w="full" overflow="hidden">
              <HStack
                justify="space-between"
                position="absolute"
                top="50%"
                left={0}
                right={0}
                zIndex={2}
                transform="translateY(-50%)"
                pointerEvents="none"
              >
                <IconButton
                  aria-label="Previous slide"
                  icon={<ChevronLeftIcon />}
                  onClick={prevSlide}
                  bg="rgba(0, 0, 0, 0.5)"
                  color="white"
                  _hover={{ bg: 'rgba(0, 0, 0, 0.7)' }}
                  borderRadius="full"
                  size="lg"
                  ml={-4}
                  pointerEvents="auto"
                />
                <IconButton
                  aria-label="Next slide"
                  icon={<ChevronRightIcon />}
                  onClick={nextSlide}
                  bg="rgba(0, 0, 0, 0.5)"
                  color="white"
                  _hover={{ bg: 'rgba(0, 0, 0, 0.7)' }}
                  borderRadius="full"
                  size="lg"
                  mr={-4}
                  pointerEvents="auto"
                />
              </HStack>

              <AnimatePresence mode="wait">
                <MotionBox
                  key={currentProject}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Grid
                    templateColumns={{
                      base: 'repeat(1, 1fr)',
                      md: 'repeat(2, 1fr)',
                      lg: 'repeat(3, 1fr)',
                    }}
                    gap={6}
                  >
                    {featuredProjects
                      .slice(currentProject, currentProject + slidesPerView)
                      .map((project, index) => (
                        <GridItem key={`${currentProject}-${index}`}>
                          <ProjectCard project={project} index={index} />
                        </GridItem>
                      ))}
                  </Grid>
                </MotionBox>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <HStack justify="center" mt={6} spacing={2}>
                {Array.from({ 
                  length: Math.ceil(featuredProjects.length / slidesPerView) 
                }).map((_, index) => (
                  <Box
                    key={index}
                    w={3}
                    h={3}
                    borderRadius="full"
                    bg={Math.floor(currentProject / slidesPerView) === index ? 'brand.400' : 'gray.600'}
                    cursor="pointer"
                    onClick={() => setCurrentProject(index * slidesPerView)}
                    transition="all 0.3s ease"
                    _hover={{ bg: 'brand.400' }}
                  />
                ))}
              </HStack>
            </Box>
          </VStack>
        </AnimatedSection>

        {/* All Projects Grid */}
        <AnimatedSection delay={0.4}>
          <VStack spacing={8}>
            <Heading size="lg" color="brand.400" textAlign="center">
              All Projects
            </Heading>
            
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              }}
              gap={6}
              w="full"
            >
              {projects.map((project, index) => (
                <GridItem key={index}>
                  <ProjectCard project={project} index={index} />
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.6}>
          <Box
            bg="gray.900"
            p={8}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.700"
            textAlign="center"
            mt={20}
          >
            <VStack spacing={6}>
              <Heading size="lg" color="brand.400">
                Interested in Working Together?
              </Heading>
              <Text color="gray.300" maxW="600px">
                I'm always excited to take on new challenges and collaborate on innovative projects.
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
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default ProjectsPage;