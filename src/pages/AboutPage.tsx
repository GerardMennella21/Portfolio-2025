import React from 'react';
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
  Badge,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageSEO } from '../hooks/usePageSEO';

const MotionBox = motion.create(Box);

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

const AboutPage: React.FC = () => {
  usePageSEO({
    title: 'About Me',
    description: 'Learn more about Gerard Mennella, a passionate Full Stack Gen AI Engineer with over 4 years of experience building exceptional digital experiences.',
    keywords: 'Gerard Mennella, About, Full Stack Developer, Gen AI Engineer, Experience, Skills, Biography',
    ogTitle: 'About Gerard Mennella - Full Stack Gen AI Engineer',
    ogDescription: 'Passionate Full Stack Gen AI Engineer with 4+ years of experience in React, TypeScript, Node.js, and AI integration.'
  });
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'AI/ML Integration', level: 85 },
    { name: 'PostgreSQL/MongoDB', level: 80 },
    { name: 'AWS/Cloud Services', level: 75 },
    { name: 'Docker/DevOps', level: 70 },
  ];

  const experiences = [
    {
      role: 'Lead Full Stack AI Engineer',
      company: 'Capco',
      period: '2023 - Present',
      description: 'Leading AI engineering consultant for top-tier financial clients, architecting 8+ full-stack AI applications that generated over $2M in new business opportunities.',
    },
    {
      role: 'Full-Stack Web Development Instructional Specialist',
      company: 'edX/2U',
      period: '2022 - 2025',
      description: 'Mentoring 200+ students across multiple cohorts in full-stack MERN development while maintaining 95%+ student satisfaction ratings through personalized instruction and technical support.',
    },
  ];

  return (
    <Box pt="80px" minHeight="100vh">
      <Container maxW="1200px" py={12}>
        {/* Header Section */}
        <AnimatedSection>
          <VStack spacing={8} textAlign="center" mb={20}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                position="relative"
                display="inline-block"
              >
                <Box
                  as="img"
                  src="/images/headshot.png"
                  alt="Gerard Mennella"
                  w="200px"
                  h="200px"
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
                <Box
                  position="absolute"
                  bottom={2}
                  right={2}
                  w="40px"
                  h="40px"
                  bg="green.400"
                  borderRadius="full"
                  border="3px solid"
                  borderColor="gray.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="lg">👋</Text>
                </Box>
              </Box>
            </MotionBox>
            
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
              lineHeight="1.3"
              py={2}
            >
              About Me
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="800px" lineHeight="tall">
              I'm a passionate Lead Full Stack AI Engineer currently at Capco, where I serve as 
              an AI engineering consultant for top-tier financial clients. I specialize in creating 
              innovative AI-powered solutions that have generated over $2M in new business opportunities 
              while also mentoring the next generation of developers through my role at edX/2U.
            </Text>
          </VStack>
        </AnimatedSection>

        {/* Main Content Grid */}
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={12} mb={20}>
          {/* Left Column - Story */}
          <GridItem>
            <AnimatedSection delay={0.2}>
              <VStack spacing={8} align="start">
                <Heading size="lg" color="brand.400">
                  My Story
                </Heading>
                
                <Text color="gray.300" lineHeight="tall">
                  My journey began with completing the Full Stack Web Development program at UCF, 
                  which opened the door to my current role as a Lead Full Stack AI Engineer at Capco. 
                  There, I've had the privilege of working with top-tier financial clients, architecting 
                  AI solutions that have directly contributed to generating over $2 million in new business.
                </Text>

                <Text color="gray.300" lineHeight="tall">
                  What drives me most is the intersection of education and innovation. Through my role 
                  at edX/2U, I've been able to mentor over 200 aspiring developers across multiple cohorts, 
                  maintaining a 95%+ student satisfaction rating. There's nothing quite like seeing someone 
                  grasp a complex concept and apply it to build something meaningful.
                </Text>

                <Text color="gray.300" lineHeight="tall">
                  My expertise spans from developing autonomous AI agents for portfolio analysis to 
                  implementing secure RAG patterns with AWS Bedrock and Azure OpenAI. I'm passionate 
                  about pushing the boundaries of what's possible when you combine traditional full-stack 
                  development with cutting-edge AI technologies.
                </Text>

                <Divider borderColor="gray.700" />

                <VStack spacing={4} align="start" w="full">
                  <Heading size="md" color="brand.400">
                    What I Bring
                  </Heading>
                  <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4} w="full">
                    {[
                      'Full-Stack Development',
                      'AI/ML Integration',
                      'System Architecture',
                      'Performance Optimization',
                      'Team Leadership',
                      'Problem Solving',
                    ].map((item) => (
                      <Badge
                        key={item}
                        px={3}
                        py={2}
                        bg="gray.800"
                        color="brand.400"
                        fontSize="sm"
                        borderRadius="md"
                        textAlign="center"
                      >
                        {item}
                      </Badge>
                    ))}
                  </Grid>
                </VStack>
              </VStack>
            </AnimatedSection>
          </GridItem>

          {/* Right Column - Skills */}
          <GridItem>
            <AnimatedSection delay={0.4}>
              <VStack spacing={8}>
                <Heading size="lg" color="brand.400" alignSelf="start">
                  Technical Skills
                </Heading>
                
                <VStack spacing={4} w="full">
                  {skills.map((skill, index) => (
                    <Box key={skill.name} w="full">
                      <HStack justify="space-between" mb={2}>
                        <Text fontSize="sm" color="gray.300">
                          {skill.name}
                        </Text>
                        <Text fontSize="sm" color="brand.400">
                          {skill.level}%
                        </Text>
                      </HStack>
                      <Box
                        w="full"
                        h="6px"
                        bg="gray.700"
                        borderRadius="full"
                        overflow="hidden"
                      >
                        <MotionBox
                          h="full"
                          bg="linear-gradient(90deg, #2563eb 0%, #4f8fff 100%)"
                          borderRadius="full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </Box>
                    </Box>
                  ))}
                </VStack>
              </VStack>
            </AnimatedSection>
          </GridItem>
        </Grid>

        {/* Experience Section */}
        <AnimatedSection delay={0.6}>
          <VStack spacing={8} mb={20}>
            <Heading
              size="xl"
              textAlign="center"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
            >
              Professional Experience
            </Heading>
            
            <VStack spacing={6} w="full">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  w="full"
                  bg="gray.800"
                  borderColor="gray.700"
                  _hover={{
                    borderColor: 'brand.400',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.3s ease"
                >
                  <CardBody>
                    <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={4}>
                      <VStack align="start" spacing={2}>
                        <Heading size="md" color="brand.400">
                          {exp.role}
                        </Heading>
                        <Text fontSize="lg" color="gray.300" fontWeight="semibold">
                          {exp.company}
                        </Text>
                        <Text color="gray.400">
                          {exp.description}
                        </Text>
                      </VStack>
                      <VStack align={{ base: 'start', md: 'end' }}>
                        <Badge
                          px={3}
                          py={1}
                          bg="brand.900"
                          color="brand.400"
                          fontSize="sm"
                        >
                          {exp.period}
                        </Badge>
                      </VStack>
                    </Grid>
                  </CardBody>
                </Card>
              ))}
            </VStack>
          </VStack>
        </AnimatedSection>

        {/* Fun Facts Section */}
        <AnimatedSection delay={0.8}>
          <Box bg="gray.900" p={8} borderRadius="xl" border="1px solid" borderColor="gray.700">
            <VStack spacing={6}>
              <Heading size="lg" color="brand.400">
                Fun Facts
              </Heading>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} w="full">
                <VStack spacing={2}>
                  <Text fontSize="2xl" color="brand.400" fontWeight="bold">
                    $2M+
                  </Text>
                  <Text color="gray.300" textAlign="center">
                    Business Generated
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="2xl" color="brand.400" fontWeight="bold">
                    200+
                  </Text>
                  <Text color="gray.300" textAlign="center">
                    Students Mentored
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="2xl" color="brand.400" fontWeight="bold">
                    8+
                  </Text>
                  <Text color="gray.300" textAlign="center">
                    AI Apps Built
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="2xl" color="brand.400" fontWeight="bold">
                    95%+
                  </Text>
                  <Text color="gray.300" textAlign="center">
                    Student Satisfaction
                  </Text>
                </VStack>
              </Grid>
            </VStack>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default AboutPage;