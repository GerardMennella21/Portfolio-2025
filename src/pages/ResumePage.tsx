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
  Button,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageSEO } from '../hooks/usePageSEO';
import { DownloadIcon, EmailIcon } from '@chakra-ui/icons';

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

const ResumePage: React.FC = () => {
  usePageSEO({
    title: 'Resume',
    description: 'View Gerard Mennella\'s professional resume and experience as a Full Stack Gen AI Engineer. Download CV and explore technical skills.',
    keywords: 'Gerard Mennella, Resume, CV, Full Stack Developer, Gen AI Engineer, Experience, Skills, Employment',
    ogTitle: 'Gerard Mennella Resume - Full Stack Gen AI Engineer',
    ogDescription: 'Professional resume showcasing 4+ years of experience in full-stack development and AI integration.'
  });
  const experiences = [
    {
      role: 'Senior Full Stack Gen AI Engineer',
      company: 'Tech Innovation Corp',
      period: '2022 - Present',
      location: 'Remote',
      achievements: [
        'Led development of AI-powered web applications serving 10K+ users',
        'Integrated OpenAI GPT models with React/Node.js applications',
        'Improved application performance by 40% through optimization techniques',
        'Mentored junior developers and established coding standards',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      period: '2020 - 2022',
      location: 'New York, NY',
      achievements: [
        'Built and maintained 15+ client web applications using React and Node.js',
        'Designed and implemented RESTful APIs serving millions of requests',
        'Collaborated with cross-functional teams to deliver projects on time',
        'Reduced deployment time by 60% through CI/CD pipeline implementation',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Agency',
      period: '2019 - 2020',
      location: 'Los Angeles, CA',
      achievements: [
        'Developed responsive websites for 20+ clients using React and Vue.js',
        'Improved website loading speeds by 50% through performance optimization',
        'Implemented modern UI/UX designs with attention to accessibility',
        'Worked closely with designers to translate mockups into pixel-perfect interfaces',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      gpa: '3.8/4.0',
      honors: 'Magna Cum Laude',
    },
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'OpenAI API Specialist',
    'Google Cloud Professional Developer',
    'Meta React Developer Professional',
  ];

  const skills = {
    'Programming Languages': ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
    'Frontend': ['React', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Express.js', 'FastAPI', 'Django', 'GraphQL'],
    'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB'],
    'AI/ML': ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face'],
    'Cloud & DevOps': ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  };

  return (
    <Box pt="80px" minHeight="100vh">
      <Container maxW="1200px" py={12}>
        {/* Header */}
        <AnimatedSection>
          <VStack spacing={6} textAlign="center" mb={12}>
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
            >
              Resume
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="600px">
              Full Stack Gen AI Engineer with 4+ years of experience building
              scalable web applications and AI-integrated solutions.
            </Text>
            <HStack spacing={4}>
              <Button
                leftIcon={<DownloadIcon />}
                bgGradient="linear(to-r, brand.400, brand.600)"
                color="white"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                }}
                transition="all 0.3s ease"
              >
                Download PDF
              </Button>
              <Button
                leftIcon={<EmailIcon />}
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
                Contact Me
              </Button>
            </HStack>
          </VStack>
        </AnimatedSection>

        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={12}>
          {/* Left Column */}
          <GridItem>
            {/* Experience Section */}
            <AnimatedSection delay={0.2}>
              <VStack spacing={8} align="start">
                <Heading size="lg" color="brand.400">
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
                        <VStack align="start" spacing={4}>
                          <VStack align="start" spacing={1} w="full">
                            <HStack justify="space-between" w="full" flexWrap="wrap">
                              <Heading size="md" color="brand.400">
                                {exp.role}
                              </Heading>
                              <Badge bg="brand.900" color="brand.400" px={3} py={1}>
                                {exp.period}
                              </Badge>
                            </HStack>
                            <Text fontSize="lg" color="gray.300" fontWeight="semibold">
                              {exp.company} • {exp.location}
                            </Text>
                          </VStack>
                          
                          <List spacing={2}>
                            {exp.achievements.map((achievement, idx) => (
                              <ListItem key={idx} color="gray.400" fontSize="sm">
                                • {achievement}
                              </ListItem>
                            ))}
                          </List>
                        </VStack>
                      </CardBody>
                    </Card>
                  ))}
                </VStack>
              </VStack>
            </AnimatedSection>

            {/* Education Section */}
            <AnimatedSection delay={0.4}>
              <VStack spacing={8} align="start" mt={12}>
                <Heading size="lg" color="brand.400">
                  Education
                </Heading>
                
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    w="full"
                    bg="gray.800"
                    borderColor="gray.700"
                  >
                    <CardBody>
                      <VStack align="start" spacing={2}>
                        <Heading size="md" color="brand.400">
                          {edu.degree}
                        </Heading>
                        <Text fontSize="lg" color="gray.300">
                          {edu.school}
                        </Text>
                        <HStack spacing={4}>
                          <Badge bg="brand.900" color="brand.400">
                            {edu.period}
                          </Badge>
                          <Badge bg="gray.700" color="gray.300">
                            GPA: {edu.gpa}
                          </Badge>
                          <Badge bg="gray.700" color="gray.300">
                            {edu.honors}
                          </Badge>
                        </HStack>
                      </VStack>
                    </CardBody>
                  </Card>
                ))}
              </VStack>
            </AnimatedSection>
          </GridItem>

          {/* Right Column */}
          <GridItem>
            <VStack spacing={12}>
              {/* Contact Info */}
              <AnimatedSection delay={0.3}>
                <Card w="full" bg="gray.800" borderColor="gray.700">
                  <CardBody>
                    <VStack spacing={4} align="start">
                      <Heading size="md" color="brand.400">
                        Contact Information
                      </Heading>
                      <VStack align="start" spacing={2} fontSize="sm">
                        <Text color="gray.300">📧 gerard@example.com</Text>
                        <Text color="gray.300">📱 (555) 123-4567</Text>
                        <Text color="gray.300">📍 New York, NY</Text>
                        <HStack spacing={2}>
                          <Text color="gray.300">🔗</Text>
                          <Text
                            as="a"
                            href="https://linkedin.com/in/gerardmennella"
                            color="brand.400"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            LinkedIn
                          </Text>
                        </HStack>
                        <HStack spacing={2}>
                          <Text color="gray.300">💻</Text>
                          <Text
                            as="a"
                            href="https://github.com/gerardmennella"
                            color="brand.400"
                            _hover={{ textDecoration: 'underline' }}
                          >
                            GitHub
                          </Text>
                        </HStack>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              </AnimatedSection>

              {/* Skills */}
              <AnimatedSection delay={0.5}>
                <Card w="full" bg="gray.800" borderColor="gray.700">
                  <CardBody>
                    <VStack spacing={6} align="start">
                      <Heading size="md" color="brand.400">
                        Technical Skills
                      </Heading>
                      
                      {Object.entries(skills).map(([category, skillList]) => (
                        <VStack key={category} align="start" spacing={2} w="full">
                          <Text fontWeight="semibold" color="gray.200" fontSize="sm">
                            {category}
                          </Text>
                          <Box>
                            {skillList.map((skill) => (
                              <Badge
                                key={skill}
                                mr={2}
                                mb={2}
                                px={2}
                                py={1}
                                bg="gray.700"
                                color="gray.300"
                                fontSize="xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </Box>
                        </VStack>
                      ))}
                    </VStack>
                  </CardBody>
                </Card>
              </AnimatedSection>

              {/* Certifications */}
              <AnimatedSection delay={0.7}>
                <Card w="full" bg="gray.800" borderColor="gray.700">
                  <CardBody>
                    <VStack spacing={4} align="start">
                      <Heading size="md" color="brand.400">
                        Certifications
                      </Heading>
                      
                      <VStack align="start" spacing={2}>
                        {certifications.map((cert) => (
                          <HStack key={cert} spacing={2}>
                            <Text color="brand.400" fontSize="sm">•</Text>
                            <Text color="gray.300" fontSize="sm">
                              {cert}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              </AnimatedSection>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResumePage;