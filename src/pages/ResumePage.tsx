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
import { Link } from 'react-router-dom';
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
    description: 'View Gerard Mennella\'s professional resume featuring experience as Lead Full Stack AI Engineer at Capco and Instructional Specialist at edX/2U.',
    keywords: 'Gerard Mennella, Resume, CV, Capco, edX, Lead AI Engineer, Full Stack Developer, Gen AI Engineer, Experience, Skills, Employment',
    ogTitle: 'Gerard Mennella Resume - Lead Full Stack AI Engineer',
    ogDescription: 'Professional resume showcasing leadership in AI engineering at top-tier financial firms and educational excellence in full-stack development.'
  });
  const experiences = [
    {
      role: 'Lead Full Stack AI Engineer',
      company: 'Capco',
      period: 'May 2023 - Present',
      location: 'Remote',
      achievements: [
        'Served as lead AI engineering consultant for top-tier financial clients, including a major Wealth and Asset Management firm',
        'Architected and led the development of 8+ full-stack AI applications (React, Node.js, LLMs), directly generating over $2M in new business opportunities',
        'Developed and integrated autonomous AI agents into client platforms to automate portfolio analysis, client reporting, and internal workflows',
        'Engineered and implemented secure Retrieval-Augmented Generation (RAG) patterns using AWS Bedrock and Azure OpenAI for sensitive financial data',
        'Drove a 40% improvement in process automation for client operations by pioneering innovative natural language processing applications',
        'Directed international, cross-functional teams in an Agile/Scrum environment, managing stakeholder relationships and ensuring timely delivery of localized AI solutions',
        'Received a SPOT award for consistently exceeding client expectations through the delivery of high-impact AI solutions',
      ],
    },
    {
      role: 'Full-Stack Web Development Instructional Specialist',
      company: 'edX/2U',
      period: 'November 2022 - July 2025',
      location: 'Remote',
      achievements: [
        'Mentor 200+ students across multiple cohorts in mastering full-stack MERN development, providing technical leadership and 1-on-1 guidance',
        'Conduct comprehensive code reviews for student projects, enforcing industry best practices in React, Node.js, and data structures',
        'Develop and deliver supplemental curriculum content to enhance student learning outcomes',
        'Maintain 95%+ student satisfaction ratings through personalized instruction and technical support',
      ],
    },
  ];

  const education = [
    {
      degree: 'Full Stack Web Development Certificate',
      school: 'University of Central Florida Coding Boot Camp (edX/2U)',
      period: '2022',
      gpa: '',
      honors: 'Completed',
    },
  ];

  const certifications = [
    'Full-Stack Web Development Certificate - UCF Coding Boot Camp',
    'Certified Full-Stack Web Development Instructional Specialist - edX/2U',
    'Certified Gen AI Specialist - edX/2U'
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
              lineHeight="1.3"
              py={2}
            >
              Resume
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="600px">
              Full Stack Gen AI Engineer with 4+ years of experience building
              scalable web applications and AI-integrated solutions.
            </Text>
            <HStack spacing={4}>
              <Button
                as="a"
                href="/documents/Gerard-Mennella-Resume.pdf"
                download="Gerard-Mennella-Resume.pdf"
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
                as={Link}
                to="/contact"
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
                          {edu.gpa && (
                            <Badge bg="gray.700" color="gray.300">
                              GPA: {edu.gpa}
                            </Badge>
                          )}
                          {edu.honors && (
                            <Badge bg="gray.700" color="gray.300">
                              {edu.honors}
                            </Badge>
                          )}
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
                        <Text color="gray.300">📧 gerardmennella21@gmail.com</Text>
                        <Text color="gray.300">📱 (407) 848-9735</Text>
                        <Text color="gray.300">📍 Orlando, FL</Text>
                        <HStack spacing={2}>
                          <Text color="gray.300">🔗</Text>
                          <Text
                            as="a"
                            href="https://www.linkedin.com/in/gerard-mennella-68467b22b/"
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
                            href="https://github.com/gerardmennella21"
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