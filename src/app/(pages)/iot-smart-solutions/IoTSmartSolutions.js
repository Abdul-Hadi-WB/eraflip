"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SparkleIcon, Zap, Rocket, ArrowRight, MessageCircle,
  Smartphone as SmartphoneIcon, BarChart3, Cpu as CpuIcon,
  CloudIcon, Mail, MapPin
} from "lucide-react";

const IoTSmartSolutions = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // Refs for sections
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  
  // Animation hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.2 });

  useEffect(() => {
    // Check for mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
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
  };

  // Animation variants
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // IoT Services Data
  const iotServices = [
    {
      id: 1,
      title: "IoT Device Integration & App Control",
      description: "Smart device connectivity with unified app control for effortless automation and management.",
      stats: "Connected",
      color: "from-orange-500 to-orange-600",
      iconComponent: <SmartphoneIcon className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Device Integration", "App Control", "Automation"]
    },
    {
      id: 2,
      title: "Real-Time Monitoring Dashboards",
      description: "Monitor systems, devices, and operations in real time with powerful data-driven dashboards.",
      stats: "Real-Time",
      color: "from-blue-500 to-cyan-500",
      iconComponent: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Live Monitoring", "Data Analytics", "Custom Dashboards"]
    },
    {
      id: 3,
      title: "Embedded System Development",
      description: "Custom embedded hardware and firmware development for efficient, real-time systems.",
      stats: "Embedded",
      color: "from-orange-500 to-amber-500",
      iconComponent: <CpuIcon className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Hardware Design", "Firmware Development", "Real-Time Systems"]
    },
    {
      id: 4,
      title: "Cloud Connectivity & Data Analytics",
      description: "Integrating smart devices with the cloud while transforming data into actionable business intelligence.",
      stats: "Cloud Based",
      color: "from-blue-500 to-indigo-500",
      iconComponent: <CloudIcon className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Cloud Integration", "Data Analytics", "Business Intelligence"]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section - With Background Image */}
      <motion.section 
        ref={heroRef}
        className="relative pt-16 md:pt-20 pb-20 md:pb-32 px-4 md:px-6 min-h-[85vh] md:min-h-[90vh] flex items-center justify-center w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/rm373-15.jpg')",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/60 to-gray-950/70"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-blue-900/15 to-purple-900/10"></div>

        <div className="relative container mx-auto max-w-6xl z-10 px-4 sm:px-6 w-full">
          {/* IoT Smart Solutions Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 md:mb-8 border border-gray-700"
            variants={slideUpVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <SparkleIcon className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">📡 #1 IoT Smart Solutions</span>
          </motion.div>

          {/* 3D Text Effect */}
          <motion.div 
            className="mb-6 md:mb-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 leading-tight"
              variants={slideUpVariants}
            >
              <div className="relative">
                <span className="absolute top-1 sm:top-2 left-1 sm:left-2 text-orange-900/40 select-none">
                  IoT Smart.
                </span>
                <span className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 text-orange-800/50 select-none">
                  IoT Smart.
                </span>
                <span className="relative block text-orange-500">
                  IoT Smart.
                </span>
              </div>
            </motion.h1>
            
            {/* Subtitle with 3D Effect */}
            <motion.div 
              className="mt-4"
              variants={slideUpVariants}
            >
              <div className="relative inline-block">
                <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 text-blue-900/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold select-none">
                  SOLUTIONS
                </span>
                <span className="absolute top-0.5 left-0.5 sm:top-0.5 sm:left-0.5 text-blue-800/50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold select-none">
                  SOLUTIONS
                </span>
                <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  SOLUTIONS
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 max-w-3xl bg-gray-900/70 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-800/50"
            variants={slideUpVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            We build <span className="text-orange-300 font-bold">intelligent connected systems</span> that 
            automate processes, monitor operations, and transform data into actionable insights worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 mb-12 md:mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <Button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-xl w-full sm:w-auto">
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Start IoT Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-gray-700 text-orange-600 hover:bg-gray-800/80 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-xl w-full sm:w-auto">
              <MessageCircle className="w-5 h-5 mr-2" />
              View Solutions
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        ref={servicesRef}
        className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/50 to-gray-950/50 w-full"
        initial="hidden"
        animate={isServicesInView ? "visible" : "hidden"}
        variants={slideUpVariants}
      >
        <div className="container mx-auto max-w-6xl w-full">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-10 md:mb-16 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 px-4 py-2 rounded-full mb-4 border border-orange-500/30 backdrop-blur-sm"
              variants={slideUpVariants}
            >
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">OUR SERVICES</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
              variants={slideUpVariants}
            >
              IoT Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">Solutions</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8 bg-gray-900/70 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-800/50"
              variants={slideUpVariants}
            >
              Comprehensive IoT solutions for automation, monitoring, and intelligent connectivity
            </motion.p>
            
            <motion.div 
              className="bg-gray-900/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-gray-800/50"
              variants={slideUpVariants}
            >
              <p className="text-gray-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                Eraflip Tech is a creative technology studio driven by innovation, design, and a passion for digital excellence. 
                We specialize in crafting high-quality IoT solutions, embedded systems, and smart technologies that blend creativity 
                with cutting-edge technology. Our team of skilled engineers, developers, and strategists transforms ideas into 
                impactful connected experiences. We build lasting client partnerships by delivering reliable, scalable, and intelligent 
                systems that meet global standards. From concept to deployment, Eraflip Tech empowers businesses through 
                innovation, quality, and commitment.
              </p>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            transition={{ delayChildren: 0.1 }}
          >
            {iotServices.slice(0, 2).map((service, index) => (
              <motion.div 
                key={service.id}
                className="group"
                variants={cardVariants}
                custom={index}
              >
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 md:p-6 transition-all duration-500 group-hover:border-orange-500/50 h-full">
                  <div className="relative mb-5 md:mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                      <div className="text-white">
                        {service.iconComponent}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gray-900 px-2 md:px-3 py-1 rounded-full text-xs font-medium text-white border border-gray-700 backdrop-blur-sm">
                      {service.stats}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-5 md:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full mt-auto text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 text-sm md:text-base"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            transition={{ delayChildren: 0.3 }}
          >
            {iotServices.slice(2).map((service, index) => (
              <motion.div 
                key={service.id}
                className="group"
                variants={cardVariants}
                custom={index + 2}
              >
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 md:p-6 transition-all duration-500 group-hover:border-orange-500/50 h-full">
                  <div className="relative mb-5 md:mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                      <div className="text-white">
                        {service.iconComponent}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gray-900 px-2 md:px-3 py-1 rounded-full text-xs font-medium text-white border border-gray-700 backdrop-blur-sm">
                      {service.stats}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-5 md:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full mt-auto text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 text-sm md:text-base"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        ref={contactRef}
        className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-gray-900 to-gray-950 w-full"
        initial="hidden"
        animate={isContactInView ? "visible" : "hidden"}
        variants={slideUpVariants}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6 w-full">
          {/* Section Heading */}
          <motion.div 
            className="text-center mb-8 md:mb-12 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Contact Us
            </h1>
          </motion.div>

          {/* Two Columns Layout */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
          >
            {/* Left Column - Contact Information */}
            <div className="w-full">
              <div className="mb-6 md:mb-8 w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                  Start Your IoT Project Today
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 bg-gray-900/70 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-800/50">
                  Fill out the form or reach us via the provided contact number or email to discuss your ideas and get started on your IoT project with our expert team.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 md:space-y-6 w-full">
                {/* Email */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-indigo-900/20 hover:shadow-lg p-3 md:p-4 rounded-xl transition-all duration-300 border border-gray-800 hover:border-blue-700/50 backdrop-blur-sm">
                  <div className="mr-3 md:mr-4">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-gray-300 text-sm md:text-base">info@eraflip.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-green-900/20 hover:to-emerald-900/20 hover:shadow-lg p-3 md:p-4 rounded-xl transition-all duration-300 border border-gray-800 hover:border-green-700/50 backdrop-blur-sm">
                  <div className="mr-3 md:mr-4">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg">
                        <SmartphoneIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Phone</h3>
                    <p className="text-gray-300 text-sm md:text-base">+92 309 7770073</p>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-violet-900/20 hover:shadow-lg p-3 md:p-4 rounded-xl transition-all duration-300 border border-gray-800 hover:border-purple-700/50 backdrop-blur-sm">
                  <div className="mr-3 md:mr-4">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-violet-700 rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Location</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Office 1, Level #14, Arfa Software Technology Park,<br />
                      Ferozepur Road, Lahore, 54000, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full">
              <div className="bg-gradient-to-br from-gray-900/90 to-blue-900/90 p-5 md:p-8 rounded-2xl shadow-xl border border-gray-700 backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Your Details</h3>
                <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">Let us know how to get back to you.</p>

                <form onSubmit={handleSubmit} className="w-full">
                  {/* First Name and Last Name in same row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 w-full">
                    <div className="group w-full">
                      <label className="block text-gray-300 text-sm font-bold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm md:text-base"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="group w-full">
                      <label className="block text-gray-300 text-sm font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm md:text-base"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group mb-4 md:mb-6 w-full">
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm md:text-base"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* How Can We Help? */}
                  <div className="group mb-6 md:mb-8 w-full">
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      How Can We Help?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm md:text-base resize-none"
                      placeholder="Comments / Questions *"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center w-full">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 md:py-6 px-6 md:px-10 rounded-lg transition-all duration-300 hover:shadow-lg w-full"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default IoTSmartSolutions;