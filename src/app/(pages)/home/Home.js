'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';
import { Stars, OrbitControls, Float } from '@react-three/drei';
import { useEffect, useState, useRef, useMemo } from 'react';
import Image from "next/image";

//logos
import group1 from "../../../../public/images/group1.png"
import group2 from "../../../../public/images/group2.png"
import group3 from "../../../../public/images/group3.png"
import group4 from "../../../../public/images/group4.png"
import group5 from "../../../../public/images/group5.png"
import group6 from "../../../../public/images/group6.png"
import group7 from "../../../../public/images/group7.png"
import group8 from "../../../../public/images/group8.png"
import group9 from "../../../../public/images/group9.png"
import group10 from "../../../../public/images/group10.png"
import group11 from "../../../../public/images/group11.png"
import group12 from "../../../../public/images/group12.png"
import group13 from "../../../../public/images/group13.png"
import group14 from "../../../../public/images/group14.png"

import BackgroundImage from '../../../../public/images/61764.jpeg';
import backgroundImage from '../../../../public/images/5076404.jpeg';
import contactBg from '../../../../public/images/bg2.jpeg';

import CountUp from 'react-countup';
import { 
  ArrowRight, 
  Zap, 
  Users, 
  Globe, 
  Award, 
  Clock,
  Sparkles,
  Terminal,
  Server,
  Database,
  Network,
  CircuitBoard,
  Target,
  BarChart3,
  ChevronRight,
  Crown,
  CheckCircle,
  Building,
  Layers,
  Atom,
  Brain,
  TrendingUp,
  Lightbulb,
  Briefcase,
  ShieldCheck,
  Globe2,
  MoveRight,
  Code2,
  Star,
  Hexagon,
  Triangle,
  Circle,
  Square,
  Sparkle,
  Map,
  Check
} from 'lucide-react';


// Import your logos
import logo1 from "../../../../public/images/logo1.png";
import logo2 from "../../../../public/images/logo2.png";
import logo3 from "../../../../public/images/logo3.png";
import logo4 from "../../../../public/images/logo4.png";
import logo5 from "../../../../public/images/logo5.png";
import logo6 from "../../../../public/images/logo6.png";
import logo7 from "../../../../public/images/logo7.png";
import logo8 from "../../../../public/images/logo8.png";

const clients = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const stickerConfigs = [
  {
    icon: "⚡",
    bg: "bg-orange-500/20",
    border: "border-orange-500/30",
    shadow: "shadow-lg shadow-orange-500/20",
    accent: "bg-orange-500",
    label: "Fast",
    left: "10%",
    top: "20%",
    xOffset: 10,
    rotateOnHover: 360
  },
  {
    icon: "🔒",
    bg: "bg-blue-500/20",
    border: "border-blue-500/30",
    shadow: "shadow-lg shadow-blue-500/20",
    accent: "bg-blue-500",
    label: "Secure",
    left: "85%",
    top: "15%",
    xOffset: -15,
    rotateOnHover: -360
  },
  {
    icon: "🚀",
    bg: "bg-cyan-500/20",
    border: "border-cyan-500/30",
    shadow: "shadow-lg shadow-cyan-500/20",
    accent: "bg-cyan-500",
    label: "Scalable",
    left: "15%",
    top: "75%",
    xOffset: 20,
    rotateOnHover: 180
  },
  {
    icon: "💎",
    bg: "bg-purple-500/20",
    border: "border-purple-500/30",
    shadow: "shadow-lg shadow-purple-500/20",
    accent: "bg-purple-500",
    label: "Premium",
    left: "90%",
    top: "70%",
    xOffset: -10,
    rotateOnHover: -180
  },
  {
    icon: "🎯",
    bg: "bg-green-500/20",
    border: "border-green-500/30",
    shadow: "shadow-lg shadow-green-500/20",
    accent: "bg-green-500",
    label: "Precise",
    left: "25%",
    top: "40%",
    xOffset: 15,
    rotateOnHover: 90
  },
  {
    icon: "⚙️",
    bg: "bg-pink-500/20",
    border: "border-pink-500/30",
    shadow: "shadow-lg shadow-pink-500/20",
    accent: "bg-pink-500",
    label: "Optimized",
    left: "70%",
    top: "50%",
    xOffset: -20,
    rotateOnHover: -90
  }
];

const stats = [
  { value: 200, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 50, suffix: "+", label: "Industries", icon: Building },
  { value: 99, suffix: "%", label: "Satisfaction", icon: TrendingUp },
  { value: 24, suffix: "/7", label: "Support", icon: Clock }
];





// React Three Fiber Galaxy Component
function Galaxy() {
  const starsRef = useRef();
  
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <>
      {/* Multiple star layers for depth */}
      <Stars 
        ref={starsRef}
        radius={300}
        depth={60}
        count={7000}
        factor={6}
        saturation={0}
        fade
        speed={1}
      />
      
      <Stars 
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      
      {/* Orange Nebula Clouds */}
      <Float speed={0.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[10, 5, -30]}>
          <sphereGeometry args={[8, 32, 32]} />
          <meshBasicMaterial color="#f97316" transparent opacity={0.03} />
        </mesh>
      </Float>
      
      <Float speed={0.3} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[-12, -8, -25]}>
          <sphereGeometry args={[6, 32, 32]} />
          <meshBasicMaterial color="#f59e0b" transparent opacity={0.02} />
        </mesh>
      </Float>
      
      {/* Floating Planets */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Float
          key={i}
          speed={0.2 + Math.random() * 0.3}
          rotationIntensity={0.1}
          floatIntensity={0.2 + Math.random() * 0.3}
        >
          <mesh position={[
            Math.random() * 60 - 30,
            Math.random() * 40 - 20,
            Math.random() * -40 - 10
          ]}>
            <sphereGeometry args={[0.3 + Math.random() * 1.2, 16, 16]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#f97316" : i % 3 === 1 ? "#f59e0b" : "#ea580c"}
              emissive={i % 3 === 0 ? "#f97316" : i % 3 === 1 ? "#f59e0b" : "#ea580c"}
              emissiveIntensity={0.1}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}





const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Video autoplay handling
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Define stable random values for animations to prevent hydration mismatch
  const floatingElements = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${(i * 13) % 97}%`, // Deterministic positioning
    top: `${(i * 7) % 103}%`,  // Deterministic positioning
    width: `${(i % 6) + 2}px`,
    height: `${(i % 6) + 2}px`,
    type: i % 3,
    delay: i * 0.2
  }));

  const floatingTextElements = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${(i * 7) % 100}%`,
    top: `${(i * 4) % 120}%`,
    color: i % 3 === 0 ? '#ea580c' : i % 3 === 1 ? '#3b82f6' : '#ffffff',
    text: i % 4 === 0 ? 'CLIENT' : i % 4 === 1 ? 'TRUST' : i % 4 === 2 ? 'SUCCESS' : '▲',
    delay: i * 0.3
  }));

  const hexagonElements = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${(i * 17) % 95}%`,
    top: `${(i * 13) % 100}%`,
    type: i % 3,
    delay: i * 0.4
  }));

  // Don't render Framer Motion animations on server
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <>
    {/* ================= SECTION 1 - VIDEO BACKGROUND ================= */}
<section className="relative min-h-screen overflow-hidden items-center justify-center">
  
  {/* ===== CLEAR VIDEO BACKGROUND ===== */}
  <div className="absolute inset-0 z-0">
    {/* Video Element with clear background */}
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{ 
        opacity: 1
      }}
      poster="/placeholder.jpg"
    >
      {/* Isme apna video path daalein */}
      <source 
        src="/images/Flyng_bird_intro_video_template_2_1080p.mp4" 
        type="video/mp4" 
      />
      {/* Backup - agar videos folder me rakhte ho to */}
      {/* <source src="/videos/tech-background.mp4" type="video/mp4" /> */}
      <source src="/videos/tech-background.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    {/* Light gradient overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
    
    {/* Animated Glow Effects - subtle version */}
    <motion.div
      className="absolute -right-32 top-1/4 w-[800px] h-[800px] bg-gradient-to-l from-navy-600/15 via-navy-500/10 to-transparent rounded-full blur-[100px]"
      animate={{ 
        x: [0, 30, 0], 
        y: [0, -20, 0], 
        scale: [1, 1.1, 1],
        rotate: [0, 5, 0]
      }}
      transition={{ 
        duration: 15, 
        repeat: Infinity, 
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }}
    />

    <motion.div
      className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/15 via-orange-400/10 to-transparent rounded-full blur-[120px]"
      animate={{ 
        x: [0, 15, 0], 
        y: [0, 15, 0], 
        scale: [1.1, 1, 1.1],
        rotate: [0, 10, 0]
      }}
      transition={{ 
        duration: 12, 
        repeat: Infinity, 
        ease: "easeInOut",
        times: [0, 0.7, 1]
      }}
    />

    {/* Subtle floating elements - Using stable values */}
    {floatingElements.map((element) => (
      <motion.div
        key={element.id}
        className={`absolute rounded-full ${
          element.type === 0 ? 'bg-gradient-to-br from-navy-500/8 to-navy-400/4' :
          element.type === 1 ? 'bg-gradient-to-br from-orange-500/8 to-orange-400/4' :
          'bg-gradient-to-br from-cyan-500/4 to-cyan-400/2'
        }`}
        style={{
          left: element.left,
          top: element.top,
          width: element.width,
          height: element.height,
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          y: [0, -20, 0, -10, 0], 
          x: [0, 8, 0, -8, 0],
          opacity: [0, 0.15, 0.2, 0.15, 0],
          scale: [1, 1.3, 1, 1.2, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          delay: element.delay,
          ease: "easeInOut"
        }}
      />
    ))}

    {/* Very subtle noise texture */}
    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.01] mix-blend-overlay"></div>
  </div>

  {/* ================= MAIN CONTENT ================= */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Ultra Elegant Badge */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className="inline-flex items-center gap-4 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-navy-700/40 to-orange-800/40 backdrop-blur-lg border border-white/15 mb-16 sm:mb-20 shadow-2xl"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="w-5 h-5"
      >
        <Sparkles className="w-full h-full text-orange-500/90" />
      </motion.div>
      <span className="text-gray-200 text-sm tracking-[0.4em] font-light uppercase">
        ERAFLIP DIGITAL
      </span>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="w-5 h-5"
      >
        <CircuitBoard className="w-full h-full text-navy-300/90" />
      </motion.div>
    </motion.div>

    {/* Main Heading */}
    <div className="mb-12 sm:mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 60 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2, ease: "easeOut" }} 
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 leading-[0.85] font-serif">
            Empowering
          </span>
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }} 
        className="mt-6 sm:mt-8"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-200 leading-[0.9] tracking-wider">
          <span className="font-serif italic text-navy-200">Innovation</span> Through
          <br />
          <motion.span 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.8 }}
            className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 tracking-tight"
          >
            Smart Technology
          </motion.span>
        </h2>
      </motion.div>
    </div>

    {/* Elegant Description */}
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 0.6 }} 
      className="relative mb-16 sm:mb-20 max-w-2xl mx-auto px-4"
    >
      <motion.div 
        className="absolute -left-8 sm:-left-12 top-1/2 transform -translate-y-1/2 hidden sm:block"
        animate={{ rotate: 360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-6 h-6 border-t border-r border-orange-600/60"></div>
      </motion.div>

      <p className="text-base sm:text-lg text-gray-200 leading-relaxed tracking-wide font-light italic">
        We craft intelligent digital solutions that drive growth, enhance efficiency, 
        and create sustainable competitive advantage through innovative technology.
      </p>

      <motion.div 
        className="absolute -right-8 sm:-right-12 top-1/2 transform -translate-y-1/2 hidden sm:block"
        animate={{ rotate: -360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-6 h-6 border-t border-l border-navy-400/60"></div>
      </motion.div>

      <motion.div 
        className="absolute -bottom-6 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-orange-700/40 to-navy-500/40 to-transparent" 
        initial={{ scaleX: 0 }} 
        animate={{ scaleX: 1 }} 
        transition={{ delay: 1, duration: 2, ease: "easeOut" }} 
      />
    </motion.div>

    {/* CTA Buttons */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 1 }} 
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
    >
      {/* Primary Button */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -2 }} 
        whileTap={{ scale: 0.98 }} 
        className="relative group w-full sm:w-auto"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-navy-600/40 to-orange-800/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Link href="/contact-us" className="relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-navy-700 via-navy-600 to-orange-800 text-white font-medium rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-4 group overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" 
            initial={{ x: '-100%' }} 
            whileHover={{ x: '100%' }} 
            transition={{ duration: 0.8 }} 
          />
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
            <Zap className="w-5 h-5 relative" />
          </motion.div>
          <span className="relative text-sm sm:text-base font-semibold tracking-wide">Begin Your Journey</span>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <MoveRight className="w-5 h-5 relative" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Secondary Button */}
      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
        <Link href="/services" className="px-8 sm:px-12 py-3 sm:py-4 bg-transparent backdrop-blur-lg border border-gray-600/50 text-gray-200 font-medium rounded-2xl hover:border-orange-700/60 hover:text-white transition-all duration-300 flex items-center justify-center gap-4 group w-full">
          <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-sm sm:text-base font-semibold tracking-wide">Explore Solutions</span>
          <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }}>
            <ChevronRight className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>









{/* ================= SECTION 2 - ULTIMATE GAMING ABOUT SECTION ================= */}
<section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50/90 to-orange-100/95">

  {/* ===== ADVANCED BACKGROUND EFFECTS ===== */}
  <div className="absolute inset-0 overflow-hidden">
    
    {/* Animated Energy Core */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] lg:w-[1200px] h-[600px] sm:h-[800px] lg:h-[1200px] rounded-full"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.3, 0.1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        background: 'conic-gradient(from 0deg, transparent, rgba(234,88,12,0.15), rgba(30,58,138,0.2), rgba(234,88,12,0.15), transparent)',
      }}
    />

    {/* Floating Orange Orbs */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-[300px] sm:w-[600px] lg:w-[900px] h-[300px] sm:h-[600px] lg:h-[900px] rounded-full blur-[60px] sm:blur-[80px] lg:blur-[120px]"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.5, 0.2],
        x: [0, 40, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        background: 'radial-gradient(circle, rgba(234,88,12,0.25) 0%, rgba(245,158,11,0.2) 30%, transparent 65%)',
      }}
    />
    
    {/* Floating Navy Orbs */}
    <motion.div
      className="absolute bottom-1/3 right-1/4 w-[200px] sm:w-[400px] lg:w-[800px] h-[200px] sm:h-[400px] lg:h-[800px] rounded-full blur-[50px] sm:blur-[70px] lg:blur-[100px]"
      animate={{
        scale: [1, 1.25, 1],
        opacity: [0.15, 0.4, 0.15],
        x: [0, -35, 0],
        y: [0, 25, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3
      }}
      style={{
        background: 'radial-gradient(circle, rgba(30,58,138,0.2) 0%, rgba(59,130,246,0.15) 35%, transparent 70%)',
      }}
    />

    {/* Digital Grid Matrix */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49.5%,rgba(234,88,12,0.3)_50%,transparent_50.5%)] bg-[size:50px_50px] sm:bg-[size:100px_100px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(transparent_49.5%,rgba(30,58,138,0.3)_50%,transparent_50.5%)] bg-[size:50px_50px] sm:bg-[size:100px_100px]"></div>
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px', '100px 100px'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: 'linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.1) 50%, transparent 51%)',
          backgroundSize: '25px 25px',
        }}
      />
    </div>

    {/* Binary Rain Effect - Using stable values */}
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs"
          style={{
            left: `${(i * 5)}%`,
            top: '-20px',
            color: i % 3 === 0 ? '#ea580c' : i % 3 === 1 ? '#1e3a8a' : '#ffffff',
            opacity: 0.3,
          }}
          animate={{
            y: ['0px', '120vh'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: (i % 5) * 0.5,
            ease: "linear"
          }}
        >
          {i % 2 === 0 ? '1' : '0'}
        </motion.div>
      ))}
    </div>

    {/* Laser Beams */}
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[1px] hidden sm:block"
        style={{
          top: 0,
          bottom: 0,
          left: `${20 + i * 15}%`,
          background: `linear-gradient(to bottom, transparent, ${
            i % 2 === 0 ? 'rgba(234,88,12,0.15)' : 'rgba(30,58,138,0.15)'
          }, transparent)`,
          filter: 'blur(1px)',
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 4 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeInOut"
        }}
      />
    ))}

    {/* Floating Diamond Particles - Using stable values */}
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${(i * 7) % 97}%`,
          top: `${(i * 5) % 103}%`,
          width: '20px',
          height: '20px',
          background: i % 3 === 0 ? 'rgba(234,88,12,0.1)' : 
                     i % 3 === 1 ? 'rgba(30,58,138,0.1)' : 
                     'rgba(255,255,255,0.1)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
        animate={{
          y: [0, -50, 0],
          x: [0, (i % 3 - 1) * 30, 0],
          rotate: [0, 180, 360],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>

  {/* ===== GAMING STICKERS & BADGES ===== */}
  <div className="absolute inset-0 pointer-events-none">
    {[
      { 
        icon: "⚔️", 
        label: "STRATEGY", 
        left: "5%", 
        top: "15%",
        gradient: "from-orange-600/90 via-orange-700 to-amber-800",
        border: "border-orange-500",
        shadow: "shadow-[0_0_30px_rgba(234,88,12,0.5)]"
      },
      { 
        icon: "🎮", 
        label: "GAME ON", 
        left: "92%", 
        top: "12%",
        gradient: "from-navy-700/90 via-blue-800 to-indigo-900",
        border: "border-blue-500",
        shadow: "shadow-[0_0_30px_rgba(30,58,138,0.5)]"
      },
      { 
        icon: "⚡", 
        label: "ULTRA FAST", 
        left: "0%", 
        top: "89%",
        gradient: "from-amber-500/90 via-orange-600 to-red-700",
        border: "border-amber-400",
        shadow: "shadow-[0_0_30px_rgba(245,158,11,0.5)]"
      },
      { 
        icon: "🛡️", 
        label: "MAX DEFENSE", 
        left: "90%", 
        top: "75%",
        gradient: "from-blue-800/90 via-navy-900 to-slate-900",
        border: "border-blue-400",
        shadow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]"
      },
    ].map((sticker, idx) => (
      <motion.div
        key={idx}
        className="absolute pointer-events-auto cursor-pointer group hidden sm:block"
        style={{ left: sticker.left, top: sticker.top }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8 + idx,
          repeat: Infinity,
          delay: idx * 0.5,
          ease: "easeInOut"
        }}
        whileHover={{
          scale: 1.6,
          rotate: 360,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 1.3 }}
      >
        <div className={`relative p-5 rounded-2xl ${sticker.shadow} ${sticker.border} border-2 backdrop-blur-xl`}>
          {/* Main Sticker */}
          <div className={`bg-gradient-to-br ${sticker.gradient} rounded-xl p-4`}>
            <div className="text-4xl text-white drop-shadow-lg">{sticker.icon}</div>
          </div>
          
          {/* Label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-black/90 backdrop-blur-sm rounded-lg border border-white/10">
            <span className="text-white text-xs font-bold tracking-wider">{sticker.label}</span>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
               style={{ background: sticker.shadow.split('[')[1]?.split(']')[0] }}></div>
        </div>
      </motion.div>
    ))}
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    
    {/* ===== ULTIMATE GAMING HEADER ===== */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-12 sm:mb-16 lg:mb-20 px-4"
    >
      {/* Animated Title Badge */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="inline-flex items-center justify-center relative mb-8 sm:mb-12"
      >
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-dashed border-orange-500/30"
        />
        
        {/* Middle Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-2 border-dashed border-navy-500/30"
        />
        
        {/* Inner Badge */}
        <div className="relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-600/20 to-navy-600/20 backdrop-blur-xl rounded-full border-2 border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
            />
            <span className="text-white text-xs sm:text-sm font-black tracking-[0.3em] uppercase">
              DIGITAL DOMINANCE
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-navy-500 to-blue-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Main Heading with Glitch Effect */}
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-[0.85] tracking-tight relative"
        >
          {/* Glitch Effect Layers */}
          <span className="absolute top-0 left-0 w-full text-transparent bg-clip-text bg-gradient-to-r from-orange-700/30 via-transparent to-blue-700/30 animate-pulse">
            LEVEL UP
          </span>
          <span className="absolute top-[1px] left-[1px] w-full text-transparent bg-clip-text bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
            LEVEL UP
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
            LEVEL UP
          </span>
          
          <span className="absolute top-0 left-0 w-full text-transparent bg-clip-text bg-gradient-to-r from-orange-600/30 via-transparent to-blue-600/30 animate-pulse mt-8 sm:mt-12 lg:mt-16">
            YOUR BUSINESS
          </span>
          <span className="absolute top-[1px] left-[1px] w-full text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 mt-8 sm:mt-12 lg:mt-16">
            YOUR BUSINESS
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 mt-8 sm:mt-12 lg:mt-16">
            YOUR BUSINESS
          </span>
        </motion.h2>

        {/* Animated Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "200px sm:300px lg:400px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
          className="h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-navy-600 mx-auto rounded-full shadow-lg max-w-xs sm:max-w-sm lg:max-w-md"
        />
      </div>

      {/* Dynamic Subheading - ERROR FIXED HERE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="relative mt-8 sm:mt-12 lg:mt-16 max-w-3xl mx-auto px-4"
      >
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-900/90 leading-relaxed">
          We deliver{" "}
          <motion.span
            animate={{ color: ['#ea580c', '#1e3a8a', '#ea580c'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="font-black"
          >
            cutting-edge
          </motion.span>{" "}
          solutions that transform businesses into{" "}
          <span className="relative inline-block">
            <span className="text-orange-700 font-black">industry leaders</span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </div>
      </motion.div>
    </motion.div>

    {/* ===== SIMPLE CONTENT LAYOUT ===== */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">

      {/* ===== LEFT SIDE ===== */}
      <div className="space-y-8 lg:space-y-10">
        {/* Small heading */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4"
        >
          <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full"></div>
          <h4 className="text-navy-900 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest uppercase">
            About Us
          </h4>
          <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
        </motion.div>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-navy-900 leading-tight tracking-tight"
          style={{ lineHeight: '1.2' }}
        >
          We Are Increasing{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 via-blue-800 to-navy-900">
            Business Success
          </span>{' '}
          With Technology
        </motion.h2>

        {/* Stats Boxes - GAMING STYLE */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10">
          {[
            { 
              number: "250+", 
              label: "Projects Completed",
              icon: "🎯",
              gradient: "from-orange-600 to-orange-800"
            },
            { 
              number: "50+", 
              label: "Global Clients",
              icon: "🌍",
              gradient: "from-navy-700 to-blue-900"
            },
            { 
              number: "80+", 
              label: "Professional Members",
              icon: "⚡",
              gradient: "from-amber-600 to-orange-700"
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/20 text-center transition-all duration-300 cursor-pointer`}>
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{stat.icon}</div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3">
                  {stat.number}
                </p>
                <p className="text-white/90 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
                
                {/* Corner Accents */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-2 h-2 sm:w-3 sm:h-3 border-t border-l border-white/30 rounded-tl"></div>
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-2 h-2 sm:w-3 sm:h-3 border-t border-r border-white/30 rounded-tr"></div>
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-2 h-2 sm:w-3 sm:h-3 border-b border-l border-white/30 rounded-bl"></div>
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-2 h-2 sm:w-3 sm:h-3 border-b border-r border-white/30 rounded-br"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== RIGHT SIDE - GAMING CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative mt-8 lg:mt-0"
      >
        {/* Gaming Content Card */}
        <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-blue-700/30 relative overflow-hidden">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(59,130,246,0.3)_50%,transparent_51%)] bg-[size:20px_20px] sm:bg-[size:30px_30px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(transparent_49%,rgba(234,88,12,0.3)_50%,transparent_51%)] bg-[size:20px_20px] sm:bg-[size:30px_30px]"></div>
          </div>
          
          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center shadow-xl flex-shrink-0"
              >
                <div className="text-2xl sm:text-3xl text-white">🚀</div>
              </motion.div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  OUR <span className="text-orange-400">MISSION</span>
                </h3>
                <div className="flex items-center gap-2 sm:gap-3 mt-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-white/80 text-xs sm:text-sm font-medium">ACTIVE • 24/7</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                We transform businesses through innovative technology solutions that drive growth, 
                enhance efficiency, and create sustainable competitive advantage in the digital era.
              </p>
              
              {/* Key Points */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  "🤖 AI-Powered Business Solutions",
                  "☁️ Scalable Cloud Architecture", 
                  "🔒 Enterprise Grade Security",
                  "⚡ Lightning Fast Performance",
                  "📊 Data-Driven Decision Making",
                  "🎯 Precision Targeted Strategies"
                ].map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-white/90 font-medium text-sm sm:text-base">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 sm:mt-10 lg:mt-12 relative group"
            >
              {/* Button Glow */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl lg:rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main Button */}
              <Link
                href="/contact-us"
                className="relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-black text-lg sm:text-xl rounded-xl flex items-center justify-center gap-4 sm:gap-6 group overflow-hidden shadow-[0_0_50px_rgba(234,88,12,0.3)]"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                
                {/* Button Content */}
                <span className="relative tracking-wider">START JOURNEY</span>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 flex items-center justify-center backdrop-blur-sm hidden sm:flex"
        >
          <div className="text-xl sm:text-2xl text-orange-500/70">⚡</div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut" 
          }}
          className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-navy-500/20 to-blue-500/10 border border-navy-500/30 flex items-center justify-center backdrop-blur-sm hidden sm:flex"
        >
          <div className="text-lg sm:text-xl text-navy-400/70">🎯</div>
        </motion.div>
      </motion.div>
    </div>
  </div>

  {/* ===== BOTTOM DECORATIVE ELEMENTS ===== */}
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.8, duration: 1.5 }}
    className="absolute bottom-10 sm:bottom-20 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full blur-sm"
  ></motion.div>
</section>












      {/* ================= SECTION 3 - GAMING CLIENT SHOWCASE ================= */}
      <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-black to-navy-950">

        {/* ===== GAMING BACKGROUND ===== */}
        <div className="absolute inset-0 overflow-hidden">
          
          {/* Dark Base with Subtle Texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-navy-950"></div>
          
          {/* Dynamic Energy Grid */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49.5%,rgba(234,88,12,0.3)_50%,transparent_50.5%)] bg-[size:50px_50px] sm:bg-[size:100px_100px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(transparent_49.5%,rgba(30,58,138,0.3)_50%,transparent_50.5%)] bg-[size:50px_50px] sm:bg-[size:100px_100px]"></div>
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0px 0px', '50px 50px', '100px 100px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: 'linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.15) 50%, transparent 51%)',
                backgroundSize: '25px 25px',
              }}
            />
          </div>

          {/* Pulsing Energy Core */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[800px] h-[300px] sm:h-[500px] lg:h-[800px] rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(234,88,12,0.4), rgba(30,58,138,0.5), rgba(234,88,12,0.4), transparent)',
              filter: 'blur(40px) sm:blur(60px) lg:blur(80px)',
            }}
          />

          {/* Floating Energy Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-[150px] sm:w-[250px] lg:w-[400px] h-[150px] sm:h-[250px] lg:h-[400px] rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'radial-gradient(circle, rgba(234,88,12,0.3) 0%, rgba(245,158,11,0.2) 30%, transparent 70%)',
              filter: 'blur(30px) sm:blur(45px) lg:blur(60px)',
            }}
          />
          
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-[130px] sm:w-[200px] lg:w-[350px] h-[130px] sm:h-[200px] lg:h-[350px] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              x: [0, -25, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            style={{
              background: 'radial-gradient(circle, rgba(30,58,138,0.3) 0%, rgba(59,130,246,0.2) 40%, transparent 70%)',
              filter: 'blur(25px) sm:blur(35px) lg:blur(50px)',
            }}
          />

          {/* Energy Beams */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] hidden sm:block"
              style={{
                top: 0,
                bottom: 0,
                left: `${15 + i * 17}%`,
                background: `linear-gradient(to bottom, 
                  transparent, 
                  ${i % 2 === 0 ? 'rgba(234,88,12,0.4)' : 'rgba(30,58,138,0.4)'}, 
                  transparent)`,
                boxShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(234,88,12,0.5)' : 'rgba(30,58,138,0.5)'}`,
                filter: 'blur(1px)'
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleY: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Floating Data Particles - Using stable values */}
          {floatingTextElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute font-mono text-xs"
              style={{
                left: element.left,
                top: element.top,
                color: element.color,
                opacity: 0.6,
                textShadow: '0 0 10px currentColor',
                fontSize: '10px',
                fontWeight: 'bold'
              }}
              animate={{
                y: ['0px', '-100vh'],
                x: [0, (element.id % 5 - 2) * 20],
                opacity: [0, 0.8, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: element.delay,
                ease: "linear"
              }}
            >
              {element.text}
            </motion.div>
          ))}

          {/* Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ea580c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d="M-100,100 Q200,50 500,100 T1100,100"
              fill="none"
              stroke="url(#circuitGradient2)"
              strokeWidth="1"
              strokeDasharray="5,5"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="100" dur="10s" repeatCount="indefinite" />
            </path>
            <path
              d="M-50,300 Q150,200 450,300 T1050,300"
              fill="none"
              stroke="url(#circuitGradient2)"
              strokeWidth="0.8"
              strokeDasharray="8,8"
            >
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="15s" repeatCount="indefinite" />
            </path>
          </svg>

          {/* Floating Hexagons - Using stable values */}
          {hexagonElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute"
              style={{
                left: element.left,
                top: element.top,
                width: '40px',
                height: '40px',
                background: element.type === 0 
                  ? 'rgba(234,88,12,0.1)' 
                  : element.type === 1 
                  ? 'rgba(30,58,138,0.1)'
                  : 'rgba(255,255,255,0.05)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                border: `1px solid ${element.type === 0 ? 'rgba(234,88,12,0.3)' : element.type === 1 ? 'rgba(30,58,138,0.3)' : 'rgba(255,255,255,0.1)'}`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, (element.id % 3 - 1) * 30, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.7, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* ===== GAMING BADGES ===== */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { 
              icon: "⚡", 
              label: "POWER", 
              left: "8%", 
              top: "20%",
              gradient: "from-orange-600/90 via-orange-700 to-amber-800",
              border: "border-orange-500",
              shadow: "shadow-[0_0_25px_rgba(234,88,12,0.6)]"
            },
            { 
              icon: "🛡️", 
              label: "TRUST", 
              left: "90%", 
              top: "15%",
              gradient: "from-navy-700/90 via-blue-800 to-indigo-900",
              border: "border-blue-500",
              shadow: "shadow-[0_0_25px_rgba(30,58,138,0.6)]"
            },
            { 
              icon: "🚀", 
              label: "GROWTH", 
              left: "12%", 
              top: "80%",
              gradient: "from-amber-500/90 via-orange-600 to-red-700",
              border: "border-amber-400",
              shadow: "shadow-[0_0_25px_rgba(245,158,11,0.6)]"
            },
            { 
              icon: "🎯", 
              label: "PRECISION", 
              left: "85%", 
              top: "75%",
              gradient: "from-blue-800/90 via-navy-900 to-slate-900",
              border: "border-blue-400",
              shadow: "shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            },
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              className="absolute pointer-events-auto cursor-pointer group hidden sm:block"
              style={{ left: badge.left, top: badge.top }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + idx,
                repeat: Infinity,
                delay: idx * 0.4,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.5,
                rotate: 360,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
            >
              <div className={`relative p-3 rounded-2xl ${badge.shadow} ${badge.border} border-2 backdrop-blur-xl`}>
                <div className={`bg-gradient-to-br ${badge.gradient} rounded-xl p-3`}>
                  <div className="text-2xl text-white drop-shadow-lg">{badge.icon}</div>
                </div>
                
                {/* Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-black/90 backdrop-blur-sm rounded border border-white/10">
                  <span className="text-white text-xs font-bold tracking-wider">{badge.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          
          {/* ===== ELEGANT GAMING HEADER ===== */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 lg:mb-24 px-4"
          >
            {/* Elegant Gaming Badge */}
            <motion.div
              initial={{ scale: 0, rotateX: 90 }}
              whileInView={{ scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center relative mb-8 sm:mb-12 lg:mb-16"
            >
              {/* Subtle Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full border border-dashed border-orange-500/20"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-28 h-28 sm:w-30 sm:h-30 lg:w-36 lg:h-36 rounded-full border border-dashed border-navy-500/20"
              />
              
              {/* Elegant Badge */}
              <div className="relative px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-full border border-white/10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
                  />
                  <span className="text-white text-xs font-light tracking-[0.4em] uppercase">
                    Strategic Partnerships
                  </span>
                  <motion.div
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-navy-500 to-blue-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Elegant Gaming Heading */}
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 leading-[0.9] tracking-tight"
              >
                {/* Main Heading with Subtle Gradient */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
                  Trusted By
                </span>
                <span className="block mt-2 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-400 font-semibold">
                  Global Leaders
                </span>
              </motion.h2>

              {/* Elegant Divider Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "150px sm:200px lg:250px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mx-auto max-w-xs"
              />
            </div>

            {/* Elegant Subheading */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="relative mt-6 sm:mt-8 lg:mt-12 max-w-2xl mx-auto px-4"
            >
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
                Partnering with <span className="text-orange-400 font-medium">visionary enterprises</span> 
                to drive <span className="text-navy-300 font-medium">digital transformation</span> 
                and create <span className="text-amber-400 font-medium">lasting impact</span>
              </p>
            </motion.div>
          </motion.div>

          {/* ===== GAMING LOGO GRID ===== */}
          <div className="relative mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 max-w-6xl mx-auto">
            {clients.map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: idx * 0.1, 
                  type: "spring", 
                  stiffness: 100,
                  damping: 12 
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { 
                    type: "spring", 
                    stiffness: 300,
                    damping: 15 
                  } 
                }}
                className="relative group"
              >
                {/* Gaming Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-xl lg:rounded-2xl blur-xl opacity-0 group-hover:opacity-80"
                  initial={{ scale: 0.8 }}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 180
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: `conic-gradient(from 0deg, 
                      transparent, 
                      ${idx % 3 === 0 ? 'rgba(234,88,12,0.6)' : 
                        idx % 3 === 1 ? 'rgba(30,58,138,0.6)' : 
                        'rgba(245,158,11,0.6)'}, 
                      transparent)`,
                  }}
                />
                
                {/* Gaming Card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 flex items-center justify-center transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/20 group-hover:shadow-[0_0_40px_rgba(234,88,12,0.3)]">
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-xl lg:rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-r from-orange-500/20 via-transparent to-navy-500/20"></div>
                    
                    {/* Corner Accents */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-2 h-2 sm:w-4 sm:h-4 border-t-2 border-l-2 border-orange-500/70 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-2 h-2 sm:w-4 sm:h-4 border-t-2 border-r-2 border-navy-500/70 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-2 h-2 sm:w-4 sm:h-4 border-b-2 border-l-2 border-orange-500/70 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-2 h-2 sm:w-4 sm:h-4 border-b-2 border-r-2 border-navy-500/70 rounded-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Logo */}
                  <div className="relative">
                    <Image
                      src={logo}
                      alt={`Client ${idx}`}
                      width={120}
                      height={48}
                      className="object-contain max-h-12 sm:max-h-16 transition-all duration-500 group-hover:scale-110 group-hover:brightness-125 filter drop-shadow-lg w-24 sm:w-32 lg:w-40"
                    />
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-navy-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Hover Line */}
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-navy-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '40px sm:60px' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Particles */}
                  <div className="absolute inset-0 rounded-xl lg:rounded-2xl overflow-hidden">
                    {[...Array(4)].map((_, particleIdx) => (
                      <motion.div
                        key={particleIdx}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{ 
                          x: `${50 + particleIdx * 20}%`,
                          y: '120%',
                          opacity: 0
                        }}
                        whileHover={{
                          y: '-20%',
                          opacity: [0, 0.8, 0],
                          scale: [0, 1.5, 0]
                        }}
                        transition={{
                          duration: 0.8,
                          delay: particleIdx * 0.1
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ===== GAMING STATS ===== */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative mt-16 sm:mt-20 lg:mt-28 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="relative group"
                >
                  {/* Stats Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/30 to-navy-600/30 rounded-xl lg:rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Stats Card */}
                  <div className="relative bg-gradient-to-br from-navy-900/60 to-orange-900/60 backdrop-blur-xl border-2 border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]">
                    
                    {/* Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-orange-600/30 to-navy-600/30 mb-4 sm:mb-6 group-hover:from-orange-600/50 group-hover:to-navy-600/50 border-2 border-white/20"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                    </motion.div>
                    
                    {/* Counter */}
                    <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-navy-500 mb-2 sm:mb-3">
                      <CountUp 
                        end={stat.value} 
                        duration={3.5} 
                        suffix={stat.suffix}
                        delay={idx * 0.3}
                      />
                    </div>
                    
                    {/* Label */}
                    <div className="text-gray-300 text-xs sm:text-sm uppercase tracking-widest group-hover:text-white transition-colors font-bold">
                      {stat.label}
                    </div>
                    
                    {/* Bottom Indicator */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-orange-500 to-navy-500 rounded-t-full opacity-0 group-hover:opacity-100"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ===== GAMING CTA ===== */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="relative mt-16 sm:mt-20 lg:mt-32 text-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/contact">
                <div className="group relative">
                  {/* Glow */}
                  <motion.div
                    className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-orange-600 via-amber-500 to-navy-600 rounded-2xl lg:rounded-3xl blur-2xl opacity-0 group-hover:opacity-60"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Button */}
                  <div className="relative px-8 sm:px-12 lg:px-14 py-4 sm:py-6 lg:py-8 bg-gradient-to-r from-navy-900 via-gray-900 to-orange-900 rounded-xl lg:rounded-2xl border-2 border-white/20 backdrop-blur-xl overflow-hidden group-hover:border-white/40 transition-all duration-500">
                    
                    {/* Shine */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Content */}
                    <div className="relative flex items-center justify-center gap-4 sm:gap-6">
                      <motion.div
                        animate={{ 
                          x: [0, 8, 0],
                          rotate: [0, 360]
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </motion.div>
                      <span className="text-white font-black text-lg sm:text-xl lg:text-2xl tracking-wider">
                        JOIN THE ALLIANCE
                      </span>
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-orange-400 text-xl sm:text-2xl"
                      >
                        ⚡
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-gray-400 mt-6 sm:mt-10 text-sm sm:text-lg font-light tracking-wide"
            >
              <span className="text-orange-400 font-bold">500+</span> forward-thinking companies already transformed
            </motion.p>
          </motion.div>
        </div>

        {/* ===== FLOATING ELEMENTS ===== */}
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute bottom-10 left-4 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 flex items-center justify-center backdrop-blur-sm hidden sm:flex"
        >
          <div className="text-lg sm:text-xl text-orange-500/70">⚔️</div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut" 
          }}
          className="absolute bottom-10 right-4 sm:right-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-navy-500/20 to-blue-500/10 border border-navy-500/30 flex items-center justify-center backdrop-blur-sm hidden sm:flex"
        >
          <div className="text-base sm:text-lg text-navy-400/70">🛡️</div>
        </motion.div>
      </section>




 {/* ================= SECTION 4 - PROFESSIONAL 3D SERVICES ================= */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-900">

        {/* ===== UPDATED BACKGROUND - DARK TECH THEME ===== */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dark Tech Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/30 to-gray-900"></div>
          
          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M0,0 L100,100 M100,0 L0,100" stroke="rgb(59 130 246)" strokeWidth="0.5" fill="none"/>
                  <circle cx="50" cy="50" r="2" fill="rgb(249 115 22)" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>

          {/* Floating Tech Elements */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-lg backdrop-blur-sm ${
                i % 2 === 0 
                  ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20' 
                  : 'bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20'
              }`}
              style={{
                width: `${100 + i * 30}px`,
                height: `${100 + i * 30}px`,
                left: `${(i * 20) % 100}%`,
                top: `${(i * 18) % 100}%`,
                transform: `rotate(${i * 30}deg)`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [i * 30, i * 30 + 10, i * 30],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Animated Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                i % 3 === 0 ? 'bg-blue-400/30' : 
                i % 3 === 1 ? 'bg-orange-400/30' : 
                'bg-white/20'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Professional Header - UPDATED FONT STYLE */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex flex-col items-center px-4"
            >
              {/* Professional Badge */}
              <div className="relative mb-8 sm:mb-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-orange-500/30 rounded-full blur opacity-70"></div>
                <div className="relative px-6 sm:px-8 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex gap-1 sm:gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1.3, 1, 1.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-300 rounded-full"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-widest font-mono">DIGITAL SOLUTIONS</span>
                  </div>
                </div>
              </div>

              {/* Main Heading - UPDATED FONT STYLE TO BOLD AND MODERN */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
                Professional
                <span className="block mt-2 sm:mt-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 font-black">
                    Tech Services
                  </span>
                </span>
              </h1>

              {/* Subheading - UPDATED FONT STYLE */}
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mt-6 sm:mt-8 leading-relaxed font-light px-4">
                Empowering businesses with <span className="text-orange-300 font-semibold">cutting-edge technology</span> 
                and <span className="text-blue-300 font-semibold">innovative solutions</span> that drive 
                real growth and digital transformation.
              </p>
            </motion.div>
          </div>

          {/* ===== SERVICES GRID - PROFESSIONAL STYLE ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
            {[
              {
                title: "Game Development",
                desc: "Crafting immersive game worlds with cutting-edge technology and creative precision.",
                icon: "🎮",
                color: "from-orange-500 to-amber-500",
                bg: "bg-gradient-to-br from-orange-500/10 to-amber-500/5",
                border: "border-orange-600/50",
                features: ["Unity/Unreal Engine", "3D Modeling", "Multiplayer", "VR/AR"]
              },
              {
                title: "Web Development",
                desc: "Building high-performance websites and applications with modern frameworks.",
                icon: "🌐",
                color: "from-gray-600 to-gray-700",
                bg: "bg-gradient-to-br from-blue-cyan/10 to-cyan-500/5",
                border: "border-blue-800/50",
                features: ["React/Next.js", "Full Stack", "E-commerce", "API Integration"]
              },
              {
                title: "Digital Marketing",
                desc: "Strategic campaigns from social media to SEO that engage and convert audiences.",
                icon: "📈",
                color: "from-orange-600 to-orange-500",
                bg: "bg-gradient-to-br from-orange-600/10 to-orange-500/5",
                border: "border-orange-800/50",
                features: ["SEO", "Social Media", "PPC", "Analytics"]
              },
              {
                title: "UI/UX Design",
                desc: "Crafting visually stunning designs with purpose, emotion, and brand identity.",
                icon: "🎨",
                color: "from-pink-800 to-pink-600",
                bg: "bg-gradient-to-br from-pink-500/10 to-pink-500/5",
                border: "border-pink-800/50",
                features: ["Wireframing", "Prototyping", "User Testing", "Branding"]
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                
                {/* Main Card */}
                <div className={`relative ${service.bg} backdrop-blur-sm border ${service.border} rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full`}>
                  
                  {/* Top Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-t-xl sm:rounded-t-2xl`}></div>
                  
                  {/* Icon Container */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center`}>
                      <span className="text-2xl sm:text-3xl">{service.icon}</span>
                    </div>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                      {service.desc}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 sm:mb-8">
                    {service.features.map((feature, fIdx) => (
                      <span key={fIdx} className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-gray-300">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 sm:py-3 rounded-lg sm:rounded-lg bg-gradient-to-r ${service.color} text-white font-bold transition-all duration-300 group-hover:shadow-lg shadow-md text-sm sm:text-base`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          

          
        </div>
      </section>









{/* ================= SECTION 5 - BRITISH BOX-LESS ELEGANCE ================= */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}>

  {/* Background Image - FULL VISIBILITY */}
  <div className="absolute inset-0 z-0">
    {/* Your Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL || ''}/images/bg2.jpeg)`,
      }}
    />
    
    {/* Minimal Overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-950/10 via-transparent to-gray-950/10" />
    
    {/* Subtle Gradient Effects */}
    <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent blur-3xl" />
    <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-cyan-500/5 via-transparent to-transparent blur-3xl" />
    
    {/* Floating Particles */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 5) % 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: (i % 6) * 0.2,
          }}
        />
      ))}
    </div>
  </div>

  {/* Main Content - NO BOX, DIRECT ON BACKGROUND */}
  <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
    
    {/* Header Section - BRITISH ELEGANCE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center mb-12 sm:mb-16"
    >
      
      {/* Premium Badge - BRITISH STYLE */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 150 }}
        className="inline-flex items-center gap-3 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-lg mb-8 sm:mb-12 shadow-lg shadow-orange-500/10 group/badge"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full group-hover/badge:from-orange-300 group-hover/badge:to-amber-300 transition-all duration-300"
            />
          ))}
        </div>
        <span className="text-xs sm:text-sm font-medium tracking-[0.3em] text-amber-300 uppercase group-hover/badge:text-orange-300 transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.3em" }}>
          Premium Enterprise Solutions
        </span>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-1.5 h-1.5 sm:w-2 sm:h-2 border border-amber-300 rounded-full group-hover/badge:border-orange-300 transition-colors duration-300"
        />
      </motion.div>

      {/* Main Heading - BRITISH TYPOGRAPHY */}
      <div className="relative mb-8 sm:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-[0.9] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
        >
          <span className="block text-gray-100">Innovate • Transform</span>
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            whileInView={{ backgroundPosition: "100% 50%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="block mt-4 sm:mt-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-100 to-orange-300 bg-[length:200%_auto] bg-clip-text"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
          >
            Lead With Distinction
          </motion.span>
        </motion.h1>
        
        {/* Animated Dots around heading */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full shadow-lg shadow-orange-400/30"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full shadow-lg shadow-amber-400/30"
        />
      </div>
      
      {/* Subtitle - BRITISH ELOQUENCE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="relative inline-block max-w-3xl px-4"
      >
        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent rounded-2xl blur-xl" />
        <div className="relative space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg lg:text-xl font-playfair italic font-medium text-white/90 max-w-3xl mx-auto leading-relaxed bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl shadow-black/30 hover:border-orange-400/30 transition-all duration-500 group" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem sm:1.2rem lg:1.35rem", lineHeight: "1.8" }}>
            Your Distinguished Partner in <span className="text-amber-300 font-semibold group-hover:text-orange-300 transition-colors duration-300">Digital Growth</span>. 
            We provide sophisticated, scalable, and future-ready IT solutions designed to help 
            enterprises innovate, evolve, and compete with absolute confidence.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300/90 italic text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
            From conception to realisation, we transform visionary concepts into formidable digital enterprises.
          </p>
        </div>
      </motion.div>
    </motion.div>

    {/* Elegant Divider - ORANGE ACCENT */}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="relative h-px my-12 sm:my-16 lg:my-20 group/divider"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent group-hover/divider:via-orange-300/60 transition-all duration-500" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full shadow-lg shadow-orange-400/40 group-hover/divider:scale-125 transition-transform duration-500" />
    </motion.div>

    {/* Content Grid - FLOATING CARDS WITH ORANGE HOVER */}
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
        
        {/* Left Column - Expertise Cards */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 lg:mb-10 group/heading"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300 group-hover/heading:from-orange-300 group-hover/heading:to-amber-200 transition-all duration-500">
              Our Distinguished Expertise
            </span>
          </motion.h3>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                icon: "🏛️",
                title: "Digital Transformation",
                description: "Complete modernisation of your business architecture",
                gradient: "from-orange-500/10 to-amber-500/10"
              },
              {
                icon: "🛡️",
                title: "Enterprise Security",
                description: "Regiment-grade protection for your digital assets",
                gradient: "from-amber-500/10 to-orange-500/10"
              },
              {
                icon: "📊",
                title: "Strategic Analytics",
                description: "AI-powered insights for executive decisions",
                gradient: "from-orange-600/10 to-amber-600/10"
              },
              {
                icon: "⚜️",
                title: "Cloud Infrastructure",
                description: "Scalable and resilient cloud solutions",
                gradient: "from-amber-600/10 to-orange-600/10"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Card Background - ORANGE HOVER */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                {/* Card Content */}
                <div className="relative flex items-start gap-3 sm:gap-5 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 group-hover:border-orange-400/40 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-orange-500/10">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-lg sm:rounded-xl blur-lg group-hover:blur-xl transition-all duration-500" />
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl flex items-center justify-center border border-white/10 group-hover:border-orange-400/40 transition-colors duration-500 group-hover:bg-gradient-to-br group-hover:from-gray-800/90 group-hover:to-gray-900/90">
                        <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-grow">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 group-hover:text-orange-300 transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-300/80 group-hover:text-amber-100/90 transition-colors duration-300 text-sm sm:text-base" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Arrow Indicator - ORANGE */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-amber-300 opacity-0 group-hover:opacity-100 group-hover:text-orange-300 transition-all duration-300 self-center"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Stats & CTA */}
        <div className="space-y-8 lg:space-y-12 mt-8 lg:mt-0">
          
          {/* Stats Grid - FLOATING WITH ORANGE */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 group/heading2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300 group-hover/heading2:from-orange-300 group-hover/heading2:to-amber-200 transition-all duration-500">
                Our Distinguished Performance
              </span>
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {[
                { 
                  value: "99.9%", 
                  label: "Uptime", 
                  gradient: "from-orange-400 to-amber-400",
                  bg: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
                },
                { 
                  value: "150+", 
                  label: "Patrons", 
                  gradient: "from-amber-400 to-orange-500",
                  bg: "bg-gradient-to-br from-amber-500/10 to-orange-600/10"
                },
                { 
                  value: "24/7", 
                  label: "Concierge", 
                  gradient: "from-orange-500 to-amber-500",
                  bg: "bg-gradient-to-br from-orange-600/10 to-amber-600/10"
                },
                { 
                  value: "100%", 
                  label: "Satisfaction", 
                  gradient: "from-amber-500 to-orange-400",
                  bg: "bg-gradient-to-br from-amber-600/10 to-orange-500/10"
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                  className="group relative"
                >
                  {/* Hover Glow - ORANGE */}
                  <div className={`absolute inset-0 ${stat.bg} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg`} />
                  
                  {/* Stat Card */}
                  <div className="relative p-4 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 group-hover:border-orange-400/40 transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-500/10">
                    <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 group-hover:from-orange-300 group-hover:to-amber-200 transition-all duration-500`} style={{ fontFamily: "'Playfair Display', serif" }}>
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg font-medium text-gray-300 group-hover:text-amber-100 transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {stat.label}
                    </div>
                    
                    {/* Animated Progress Ring - ORANGE */}
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 transform -rotate-90">
                        <motion.circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="url(#orangeGradient)"
                          strokeWidth="1.5"
                          fill="transparent"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: idx * 0.2 }}
                        />
                        <defs>
                          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section - FLOATING WITH ORANGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative pt-6 sm:pt-8 lg:pt-10 group/cta"
          >
            {/* Top Border - ORANGE */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent group-hover/cta:via-orange-300/70 transition-all duration-500" />
            
            <div className="relative space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl border border-white/20 group-hover/cta:border-orange-400/40 shadow-2xl shadow-orange-500/10 transition-all duration-500">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-xl sm:text-2xl font-bold text-white group-hover/cta:text-amber-100 transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Prepared to Elevate Your Enterprise?
                </h4>
                <p className="text-gray-300/80 group-hover/cta:text-amber-100/90 transition-colors duration-300 text-sm sm:text-base" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Align with us to transmute your vision into palpable reality. Let us construct something truly remarkable together.
                </p>
              </div>
              
              {/* CTA Button - ORANGE ACCENT */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group/btn"
              >
                {/* Button Glow - ORANGE */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                
                {/* Main Button */}
                <Link
                  href="/contact-us"
                  className="relative inline-flex items-center justify-center gap-3 sm:gap-4 w-full bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 border border-orange-400/40 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold overflow-hidden transition-all duration-500 group-hover/btn:border-orange-300/60 group-hover/btn:shadow-lg group-hover/btn:shadow-orange-400/40"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {/* Shine Effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent"
                  />
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center gap-3 sm:gap-4">
                    <span>Commence Your Digital Journey</span>
                    <motion.div
                      animate={{ x: [0, 5, 0], rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-amber-300 group-hover/btn:text-orange-300 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Connection Line - ORANGE */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-20 pointer-events-none opacity-30 hidden lg:block">
        <motion.line
          x1="33%"
          y1="50%"
          x2="50%"
          y2="50%"
          stroke="url(#orangeLineGradient)"
          strokeWidth="1"
          strokeDasharray="5,3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <defs>
          <linearGradient id="orangeLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    {/* Bottom Spacing */}
    <div className="h-12 sm:h-16 lg:h-20"></div>
  </div>

  {/* Floating Ornaments - ORANGE THEME */}
  <div className="absolute inset-0 z-5 pointer-events-none">
    <motion.div
      animate={{ 
        y: [0, -30, 0],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-1/4 right-4 sm:right-10 text-2xl sm:text-3xl lg:text-4xl text-orange-400/20"
    >
      ⚜️
    </motion.div>
    
    <motion.div
      animate={{ 
        y: [0, 30, 0],
        rotate: [360, 180, 0]
      }}
      transition={{ 
        duration: 25, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: 3 
      }}
      className="absolute bottom-1/4 left-4 sm:left-10 text-2xl sm:text-3xl lg:text-4xl text-amber-400/20"
    >
      🏰
    </motion.div>
  </div>
</section>

















{/* ================= SECTION 7 - DARK ORANGE ELEGANT TESTIMONIALS ================= */}
<section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">

  {/* Import Fonts */}
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap');
    
    .font-playfair {
      font-family: 'Playfair Display', serif;
    }
    .font-inter {
      font-family: 'Inter', sans-serif;
    }
    .font-jetbrains {
      font-family: 'JetBrains Mono', monospace;
    }
  `}</style>

  {/* ===== ELEGANT BACKGROUND STICKERS ===== */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    
    {/* Floating Orange Stickers - WITH HOVER EFFECTS */}
    {[
      { top: "10%", left: "5%", size: "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16", icon: "⭐", delay: 0, rotation: 45 },
      { top: "15%", left: "85%", size: "w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20", icon: "✨", delay: 0.2, rotation: -30 },
      { top: "85%", left: "10%", size: "w-10 h-10 sm:w-12 sm:h-12", icon: "🎯", delay: 0.4, rotation: 60 },
      { top: "75%", left: "90%", size: "w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14", icon: "🔥", delay: 0.6, rotation: -45 },
      { top: "30%", left: "92%", size: "w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18", icon: "💎", delay: 0.8, rotation: 15 },
      { top: "65%", left: "3%", size: "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16", icon: "🚀", delay: 1, rotation: -60 },
      { top: "45%", left: "95%", size: "w-8 h-8 sm:w-10 sm:h-10", icon: "⚡", delay: 1.2, rotation: 30 },
      { top: "90%", left: "80%", size: "w-16 h-16 sm:w-18 sm:h-18 lg:w-22 lg:h-22", icon: "🏆", delay: 1.4, rotation: -15 },
    ].map((sticker, idx) => (
      <motion.div
        key={idx}
        className={`absolute ${sticker.size} rounded-xl bg-gradient-to-br from-orange-900/20 to-amber-900/10 border border-orange-800/20 backdrop-blur-sm flex items-center justify-center shadow-lg cursor-pointer group/sticker hidden sm:flex`}
        style={{
          top: sticker.top,
          left: sticker.left,
        }}
        initial={{ opacity: 0, scale: 0, y: 30, rotate: sticker.rotation }}
        whileInView={{ opacity: 1, scale: 1, y: 0, rotate: sticker.rotation }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: sticker.delay, 
          type: "spring",
          stiffness: 100
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [sticker.rotation, sticker.rotation + 5, sticker.rotation],
          transition: {
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.5
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.3
            }
          }
        }}
        whileHover={{
          scale: 1.5,
          rotate: sticker.rotation + 720,
          backgroundColor: "rgba(249, 115, 22, 0.4)",
          borderColor: "rgba(251, 191, 36, 0.8)",
          boxShadow: "0 0 50px rgba(249, 115, 22, 0.6), 0 0 100px rgba(251, 191, 36, 0.3)",
          y: -10,
          zIndex: 50,
          transition: { 
            duration: 0.5, 
            type: "spring",
            stiffness: 300 
          }
        }}
      >
        {/* Pulsing glow effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/30 to-amber-500/20 blur-sm"
        />
        
        <motion.span 
          className="text-xl sm:text-2xl opacity-80 group-hover/sticker:opacity-100 group-hover/sticker:text-yellow-300 relative z-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: idx * 0.2
          }}
          whileHover={{ 
            scale: 2,
            rotate: -sticker.rotation - 360,
            filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))",
            transition: { duration: 0.4 }
          }}
        >
          {sticker.icon}
        </motion.span>
        
        {/* Glow effect on hover */}
        <motion.div 
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/0 to-amber-500/0 blur-md group-hover/sticker:from-orange-500/40 group-hover/sticker:to-amber-500/20"
          initial={false}
          animate={{ opacity: 0 }}
          whileHover={{ 
            opacity: 1,
            scale: 1.3,
            transition: { duration: 0.3 }
          }}
        />
        
        {/* Ring effect on hover */}
        <motion.div
          className="absolute -inset-3 sm:-inset-4 border-2 border-orange-400/0 rounded-xl"
          initial={false}
          whileHover={{
            borderColor: "rgba(251, 191, 36, 0.5)",
            scale: 1.1,
            transition: { duration: 0.4 }
          }}
        />
      </motion.div>
    ))}

    {/* Geometric Shapes - Floating in Background WITH HOVER */}
    {[
      { top: "20%", left: "15%", size: "w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32", color: "from-orange-900/5 to-transparent", rotation: 0 },
      { top: "70%", left: "85%", size: "w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40", color: "from-amber-900/5 to-transparent", rotation: 45 },
      { top: "40%", left: "8%", size: "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28", color: "from-orange-800/5 to-transparent", rotation: 90 },
      { top: "60%", left: "92%", size: "w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36", color: "from-amber-800/5 to-transparent", rotation: 135 },
      { top: "25%", left: "78%", size: "w-18 h-18 sm:w-20 sm:h-20 lg:w-24 lg:h-24", color: "from-orange-700/5 to-transparent", rotation: 180 },
    ].map((shape, idx) => (
      <motion.div
        key={idx}
        className={`absolute ${shape.size} bg-gradient-to-br ${shape.color} border border-orange-800/10 rounded-2xl cursor-pointer group/shape hidden sm:block`}
        style={{
          top: shape.top,
          left: shape.left,
        }}
        initial={{ opacity: 0, scale: 0, rotate: shape.rotation }}
        whileInView={{ opacity: 0.3, scale: 1, rotate: shape.rotation }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: idx * 0.2 }}
        animate={{
          rotate: [shape.rotation, shape.rotation + 360],
          transition: {
            rotate: {
              duration: 40 + idx * 10,
              repeat: Infinity,
              ease: "linear"
            }
          }
        }}
        whileHover={{
          scale: 1.4,
          opacity: 0.8,
          borderColor: "rgba(249, 115, 22, 0.5)",
          backgroundColor: "rgba(251, 191, 36, 0.2)",
          boxShadow: "0 0 40px rgba(249, 115, 22, 0.3)",
          rotate: shape.rotation + 180,
          zIndex: 40,
          transition: { 
            duration: 0.6,
            type: "spring",
            stiffness: 200
          }
        }}
      >
        {/* Inner pattern on hover */}
        <motion.div
          className="absolute inset-3 sm:inset-4 border border-orange-500/0 rounded-lg"
          initial={false}
          whileHover={{
            borderColor: "rgba(251, 191, 36, 0.3)",
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
    ))}

    {/* Floating Particles - Using stable values */}
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full cursor-pointer ${
          i % 3 === 0 ? 'bg-orange-500/10 hover:bg-orange-500/30' : 
          i % 3 === 1 ? 'bg-amber-500/10 hover:bg-amber-500/30' : 
          'bg-red-500/5 hover:bg-red-500/20'
        }`}
        style={{
          left: `${(i * 7) % 100}%`,
          top: `${(i * 4) % 100}%`,
          width: `${(i % 6) + 2}px`,
          height: `${(i % 6) + 2}px`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, (i % 3 - 1) * 20, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4 + (i % 3),
          repeat: Infinity,
          delay: (i % 5) * 0.2,
          ease: "easeInOut"
        }}
        whileHover={{
          scale: 3,
          opacity: 0.8,
          boxShadow: "0 0 20px currentColor",
          transition: { duration: 0.2 }
        }}
      />
    ))}
    
    {/* Gradient Orbs - ORANGE THEME WITH HOVER */}
    <motion.div
      className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 lg:-top-40 lg:-right-40 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-orange-900/10 to-red-900/5 rounded-full blur-2xl sm:blur-3xl cursor-pointer"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{
        scale: 1.3,
        opacity: 0.3,
        transition: { duration: 1 }
      }}
    />
    <motion.div
      className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 lg:-bottom-40 lg:-left-40 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-amber-900/10 to-yellow-900/5 rounded-full blur-2xl sm:blur-3xl cursor-pointer"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.05, 0.15, 0.05],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      whileHover={{
        scale: 1.4,
        opacity: 0.2,
        transition: { duration: 1 }
      }}
    />

    {/* Elegant Dots Pattern */}
    <div className="absolute inset-0 opacity-5">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="elegant-dots" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(249, 115, 22, 0.3)"/>
            <circle cx="32" cy="32" r="1" fill="rgba(251, 191, 36, 0.3)"/>
            <circle cx="2" cy="32" r="1" fill="rgba(249, 115, 22, 0.3)"/>
            <circle cx="32" cy="2" r="1" fill="rgba(251, 191, 36, 0.3)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#elegant-dots)" />
      </svg>
    </div>
  </div>

  {/* Decorative Corner Elements - ORANGE BORDERS */}
  <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 z-10">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-3 left-3 sm:top-4 sm:left-4 w-18 h-18 sm:w-24 sm:h-24 border border-orange-800/30 rounded-lg"
    />
  </div>
  <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 z-10">
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-18 h-18 sm:w-24 sm:h-24 border border-amber-800/30 rounded-lg"
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
    
    {/* ===== ELEGANT HEADER - DARK ORANGE ===== */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 sm:mb-16 lg:mb-20"
    >
      {/* Badge - ORANGE */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)",
          backgroundColor: "rgba(249, 115, 22, 0.15)"
        }}
        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-900/20 to-amber-900/20 rounded-full border border-orange-800/30 mb-6 sm:mb-8 shadow-lg transition-all duration-300 cursor-default backdrop-blur-sm"
      >
        <div className="flex items-center gap-1">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
            />
          ))}
        </div>
        <span className="text-xs font-medium text-orange-300 tracking-[0.2em] uppercase font-jetbrains">
          Client Testimonials
        </span>
      </motion.div>

      {/* Main Heading - ORANGE GRADIENT */}
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-playfair tracking-tight"
        >
          <span className="block text-gray-300">Voices of</span>
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400">
              Excellence
            </span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -right-8 sm:-right-12 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-2 border-orange-500/30 rounded-full"
            />
          </span>
        </motion.h2>

        {/* Elegant Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-inter px-4"
        >
          Discover what industry leaders and innovative companies have to say about their transformative journey with Eraflip.
        </motion.p>

        {/* Animated Divider - ORANGE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
        >
          <div className="w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-orange-400 rounded-full"
          />
          <div className="w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </motion.div>
      </div>
    </motion.div>

    {/* ===== ELEGANT TESTIMONIAL SLIDER - DARK ORANGE ===== */}
    <div className="relative">
      {/* Slider Navigation Arrows - ORANGE THEME */}
      <div className="absolute -top-14 sm:-top-20 right-0 flex items-center gap-2 z-20">
        <motion.button
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: "rgba(249, 115, 22, 0.2)",
            boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800 border border-gray-700 shadow-lg flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
        >
          <motion.span
            whileHover={{ x: -2 }}
            className="text-lg sm:text-xl text-gray-400 group-hover:text-orange-400 transition-colors duration-300 font-bold"
          >
            ←
          </motion.span>
        </motion.button>
        <motion.button
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: "rgba(245, 158, 11, 0.2)",
            boxShadow: "0 10px 25px rgba(245, 158, 11, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-800 border border-gray-700 shadow-lg flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
        >
          <motion.span
            whileHover={{ x: 2 }}
            className="text-lg sm:text-xl text-gray-400 group-hover:text-amber-400 transition-colors duration-300 font-bold"
          >
            →
          </motion.span>
        </motion.button>
      </div>

      {/* Testimonial Cards Grid - DARK ORANGE THEME WITH REALISTIC HOVERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {[
          {
            name: "Alexandra Chen",
            role: "CTO, TechNova Inc.",
            company: "Fortune 500",
            content: "Eraflip transformed our digital infrastructure. Their expertise in cloud solutions helped us scale 300% in just 6 months.",
            rating: 5,
            delay: 0.1,
            color: "from-gray-800 to-gray-900",
            hoverBg: "group-hover:bg-gradient-to-br group-hover:from-orange-900/20 group-hover:to-amber-900/20",
            border: "border-orange-900/30",
            hoverBorder: "group-hover:border-orange-500/60",
            icon: "💼",
            accentColor: "orange"
          },
          {
            name: "Marcus Rivera",
            role: "Digital Director",
            company: "Global Retail Corp",
            content: "The attention to detail and innovative approach exceeded all expectations. A true partnership for digital excellence.",
            rating: 5,
            delay: 0.2,
            color: "from-gray-800/95 to-gray-900",
            hoverBg: "group-hover:bg-gradient-to-br group-hover:from-amber-900/20 group-hover:to-yellow-900/20",
            border: "border-amber-900/30",
            hoverBorder: "group-hover:border-amber-500/60",
            icon: "🚀",
            accentColor: "amber"
          },
          {
            name: "Sophia Williams",
            role: "CEO, StartupXYZ",
            company: "Silicon Valley",
            content: "From concept to launch, Eraflip delivered beyond our wildest dreams. Their team is simply exceptional.",
            rating: 5,
            delay: 0.3,
            color: "from-gray-800 to-gray-900/95",
            hoverBg: "group-hover:bg-gradient-to-br group-hover:from-orange-800/20 group-hover:to-red-900/20",
            border: "border-orange-800/30",
            hoverBorder: "group-hover:border-orange-400/60",
            icon: "✨",
            accentColor: "orange"
          },
          {
            name: "David Kim",
            role: "Operations Head",
            company: "Manufacturing Giant",
            content: "Implemented ERP solutions that streamlined our entire operation. Efficiency improved by 45%.",
            rating: 5,
            delay: 0.4,
            color: "from-gray-900/95 to-gray-800",
            hoverBg: "group-hover:bg-gradient-to-br group-hover:from-amber-800/20 group-hover:to-orange-900/20",
            border: "border-amber-800/30",
            hoverBorder: "group-hover:border-amber-400/60",
            icon: "⚙️",
            accentColor: "amber"
          },
          {
            name: "Isabella Rossi",
            role: "Marketing Director",
            company: "Luxury Brands Ltd",
            content: "Their digital marketing strategy tripled our online engagement. Truly remarkable results.",
            rating: 5,
            delay: 0.5,
            color: "from-gray-800 to-gray-900",
            hoverBg: "group-hover:bg-gradient-to-br group-hover:from-orange-700/20 group-hover:to-amber-800/20",
            border: "border-orange-700/30",
            hoverBorder: "group-hover:border-orange-300/60",
            icon: "🎯",
            accentColor: "orange"
          },
          {
            name: "James Wilson",
            role: "Finance Lead",
            company: "FinTech Innovations",
            content: "Secure, reliable, and innovative solutions that transformed our financial operations.",
            rating: 5,
            delay: 0.6,
            color: "from-gray-900 to-gray-800",
            hoverBg: "group-hover:bg-gradient-to-br group-hover:from-amber-700/20 group-hover:to-yellow-800/20",
            border: "border-amber-700/30",
            hoverBorder: "group-hover:border-amber-300/60",
            icon: "🔒",
            accentColor: "amber"
          }
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: testimonial.delay }}
            className="group"
          >
            <div className={`relative bg-gradient-to-br ${testimonial.color} ${testimonial.hoverBg} rounded-xl sm:rounded-2xl ${testimonial.border} ${testimonial.hoverBorder} border p-4 sm:p-6 lg:p-8 shadow-xl transition-all duration-500 overflow-hidden h-full backdrop-blur-sm`}
              style={{
                transform: 'translateZ(0)',
                willChange: 'transform, box-shadow, border-color'
              }}
            >
              {/* Floating Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-orange-500/5 group-hover:via-amber-500/3 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              
              {/* Subtle Glow on Hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl sm:rounded-2xl blur-xl transition-all duration-500 pointer-events-none"
              />
              
              {/* Quote Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 text-3xl sm:text-4xl text-orange-500/20 group-hover:text-orange-400/40 transition-all duration-300"
              >
                ❝
              </motion.div>
              
              {/* Company Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 mb-4 sm:mb-6 group-hover:bg-orange-900/40 group-hover:border-orange-500/60 transition-all duration-300"
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-base sm:text-lg"
                >
                  {testimonial.icon}
                </motion.span>
                <span className="text-xs font-medium text-orange-300 group-hover:text-orange-200 font-jetbrains transition-colors duration-300">
                  {testimonial.company}
                </span>
              </motion.div>
              
              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 lg:mb-8 font-inter text-sm sm:text-base lg:text-lg relative z-10 group-hover:text-gray-100 transition-colors duration-300">
                {testimonial.content}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`text-${testimonial.accentColor}-400 group-hover:text-yellow-300 transition-all duration-300`}
                  >
                    ★
                  </motion.div>
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm sm:text-lg font-medium text-orange-300 group-hover:text-white transition-colors duration-300">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </motion.div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white group-hover:text-orange-300 font-inter transition-colors duration-300 text-sm sm:text-base lg:text-lg truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 group-hover:text-amber-200 transition-colors duration-300 truncate">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-400 group-hover:via-amber-300 group-hover:via-orange-400 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center gap-2 mt-8 sm:mt-12">
        {[1, 2, 3].map((dot) => (
          <motion.button
            key={dot}
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: dot === 1 ? 1 : 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${dot === 1 ? 'bg-orange-500' : 'bg-gray-700'} transition-all duration-300`}
          />
        ))}
      </div>
    </div>

    {/* ===== ELEGANT STATS SECTION - ORANGE THEME ===== */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="mt-12 sm:mt-16 lg:mt-20"
    >
      <div className="relative group/statcard"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      >
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden border border-orange-900/30 group-hover/statcard:border-orange-600/50 transition-all duration-500 backdrop-blur-sm">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -top-20 sm:-right-32 sm:-top-32 lg:-right-40 lg:-top-40 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-orange-900/10 to-red-900/5 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -left-20 -bottom-20 sm:-left-32 sm:-bottom-32 lg:-left-40 lg:-bottom-40 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-amber-900/10 to-yellow-900/5 rounded-full"
            />
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { value: "98%", label: "Client Retention", icon: "📈", color: "from-orange-400 to-amber-400" },
                { value: "250+", label: "Projects Delivered", icon: "🚀", color: "from-amber-400 to-orange-400" },
                { value: "4.9/5", label: "Average Rating", icon: "⭐", color: "from-yellow-400 to-amber-400" },
                { value: "24/7", label: "Support Available", icon: "⚡", color: "from-orange-500 to-red-400" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx + 0.4 }}
                  className="text-center group/stat"
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)"
                    }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 mb-4 sm:mb-6 shadow-lg group-hover/stat:from-orange-900/40 group-hover/stat:to-amber-900/40 group-hover/stat:border-orange-600/60 transition-all duration-300"
                  >
                    <span className="text-xl sm:text-2xl group-hover/stat:scale-110 transition-all duration-300">
                      {stat.icon}
                    </span>
                  </motion.div>
                  <div className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 sm:mb-3 font-playfair group-hover/stat:scale-105 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 group-hover/stat:text-orange-200 text-xs sm:text-sm font-medium tracking-wide uppercase font-inter transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Shadow Effect */}
        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-orange-500/0 via-amber-500/0 to-orange-500/0 rounded-2xl sm:rounded-3xl blur-xl group-hover/statcard:from-orange-500/10 group-hover/statcard:via-amber-500/5 group-hover/statcard:to-orange-500/10 transition-all duration-500 -z-10" />
      </div>
    </motion.div>

    {/* ===== ELEGANT CALL TO ACTION - ORANGE BUTTON ===== */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
      className="mt-12 sm:mt-16 lg:mt-20 text-center"
    >
      <div className="inline-block relative group/cta">
        {/* Outer Glow Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-orange-500/30 rounded-full group-hover/cta:border-orange-400/60 transition-all duration-500"
        />
        
        {/* Inner Glow Effect */}
        <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-orange-500/0 to-amber-500/0 rounded-full blur-xl group-hover/cta:from-orange-500/20 group-hover/cta:to-amber-500/10 transition-all duration-500" />
        
        <Link
          href="/contact"
          className="relative inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-full text-sm sm:text-base lg:text-lg font-medium shadow-xl transition-all duration-500 group/btn overflow-hidden backdrop-blur-sm"
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform, box-shadow'
          }}
        >
          {/* Shimmer Effect */}
          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          
          {/* Pulse Effect */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
          />
          
          <span className="relative font-inter tracking-wide group-hover/btn:tracking-wider transition-all duration-300">
            Join Our Success Stories
          </span>
          
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            whileHover={{ rotate: 90, scale: 1.1 }}
            className="relative transition-all duration-300"
          >
            →
          </motion.div>
        </Link>
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="text-gray-400 mt-4 sm:mt-6 text-xs sm:text-sm font-jetbrains tracking-wide transition-colors duration-300"
      >
        Trusted by 500+ companies worldwide
      </motion.p>
    </motion.div>
  </div>
</section>





{/* ---------------------Section 8  MAGNIFICENT TECH GRAPH WITH HD BACKGROUND ---------------------- */}
<section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
  {/* HD BACKGROUND LAYERS - NO FILTERS */}
  <div className="absolute inset-0">
    {/* HD Background Image - NO FILTERS */}
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/images/5076404.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // For parallax effect
        zIndex: 1
      }}
    ></div>
    
    {/* Clean Dark Overlay for Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/50 to-purple-900/60 z-2"></div>
    
    {/* Minimal Color Tint */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-orange-500/5 z-3"></div>
    
    {/* Clean 3D Depth Layers */}
    <div className="absolute inset-0 z-4">
      {/* Floating Geometric Shapes - Subtle */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400/10 rounded-full transform rotate-45 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 border border-orange-400/10 rounded-lg transform -rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-purple-400/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Clean Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center top'
        }}
      ></div>
      
      {/* Clean Perspective Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
    </div>
    
    {/* Clean Particle System */}
    <div className="absolute inset-0 z-5">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-px h-px bg-white rounded-full"
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 4) % 100}%`,
            animation: `float ${3 + (i % 4)}s infinite ease-in-out ${(i % 5)}s`,
            opacity: 0.05 + (i % 10) * 0.01,
          }}
        ></div>
      ))}
    </div>
    
    {/* Subtle Light Beams */}
    <div className="absolute inset-0 z-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>
      <div className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-orange-400/5 to-transparent animate-shimmer" style={{animationDelay: '1.5s'}}></div>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    
    {/* ELEGANT BRITISH-STYLE TYPOGRAPHY */}
    <div className="text-center mb-16 md:mb-20 lg:mb-24">
      {/* Main Title with Clear Glow */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
        <span className="block font-cinzel font-black bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-50 to-white">
          Technological Mastery
        </span>
      </h1>
      
      {/* Subtitle - Clear and Elegant */}
      <p className="text-lg md:text-xl lg:text-2xl mb-4 font-playfair italic font-medium text-white/90 max-w-3xl mx-auto leading-relaxed">
        "Where innovation meets tradition in the digital realm"
      </p>
      
      {/* Elegant Divider */}
      <div className="flex items-center justify-center gap-4 my-8">
        <div className="w-20 h-px bg-gradient-to-r from-transparent to-blue-400/40"></div>
        <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full animate-pulse"></div>
        <div className="w-20 h-px bg-gradient-to-r from-blue-400/40 to-transparent"></div>
      </div>
      
      {/* Description with Clear Contrast */}
      <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-garamond font-normal leading-relaxed bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        A distinguished collection of fourteen cutting-edge technologies, 
        harmoniously orchestrated to deliver exceptional digital solutions 
        with precision and elegance against a backdrop of infinite possibilities.
      </p>
    </div>

    {/* Magnificent Graph Container with 3D Perspective */}
    <div className="relative transform-gpu" style={{perspective: '1000px'}}>
      {/* Elegant Central Hub - Floating 3D Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="relative transform-gpu hover:scale-105 transition-transform duration-700">
          {/* Clean Shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-orange-600/15 rounded-full blur-xl transform translateZ(-20px)"></div>
          
          {/* Central Hub with Clear Design */}
          <div className="relative w-56 h-56 bg-gradient-to-br from-white/95 via-blue-50/95 to-white/95 rounded-3xl border-2 border-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-10 flex flex-col items-center justify-center backdrop-blur-xl transform hover:translateZ(20px) transition-all duration-700">
            {/* Clean Edge Highlights */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/5 via-transparent to-orange-500/5 rounded-3xl blur-lg transform translateZ(10px)"></div>
            
            {/* Main Number - Clear Text Effect */}
            <div className="text-7xl font-black font-cinzel bg-clip-text text-transparent bg-gradient-to-b from-slate-800 via-blue-800 to-slate-900 mb-3 relative z-10">
              14
            </div>
            
            {/* Subtitle with Clarity */}
            <div className="text-sm font-playfair font-semibold text-slate-700 mb-6 tracking-wider uppercase relative z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              DISTINGUISHED TECHNOLOGIES
            </div>
            
            {/* Clean Orbital System */}
            <div className="relative w-28 h-28">
              <div className="absolute inset-0 animate-spin-slow">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full border-2 border-white shadow-md"
                    style={{
                      left: `${50 + 45 * Math.cos(i * 30 * Math.PI / 180)}%`,
                      top: `${50 + 45 * Math.sin(i * 30 * Math.PI / 180)}%`,
                      transform: 'translate(-50%, -50%) translateZ(20px)',
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Graph Rings Container */}
      <div className="relative h-[700px] md:h-[800px] transform-gpu">
        
        {/* Clean Connection Grid */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {/* Core Glow - Subtle */}
          <div className="absolute w-40 h-40 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-orange-500/10 rounded-full animate-pulse transform translateZ(-10px)"></div>
          
          {/* Clean Perspective Connection Lines */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = i * 15;
            const length = 450;
            return (
              <div
                key={i}
                className="absolute w-px bg-gradient-to-t from-transparent via-blue-400/20 to-transparent"
                style={{
                  height: `${length}px`,
                  transform: `rotate(${angle}deg) translateZ(-30px)`,
                  transformOrigin: 'bottom center',
                  top: `-${length}px`,
                  opacity: 0.1
                }}
              ></div>
            );
          })}
        </div>

        {/* Ring 1: 4 Primary Logos - Elegant Floating Cards */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[group1, group2, group3, group4].map((logo, index) => {
            const angle = index * 90;
            const radius = 220;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            return (
              <div
                key={index}
                className="absolute group transform-gpu"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Elegant Card Container */}
                <div className="relative transform-gpu group-hover:translateZ(40px) transition-all duration-700">
                  {/* Elegant Blue Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-400/15 to-blue-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-700 transform translateZ(-30px)"></div>
                  
                  {/* Elegant Card */}
                  <div className="relative w-48 h-36 bg-gradient-to-br from-white/95 via-blue-50/95 to-white/95 rounded-2xl border-2 border-white/90 shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(59,130,246,0.3)] transition-all duration-700 hover:-translate-y-6 backdrop-blur-xl overflow-hidden p-7 flex items-center justify-center">
                    {/* Elegant Blue Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                    
                    {/* Logo Container with Elegant Effect */}
                    <div className="relative z-10 transform-gpu group-hover:scale-125 transition-transform duration-700">
                      <div className="relative bg-gradient-to-br from-blue-50/80 via-white to-blue-50/80 p-4 rounded-xl border border-blue-200/50 shadow-sm">
                        <Image 
                          src={logo} 
                          alt={`Primary Technology ${index + 1}`} 
                          className="w-32 h-20 object-contain filter drop-shadow-md"
                          width={128}
                          height={80}
                          style={{
                            filter: 'drop-shadow(0 4px 6px rgba(59, 130, 246, 0.3))'
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Elegant Corner Badge */}
                    <div className="absolute -top-3 -right-3 w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border-2 border-white/90 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-white text-sm font-bold">P</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ring 2: 5 Secondary Logos - Elegant Cards */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[group5, group6, group7, group8, group9].map((logo, index) => {
            const angle = index * 72;
            const radius = 320;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            return (
              <div
                key={index}
                className="absolute group transform-gpu"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="relative transform-gpu group-hover:translateZ(30px) transition-all duration-600">
                  {/* Elegant Orange Glow */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-orange-500/20 via-orange-400/15 to-orange-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-600 transform translateZ(-20px)"></div>
                  
                  {/* Elegant Card */}
                  <div className="relative w-44 h-32 bg-gradient-to-br from-white/95 via-orange-50/95 to-white/95 rounded-xl border-2 border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.25)] transition-all duration-600 hover:-translate-y-4 backdrop-blur-lg overflow-hidden p-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/15 to-orange-500/0 opacity-0 group-hover:opacity-50 transition-opacity duration-600"></div>
                    
                    <div className="relative z-10 bg-gradient-to-br from-orange-50/70 via-white to-orange-50/70 p-3 rounded-lg border border-orange-200/50 group-hover:scale-115 transition-transform duration-600">
                      <Image 
                        src={logo} 
                        alt={`Secondary Technology ${index + 5}`} 
                        className="w-28 h-16 object-contain filter drop-shadow-md"
                        width={112}
                        height={64}
                        style={{
                          filter: 'drop-shadow(0 3px 5px rgba(249, 115, 22, 0.3))'
                        }}
                      />
                    </div>
                    
                    {/* Elegant Badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-2 border-white/90 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-white text-xs font-semibold">S</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ring 3: 5 Tertiary Logos - Elegant Cards */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[group10, group11, group12, group13, group14].map((logo, index) => {
            const angle = index * 72 + 36;
            const radius = 420;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            return (
              <div
                key={index}
                className="absolute group transform-gpu"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="relative transform-gpu group-hover:translateZ(20px) transition-all duration-500">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/15 via-purple-400/10 to-orange-400/15 rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform translateZ(-15px)"></div>
                  
                  <div className="relative w-40 h-28 bg-gradient-to-br from-white/95 via-blue-50/90 to-white/95 rounded-lg border-2 border-white/90 shadow-[0_5px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.2)] transition-all duration-500 hover:-translate-y-2 backdrop-blur-md overflow-hidden p-5 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-orange-500/0 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                      <Image 
                        src={logo} 
                        alt={`Tertiary Technology ${index + 10}`} 
                        className="w-24 h-14 object-contain filter drop-shadow-sm"
                        width={96}
                        height={56}
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(99, 102, 241, 0.2))'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Orbital Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {[220, 320, 420].map((radius, i) => (
            <div
              key={i}
              className="absolute border border-blue-300/10 rounded-full"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                left: `-${radius}px`,
                top: `-${radius}px`,
                animation: `spin-slow ${25 + i * 8}s linear infinite`,
                transform: `translateZ(${-i * 10}px)`,
                transformStyle: 'preserve-3d'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>

    {/* ELEGANT STATISTICS SHOWCASE - Beautiful Alternative */}
    <div className="mt-32">
      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 font-cinzel bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-orange-200">
          Technology Distribution
        </h3>
        <p className="text-white/70 max-w-2xl mx-auto font-garamond text-lg">
          A balanced ecosystem of premier technologies across three tiers
        </p>
      </div>

      {/* Beautiful Statistics Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Primary Technologies Card */}
        <div className="relative group">
          <div className="relative h-full bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-900/30 rounded-2xl border border-blue-400/20 p-8 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              {/* Elegant Sticker - Decent Design */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg border border-blue-300/30 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl text-white">✨</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border border-blue-300/50">
                  <span className="text-xs font-bold text-white">1</span>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold font-cinzel text-white mb-3">Primary</h4>
              <div className="text-5xl font-black font-cinzel text-white mb-4">4</div>
              <p className="text-blue-100/80 text-sm font-garamond leading-relaxed">
                Core frameworks and distinguished languages forming the foundation
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Technologies Card */}
        <div className="relative group">
          <div className="relative h-full bg-gradient-to-br from-orange-900/30 via-orange-800/20 to-orange-900/30 rounded-2xl border border-orange-400/20 p-8 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              {/* Elegant Sticker - Decent Design */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center shadow-lg border border-orange-300/30 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center border border-orange-300/50">
                  <span className="text-xs font-bold text-white">2</span>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold font-cinzel text-white mb-3">Secondary</h4>
              <div className="text-5xl font-black font-cinzel text-white mb-4">5</div>
              <p className="text-orange-100/80 text-sm font-garamond leading-relaxed">
                Support libraries and development tools enhancing functionality
              </p>
            </div>
          </div>
        </div>

        {/* Tertiary Technologies Card */}
        <div className="relative group">
          <div className="relative h-full bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-orange-900/30 rounded-2xl border border-purple-400/20 p-8 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              {/* Elegant Sticker - Decent Design */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-blue-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg border border-purple-300/30 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl text-white">🌐</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full flex items-center justify-center border border-purple-300/50">
                  <span className="text-xs font-bold text-white">3</span>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold font-cinzel text-white mb-3">Tertiary</h4>
              <div className="text-5xl font-black font-cinzel text-white mb-4">5</div>
              <p className="text-purple-100/80 text-sm font-garamond leading-relaxed">
                Infrastructure and deployment services for seamless operation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Elegant Royal Motto */}
    <div className="mt-20 text-center">
      <p className="text-white/80 italic font-garamond text-xl bg-black/20 backdrop-blur-lg rounded-full py-4 px-8 border border-white/10 inline-block hover:bg-black/30 transition-all duration-300">
        "Excellence through innovation, precision through tradition"
      </p>
    </div>

  </div>
</section>








 {/*--------------------- SECTION 9 - CONTACT PAGE ----------------------*/}
    <section className="relative py-12 sm:py-16 lg:py-20 font-serif">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={contactBg.src || contactBg} 
          alt="Professional Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Elegant British Style */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 sm:mb-6 tracking-tight">
            <span className="text-white">
              Contact
            </span>
            <span className="text-blue-300 ml-2 sm:ml-4">
              Us
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide px-4">
            Let's create digital excellence together
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE - Compact Contact Info */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                <span className="text-white">
                  Ready to get
                </span>
                <br />
                <span className="text-blue-300">
                  started?
                </span>
              </h3>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-normal tracking-wide">
                Ready to elevate your business? Connect with us and let's create technology that drives real results.
              </p>
            </div>
            
            {/* Compact Contact Cards */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 pt-3 sm:pt-4 lg:pt-6">
              
              {/* Email Card - Compact */}
              <div className="group relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 backdrop-blur-md bg-white/5 border border-white/10 hover:border-blue-300/30 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 sm:p-3 rounded-lg shadow-md">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                      Email
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base font-medium">
                      info@eraflip.com
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      help@eraflip.com
                    </p>
                  </div>
                  
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
              
              {/* Phone Card - Compact */}
              <div className="group relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 backdrop-blur-md bg-white/5 border border-white/10 hover:border-green-300/30 shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 sm:p-3 rounded-lg shadow-md">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base font-medium">
                      +92 309 7770073
                    </p>
                  </div>
                  
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
              
              {/* Location Card - Compact */}
              <div className="group relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 backdrop-blur-md bg-white/5 border border-white/10 hover:border-purple-300/30 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2 sm:p-3 rounded-lg shadow-md">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-200 text-sm sm:text-base font-medium">
                      Office, Level F1.5
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      An S-Software Technology Park, Forescour Road, Lahore
                    </p>
                  </div>
                  
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE - Elegant Contact Form */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl mt-8 lg:mt-0">
            <div className="relative space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Form Header */}
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white">
                  Your Details
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-light tracking-wide">
                  Let us know how to get back to you
                </p>
              </div>
              
              {/* Elegant Form */}
              <form className="space-y-3 sm:space-y-4 lg:space-y-5">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2 tracking-wide">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 outline-none font-medium tracking-wide text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2 tracking-wide">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 outline-none font-medium tracking-wide text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2 tracking-wide">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 outline-none font-medium tracking-wide text-sm sm:text-base"
                    required
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2 tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+92"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 outline-none font-medium tracking-wide text-sm sm:text-base"
                  />
                </div>
                
                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2 tracking-wide">
                    How Can We Help? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    placeholder="Tell us about your project or inquiry..."
                    rows="3"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 resize-none outline-none font-medium tracking-wide text-sm sm:text-base"
                    required
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-sm sm:text-base lg:text-lg tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 relative overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Button Content */}
                  <span className="relative flex items-center justify-center space-x-2">
                    <span className="text-sm sm:text-base lg:text-lg">Send Message</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>




    </>
  );
};

export default Home;