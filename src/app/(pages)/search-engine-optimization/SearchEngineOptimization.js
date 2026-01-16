"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, Zap, Rocket, ArrowRight, MessageCircle,
  Search, Globe as GlobeIcon, Link, FileText,
  LineChart, Settings, TrendingUp as TrendingUpIcon2,
  SparkleIcon
} from "lucide-react";

const SearchEngineOptimization = () => {
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

  // SEO Services Data
  const seoServices = [
    {
      id: 1,
      title: "Website Audit & Keyword Research",
      description: "Analyzing your site and finding the right keywords to boost rankings and traffic.",
      stats: "Analytical",
      color: "from-orange-500 to-orange-600",
      iconComponent: <Search className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Site Analysis", "Keyword Research", "Competitor Analysis"]
    },
    {
      id: 2,
      title: "On-Page, Off-Page & Technical SEO",
      description: "Enhancing your website, building authority, and fixing technical SEO to boost visibility.",
      stats: "Comprehensive",
      color: "from-blue-500 to-cyan-500",
      iconComponent: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["On-Page SEO", "Off-Page SEO", "Technical SEO"]
    },
    {
      id: 3,
      title: "Local & E-Commerce SEO",
      description: "Optimizing businesses for local search and e-commerce growth with SEO strategies.",
      stats: "Targeted",
      color: "from-orange-500 to-amber-500",
      iconComponent: <GlobeIcon className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Local SEO", "E-Commerce SEO", "Geo-Targeting"]
    },
    {
      id: 4,
      title: "Content Optimization & Internal Linking",
      description: "Enhancing content and linking structure to improve rankings, relevance, and user flow.",
      stats: "Strategic",
      color: "from-blue-500 to-indigo-500",
      iconComponent: <Link className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Content Optimization", "Internal Links", "User Experience"]
    },
    {
      id: 5,
      title: "Backlink Building & Guest Posting",
      description: "Strengthening your SEO with trusted backlinks and strategic guest posting.",
      stats: "Authority",
      color: "from-orange-500 to-red-500",
      iconComponent: <TrendingUpIcon2 className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Backlink Building", "Guest Posting", "Link Strategy"]
    },
    {
      id: 6,
      title: "Monthly SEO Reports & Ranking Analysis",
      description: "Detailed monthly performance reports and ranking analysis to keep growth measurable.",
      stats: "Data Driven",
      color: "from-blue-500 to-purple-500",
      iconComponent: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Performance Reports", "Ranking Analysis", "ROI Tracking"]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-950">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative pt-16 md:pt-20 pb-20 md:pb-32 px-4 md:px-6 min-h-[85vh] md:min-h-[90vh] flex items-center justify-center w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/seo-search-engine-optimization-internet-technology-for-business-companies-search-engine-optimization-seo-concept-on-dark-blue-background-vector.jpg')",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
        }}
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950/90"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative container mx-auto max-w-6xl z-10 px-4 sm:px-6 w-full">
          {/* SEO Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 md:mb-8 border border-gray-700"
            variants={slideUpVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <SparkleIcon className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">🔍 #1 Search Engine Optimization</span>
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
                <span className="absolute top-1 sm:top-2 left-1 sm:left-2 text-orange-900/60 select-none">
                  Search Engine.
                </span>
                <span className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 text-orange-800/70 select-none">
                  Search Engine.
                </span>
                <span className="relative block text-orange-500">
                  Search Engine.
                </span>
              </div>
            </motion.h1>
            
            <motion.div 
              className="mt-4"
              variants={slideUpVariants}
            >
              <div className="relative">
                <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 text-blue-900/50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold select-none">
                  OPTIMIZATION
                </span>
                <span className="absolute top-0.5 left-0.5 sm:top-0.5 sm:left-0.5 text-blue-800/60 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold select-none">
                  OPTIMIZATION
                </span>
                <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  OPTIMIZATION
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 max-w-3xl"
            variants={slideUpVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            We optimize <span className="text-orange-300 font-bold">website performance</span> that 
            drives organic traffic, improves rankings, and boosts online visibility worldwide.
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
              Start SEO Campaign
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800/50 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-xl w-full sm:w-auto">
              <MessageCircle className="w-5 h-5 mr-2" />
              View SEO Strategy
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        ref={servicesRef}
        className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 w-full"
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 px-4 py-2 rounded-full mb-4 border border-orange-500/30"
              variants={slideUpVariants}
            >
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">OUR SERVICES</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
              variants={slideUpVariants}
            >
              Search Engine <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">Optimization</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8"
              variants={slideUpVariants}
            >
              Comprehensive SEO solutions for organic growth and increased visibility
            </motion.p>
            
            <motion.p 
              className="text-gray-400 text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
              variants={slideUpVariants}
            >
              Eraflip Tech is a creative technology studio driven by innovation, design, and a passion for digital excellence. 
              We specialize in crafting high-quality SEO strategies, technical optimization, and digital solutions that blend creativity 
              with cutting-edge technology. Our team of skilled SEO experts, content strategists, and analysts transforms websites into 
              high-ranking digital assets. We build lasting client partnerships by delivering reliable, scalable, and performance-driven 
              solutions that meet global standards. From audit to optimization, Eraflip Tech empowers brands through 
              innovation, quality, and commitment.
            </motion.p>
          </motion.div>

          {/* Services Grid - All 6 Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            transition={{ delayChildren: 0.1 }}
          >
            {seoServices.map((service, index) => (
              <motion.div 
                key={service.id}
                className="group"
                variants={cardVariants}
                custom={index}
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 md:p-6 transition-all duration-500 group-hover:border-orange-500/50 h-full">
                  <div className="relative mb-5 md:mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                      <div className="text-white">
                        {service.iconComponent}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gray-900 px-2 md:px-3 py-1 rounded-full text-xs font-medium text-white border border-gray-700">
                      {service.stats}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm md:text-base">
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
                    className="w-full mt-auto text-gray-400 hover:text-orange-400 hover:bg-gray-800/50 text-sm md:text-base"
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
        className="py-12 md:py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 w-full px-4 md:px-6"
        initial="hidden"
        animate={isContactInView ? "visible" : "hidden"}
        variants={slideUpVariants}
      >
        <div className="mx-auto max-w-6xl w-full">
          <motion.div 
            className="text-center mb-8 md:mb-12 w-full"
            variants={slideUpVariants}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Contact Us
            </h1>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
          >
            {/* Left Column */}
            <div className="w-full">
              <div className="mb-6 md:mb-8 w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                  Start Your SEO Journey Today
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 bg-gray-900/70 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-800/50">
                  Fill out the form or reach us via the provided contact number or email to discuss your ideas and get started on your SEO optimization with our expert team.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 md:space-y-6 w-full">
                {/* Email */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-indigo-900/20 hover:shadow-md p-3 md:p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-3 md:mr-4">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-gray-300 text-sm md:text-base">info@eraflip.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-green-900/20 hover:to-emerald-900/20 hover:shadow-md p-3 md:p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-3 md:mr-4">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Phone</h3>
                    <p className="text-gray-300 text-sm md:text-base">+92 309 7770073</p>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-violet-900/20 hover:shadow-md p-3 md:p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-3 md:mr-4">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Location</h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Office 1, Level #14, Arfa Software Technology Park,
                      Ferozepur Road, Lahore, 54000, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full">
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 md:p-8 w-full">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Your Details</h3>
                <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">Let us know how to get back to you.</p>

                <form onSubmit={handleSubmit} className="w-full">
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
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 text-white text-sm md:text-base"
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
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 text-white text-sm md:text-base"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="group mb-4 md:mb-6 w-full">
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 text-white text-sm md:text-base"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="group mb-6 md:mb-8 w-full">
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      How Can We Help?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 text-white text-sm md:text-base"
                      placeholder="Comments / Questions *"
                      required
                    ></textarea>
                  </div>

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

export default SearchEngineOptimization;