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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageSEO } from '../hooks/usePageSEO';
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, ViewIcon, CalendarIcon } from '@chakra-ui/icons';

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    // Coming Soon Projects
    {
      title: 'AI Work Item Automation',
      description: 'A React/Node.js application that leverages AI APIs to automatically create and manage work items in Azure DevOps and Jira. Features intelligent parsing of requirements and automated ticket generation with proper categorization and priority assignment.',
      longDescription: 'This comprehensive automation tool streamlines project management workflows by integrating with popular project management platforms. Built with React for an intuitive frontend experience and Node.js/Express for robust backend processing, it utilizes advanced AI models to understand context and create meaningful work items automatically.',
      image: null,
      technologies: ['React', 'Node.js', 'Express.js', 'OpenAI API', 'Azure DevOps API', 'Jira API', 'TypeScript'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      status: 'coming-soon',
      completionDate: 'Q2 2025',
    },
    {
      title: 'AI Document Generator',
      description: 'An intelligent document generation platform that creates professional documents using AI. Supports various document types including technical specifications, reports, and proposals with customizable templates and smart content suggestions.',
      longDescription: 'This powerful document generation tool combines natural language processing with professional formatting to create high-quality documents efficiently. The platform offers template customization, collaborative editing, and intelligent content recommendations based on document type and context.',
      image: null,
      technologies: ['React', 'Node.js', 'Express.js', 'OpenAI API', 'PDF Generation', 'MongoDB', 'TypeScript'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      status: 'coming-soon',
      completionDate: 'Q3 2025',
    },
    {
      title: 'Agentic AI Agents for Teams',
      description: 'Customizable AI agents built with Microsoft Teams SDK and Bot Framework, powered by AWS Bedrock. These agents can be tailored for specific business needs and integrate seamlessly into existing Teams workflows.',
      longDescription: 'A sophisticated AI agent platform that brings intelligent automation directly into Microsoft Teams. These agents can handle various tasks from scheduling and information retrieval to complex workflow automation, all while maintaining enterprise-level security and compliance standards.',
      image: null,
      technologies: ['Microsoft Teams SDK', 'Bot Framework', 'AWS Bedrock', 'Node.js', 'Azure Functions', 'TypeScript'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      status: 'coming-soon',
      completionDate: 'Q4 2025',
    },
    // Placeholder Projects
    {
      title: 'Portfolio Project #4',
      description: 'An innovative full-stack application currently in the planning phase. This project will showcase advanced web development techniques and modern UI/UX design principles.',
      longDescription: 'Details about this exciting project will be revealed soon. Stay tuned for updates on the development progress and feature announcements.',
      image: null,
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: 'placeholder',
    },
    {
      title: 'Portfolio Project #5',
      description: 'A cutting-edge application that will demonstrate expertise in modern development frameworks and cloud technologies.',
      longDescription: 'This project is currently in the conceptual phase. More information will be available as development progresses.',
      image: null,
      technologies: ['Next.js', 'Python', 'FastAPI', 'Docker', 'GCP'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: 'placeholder',
    },
    {
      title: 'Portfolio Project #6',
      description: 'An upcoming project that will showcase integration of AI/ML capabilities with modern web development practices.',
      longDescription: 'Details for this AI-powered application are being finalized. Check back for updates on features and implementation details.',
      image: null,
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'MongoDB', 'Azure'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: 'placeholder',
    },
    {
      title: 'Portfolio Project #7',
      description: 'A mobile-first application that will demonstrate responsive design and progressive web app capabilities.',
      longDescription: 'This mobile-focused project will showcase modern PWA features and responsive design techniques. Development details coming soon.',
      image: null,
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'PWA'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: 'placeholder',
    },
    {
      title: 'Portfolio Project #8',
      description: 'A data visualization project that will showcase expertise in handling complex datasets and creating interactive dashboards.',
      longDescription: 'This data-focused application will demonstrate advanced visualization techniques and real-time data processing capabilities.',
      image: null,
      technologies: ['D3.js', 'React', 'Python', 'Pandas', 'Chart.js'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: 'placeholder',
    },
    {
      title: 'Portfolio Project #9',
      description: 'A microservices architecture project that will demonstrate expertise in distributed systems and cloud-native development.',
      longDescription: 'This complex system will showcase microservices architecture, containerization, and orchestration using modern cloud technologies.',
      image: null,
      technologies: ['Kubernetes', 'Docker', 'Go', 'gRPC', 'Istio'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      status: 'placeholder',
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);

  const nextSlide = () => {
    setCurrentProject((prev) => 
      prev >= featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentProject((prev) => 
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const handleProjectClick = (project: typeof projects[0], hasUrl: boolean) => {
    if (!hasUrl) {
      setSelectedProject(project);
      onOpen();
    }
  };

  const ProjectCard: React.FC<{ 
    project: typeof projects[0]; 
    index: number;
    onProjectClick: (project: typeof projects[0], hasUrl: boolean) => void;
  }> = ({ 
    project, 
    index,
    onProjectClick
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
        flexDirection="column"
      >
        {project.image ? (
          <Box
            as="img"
            src={project.image}
            alt={project.title}
            w="full"
            h="full"
            objectFit="cover"
          />
        ) : (
          <>
            <Box
              as="img"
              src="/favicon.png"
              alt="Project placeholder"
              w="60px"
              h="60px"
              opacity={0.3}
              mb={2}
            />
            <Text color="gray.500" fontSize="sm">
              Project Screenshot Coming Soon
            </Text>
          </>
        )}
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
                {project.liveUrl ? (
                  <Button
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
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
                ) : (
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
                    onClick={() => onProjectClick(project, false)}
                  >
                    Live Demo
                  </Button>
                )}
                
                {project.githubUrl ? (
                  <Button
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
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
                ) : (
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
                    onClick={() => onProjectClick(project, false)}
                  >
                    Code
                  </Button>
                )}
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
              lineHeight="1.3"
              py={2}
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
            
            <Box position="relative" w="full" maxW="900px" mx="auto">
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
                  bg="rgba(0, 0, 0, 0.7)"
                  color="white"
                  _hover={{ bg: 'rgba(37, 99, 235, 0.8)' }}
                  borderRadius="full"
                  size="lg"
                  ml={-6}
                  pointerEvents="auto"
                />
                <IconButton
                  aria-label="Next slide"
                  icon={<ChevronRightIcon />}
                  onClick={nextSlide}
                  bg="rgba(0, 0, 0, 0.7)"
                  color="white"
                  _hover={{ bg: 'rgba(37, 99, 235, 0.8)' }}
                  borderRadius="full"
                  size="lg"
                  mr={-6}
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
                  {featuredProjects[currentProject] && (
                    <Card
                      bg="gray.800"
                      borderColor="gray.700"
                      overflow="hidden"
                      _hover={{
                        borderColor: 'brand.400',
                        transform: 'translateY(-4px)',
                      }}
                      transition="all 0.3s ease"
                    >
                      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={0}>
                        <Box
                          h={{ base: "250px", lg: "350px" }}
                          bg="gray.700"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          position="relative"
                          overflow="hidden"
                        >
                          {featuredProjects[currentProject].image ? (
                            <Box
                              as="img"
                              src={featuredProjects[currentProject].image}
                              alt={featuredProjects[currentProject].title}
                              w="full"
                              h="full"
                              objectFit="cover"
                            />
                          ) : (
                            <>
                              <Box
                                as="img"
                                src="/favicon.png"
                                alt="Project placeholder"
                                w="80px"
                                h="80px"
                                opacity={0.3}
                              />
                              <Text 
                                position="absolute"
                                bottom={4}
                                color="gray.500" 
                                fontSize="sm"
                                bg="rgba(0,0,0,0.7)"
                                px={2}
                                py={1}
                                borderRadius="md"
                              >
                                Project Screenshot Coming Soon
                              </Text>
                            </>
                          )}
                          <Box
                            position="absolute"
                            inset={0}
                            bg="linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(79, 143, 255, 0.1))"
                          />
                          {featuredProjects[currentProject].status === 'coming-soon' && (
                            <Badge
                              position="absolute"
                              top={4}
                              right={4}
                              bg="brand.500"
                              color="white"
                              px={3}
                              py={1}
                              borderRadius="full"
                            >
                              Coming Soon
                            </Badge>
                          )}
                        </Box>
                        
                        <CardBody p={8}>
                          <VStack spacing={6} align="start" h="full">
                            <VStack spacing={3} align="start">
                              <Heading size="lg" color="brand.400">
                                {featuredProjects[currentProject].title}
                              </Heading>
                              
                              {featuredProjects[currentProject].status === 'coming-soon' && (
                                <HStack spacing={2}>
                                  <CalendarIcon color="brand.400" />
                                  <Text color="brand.400" fontSize="sm" fontWeight="semibold">
                                    Expected: {featuredProjects[currentProject].completionDate}
                                  </Text>
                                </HStack>
                              )}
                              
                              <Text color="gray.300" fontSize="md" lineHeight="tall">
                                {featuredProjects[currentProject].longDescription || featuredProjects[currentProject].description}
                              </Text>
                            </VStack>
                            
                            <Box w="full">
                              <VStack spacing={4} align="start">
                                <Box>
                                  <Text color="gray.400" fontSize="sm" mb={2} fontWeight="semibold">
                                    Technologies:
                                  </Text>
                                  <Box>
                                    {featuredProjects[currentProject].technologies.map((tech) => (
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
                                </Box>
                                
                                <HStack spacing={3} w="full">
                                  {featuredProjects[currentProject].liveUrl ? (
                                    <Button
                                      as="a"
                                      href={featuredProjects[currentProject].liveUrl}
                                      target="_blank"
                                      size="md"
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
                                  ) : (
                                    <Button
                                      size="md"
                                      leftIcon={<ViewIcon />}
                                      bgGradient="linear(to-r, brand.400, brand.600)"
                                      color="white"
                                      _hover={{
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
                                      }}
                                      transition="all 0.3s ease"
                                      flex={1}
                                      onClick={() => handleProjectClick(featuredProjects[currentProject], false)}
                                    >
                                      Coming Soon
                                    </Button>
                                  )}
                                  
                                  {featuredProjects[currentProject].githubUrl ? (
                                    <Button
                                      as="a"
                                      href={featuredProjects[currentProject].githubUrl}
                                      target="_blank"
                                      size="md"
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
                                  ) : (
                                    <Button
                                      size="md"
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
                                      onClick={() => handleProjectClick(featuredProjects[currentProject], false)}
                                    >
                                      Coming Soon
                                    </Button>
                                  )}
                                </HStack>
                              </VStack>
                            </Box>
                          </VStack>
                        </CardBody>
                      </Grid>
                    </Card>
                  )}
                </MotionBox>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <HStack justify="center" mt={6} spacing={2}>
                {featuredProjects.map((_, index) => (
                  <Box
                    key={index}
                    w={3}
                    h={3}
                    borderRadius="full"
                    bg={currentProject === index ? 'brand.400' : 'gray.600'}
                    cursor="pointer"
                    onClick={() => setCurrentProject(index)}
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
                  <ProjectCard project={project} index={index} onProjectClick={handleProjectClick} />
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
                  as={Link}
                  to="/contact"
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

      {/* Coming Soon Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.800" borderColor="gray.700" border="1px solid">
          <ModalHeader>
            <VStack spacing={2} align="start">
              <Heading size="md" color="brand.400">
                {selectedProject?.title}
              </Heading>
              {selectedProject?.status === 'coming-soon' && (
                <HStack spacing={2}>
                  <CalendarIcon color="brand.400" />
                  <Text color="brand.400" fontSize="sm" fontWeight="semibold">
                    Expected: {selectedProject?.completionDate}
                  </Text>
                </HStack>
              )}
            </VStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4} align="start">
              <Text color="gray.300" lineHeight="tall">
                {selectedProject?.status === 'coming-soon' 
                  ? `This project is currently in development and will be available ${selectedProject?.completionDate}. 
                     It's based on work I've done at Capco and will showcase advanced AI integration techniques.`
                  : selectedProject?.status === 'placeholder'
                  ? 'This is a display-only placeholder project. I\'m actively working on exciting new projects that will be showcased here soon. Check back regularly for updates on my latest work!'
                  : 'This project is currently in the planning phase. More details will be available soon.'
                }
              </Text>
              
              {selectedProject?.status !== 'placeholder' && (
                <Text color="gray.300" lineHeight="tall">
                  {selectedProject?.longDescription}
                </Text>
              )}
              
              <Box>
                <Text color="gray.400" fontSize="sm" mb={2} fontWeight="semibold">
                  {selectedProject?.status === 'placeholder' ? 'Example Technologies:' : 'Planned Technologies:'}
                </Text>
                <Box>
                  {selectedProject?.technologies?.map((tech: string) => (
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
              </Box>
              
              <Box
                p={4}
                bg="brand.900"
                borderRadius="md"
                border="1px solid"
                borderColor="brand.600"
                w="full"
              >
                <Text color="brand.300" fontSize="sm" textAlign="center">
                  {selectedProject?.status === 'placeholder'
                    ? '🚀 More exciting projects coming soon! Contact me to discuss your project ideas and see how we can work together.'
                    : '📧 Want updates on this project? Contact me and I\'ll keep you posted on the development progress!'
                  }
                </Text>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProjectsPage;