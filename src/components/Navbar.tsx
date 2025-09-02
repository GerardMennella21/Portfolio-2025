import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isActive, onClick }) => (
  <Box
    as={Link}
    to={to}
    onClick={onClick}
    px={3}
    py={2}
    rounded="md"
    fontSize="sm"
    fontWeight="500"
    color={isActive ? "brand.400" : "gray.300"}
    position="relative"
    transition="all 0.3s ease"
    _hover={{
      color: "brand.300",
      transform: "translateY(-2px)",
    }}
  >
    {children}
    {isActive && (
      <MotionBox
        position="absolute"
        bottom="-2px"
        left="50%"
        width="20px"
        height="2px"
        bg="brand.400"
        borderRadius="1px"
        initial={{ width: 0, x: "-50%" }}
        animate={{ width: "20px", x: "-50%" }}
        transition={{ duration: 0.3 }}
      />
    )}
  </Box>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={isScrolled ? "rgba(10, 10, 10, 0.9)" : "transparent"}
      backdropFilter={isScrolled ? "blur(10px)" : "none"}
      borderBottom={isScrolled ? "1px solid" : "none"}
      borderColor="gray.700"
      transition={{ duration: 0.3 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none" }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        py={4}
        align="center"
        justify="space-between"
      >
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Text
            as={Link}
            to="/"
            fontSize="xl"
            fontWeight="bold"
            bgGradient="linear(to-r, brand.400, brand.600)"
            bgClip="text"
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.2s ease"
          >
            Gerard Mennella
          </Text>
        </MotionBox>

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item, index) => (
            <MotionBox
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <NavLink
                to={item.path}
                isActive={location.pathname === item.path}
              >
                {item.name}
              </NavLink>
            </MotionBox>
          ))}
        </HStack>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          bg="transparent"
          color="gray.300"
          _hover={{ bg: "gray.700", color: "white" }}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white">
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4} mt={8}>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  isActive={location.pathname === item.path}
                  onClick={onClose}
                >
                  {item.name}
                </NavLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  );
};

export default Navbar;