"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Terminal, Layers, Palette, Code, Database, Cloud,
  SparkleIcon, Zap, Rocket, ArrowRight, Smartphone, Mail, MapPin
} from "lucide-react";

const WebApplicationsFrameworks = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for slide animations
  useEffect(() => {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      /* Animation styles */
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-slide-up {
        animation: slideUp 0.8s ease-out forwards;
      }
      
      .section-slide {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease-out;
      }
      
      .section-slide.active {
        opacity: 1;
        transform: translateY(0);
      }
      
      @media (max-width: 768px) {
        .section-slide {
          transform: translateY(30px);
        }
      }
      
      /* Background cover fix */
      .hero-bg {
        background-attachment: scroll !important;
      }
      
      @media (min-width: 768px) {
        .hero-bg {
          background-attachment: fixed !important;
        }
      }
      
      /* Responsive text */
      @media (max-width: 640px) {
        .text-responsive-8xl {
          font-size: 2.5rem;
          line-height: 2.5rem;
        }
        .text-responsive-6xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        .text-responsive-5xl {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        .text-responsive-4xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .text-responsive-3xl {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        .text-responsive-2xl {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }
      
      @media (min-width: 641px) and (max-width: 768px) {
        .text-responsive-8xl {
          font-size: 3.5rem;
          line-height: 1;
        }
        .text-responsive-6xl {
          font-size: 2.5rem;
          line-height: 1;
        }
        .text-responsive-5xl {
          font-size: 2rem;
          line-height: 2.25rem;
        }
      }
      
      @media (min-width: 769px) {
        .text-responsive-8xl {
          font-size: 5rem;
          line-height: 1;
        }
        .text-responsive-6xl {
          font-size: 3.75rem;
          line-height: 1;
        }
      }
    `;
    document.head.appendChild(style);

    // Setup intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up', 'active');
            const index = parseInt(entry.target.dataset.index);
            setActiveSection(index);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      document.head.removeChild(style);
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  // Scroll to section function
  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      window.scrollTo({
        top: sectionRefs.current[index].offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Web Applications & Frameworks Services Data
  const webAppServices = [
    {
      id: 1,
      title: "Laravel (PHP), Python (Django Flask) Development",
      description: "Building secure, scalable, and high-performing web applications with modern frameworks.",
      stats: "200+ Projects",
      color: "from-orange-500 to-orange-600",
      iconComponent: <Terminal className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["PHP Development", "Python Backend", "API Integration"]
    },
    {
      id: 2,
      title: "MERN & MEAN Stack Applications",
      description: "Creating dynamic, fast, and scalable full-stack web solutions with modern JavaScript frameworks.",
      stats: "Full Stack",
      color: "from-blue-500 to-cyan-500",
      iconComponent: <Layers className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["React/Node.js", "MongoDB", "Express.js"]
    },
    {
      id: 3,
      title: "Website & App UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces that enhance user experience and engagement.",
      stats: "Award Winning",
      color: "from-orange-500 to-amber-500",
      iconComponent: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["UI Design", "UX Research", "Prototyping"]
    },
    {
      id: 4,
      title: "Custom API & Portal Development",
      description: "Developing seamless, secure, and efficient custom integrations and web portals.",
      stats: "Secure APIs",
      color: "from-blue-500 to-indigo-500",
      iconComponent: <Code className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["REST APIs", "GraphQL", "Web Services"]
    },
    {
      id: 5,
      title: "Database Integration & Backend Systems",
      description: "Ensuring smooth data flow with robust backend architecture and database management.",
      stats: "Optimized DB",
      color: "from-orange-500 to-red-500",
      iconComponent: <Database className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["MySQL/PostgreSQL", "Database Design", "Data Security"]
    },
    {
      id: 6,
      title: "Cloud Integration & Deployment",
      description: "Deploying applications to cloud platforms with scalable infrastructure and monitoring.",
      stats: "Cloud Ready",
      color: "from-blue-500 to-purple-500",
      iconComponent: <Cloud className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["AWS/Azure", "CI/CD", "DevOps"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background Particles - Whole Page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section - With Background Image */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        data-index="0"
        className="section-slide hero-bg relative pt-20 pb-20 md:pb-32 px-4 md:px-6 min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "url('/images/programming-background-collage (1).jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark Overlay for better readability - Hero Section Only */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 to-gray-950/50"></div>
        
        {/* Animated Background - Hero Section Only */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative container mx-auto max-w-6xl z-10 px-4 sm:px-6">
          {/* Web Applications Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 border border-gray-700">
            <SparkleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
            <span className="text-orange-300 text-xs sm:text-sm font-medium">⚡ #1 Web Applications Development</span>
          </div>

          {/* 3D Text Effect - Responsive */}
          <div className="mb-4 sm:mb-6">
            {/* Main 3D Text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 leading-tight">
              <div className="relative">
                {/* Shadow Layer - Creates Depth */}
                <span className="absolute top-1 left-1 sm:top-2 sm:left-2 text-orange-900/60 select-none text-responsive-8xl">
                  Web Applications.
                </span>
              
                {/* Middle Layer - Creates Thickness */}
                <span className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 text-orange-800/70 select-none text-responsive-8xl">
                  Web Applications.
                </span>
                
                {/* Main Text Layer */}
                <span className="relative block text-orange-500 text-responsive-8xl">
                  Web Applications.
                </span>
              </div>
            </h1>
            
            {/* Subtitle with 3D Effect */}
            <div className="mt-2 sm:mt-4">
              <div className="relative inline-block">
                {/* Shadow Layer */}
                <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 text-blue-900/50 font-bold select-none text-responsive-6xl">
                  FRAMEWORKS.
                </span>
                
                {/* Middle Layer */}
                <span className="absolute top-0.5 left-0.5 sm:top-0.5 sm:left-0.5 text-blue-800/60 font-bold select-none text-responsive-6xl">
                  FRAMEWORKS.
                </span>
                
                {/* Main Text Layer */}
                <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold text-responsive-6xl">
                  FRAMEWORKS.
                </span>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl bg-gray-900/70 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl border border-gray-800/50">
            We build <span className="text-orange-300 font-bold">high-performance web applications</span> using 
            modern frameworks that drive business growth worldwide with cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-xl">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Build Your App
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800/50 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-xl">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View Frameworks
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Web Applications Cards */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        data-index="1"
        className="section-slide py-12 sm:py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/50 to-gray-950/50 relative"
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4 border border-orange-500/30">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
              <span className="text-orange-300 text-xs sm:text-sm font-medium">OUR SERVICES</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Web Applications <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">Frameworks</span>
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8">
              Comprehensive web application solutions using modern frameworks and technologies
            </p>
            
            {/* Company Description */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-gray-800/50">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                Eraflip Tech is a creative technology studio driven by innovation, design, and a passion for digital excellence. 
                We specialize in crafting high-quality web applications, interactive websites, and digital solutions that blend creativity 
                with cutting-edge technology. Our team of skilled developers, artists, and strategists transforms ideas into 
                impactful digital experiences. We build lasting client partnerships by delivering reliable, scalable, and visually 
                engaging products that meet global standards. From concept to completion, Eraflip Tech empowers brands through 
                innovation, quality, and commitment.
              </p>
            </div>
          </div>

          {/* Services Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {webAppServices.map((service) => (
              <div 
                key={service.id}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Service Card */}
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 transition-all duration-500 group-hover:border-orange-500/50 group-hover:scale-[1.02] h-full">
                  {/* Icon with Animation */}
                  <div className="relative mb-3 sm:mb-4 md:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                      <div className="text-white">
                        {service.iconComponent}
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gray-900 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium text-white border border-gray-700">
                      {service.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-2 sm:mb-3 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 md:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full mt-auto text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 text-xs sm:text-sm md:text-base py-2"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Contact Us */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        data-index="2"
        className="section-slide py-12 sm:py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Section Heading */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Contact Us
            </h1>
          </div>

          {/* Two Columns Layout - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Left Column - Contact Information */}
            <div>
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  Start Your Web Application Project Today
                </h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
                  Fill out the form or reach us via the provided contact number or email to discuss your ideas and get started on your web application project with our expert team.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {/* Email */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-indigo-900/20 hover:shadow-md p-3 sm:p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-3 sm:mr-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">Email</h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base group-hover:text-white transition-colors duration-300">info@eraflip.com</p>
                  </div>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500" />
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-green-900/20 hover:to-emerald-900/20 hover:shadow-md p-3 sm:p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-3 sm:mr-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">Phone</h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base group-hover:text-white transition-colors duration-300">+92 309 7770073</p>
                  </div>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500" />
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-violet-900/20 hover:shadow-md p-3 sm:p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-3 sm:mr-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">Location</h3>
                    <p className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                      Office 1, Level #14, Arfa Software Technology Park,<br />
                      Ferozepur Road, Lahore, 54000, Pakistan
                    </p>
                  </div>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-800">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 md:mb-6">Your Details</h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">Let us know how to get back to you.</p>

                <form onSubmit={handleSubmit}>
                  {/* First Name and Last Name in same row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
                    <div className="group">
                      <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white text-sm sm:text-base group-hover:border-gray-600 transition-all duration-300"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white text-sm sm:text-base group-hover:border-gray-600 transition-all duration-300"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group mb-3 sm:mb-4 md:mb-6">
                    <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white text-sm sm:text-base group-hover:border-gray-600 transition-all duration-300"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* How Can We Help? */}
                  <div className="group mb-4 sm:mb-6">
                    <label className="block text-gray-300 text-xs sm:text-sm font-bold mb-1 sm:mb-2">
                      How Can We Help?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white text-sm sm:text-base group-hover:border-gray-600 transition-all duration-300"
                      placeholder="Comments / Questions *"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform text-sm sm:text-base"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-8 right-4 md:right-8 z-50">
        <div className="flex flex-col items-center gap-2 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full border border-gray-700">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                activeSection === index 
                  ? 'bg-orange-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebApplicationsFrameworks;