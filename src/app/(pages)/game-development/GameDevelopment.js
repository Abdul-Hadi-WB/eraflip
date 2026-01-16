"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SparkleIcon, Zap, Rocket, ArrowRight, Gamepad2, 
  Palette, Sparkles, Code, Volume2, ShieldCheck, 
  ChevronLeft, ChevronRight, Trophy, Download,
  Smartphone, Globe, Cloud
} from "lucide-react";

// Import images
import Portfolio1 from "../../../../public/images/unnamed-1-300x300.jpg";
import Portfolio2 from "../../../../public/images/unnamed-1-1-300x300.png";
import Portfolio3 from "../../../../public/images/unnamed-3-1-1-300x300.png";
import Portfolio4 from "../../../../public/images/unnamed-1-300x300.png";
import Portfolio5 from "../../../../public/images/unnamed-2-1-300x300.png";

// Import tools images
import Tool1 from "../../../../public/images/fse-300x300-1-re8yarz8rqf3dn80gseoxglupfrsv49ncjhxe4x740.png";
import Tool2 from "../../../../public/images/fire-base-300x300-1-re8yb1dmo2rylqucxwgyme8gnahh03aypu0s6wj9ds.png";
import Tool3 from "../../../../public/images/c-sharp-c-logo-png_-300x300-1-re8ybcnoy37eh2dz41chgbdzrwxvkgjqrduly82jb4.png";
import Tool4 from "../../../../public/images/Ellipse-10.png";

const GameDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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
  const portfolioRef = useRef(null);
  const toolsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Animation hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isPortfolioInView = useInView(portfolioRef, { once: true, amount: 0.2 });
  const isToolsInView = useInView(toolsRef, { once: true, amount: 0.2 });
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

  // Auto slide functionality for portfolio
  useEffect(() => {
    let intervalId;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % portfolioSliderItems.length);
      }, 3000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying]);

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

  const slideLeftVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
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

  const portfolioSlideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // RIOT STYLE PORTFOLIO ITEMS
  const portfolioSliderItems = [
    { 
      id: 1, 
      image: Portfolio1, 
      title: "EPIC QUEST ADVENTURE",
      subtitle: "EARLY ACCESS",
      category: "RPG ADVENTURE",
      stats: "4.8★ | 500K+ DOWNLOADS",
      description: "Immerse yourself in a fantasy world with deep storytelling and character progression",
      features: ["100+ LEVELS", "MULTIPLAYER MODE", "REGULAR UPDATES"],
      bgColor: "bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90",
      borderColor: "border-gray-700",
      textColor: "text-white"
    },
    { 
      id: 2, 
      image: Portfolio2, 
      title: "SPACE RAIDERS",
      subtitle: "IN DEVELOPMENT",
      category: "SCI-FI SHOOTER",
      stats: "4.6★ | 1M+ DOWNLOADS",
      description: "Battle through galaxies in this intense space shooter with stunning visuals",
      features: ["30+ MISSIONS", "BOSS BATTLES", "CUSTOM SHIPS"],
      bgColor: "bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90",
      borderColor: "border-gray-700",
      textColor: "text-white"
    },
    { 
      id: 3, 
      image: Portfolio3, 
      title: "SPEED DEMON RACING",
      subtitle: "AVAILABLE NOW",
      category: "RACING",
      stats: "4.7★ | 800K+ DOWNLOADS",
      description: "Experience adrenaline-pumping races with realistic physics and customization",
      features: ["20+ TRACKS", "CAR CUSTOMIZATION", "ONLINE RACES"],
      bgColor: "bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90",
      borderColor: "border-gray-700",
      textColor: "text-white"
    },
    { 
      id: 4, 
      image: Portfolio4, 
      title: "PUZZLE MASTER PRO",
      subtitle: "PREMIUM EDITION",
      category: "BRAIN TEASER",
      stats: "4.9★ | 2M+ DOWNLOADS",
      description: "Challenge your mind with hundreds of innovative puzzles and brain teasers",
      features: ["200+ PUZZLES", "DAILY CHALLENGES", "GLOBAL LEADERBOARD"],
      bgColor: "bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90",
      borderColor: "border-gray-700",
      textColor: "text-white"
    },
    { 
      id: 5, 
      image: Portfolio5, 
      title: "MYSTIC DUNGEON",
      subtitle: "ROGUE-LIKE",
      category: "ACTION RPG",
      stats: "4.5★ | 600K+ DOWNLOADS",
      description: "Explore procedurally generated dungeons with unique challenges each run",
      features: ["PROCEDURAL GENERATION", "PERMADEATH", "LOOT SYSTEM"],
      bgColor: "bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90",
      borderColor: "border-gray-700",
      textColor: "text-white"
    }
  ];

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioSliderItems.length);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioSliderItems.length) % portfolioSliderItems.length);
  };

  // Gaming Services Data
  const gameServices = [
    {
      id: 1,
      title: "Full Game Development",
      description: "End-to-end game development for Android, iOS, PC, Web, AR & VR platforms with cutting-edge technology.",
      stats: "500+ Games",
      color: "from-orange-500 to-orange-600",
      iconComponent: <Gamepad2 className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Multi-platform", "Cross-device", "Real-time Multiplayer"],
      bgColor: "bg-gray-900/90 backdrop-blur-sm"
    },
    {
      id: 2,
      title: "Game Design & UI/UX",
      description: "Immersive game design and user interfaces that captivate players and enhance gameplay experience.",
      stats: "Award Winning",
      color: "from-blue-500 to-cyan-500",
      iconComponent: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["UI/UX Design", "Character Design", "Level Design"],
      bgColor: "bg-gray-900/90 backdrop-blur-sm"
    },
    {
      id: 3,
      title: "2D/3D Art & Animation",
      description: "Stunning 2D/3D graphics, character modeling, and fluid animations that bring games to life.",
      stats: "1000+ Assets",
      color: "from-orange-500 to-amber-500",
      iconComponent: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["3D Modeling", "Texture Art", "Animation"],
      bgColor: "bg-gray-900/90 backdrop-blur-sm"
    },
    {
      id: 4,
      title: "Programming & Gameplay",
      description: "High-performance game programming, physics engines, and engaging gameplay mechanics.",
      stats: "Optimized Code",
      color: "from-blue-500 to-indigo-500",
      iconComponent: <Code className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Game Logic", "AI Programming", "Physics Engine"],
      bgColor: "bg-gray-900/90 backdrop-blur-sm"
    },
    {
      id: 5,
      title: "Sound & Music Design",
      description: "Immersive sound effects and original music scores that enhance the gaming experience.",
      stats: "Dolby Atmos",
      color: "from-orange-500 to-red-500",
      iconComponent: <Volume2 className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["SFX Design", "Music Scoring", "Audio Integration"],
      bgColor: "bg-gray-900/90 backdrop-blur-sm"
    },
    {
      id: 6,
      title: "QA & Game Testing",
      description: "Comprehensive quality assurance and testing to ensure flawless gameplay across all devices.",
      stats: "Bug Free",
      color: "from-blue-500 to-purple-500",
      iconComponent: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
      features: ["Beta Testing", "Performance", "Security"],
      bgColor: "bg-gray-900/90 backdrop-blur-sm"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section - With Background Image */}
      <motion.section 
        ref={heroRef}
        className="relative pt-16 md:pt-20 pb-20 md:pb-32 px-4 md:px-6 min-h-[85vh] md:min-h-[90vh] flex items-center justify-center w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/592d2a1c-82ee-4698-9072-9d91d5cfdab4.jpg')",
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
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative container mx-auto max-w-6xl z-10 px-4 sm:px-6 w-full">
          {/* Gaming Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 md:mb-8 border border-gray-700"
            variants={slideUpVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <SparkleIcon className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">🎮 #1 Game Development Studio</span>
          </motion.div>

          {/* 3D Text Effect */}
          <motion.div 
            className="mb-6 md:mb-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="relative"
              variants={slideUpVariants}
            >
              <span className="absolute top-1 sm:top-2 left-1 sm:left-2 text-orange-900/40 select-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                Game Development.
              </span>
              <span className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 text-orange-800/50 select-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                Game Development.
              </span>
              <span className="relative block text-orange-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                Game Development.
              </span>
            </motion.div>
          </motion.div>
          
          {/* Subtitle */}
          <motion.div 
            className="mt-4"
            variants={slideUpVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div className="relative inline-block">
              <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                CREATE. PLAY.
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 max-w-3xl bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg"
            variants={slideUpVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            We build <span className="text-orange-300 font-bold">immersive gaming experiences</span> that 
            captivate millions of players worldwide with cutting-edge technology and creative innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 mb-12 md:mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <Button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-xl w-full sm:w-auto">
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Launch Your Game
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 px-4 py-2 mb-4 border border-orange-500/30 backdrop-blur-sm"
              variants={slideUpVariants}
            >
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">OUR SERVICES</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
              variants={slideUpVariants}
            >
              Game Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">Solutions</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8 bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg"
              variants={slideUpVariants}
            >
              Comprehensive gaming solutions from concept to launch and beyond
            </motion.p>
            
            <motion.div 
              className="bg-gray-900/70 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-800/50"
              variants={slideUpVariants}
            >
              <p className="text-gray-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                Eraflip Tech is a creative technology studio driven by innovation, design, and a passion for digital excellence. 
                We specialize in crafting high-quality games, interactive applications, and digital solutions that blend creativity 
                with cutting-edge technology. Our team of skilled developers, artists, and strategists transforms ideas into 
                impactful digital experiences. We build lasting client partnerships by delivering reliable, scalable, and visually 
                engaging products that meet global standards. From concept to completion, Eraflip Tech empowers brands through 
                innovation, quality, and commitment.
              </p>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            transition={{ delayChildren: 0.1 }}
          >
            {gameServices.map((service, index) => (
              <motion.div 
                key={service.id}
                className="group"
                variants={cardVariants}
                custom={index}
              >
                <div className={`relative ${service.bgColor} border border-gray-800 rounded-2xl p-5 md:p-6 transition-all duration-500 group-hover:border-orange-500/50 h-full`}>
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

      {/* PORTFOLIO SECTION */}
      <motion.section 
        ref={portfolioRef}
        className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/50 to-gray-950/50 w-full"
        initial="hidden"
        animate={isPortfolioInView ? "visible" : "hidden"}
        variants={slideUpVariants}
      >
        <div className="container mx-auto max-w-6xl w-full">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-10 md:mb-16 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isPortfolioInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 border border-orange-500/50 backdrop-blur-sm"
              variants={slideUpVariants}
            >
              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
              <span className="text-orange-300 text-xs md:text-sm font-bold tracking-widest">OUR GAMES PORTFOLIO</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-tight"
              variants={slideUpVariants}
            >
              GAMES <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">PORTFOLIO</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto tracking-wide bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg"
              variants={slideUpVariants}
            >
              Showcasing our portfolio games with stunning visuals and engaging gameplay
            </motion.p>
          </motion.div>
        
          {/* Portfolio Slider */}
          <motion.div 
            className="relative w-full mt-8 md:mt-12"
            variants={portfolioSlideVariants}
            initial="hidden"
            animate={isPortfolioInView ? "visible" : "hidden"}
          >
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-2 z-30 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 text-white p-2 md:p-3 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden px-8 md:px-0">
              <div className="flex gap-4 md:gap-10 transition-transform duration-500"
                   style={{ transform: `translateX(-${currentSlide * (isMobile ? 280 : 360)}px)` }}
              >
                {[...portfolioSliderItems, ...portfolioSliderItems].map((game, index) => (
                  <div
                    key={index}
                    className="relative min-w-[260px] md:min-w-[340px] h-[380px] md:h-[460px] overflow-hidden border border-gray-800 md:skew-x-[-8deg] hover:border-orange-500 transition-all duration-500 group bg-gray-900/90 backdrop-blur-sm"
                  >
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                      sizes="(max-width: 768px) 260px, 340px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-600 to-orange-700 px-3 md:px-4 py-1 md:py-2 text-xs font-bold text-white z-20 backdrop-blur-sm">
                      {game.category}
                    </div>

                    {/* Title & Subtitle */}
                    <div className="absolute bottom-16 left-4 flex flex-col gap-1 z-20">
                      <h3 className="text-lg md:text-2xl font-bold text-white">{game.title}</h3>
                      <p className="text-green-500 font-semibold text-xs md:text-sm">{game.subtitle}</p>
                    </div>

                    {/* Small Download Button */}
                    <a
                      href="#"
                      download
                      className="absolute bottom-4 left-4 flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-lg z-20 transition-all duration-300 backdrop-blur-sm"
                    >
                      <Download className="w-3 h-3 md:w-4 md:h-4" />
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-2 z-30 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 text-white p-2 md:p-3 rounded-full shadow-lg"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>

          </motion.div>
        </div>
      </motion.section>

      {/* Tools Section */}
      <motion.section 
        ref={toolsRef}
        className="py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-gray-900/50 to-gray-950/50 w-full"
        initial="hidden"
        animate={isToolsInView ? "visible" : "hidden"}
        variants={slideUpVariants}
      >
        <div className="relative container mx-auto max-w-6xl px-4 w-full">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-10 md:mb-12 lg:mb-16 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isToolsInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 px-4 py-2 mb-4 border border-orange-300/50 backdrop-blur-sm"
              variants={slideUpVariants}
            >
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">GAMING TECHNOLOGY</span>
            </motion.div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
              variants={slideUpVariants}
            >
              Powering Games With<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700">
                Cutting-Edge Tools
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg"
              variants={slideUpVariants}
            >
              We use the latest technologies and frameworks to build high-performance, scalable, and immersive gaming experiences.
            </motion.p>
          </motion.div>

          {/* Tools Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isToolsInView ? "visible" : "hidden"}
            transition={{ delayChildren: 0.1 }}
          >
            {[
              { img: Tool1, title: "FSE ENGINE" },
              { img: Tool2, title: "FIREBASE" },
              { img: Tool3, title: "C# PROGRAMMING" },
              { img: Tool4, title: "ADVANCED TOOLS" }
            ].map((tool, index) => (
              <motion.div 
                key={index} 
                className="group"
                variants={cardVariants}
                custom={index}
              >
                <div className="flex flex-col items-center">
                  <div className="relative bg-gray-900/80 backdrop-blur-sm border border-orange-500/30 rounded-lg md:rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 mb-3 md:mb-4 lg:mb-6 w-full max-w-[120px] md:max-w-[150px] lg:max-w-[180px] xl:max-w-[200px] h-[100px] md:h-[120px] lg:h-[150px] xl:h-[180px] flex items-center justify-center transition-all duration-500 group-hover:bg-orange-900/30 group-hover:scale-105 group-hover:shadow-lg md:group-hover:shadow-2xl group-hover:shadow-orange-500/30 overflow-hidden">
                    <Image 
                      src={tool.img} 
                      alt={tool.title} 
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain transition-all duration-500 group-hover:scale-110"
                      width={96}
                      height={96}
                    />
                  </div>
                  <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white text-center">{tool.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        ref={contactRef}
        className="py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-gray-900 to-gray-950 w-full"
        initial="hidden"
        animate={isContactInView ? "visible" : "hidden"}
        variants={slideUpVariants}
      >
        <div className="relative container mx-auto max-w-6xl px-4 w-full">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-10 md:mb-16 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-4 py-2 rounded-full mb-4 border border-blue-500/30 backdrop-blur-sm"
              variants={slideUpVariants}
            >
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">START YOUR PROJECT</span>
            </motion.div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
              variants={slideUpVariants}
            >
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Create</span> Your Game?
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg"
              variants={slideUpVariants}
            >
              Let's discuss your gaming project and bring your vision to life
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
          >
            {/* Contact Information */}
            <motion.div variants={slideRightVariants}>
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Get In Touch</h3>
                
                {/* Contact Cards */}
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
                      title: "Phone",
                      info: "+92 309 7770073",
                      color: "text-orange-400",
                      bgColor: "bg-gradient-to-r from-orange-500/20 to-orange-600/20",
                      borderColor: "border-orange-500/30"
                    },
                    {
                      icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
                      title: "Email",
                      info: "info@eraflip.com",
                      color: "text-blue-400",
                      bgColor: "bg-gradient-to-r from-blue-500/20 to-blue-600/20",
                      borderColor: "border-blue-500/30"
                    },
                    {
                      icon: <Cloud className="w-5 h-5 md:w-6 md:h-6" />,
                      title: "Location",
                      info: "Arfa Software Technology Park, Lahore, Pakistan",
                      color: "text-orange-400",
                      bgColor: "bg-gradient-to-r from-orange-500/20 to-orange-600/20",
                      borderColor: "border-orange-500/30"
                    }
                  ].map((contact, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border ${contact.borderColor} ${contact.bgColor} transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm`}
                    >
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${contact.bgColor} border ${contact.borderColor} flex items-center justify-center`}>
                        <div className={contact.color}>
                          {contact.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1 text-sm md:text-base">{contact.title}</h4>
                        <p className="text-gray-300 text-xs md:text-sm">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={slideLeftVariants}>
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 backdrop-blur-sm text-sm md:text-base"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 backdrop-blur-sm text-sm md:text-base"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 backdrop-blur-sm text-sm md:text-base">
                      <option value="">Select game type</option>
                      <option value="mobile">Mobile Game</option>
                      <option value="pc">PC Game</option>
                      <option value="console">Console Game</option>
                      <option value="vr">VR/AR Game</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 backdrop-blur-sm text-sm md:text-base"
                      placeholder="Tell us about your game idea..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 md:py-6 text-base md:text-lg">
                    <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Launch Your Project
                  </Button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default GameDevelopment;