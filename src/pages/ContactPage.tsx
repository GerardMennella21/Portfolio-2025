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
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Alert,
  AlertIcon,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePageSEO } from '../hooks/usePageSEO';
import { EmailIcon, PhoneIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import emailjs from '@emailjs/browser';

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

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  usePageSEO({
    title: 'Contact',
    description: 'Get in touch with Gerard Mennella. Let\'s discuss your next project, collaboration opportunities, or any questions about AI development and full-stack solutions.',
    keywords: 'Gerard Mennella, Contact, Full Stack Developer, AI Engineer, Collaboration, Projects, Hire',
    ogTitle: 'Contact Gerard Mennella - Let\'s Work Together',
    ogDescription: 'Ready to bring your ideas to life? Contact Gerard for AI development, full-stack solutions, and innovative web applications.'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration from environment variables
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Portfolio Contact',
        message: formData.message,
        to_email: 'gerardmennella21@gmail.com',
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Show success message
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for your message. I\'ll get back to you within 24 hours.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Message failed to send',
        description: 'Please try again or send an email directly to gerardmennella21@gmail.com',
        status: 'error',
        duration: 7000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'gerardmennella21@gmail.com',
      href: 'mailto:gerardmennella21@gmail.com',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '(407) 848-9735',
      href: 'tel:+14078489735',
    },
    {
      icon: ExternalLinkIcon,
      label: 'LinkedIn',
      value: 'gerard-mennella',
      href: 'https://www.linkedin.com/in/gerard-mennella-68467b22b/',
    },
    {
      icon: ExternalLinkIcon,
      label: 'GitHub',
      value: 'gerardmennella21',
      href: 'https://github.com/gerardmennella21',
    },
  ];

  return (
    <Box pt="80px" minHeight="100vh">
      <Container maxW="1200px" py={12}>
        {/* Header Section */}
        <AnimatedSection>
          <VStack spacing={6} textAlign="center" mb={16}>
            <Heading
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
              lineHeight="1.3"
              py={2}
            >
              Let's Work Together
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="800px" lineHeight="tall">
              I'm always excited to discuss new opportunities, innovative projects, and ways we can 
              bring your ideas to life. Whether you're looking for AI integration, full-stack development, 
              or technical consultation, I'd love to hear from you.
            </Text>
          </VStack>
        </AnimatedSection>

        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={12}>
          {/* Contact Form */}
          <GridItem>
            <AnimatedSection delay={0.2}>
              <Card bg="gray.800" borderColor="gray.700" border="1px solid">
                <CardBody p={8}>
                  <VStack spacing={6} align="start">
                    <Heading size="lg" color="brand.400">
                      Send Message
                    </Heading>
                    
                    <Alert status="info" bg="brand.900" borderColor="brand.600" border="1px solid">
                      <AlertIcon color="brand.400" />
                      <Text fontSize="sm" color="brand.300">
                        Your message will be sent directly to Gerard's inbox. All messages are processed securely.
                      </Text>
                    </Alert>

                    <Box as="form" onSubmit={handleSubmit} w="full">
                      <VStack spacing={4}>
                        <FormControl isRequired>
                          <FormLabel color="gray.300" fontSize="sm">
                            Your Name
                          </FormLabel>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            bg="gray.700"
                            border="1px solid"
                            borderColor="gray.600"
                            color="white"
                            _placeholder={{ color: 'gray.400' }}
                            _focus={{
                              borderColor: 'brand.400',
                              boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
                            }}
                          />
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel color="gray.300" fontSize="sm">
                            Email Address
                          </FormLabel>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            bg="gray.700"
                            border="1px solid"
                            borderColor="gray.600"
                            color="white"
                            _placeholder={{ color: 'gray.400' }}
                            _focus={{
                              borderColor: 'brand.400',
                              boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
                            }}
                          />
                        </FormControl>

                        <FormControl>
                          <FormLabel color="gray.300" fontSize="sm">
                            Subject
                          </FormLabel>
                          <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Project Discussion"
                            bg="gray.700"
                            border="1px solid"
                            borderColor="gray.600"
                            color="white"
                            _placeholder={{ color: 'gray.400' }}
                            _focus={{
                              borderColor: 'brand.400',
                              boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
                            }}
                          />
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel color="gray.300" fontSize="sm">
                            Message
                          </FormLabel>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell me about your project, goals, or any questions you have. I'd love to learn more about how we can work together!"
                            rows={6}
                            bg="gray.700"
                            border="1px solid"
                            borderColor="gray.600"
                            color="white"
                            _placeholder={{ color: 'gray.400' }}
                            _focus={{
                              borderColor: 'brand.400',
                              boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
                            }}
                            resize="vertical"
                          />
                        </FormControl>

                        <Button
                          type="submit"
                          size="lg"
                          w="full"
                          bgGradient="linear(to-r, brand.400, brand.600)"
                          color="white"
                          isLoading={isSubmitting}
                          loadingText="Sending Message..."
                          _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                          }}
                          transition="all 0.3s ease"
                        >
                          Send Message
                        </Button>
                      </VStack>
                    </Box>
                  </VStack>
                </CardBody>
              </Card>
            </AnimatedSection>
          </GridItem>

          {/* Contact Information */}
          <GridItem>
            <VStack spacing={8}>
              <AnimatedSection delay={0.3}>
                <Card w="full" bg="gray.800" borderColor="gray.700" border="1px solid">
                  <CardBody p={6}>
                    <VStack spacing={6} align="start">
                      <Heading size="md" color="brand.400">
                        Contact Information
                      </Heading>
                      
                      <VStack spacing={4} w="full">
                        {contactInfo.map((contact, index) => (
                          <HStack
                            key={index}
                            spacing={4}
                            w="full"
                            p={3}
                            borderRadius="md"
                            bg="gray.700"
                            _hover={{ bg: 'gray.600' }}
                            transition="all 0.3s ease"
                          >
                            <Box color="brand.400">
                              <contact.icon />
                            </Box>
                            <VStack spacing={0} align="start" flex={1}>
                              <Text fontSize="sm" color="gray.400">
                                {contact.label}
                              </Text>
                              <Link
                                href={contact.href}
                                isExternal={contact.href.startsWith('http')}
                                color="gray.200"
                                fontSize="sm"
                                _hover={{ color: 'brand.400' }}
                                transition="color 0.3s ease"
                              >
                                {contact.value}
                              </Link>
                            </VStack>
                          </HStack>
                        ))}
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              </AnimatedSection>

              {/* Availability Card */}
              <AnimatedSection delay={0.5}>
                <Card w="full" bg="gray.800" borderColor="gray.700" border="1px solid">
                  <CardBody p={6}>
                    <VStack spacing={4} align="start">
                      <Heading size="md" color="brand.400">
                        Availability
                      </Heading>
                      
                      <VStack spacing={3} align="start">
                        <HStack spacing={2}>
                          <Box w={3} h={3} bg="green.400" borderRadius="full" />
                          <Text fontSize="sm" color="gray.300">
                            Available for new projects
                          </Text>
                        </HStack>
                        
                        <Text fontSize="sm" color="gray.400">
                          Response time: Within 24 hours
                        </Text>
                        
                        <Text fontSize="sm" color="gray.400">
                          Time zone: EST (Orlando, FL)
                        </Text>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              </AnimatedSection>

              {/* Services Card */}
              <AnimatedSection delay={0.7}>
                <Card w="full" bg="gray.800" borderColor="gray.700" border="1px solid">
                  <CardBody p={6}>
                    <VStack spacing={4} align="start">
                      <Heading size="md" color="brand.400">
                        Services
                      </Heading>
                      
                      <VStack spacing={2} align="start">
                        {[
                          'AI Integration & Development',
                          'Full-Stack Web Applications',
                          'Technical Consultation',
                          'Code Reviews & Mentoring',
                          'API Development',
                          'Database Design',
                        ].map((service) => (
                          <HStack key={service} spacing={2}>
                            <Text color="brand.400" fontSize="sm">•</Text>
                            <Text color="gray.300" fontSize="sm">
                              {service}
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

        {/* Call to Action */}
        <AnimatedSection delay={0.9}>
          <Box
            bg="gray.900"
            p={8}
            borderRadius="xl"
            border="1px solid"
            borderColor="gray.700"
            textAlign="center"
            mt={16}
          >
            <VStack spacing={4}>
              <Heading size="lg" color="brand.400">
                Ready to Get Started?
              </Heading>
              <Text color="gray.300" maxW="600px">
                Whether you're looking to integrate AI into your existing systems, build a new 
                application from scratch, or need technical guidance, I'm here to help turn your 
                vision into reality.
              </Text>
              <Button
                size="lg"
                bgGradient="linear(to-r, brand.400, brand.600)"
                color="white"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                }}
                transition="all 0.3s ease"
              >
                Start the Conversation
              </Button>
            </VStack>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default ContactPage;