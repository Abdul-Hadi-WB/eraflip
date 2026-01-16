"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft, ChevronRight, Star, Play, Download, 
  Gamepad2, Sparkles, Zap, Headphones, Code, 
  Users, Award, Rocket, Shield, Globe,
  Smartphone, Monitor, Cloud, Terminal,
  Volume2, Palette, Cpu, BarChart3,
  TrendingUp, Clock, Target, ShieldCheck,
  Heart, ThumbsUp, GamepadIcon, Trophy,
  SparkleIcon, MessageSquare, Calendar,
  ArrowRight, ExternalLink, Brain,
  Layers, Database, Cctv, Server,
  Mail, MapPin, Menu, X
} from "lucide-react";

// Import images
import Img1 from "../../../../public/images/Group-2024-06-28T151001.065.png";
import Img2 from "../../../../public/images/Group-2024-06-28T150957.236.png";
import Img3 from "../../../../public/images/Group-2024-06-28T150953.569.png";
import Img4 from "../../../../public/images/Group-2024-06-28T150950.363.png";
import Img5 from "../../../../public/images/Group-2024-06-28T150946.903.png";
import Img6 from "../../../../public/images/Group-2024-06-28T150939.481.png";

const WebDevelopment = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // Setup intersection observer for slide animations ONLY
  useEffect(() => {
    // Clean scrollbar - remove any custom styling
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    
    // Add only animation styles
    const style = document.createElement('style');
    style.textContent = `
      /* Animation styles ONLY - No scrollbar styling */
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
      
      /* Fix for background image */
      .hero-section {
        background-attachment: scroll !important;
      }
      
      @media (min-width: 768px) {
        .hero-section {
          background-attachment: fixed !important;
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

  // Web Development Services Data
  const webServices = [
    {
      id: 1,
      title: "Custom Website Design & Development",
      description: "Designing unique, responsive websites that elevate brands and engage users with cutting-edge technology.",
      icon: Img1,
      stats: "500+ Websites",
      color: "from-orange-500 to-orange-600",
      iconComponent: <Code className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Responsive Design", "SEO Optimized", "Cross-browser"]
    },
    {
      id: 2,
      title: "E-commerce Development Solutions",
      description: "Building powerful e-commerce platforms with secure payment gateways and seamless shopping experiences.",
      icon: Img2,
      stats: "Award Winning",
      color: "from-blue-500 to-cyan-500",
      iconComponent: <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Payment Integration", "Inventory Management", "Secure Checkout"]
    },
    {
      id: 3,
      title: "SEO-Friendly Website Optimization",
      description: "Optimizing websites for higher search rankings, faster loading speeds, and better user experience.",
      icon: Img3,
      stats: "1000+ Projects",
      color: "from-orange-500 to-amber-500",
      iconComponent: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["SEO Audit", "Speed Optimization", "Content Strategy"]
    },
    {
      id: 4,
      title: "Landing Page & Portfolio Development",
      description: "Creating high-converting landing pages and stunning portfolios that showcase your brand effectively.",
      icon: Img4,
      stats: "Optimized Performance",
      color: "from-blue-500 to-indigo-500",
      iconComponent: <Layers className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["High Conversion", "Mobile First", "Analytics Integrated"]
    },
    {
      id: 5,
      title: "Website Revamp & Maintenance",
      description: "Modernizing existing websites with fresh designs and providing reliable maintenance solutions.",
      icon: Img5,
      stats: "24/7 Support",
      color: "from-orange-500 to-red-500",
      iconComponent: <RefreshCw className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Regular Updates", "Security Patches", "Backup Services"]
    },
    {
      id: 6,
      title: "Hosting, Domain & Security Setup",
      description: "Providing comprehensive hosting solutions, domain management, and security configurations.",
      icon: Img6,
      stats: "99.9% Uptime",
      color: "from-blue-500 to-purple-500",
      iconComponent: <Server className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["SSL Certificates", "Cloud Hosting", "DDoS Protection"]
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

      {/* Hero Section - With Background Image and Slide Effect */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        data-index="0"
        className="hero-section relative pt-20 pb-20 md:pb-32 px-4 md:px-6 min-h-[90vh] flex items-center section-slide"
        style={{
          backgroundImage: "url('/images/html-css-collage-concept.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: '100%',
          overflow: 'hidden'
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

        <div className="relative container mx-auto max-w-6xl z-10">
          {/* Web Development Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 md:mb-8 border border-gray-700">
            <SparkleIcon className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">🚀 #1 Web Development Studio</span>
          </div>

          {/* 3D Text Effect - Responsive */}
          <div className="mb-6 md:mb-8">
            {/* Main 3D Text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 md:mb-4 leading-tight">
              <div className="relative">
                {/* Shadow Layer - Creates Depth */}
                <span className="absolute top-1 left-1 md:top-2 md:left-2 text-orange-900/60 select-none">
                  Web Development.
                </span>
              
                {/* Middle Layer - Creates Thickness */}
                <span className="absolute top-0.5 left-0.5 md:top-1 md:left-1 text-orange-800/70 select-none">
                  Web Development.
                </span>
                
                {/* Main Text Layer */}
                <span className="relative block text-orange-500">
                  Web Development.
                </span>
              </div>
            </h1>
            
            {/* Subtitle with 3D Effect */}
            <div className="mt-4 md:mt-6">
              <div className="relative inline-block">
                {/* Shadow Layer */}
                <span className="absolute top-1 left-1 md:top-1.5 md:left-1.5 text-blue-900/50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold select-none">
                  CREATE. LAUNCH.
                </span>
                
                {/* Middle Layer */}
                <span className="absolute top-0.5 left-0.5 md:top-0.5 md:left-0.5 text-blue-800/60 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold select-none">
                  CREATE. LAUNCH.
                </span>
                
                {/* Main Text Layer */}
                <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  CREATE. LAUNCH.
                </span>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 max-w-3xl">
            We build <span className="text-orange-300 font-bold">high-performance web solutions</span> that 
            drive business growth worldwide with cutting-edge technology and creative innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 md:mb-16">
            <Button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl">
              <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Launch Your Website
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800/50 px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl">
              <Code className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Web Development Cards with Slide Effect */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        data-index="1"
        className="section-slide py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/50 to-gray-950/50 relative"
      >
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 px-4 py-2 rounded-full mb-4 border border-orange-500/30">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">OUR SERVICES</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Web Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">Solutions</span>
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8">
              Comprehensive web solutions from concept to launch and beyond
            </p>
            
            {/* Company Description */}
            <p className="text-gray-400 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              Eraflip Tech is a creative technology studio driven by innovation, design, and a passion for digital excellence. 
              We specialize in crafting high-quality web applications, interactive websites, and digital solutions that blend creativity 
              with cutting-edge technology. Our team of skilled developers, artists, and strategists transforms ideas into 
              impactful digital experiences. We build lasting client partnerships by delivering reliable, scalable, and visually 
              engaging products that meet global standards. From concept to completion, Eraflip Tech empowers brands through 
              innovation, quality, and commitment.
            </p>
          </div>

          {/* Services Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {webServices.map((service) => (
              <div 
                key={service.id}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Service Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 md:p-6 transition-all duration-500 group-hover:border-orange-500/50 group-hover:scale-[1.02] h-full">
                  {/* Icon with Animation */}
                  <div className="relative mb-5 md:mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                      <div className="text-white">
                        {service.iconComponent}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gray-900 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium text-white border border-gray-700">
                      {service.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full mt-auto text-gray-400 hover:text-orange-400 hover:bg-gray-800/50 text-sm md:text-base"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Contact Us with Slide Effect */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        data-index="2"
        className="section-slide py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Contact Us
            </h1>
          </div>

          {/* Two Columns Layout - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Information */}
            <div>
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                  Start Your Web Project Today
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8">
                  Fill out the form or reach us via the provided contact number or email to discuss your ideas and get started on your web project with our expert team.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 md:space-y-6">
                {/* Email */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-indigo-900/20 hover:shadow-md p-3 md:p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-3 md:mr-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">Email</h3>
                    <p className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors duration-300">info@eraflip.com</p>
                  </div>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-green-900/20 hover:to-emerald-900/20 hover:shadow-md p-3 md:p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-3 md:mr-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">Phone</h3>
                    <p className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors duration-300">+92 309 7770073</p>
                  </div>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-violet-900/20 hover:shadow-md p-3 md:p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-3 md:mr-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">Location</h3>
                    <p className="text-gray-300 text-xs md:text-sm group-hover:text-white transition-colors duration-300">
                      Office 1, Level #14, Arfa Software Technology Park,<br />
                      Ferozepur Road, Lahore, 54000, Pakistan
                    </p>
                  </div>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-5 md:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-800">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Your Details</h3>
                <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">Let us know how to get back to you.</p>

                <form onSubmit={handleSubmit}>
                  {/* First Name and Last Name in same row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    <div className="group">
                      <label className="block text-gray-300 text-xs md:text-sm font-bold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white text-sm md:text-base group-hover:border-gray-600 transition-all duration-300"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-gray-300 text-xs md:text-sm font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white text-sm md:text-base group-hover:border-gray-600 transition-all duration-300"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group mb-4 md:mb-6">
                    <label className="block text-gray-300 text-xs md:text-sm font-bold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white text-sm md:text-base group-hover:border-gray-600 transition-all duration-300"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* How Can We Help? */}
                  <div className="group mb-4 md:mb-6">
                    <label className="block text-gray-300 text-xs md:text-sm font-bold mb-2">
                      How Can We Help?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white text-sm md:text-base group-hover:border-gray-600 transition-all duration-300"
                      placeholder="Comments / Questions *"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform text-sm md:text-base"
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

// ShoppingCart and RefreshCw icons
const ShoppingCart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
);

const RefreshCw = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
  </svg>
);

export default WebDevelopment;