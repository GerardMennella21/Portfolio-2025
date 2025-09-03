# Gerard Mennella - Portfolio Website 🚀

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Chakra UI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)](https://chakra-ui.com/)

> **A modern, responsive portfolio website showcasing full-stack development and AI engineering expertise**

**🌐 Live Demo:** [gerardmennella.dev](https://gerardmennella.dev) *(coming soon)*

---

## 🎯 Overview

This is the source code for my personal portfolio website, built to showcase my work as a **Lead Full Stack AI Engineer** at Capco. The site demonstrates modern web development practices, responsive design, and professional presentation of technical projects.

### 👨‍💻 About Me
- 🔧 **Lead Full Stack AI Engineer** at Capco
- 🎓 **Full Stack Web Development Instructor** at edX/2U 
- 🤖 **AI Integration Specialist** for financial clients
- 📊 Generated **$2M+** in new business through innovative AI solutions
- 👥 Mentored **200+** students in full-stack development

---

## ✨ Features

### 🎨 **Modern Design**
- Responsive design with mobile-first approach
- Dark theme with professional brand colors
- Smooth scroll animations and micro-interactions
- Glass morphism effects and gradient backgrounds

### 🔧 **Technical Highlights**
- **TypeScript** for type safety and developer experience
- **React 19** with modern hooks and patterns
- **Framer Motion** for buttery-smooth animations
- **Chakra UI v2** component library with custom theming
- **React Router** for seamless client-side navigation
- **EmailJS** integration for contact form functionality
- **Intersection Observer API** for scroll-triggered animations
- **Custom SCSS** with modern CSS techniques

### 📱 **User Experience**
- **SEO Optimized** with dynamic meta tags and Open Graph
- **Accessibility Focused** with ARIA labels and keyboard navigation
- **Performance Optimized** with code splitting and lazy loading
- **Cross-browser Compatible** with modern web standards
- **Professional Contact Form** with direct email delivery

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/gerardmennella21/my-ts-react-portfolio.git

# Navigate to project directory
cd my-ts-react-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Configure EmailJS credentials in `.env`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Set up your EmailJS account at [emailjs.com](https://www.emailjs.com/)

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation with scroll effects
│   └── Footer.tsx      # Site footer with links
├── pages/              # Main application pages
│   ├── HomePage.tsx    # Landing page with hero section
│   ├── AboutPage.tsx   # Professional background
│   ├── ResumePage.tsx  # Experience and skills
│   ├── ProjectsPage.tsx# Project showcase with carousel
│   └── ContactPage.tsx # Contact form with EmailJS
├── hooks/              # Custom React hooks
│   ├── useScrollAnimation.ts  # Intersection Observer hook
│   ├── useScrollToTop.ts     # Page navigation scroll
│   └── usePageSEO.ts         # Dynamic SEO management
├── styles/             # Custom styling
│   └── main.scss      # Global styles and animations
└── App.tsx            # Root component with routing
```

---

## 🛠️ Technology Stack

### **Frontend Framework**
- **React 19** - Latest React with concurrent features
- **TypeScript** - Static type checking and improved DX
- **Vite** - Fast build tool with HMR

### **Styling & UI**
- **Chakra UI v2** - Modular and accessible component library
- **Framer Motion** - Production-ready motion library
- **Sass/SCSS** - Enhanced CSS with variables and mixins
- **CSS Grid & Flexbox** - Modern layout techniques

### **Routing & Navigation**
- **React Router DOM** - Declarative client-side routing
- **Custom scroll hooks** - Smooth navigation experience

### **Form & Communication**
- **EmailJS** - Client-side email sending service
- **Form validation** - Real-time input validation
- **Toast notifications** - User feedback system

### **Performance & SEO**
- **Dynamic meta tags** - SEO optimization for each page
- **Intersection Observer** - Efficient scroll animations
- **Code splitting** - Optimized bundle sizes
- **Image optimization** - Responsive image handling

### **Development Tools**
- **ESLint** - Code linting with TypeScript rules
- **Prettier** - Code formatting (via ESLint)
- **Git hooks** - Pre-commit quality checks

---

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build locally

# Production
npm run build        # Build for production
npm run lint         # Run ESLint checks

# Deployment
npm run deploy       # Deploy to hosting platform
```

---

## 🎨 Design System

### **Color Palette**
```scss
$brand-primary: #2563eb;    // Primary blue
$brand-secondary: #4f8fff;  // Light blue
$dark-bg: #1a1a1a;         // Dark background
$card-bg: #2d3748;         // Card background
$text-primary: #ffffff;     // Primary text
$text-secondary: #a0aec0;   // Secondary text
```

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Headings**: Font weights 600-800
- **Body**: Font weight 400
- **Responsive scaling**: clamp() for fluid typography

### **Animations**
- **Scroll animations**: Fade-in with slide effects
- **Hover states**: Subtle scale and color transitions  
- **Page transitions**: Smooth route changes
- **Loading states**: Professional loading indicators

---

## 🚀 Deployment

### **Production Build**
```bash
npm run build
```

### **Hosting Recommendations**
- **Netlify** - Automatic deployments with form handling
- **Vercel** - Optimized for React applications
- **GitHub Pages** - Free hosting for static sites

### **Environment Variables for Production**
Ensure these are set in your hosting platform:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

---

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Bundle Size**: <700KB (gzipped)

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Contact

**Gerard Mennella** - Lead Full Stack AI Engineer

- 📧 **Email**: [gerardmennella21@gmail.com](mailto:gerardmennella21@gmail.com)
- 💼 **LinkedIn**: [gerard-mennella](https://www.linkedin.com/in/gerard-mennella-68467b22b/)
- 🐙 **GitHub**: [gerardmennella21](https://github.com/gerardmennella21)
- 📱 **Phone**: (407) 848-9735

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Chakra UI Team** - For the excellent component library
- **Framer Motion** - For smooth animation capabilities
- **EmailJS** - For reliable email service integration
- **Vite Team** - For the blazing-fast development experience
- **React Community** - For continuous innovation and support

---

<div align="center">
  <p><strong>Built with ❤️ by Gerard Mennella</strong></p>
  <p>Showcasing the intersection of AI, full-stack development, and modern web technologies</p>
</div>