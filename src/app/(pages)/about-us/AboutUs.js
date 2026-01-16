'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Gamepad2,
  Trophy, 
  Users, 
  Zap,
  Target,
  Shield,
  Sword,
  Crown,
  Rocket,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Cpu,
  Globe,
  Code,
  Cloud,
  Smartphone,
  Server,
  BarChart3,
  Star,
  Award,
  Flame,
  Swords,
  Crosshair,
  Briefcase,
  Palette,
  Linkedin,
  Joystick,
  Cctv
} from 'lucide-react';

// Import all 4 team images
import CeoImage from "../../../../public/images/ramishhh-768x944.png";
import CooImage from "../../../../public/images/wahab-yunus-768x944.png";
import ArtDirectorImage from "../../../../public/images/ramish-1-768x944.png";
import EngineeringDirectorImage from "../../../../public/images/Sir-Suleman-768x944.png";

// Import pixel sticker
import PixelSticker from "../../../../public/images/7gBWOP3q5FgztZ16ni46KMpVg4.png";

// Import all 12 stickers
import Sticker1 from "../../../../public/images/733f1f49639ac2bbb50800221d2cec51.jpg";
import Sticker2 from "../../../../public/images/5ecef05d5db35aa5bd615885b93419d7.jpg";
import Sticker3 from "../../../../public/images/05b9cc72b0271b8441200e288767850e.jpg";
import Sticker4 from "../../../../public/images/744381163ac5a1ff6c7639d5bf9f1518.jpg";
import Sticker5 from "../../../../public/images/ec8ea05d379666617c19b9cb79865d70.jpg";
import Sticker6 from "../../../../public/images/fee5ce52faa11adc47621b4d4e8236a6.jpg";
import Sticker7 from "../../../../public/images/1f11bb5e905aaf55c26692bfc6637625.jpg";
import Sticker8 from "../../../../public/images/3ca3202a5f0f85e63848316edf56be67.jpg";
import Sticker9 from "../../../../public/images/b476731e9902b5e57d0eb1096fa1d1d4.jpg";
import Sticker10 from "../../../../public/images/85dcf8b9633c419f6794618d8d6bba52.jpg";
import Sticker11 from "../../../../public/images/5718424f4a007c861fb16b63b743b3d4 (1).jpg";
import Sticker12 from "../../../../public/images/afcff23e60713eb9a4427a89f06754ff.jpg";

// Custom Hook for Intersection Observer
const useOnScreen = (ref, threshold = 0.1) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
};

export default function AboutUs() {
  // Refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const teamRef = useRef(null);
  const techRef = useRef(null);
  const footerRef = useRef(null);
  
  // Video ref for background video
  const videoRef = useRef(null);
  
  // Add video state
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Intersection states
  const heroVisible = useOnScreen(heroRef);
  const aboutVisible = useOnScreen(aboutRef);
  const whoWeAreVisible = useOnScreen(whoWeAreRef);
  const teamVisible = useOnScreen(teamRef);
  const techVisible = useOnScreen(techRef);
  const footerVisible = useOnScreen(footerRef);

  // Fix for scrollbar issue
  useEffect(() => {
    // Add class to html and body
    document.documentElement.classList.add('no-scrollbar');
    document.body.classList.add('no-scrollbar');
    
    // Set width and overflow
    document.documentElement.style.width = '100%';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.width = '100%';
    document.body.style.overflowX = 'hidden';
    
    return () => {
      document.documentElement.classList.remove('no-scrollbar');
      document.body.classList.remove('no-scrollbar');
      document.documentElement.style.width = '';
      document.documentElement.style.overflowX = '';
      document.body.style.width = '';
      document.body.style.overflowX = '';
    };
  }, []);

  // Video control effect - FIXED FOR CLEAR HD VIDEO
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video source
      video.src = "/images/4k_Video_Technology_Looped_Background_No_Copyright_Loop_Background_Video_1080p.mp4";
      
      // Preload the video for better performance
      video.preload = "auto";
      video.load();
      
      // Handle video events
      const handleLoadedData = () => {
        console.log("Video loaded successfully");
        setVideoLoaded(true);
        
        // Try to play the video
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Video playing successfully");
              setIsVideoPlaying(true);
            })
            .catch(error => {
              console.log("Video autoplay failed:", error);
              // Add user interaction for play
              const handleFirstInteraction = () => {
                video.play()
                  .then(() => setIsVideoPlaying(true))
                  .catch(e => console.log("Manual play failed:", e));
                document.removeEventListener('click', handleFirstInteraction);
                document.removeEventListener('touchstart', handleFirstInteraction);
              };
              
              document.addEventListener('click', handleFirstInteraction);
              document.addEventListener('touchstart', handleFirstInteraction);
            });
        }
      };
      
      const handleError = (e) => {
        console.error("Video error:", e);
        setVideoError(true);
        setVideoLoaded(false);
      };
      
      const handlePlaying = () => {
        setIsVideoPlaying(true);
        video.style.opacity = "1";
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('playing', handlePlaying);
      
      // Handle video loop
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
      
      // Cleanup
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('playing', handlePlaying);
        video.removeEventListener('ended', () => {});
      };
    }
  }, []);

  // 3D mouse movement effect for team cards
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;

    // Add parallax effect to image
    const image = card.querySelector('.team-image');
    if (image) {
      const moveX = (x - centerX) * 0.02;
      const moveY = (y - centerY) * 0.02;
      image.style.transform = `
        translateX(${moveX}px)
        translateY(${moveY}px)
        scale(1.1)
      `;
    }
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    
    // Reset image position
    const image = card.querySelector('.team-image');
    if (image) {
      image.style.transform = 'translateX(0) translateY(0) scale(1)';
    }
  };

  return (
    <div className="min-h-screen text-white bg-black w-full max-w-[100vw]">
      {/* ============ HERO SECTION WITH CRYSTAL CLEAR HD VIDEO BACKGROUND ============ */}
      <section 
        ref={heroRef} 
        className={`relative min-h-screen flex items-center justify-center py-20 px-4 transition-all duration-1000 overflow-hidden ${heroVisible ? 'translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Background Video - CRYSTAL CLEAR HD WITHOUT ANY OVERLAY */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          {/* HD Video Background - NO OVERLAY, PURE HD */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded && isVideoPlaying ? 'opacity-100' : 'opacity-0'}`}
            style={{
              zIndex: 1,
              minWidth: '100%',
              minHeight: '100%',
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
              objectPosition: 'center center'
            }}
            onError={() => setVideoError(true)}
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source 
              src="/images/4k_Video_Technology_Looped_Background_No_Copyright_Loop_Background_Video_1080p.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          {/* REMOVED ALL OVERLAYS - PURE HD VIDEO ONLY */}
          
          {/* Fallback gradient background if video fails */}
          {videoError && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/70 to-black z-0"></div>
          )}
          
          {/* Loading overlay - ONLY SHOWS WHILE LOADING */}
          {!videoLoaded && !videoError && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black z-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400 text-lg font-medium">Loading HD Video...</p>
              </div>
            </div>
          )}
        </div>

        {/* Content Container - Center Aligned */}
        <div className="container mx-auto max-w-4xl relative z-20 w-full"> {/* Changed from max-w-6xl to max-w-4xl */}
          {/* Gaming Banner - Made more transparent to show video behind */}
          <div className="relative mb-8"> {/* Reduced mb-12 to mb-8 */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex items-center gap-4">
                <Sword className="w-6 h-6 text-orange-500 animate-pulse" /> {/* Reduced size */}
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping"></div> {/* Reduced size */}
                <Shield className="w-6 h-6 text-blue-500 animate-pulse" /> {/* Reduced size */}
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900/70 to-black/70 backdrop-blur-xl border-2 border-orange-500/40 rounded-2xl p-6 md:p-8 relative shadow-2xl overflow-hidden"> {/* Reduced padding */}
              {/* Animated Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
              
              <div className="text-center relative z-10">
                <div className={`inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-orange-600/40 to-orange-500/30 rounded-full border border-orange-500/30 transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}> {/* Reduced padding and margin */}
                  <Sparkles className="w-4 h-4 text-orange-500 animate-spin" /> {/* Reduced size */}
                  <span className="text-xs font-bold text-orange-300 tracking-wider">LEVEL UP YOUR DIGITAL PRESENCE</span> {/* Reduced text size */}
                  <Flame className="w-4 h-4 text-orange-500 animate-pulse" /> {/* Reduced size */}
                </div>

                {/* MAIN TITLE WITH PROFESSIONAL STICKERS */}
                <div className="relative mb-6 px-2 md:px-4 lg:px-8 overflow-visible"> {/* Reduced padding and margin */}
                  {/* Left Sticker - Made Smaller */}
                  <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/3 hidden lg:flex items-center justify-center transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-x-0 rotate-0 scale-100' : 'opacity-0 -translate-x-10 -rotate-12 scale-75'}`}>
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div> {/* Reduced inset */}
                      
                      <div className="relative w-16 h-16 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 rounded-2xl flex items-center justify-center 
                        shadow-2xl shadow-orange-500/30 group-hover:shadow-orange-500/50 
                        transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"> {/* Reduced size */}
                        
                        <div className="absolute inset-1.5 bg-gradient-to-br from-orange-500 to-orange-300 rounded-xl opacity-50"></div> {/* Reduced inset */}
                        
                        <Joystick className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform" /> {/* Reduced size */}
                        
                        <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></div> {/* Reduced size */}
                        <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div> {/* Reduced size */}
                      </div>
                      
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce"> {/* Reduced size */}
                        <div className="w-3 h-3 bg-white rounded-full"></div> {/* Reduced size */}
                      </div>
                    </div>
                  </div>

                  {/* Right Sticker - Made Smaller */}
                  <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 hidden lg:flex items-center justify-center transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-x-0 rotate-0 scale-100' : 'opacity-0 translate-x-10 rotate-12 scale-75'}`}>
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div> {/* Reduced inset */}
                      
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-400 rounded-2xl flex items-center justify-center 
                        shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 
                        transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500"> {/* Reduced size */}
                        
                        <div className="absolute inset-1.5 bg-gradient-to-br from-blue-500 to-purple-300 rounded-xl opacity-50"></div> {/* Reduced inset */}
                        
                        <Cctv className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform" /> {/* Reduced size */}
                        
                        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse"></div> {/* Reduced size */}
                        <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div> {/* Reduced size */}
                      </div>
                      
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.3s' }}> {/* Reduced size */}
                        <div className="w-3 h-3 bg-white rounded-full"></div> {/* Reduced size */}
                      </div>
                    </div>
                  </div>

                  {/* Main Title - Made Smaller */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter relative z-10 px-2 lg:px-0"> {/* Reduced text size */}
                    <span className={`block text-orange-400 bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500`}>
                      INNOVATE.
                    </span>
                    
                    <span className={`block text-white mt-1 transition-all duration-700 delay-500 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}> {/* Reduced margin */}
                      TRANSFORM.
                    </span>
                    
                    <span className={`block text-blue-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 mt-1 transition-all duration-700 delay-600 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}> {/* Reduced margin */}
                      LEAD.
                    </span>
                  </h1>
                </div>

                <div className={`max-w-2xl mx-auto transition-all duration-700 delay-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> {/* Reduced max-width */}
                  <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-md border border-blue-500/30 rounded-xl p-6 group hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl"> {/* Reduced padding and border radius */}
                    <p className="text-gray-100 text-base leading-relaxed group-hover:text-white transition-colors"> {/* Reduced text size */}
                      Your Partner in <span className="text-orange-300 font-bold group-hover:text-orange-200 transition-colors">Digital Growth.</span> We provide smart, scalable, 
                      and future-ready IT solutions designed to help startups innovate, grow, and compete 
                      with confidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gaming Stickers - Made Smaller */}
              <div className={`absolute bottom-4 left-4 animate-bounce transition-all duration-700 delay-800 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}> {/* Reduced position */}
                <div className="bg-gradient-to-br from-orange-500/30 to-transparent backdrop-blur-sm rounded-full p-2 group hover:scale-125 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300"> {/* Reduced padding */}
                  <Cpu className="w-8 h-8 text-orange-300 group-hover:text-orange-200 transition-colors" /> {/* Reduced size */}
                </div>
              </div>
              <div className={`absolute bottom-4 right-4 animate-bounce transition-all duration-700 delay-900 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ animationDelay: '0.5s' }}> {/* Reduced position */}
                <div className="bg-gradient-to-br from-blue-500/30 to-transparent backdrop-blur-sm rounded-full p-2 group hover:scale-125 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"> {/* Reduced padding */}
                  <Code className="w-8 h-8 text-blue-300 group-hover:text-blue-200 transition-colors" /> {/* Reduced size */}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Counter - Made Smaller */}
          {/* Premium Stats Counter - Professional Business Design */}
<div className="relative mb-16">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
    {[
      { 
        icon: <Trophy className="w-7 h-7 group-hover:scale-110 transition-all duration-300" />,
        value: "40+", 
        label: "Successful Projects", 
        valueColor: "text-blue-50", 
        labelColor: "text-blue-200/80",
        bg: "bg-gradient-to-br from-blue-900 via-navy-900 to-blue-950",
        border: "border border-blue-700/40",
        hoverBorder: "group-hover:border-blue-500/60 group-hover:border-opacity-70",
        shadow: "shadow-xl shadow-blue-900/30",
        hoverShadow: "group-hover:shadow-2xl group-hover:shadow-blue-500/40",
        delay: 1000,
        accent: "from-blue-500 to-cyan-400",
        innerGlow: "group-hover:before:opacity-100",
        pattern: "before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23007FFF\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] before:opacity-0 before:transition-opacity before:duration-700"
      },
      { 
        icon: <Users className="w-7 h-7 group-hover:scale-110 transition-all duration-300" />,
        value: "102", 
        label: "Team Members", 
        valueColor: "text-blue-50", 
        labelColor: "text-blue-200/80",
        bg: "bg-gradient-to-br from-navy-900 via-blue-950 to-navy-900",
        border: "border border-blue-600/40",
        hoverBorder: "group-hover:border-blue-400/60 group-hover:border-opacity-70",
        shadow: "shadow-xl shadow-blue-800/30",
        hoverShadow: "group-hover:shadow-2xl group-hover:shadow-blue-400/40",
        delay: 1100,
        accent: "from-blue-400 to-cyan-300",
        innerGlow: "group-hover:before:opacity-100",
        pattern: "before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2300BFFF\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] before:opacity-0 before:transition-opacity before:duration-700"
      },
      { 
        icon: <TrendingUp className="w-7 h-7 group-hover:scale-110 transition-all duration-300" />,
        value: "$1.69M",
        label: "Revenue Generated", 
        valueColor: "text-blue-50", 
        labelColor: "text-blue-200/80",
        bg: "bg-gradient-to-br from-blue-950 via-navy-900 to-blue-900",
        border: "border border-blue-800/40",
        hoverBorder: "group-hover:border-cyan-500/60 group-hover:border-opacity-70",
        shadow: "shadow-xl shadow-blue-700/30",
        hoverShadow: "group-hover:shadow-2xl group-hover:shadow-cyan-500/40",
        delay: 1200,
        accent: "from-cyan-400 to-blue-300",
        innerGlow: "group-hover:before:opacity-100",
        pattern: "before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2300FFFF\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] before:opacity-0 before:transition-opacity before:duration-700"
      }
    ].map((stat, idx) => (
      <div 
        key={idx} 
        className={`relative ${stat.bg} ${stat.border} rounded-2xl p-6 text-center group  
          transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${stat.shadow} ${stat.hoverShadow}
          ${stat.hoverBorder} ${stat.pattern} overflow-hidden
          transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${stat.delay}ms` }}
      >
        {/* Premium Background Pattern */}
        <div className={`absolute inset-0 ${stat.innerGlow} transition-opacity duration-700`}></div>
        
        {/* Animated Gradient Border Effect */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Inner Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Shine Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div className="relative z-10">
          {/* Icon Container with Premium Design */}
          <div className="relative inline-flex items-center justify-center mb-6">
            {/* Outer Ring */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
            
            {/* Icon Background */}
            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.accent} flex items-center justify-center 
              shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50
              transform group-hover:scale-110 transition-all duration-500`}>
              
              {/* Inner Shine */}
              <div className="absolute inset-0.5 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
              
              {/* Icon */}
              <div className="relative z-10 text-white">
                {stat.icon}
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>

          {/* Value - Premium Typography */}
          <div className={`${stat.valueColor} text-3xl font-bold mb-2 tracking-tight 
            group-hover:scale-105 group-hover:text-white transition-all duration-300
            [text-shadow:0_2px_10px_rgba(59,130,246,0.3)]`}>
            {stat.value}
          </div>
          
          {/* Label with Subtle Design */}
          <div className={`${stat.labelColor} text-sm font-medium tracking-wide uppercase 
            group-hover:text-blue-100 transition-colors duration-300 
            relative inline-block px-3 py-1 rounded-full bg-blue-900/30 backdrop-blur-sm`}>
            {stat.label}
          </div>
          
          {/* Subtle Divider */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto my-4 
            opacity-70 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"></div>
          
          {/* Success Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs text-blue-300/70 font-medium group-hover:text-blue-200 transition-colors">
              Active & Growing
            </span>
          </div>
        </div>
        
        {/* Floating Particles on Hover */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute top-0 left-0 w-3 h-3 bg-blue-400/20 rounded-full group-hover:animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400/20 rounded-full group-hover:animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-300/20 rounded-full group-hover:animate-ping" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section ref={aboutRef} className={`relative py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ${aboutVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                ABOUT <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-400">US</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-700 delay-100 ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                <span className="text-white">We Are Increasing</span><br />
                <span className="text-orange-400">Business Success</span><br />
                <span className="text-blue-400">With Technology</span>
              </h2>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We help businesses leverage technology to achieve remarkable growth and success. 
                Our innovative solutions and expert team ensure your digital transformation journey 
                is smooth and effective.
              </p>

              <Link href="/contact-us">
                <Button
                  size="lg" 
                  className={`group relative bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10 py-7 text-lg rounded-2xl font-bold overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-700 delay-200 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r transition-transform duration-1000"></div>
                  <TrendingUp className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span className="relative">GET IN TOUCH</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </Button>
              </Link>

              {/* Gaming Badges */}
              <div className="flex flex-wrap gap-3 mt-12">
                {['Game Dev', 'Web 3.0', 'AI/ML', 'Cloud', 'Blockchain'].map((tech, idx) => (
                  <div key={idx} className={`px-5 py-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-xl flex items-center gap-3 
                    group hover:border-orange-500/50 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300
                    transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${300 + (idx * 100)}ms` }}>
                    <Zap className="w-5 h-5 text-orange-400 group-hover:text-orange-300 group-hover:scale-110 transition-all" />
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Pixel Sticker */}
            <div className="relative">
              <div className={`relative group flex items-center justify-center min-h-[400px] transition-all duration-700 delay-200 ${aboutVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
                <div className="relative w-80 h-80 transform transition-all duration-700 
                  group-hover:scale-110 group-hover:drop-shadow-[0_0_50px_rgba(249,115,22,0.8)] group-hover:rotate-3">
                  <Image 
                    src={PixelSticker}
                    alt="Pixel Gaming Sticker"
                    className="w-full h-full object-contain"
                    priority
                  />
                  
                  {/* Orange glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 
                    rounded-full blur-xl transition-all duration-500 
                    group-hover:from-orange-500/30 group-hover:via-orange-500/20 group-hover:to-orange-500/30"></div>
                </div>

                {/* Floating Icons */}
                <div className={`absolute -top-6 -right-6 animate-bounce group-hover:animate-none group-hover:scale-110 transition-transform transition-all duration-700 delay-300 ${aboutVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-full p-4 shadow-xl group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all">
                    <Cpu className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                <div className={`absolute -bottom-6 -left-6 animate-bounce group-hover:animate-none group-hover:scale-110 transition-transform transition-all duration-700 delay-400 ${aboutVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ animationDelay: '0.5s' }}>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all">
                    <Code className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHO WE ARE SECTION ============ */}
      <section ref={whoWeAreRef} className={`relative py-20 px-4 bg-gradient-to-b from-white to-gray-100 transition-all duration-1000 ${whoWeAreVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className={`bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-lg border-2 border-gray-700/50 rounded-3xl p-10 md:p-14 shadow-2xl transition-all duration-700 ${whoWeAreVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            
            {/* Who We Are */}
            <div className="mb-12">
              <div className={`flex items-center gap-4 mb-10 transition-all duration-700 delay-100 ${whoWeAreVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="p-3 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl group hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                  <Swords className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  WHO WE <span className="text-orange-400 group-hover:text-orange-300 transition-colors">ARE?</span>
                </h2>
              </div>
              <div className={`bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 transition-all duration-700 delay-200 ${whoWeAreVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                  <span className="text-orange-400 font-bold group-hover:text-orange-300 transition-colors">Eraflip Tech</span> is a creative technology studio driven by innovation, design, and a passion for digital excellence. We specialize in crafting high-quality games, interactive applications, and digital solutions that blend creativity with cutting-edge technology. Our team of skilled developers, artists, and strategists transforms ideas into impactful digital experiences. We build lasting client partnerships by delivering reliable, scalable, and visually engaging products that meet global standards. From concept to completion, Eraflip Tech empowers brands through innovation, quality, and commitment.
                </p>
              </div>
            </div>

            {/* Vision & Mission Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
              {/* Vision Card */}
              <div className={`bg-gradient-to-br from-orange-600/20 via-orange-500/10 to-transparent border-2 border-orange-500/40 rounded-3xl p-10 relative 
                group hover:shadow-2xl hover:scale-105 hover:border-orange-500/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]
                transition-all duration-700 delay-300 ${whoWeAreVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <div className="absolute top-6 right-6 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-16 h-16 text-orange-500/10 group-hover:text-orange-500/20" />
                </div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all">
                    <Crosshair className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    OUR <span className="text-orange-400 group-hover:text-orange-300 transition-colors">VISION</span>
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">
                  To deliver innovative games and IT solutions that combine creativity, technology, and excellence empowering businesses and engaging players worldwide.
                </p>
              </div>

              {/* Mission Card */}
              <div className={`bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent border-2 border-blue-500/40 rounded-3xl p-10 relative 
                group hover:shadow-2xl hover:scale-105 hover:border-blue-500/70 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
                transition-all duration-700 delay-400 ${whoWeAreVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-6 right-6 group-hover:scale-110 transition-transform duration-500">
                  <Rocket className="w-16 h-16 text-blue-500/10 group-hover:text-blue-500/20" />
                </div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <Globe className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    OUR <span className="text-blue-400 group-hover:text-blue-300 transition-colors">MISSION</span>
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">
                  To craft innovative games and IT solutions that blend creativity with technology, delivering engaging experiences and impactful digital solutions worldwide.
                </p>
              </div>
            </div>

            {/* What We Offer */}
            <div className="pt-12 border-t border-gray-700/50">
              <div className={`flex items-center gap-4 mb-10 transition-all duration-700 delay-500 ${whoWeAreVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="p-3 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl group hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                  <Award className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  WHAT DO WE <span className="text-orange-400 group-hover:text-orange-300 transition-colors">OFFER?</span>
                </h2>
              </div>
              
              <div className={`bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 transition-all duration-700 delay-600 ${whoWeAreVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-gray-300 text-lg leading-relaxed mb-10 group-hover:text-gray-200 transition-colors">
                  At <span className="text-orange-400 font-bold group-hover:text-orange-300 transition-colors">Eraflip Tech</span>, we transform creative ideas into world-class digital solutions. We specialize in game development, web and app development, digital marketing, social media marketing, content creation, SEO, PPC campaigns, IoT solutions, and creative designing. Every project combines artistic creativity with technical expertise to deliver engaging experiences and impactful results. Alongside client projects, we develop original games and digital products, pushing innovation, refining technology, and ensuring excellence in every solution.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {['Game Dev', 'Web Apps', 'Mobile Apps', 'Blockchain', 'AI/ML', 'Cloud', 'SEO', 'Marketing'].map((service, idx) => (
                    <div key={idx} className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl p-6 text-center 
                      group hover:border-orange-500/50 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300
                      transition-all duration-700 ${whoWeAreVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                      style={{ transitionDelay: `${700 + (idx * 100)}ms` }}>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-600/20 to-orange-500/10 mb-4 mx-auto
                        group-hover:from-orange-500/30 group-hover:to-orange-400/20 transition-all">
                        <Code className="w-7 h-7 text-orange-400 group-hover:text-orange-300 group-hover:scale-110 transition-all" />
                      </div>
                      <div className="text-gray-200 font-medium group-hover:text-white transition-colors">{service}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TEAM SECTION WITH 3D EFFECT ============ */}
      <section ref={teamRef} className={`relative py-20 px-4 bg-gradient-to-b from-gray-800 via-purple-900/30 to-gray-900 transition-all duration-1000 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-4 mb-8 transition-all duration-700 ${teamVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="p-3 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl group hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                <Crown className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                MEET OUR <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">CORE TEAM</span>
              </h2>
              <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl group hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <p className={`text-gray-300 text-xl max-w-2xl mx-auto transition-all duration-700 delay-100 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Anything is possible when the right people do the right thing.
            </p>
          </div>

          {/* Team Cards Grid - ENHANCED 3D EFFECT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 - CEO */}
            <div 
              className={`group transition-all duration-700 delay-200 ${teamVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <div 
                ref={(el) => cardRefs.current[0] = el}
                className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-orange-500/40 rounded-3xl 
                  transition-all duration-500 group-hover:border-orange-500 h-full shadow-2xl group-hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] 
                  transform-gpu will-change-transform relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out'
                }}
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="relative w-full h-full transform-gpu">
                    <Image 
                      src={CeoImage}
                      alt="CEO"
                      fill
                      className="object-cover team-image transition-transform duration-700 ease-out"
                      priority
                      style={{
                        transformStyle: 'preserve-3d',
                        willChange: 'transform'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition-colors 
                    group-hover:scale-110 group-hover:shadow-2xl z-20 cursor-pointer">
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-20">
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">CEO</h3>
                    <p className="text-orange-400 font-medium mt-1">CEO</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    Visionary leader driving Eraflip Tech's innovation and strategic direction with 10+ years of experience in tech industry.
                  </p>
                </div>
              </div>
            </div>
          
            {/* Card 2 - COO */}
            <div 
              className={`group transition-all duration-700 delay-300 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <div 
                ref={(el) => cardRefs.current[1] = el}
                className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-blue-500/40 rounded-3xl 
                  transition-all duration-500 group-hover:border-blue-500 h-full shadow-2xl group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
                  transform-gpu will-change-transform relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out'
                }}
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="relative w-full h-full transform-gpu">
                    <Image 
                      src={CooImage}
                      alt="Wahab Yonus - Co Founder"
                      fill
                      className="object-cover team-image transition-transform duration-700 ease-out"
                      style={{
                        transformStyle: 'preserve-3d',
                        willChange: 'transform'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition-colors 
                    group-hover:scale-110 group-hover:shadow-2xl z-20 cursor-pointer">
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-20">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">WAHAB YONUS</h3>
                    <p className="text-blue-400 font-medium mt-1">Co Founder</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    Oversees daily operations and ensures smooth execution of all projects with operational excellence.
                  </p>
                </div>
              </div>
            </div>
          
            {/* Card 3 - Art Director */}
            <div 
              className={`group transition-all duration-700 delay-400 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              onMouseMove={(e) => handleMouseMove(e, 2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <div 
                ref={(el) => cardRefs.current[2] = el}
                className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-purple-500/40 rounded-3xl 
                  transition-all duration-500 group-hover:border-purple-500 h-full shadow-2xl group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
                  transform-gpu will-change-transform relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out'
                }}
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="relative w-full h-full transform-gpu">
                    <Image 
                      src={ArtDirectorImage}
                      alt="Ramish - CEO"
                      fill
                      className="object-cover team-image transition-transform duration-700 ease-out"
                      style={{
                        transformStyle: 'preserve-3d',
                        willChange: 'transform'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition-colors 
                    group-hover:scale-110 group-hover:shadow-2xl z-20 cursor-pointer">
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-20">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">RAMISH</h3>
                    <p className="text-purple-400 font-medium mt-1">CEO</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    Leads creative vision and visual design for all gaming and digital projects with artistic excellence.
                  </p>
                </div>
              </div>
            </div>
          
            {/* Card 4 - Engineering Director */}
            <div 
              className={`group transition-all duration-700 delay-500 ${teamVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
              onMouseMove={(e) => handleMouseMove(e, 3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              <div 
                ref={(el) => cardRefs.current[3] = el}
                className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-green-500/40 rounded-3xl 
                  transition-all duration-500 group-hover:border-green-500 h-full shadow-2xl group-hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]
                  transform-gpu will-change-transform relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out'
                }}
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="relative w-full h-full transform-gpu">
                    <Image 
                      src={EngineeringDirectorImage}
                      alt="Suleman Akram - Co Founder"
                      fill
                      className="object-cover team-image transition-transform duration-700 ease-out"
                      style={{
                        transformStyle: 'preserve-3d',
                        willChange: 'transform'
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition-colors 
                    group-hover:scale-110 group-hover:shadow-2xl z-20 cursor-pointer">
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-20">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors">SULEMAN AKRAM</h3>
                    <p className="text-green-400 font-medium mt-1">Co Founder</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    Leads technical architecture and engineering excellence across all platforms and technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Years Experience", color: "text-orange-400", icon: "🎯", delay: 600 },
              { value: "200+", label: "Projects Delivered", color: "text-blue-400", icon: "🚀", delay: 700 },
              { value: "50+", label: "Happy Clients", color: "text-purple-400", icon: "⭐", delay: 800 },
              { value: "24/7", label: "Team Support", color: "text-green-400", icon: "🛡️", delay: 900 }
            ].map((stat, idx) => (
              <div key={idx} className={`text-center p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 
                rounded-3xl hover:border-orange-500/30 hover:scale-105 hover:shadow-lg transition-all duration-300 group
                transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${stat.delay}ms` }}>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className={`text-4xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform`}>{stat.value}</div>
                <div className="text-gray-300 font-medium group-hover:text-white transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TECHNOLOGIES SECTION ============ */}
      <section ref={techRef} className={`relative py-32 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-black transition-all duration-1000 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className={`inline-flex items-center gap-4 mb-8 animate-pulse transition-all duration-700 ${techVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className={`block text-white transition-all duration-700 delay-100 ${techVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>OUR CUTTING-EDGE</span>
              <span className={`block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mt-4 transition-all duration-700 delay-200 ${techVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                TECHNOLOGIES
              </span>
            </h2>
            
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-300 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              At Eraflip Tech, we leverage the latest technologies to build innovative solutions 
              that drive digital transformation and deliver exceptional results.
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                title: "Game Development",
                description: "Unity, Unreal Engine, Godot, Custom Game Engines",
                icon: <Gamepad2 className="w-12 h-12" />,
                color: "from-orange-500 to-red-500",
                delay: 400,
                direction: 'left'
              },
              {
                title: "Web 3.0 & Blockchain",
                description: "Smart Contracts, NFTs, DeFi, DApps",
                icon: <Cpu className="w-12 h-12" />,
                color: "from-blue-500 to-purple-600",
                delay: 500,
                direction: 'top'
              },
              {
                title: "AI & Machine Learning",
                description: "Computer Vision, NLP, Predictive Analytics",
                icon: <Sparkles className="w-12 h-12" />,
                color: "from-cyan-500 to-blue-600",
                delay: 600,
                direction: 'bottom'
              },
              {
                title: "Cloud Solutions",
                description: "AWS, Azure, Google Cloud, DevOps",
                icon: <Cloud className="w-12 h-12" />,
                color: "from-green-500 to-emerald-600",
                delay: 700,
                direction: 'right'
              },
              {
                title: "Mobile Applications",
                description: "iOS, Android, Cross-Platform",
                icon: <Smartphone className="w-12 h-12" />,
                color: "from-purple-500 to-pink-600",
                delay: 800,
                direction: 'left'
              },
              {
                title: "Web Development",
                description: "React, Next.js, Node.js, Modern Stacks",
                icon: <Globe className="w-12 h-12" />,
                color: "from-yellow-500 to-orange-500",
                delay: 900,
                direction: 'top'
              },
              {
                title: "IoT Solutions",
                description: "Smart Devices, Sensors, Edge Computing",
                icon: <Server className="w-12 h-12" />,
                color: "from-indigo-500 to-blue-500",
                delay: 1000,
                direction: 'bottom'
              },
              {
                title: "Cybersecurity",
                description: "Penetration Testing, Security Audits",
                icon: <Shield className="w-12 h-12" />,
                color: "from-red-500 to-orange-500",
                delay: 1100,
                direction: 'right'
              }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <div className={`relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-3xl p-8 h-full
                  group-hover:border-white/20 transition-all duration-500 group-hover:scale-105 animate-float
                  transition-all duration-700 ${techVisible ? `opacity-100 scale-100` : `opacity-0 scale-95`}`}
                  style={{ 
                    transitionDelay: `${tech.delay}ms`,
                    transform: techVisible ? 
                      (tech.direction === 'left' ? 'translateX(0)' : 
                       tech.direction === 'right' ? 'translateX(0)' : 
                       tech.direction === 'top' ? 'translateY(0)' : 'translateY(0)') : 
                      (tech.direction === 'left' ? 'translateX(-20px)' : 
                       tech.direction === 'right' ? 'translateX(20px)' : 
                       tech.direction === 'top' ? 'translateY(-20px)' : 'translateY(20px)')
                  }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${tech.color} mb-6
                    group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                    {tech.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-2">
                    {["3D/2D Games", "AR/VR", "Multiplayer", "Mobile Games"].map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent 
                    group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHITE BACKGROUND STICKERS SECTION ============ */}
      <section ref={footerRef} className={`relative py-32 px-4 bg-white transition-all duration-1000 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900">READY TO </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600 
                drop-shadow-[0_2px_10px_rgba(249,115,22,0.3)]">LEVEL UP</span>
              <span className="text-gray-900">?</span>
            </h2>
            
            {/* Divider */}
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
              <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-orange-500 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* ALL 12 STICKERS IN A 4x3 GRID */}
          <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 mb-20 transition-all duration-700 delay-200 ${footerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            
            {/* Sticker Grid */}
            {[Sticker1, Sticker2, Sticker3, Sticker4, Sticker5, Sticker6, Sticker7, Sticker8, Sticker9, Sticker10, Sticker11, Sticker12].map((sticker, idx) => (
              <div key={idx} className="flex justify-center items-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <Image 
                    src={sticker}
                    alt={`Gaming Sticker ${idx + 1}`}
                    fill
                    className="object-contain"
                    style={{
                      animation: 'float-bounce 4s ease-in-out infinite',
                      animationDelay: `${idx * 0.3}s`
                    }}
                    sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Description Box */}
          <div className={`relative max-w-3xl mx-auto mb-20 transition-all duration-700 delay-300 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-gradient-to-br from-gray-50/90 to-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 group hover:border-orange-300/50 transition-all duration-500 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white animate-spin" />
              </div>
              <p className="text-gray-800 text-xl md:text-2xl leading-relaxed text-center group-hover:text-gray-900 transition-colors">
                Join the gaming revolution with <span className="text-orange-600 font-bold">Eraflip Tech</span>. 
                Let's build something epic together and transform your digital dreams into reality.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className={`text-center transition-all duration-700 delay-400 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="relative group bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 
                  hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 
                  text-white px-14 py-8 text-xl rounded-2xl font-bold 
                  shadow-xl hover:shadow-2xl hover:shadow-orange-500/50
                  transition-all duration-300 hover:scale-105 border-2 border-orange-500/30 hover:border-orange-400/50
                  animate-pulse hover:animate-none overflow-hidden"
              >
                {/* Button Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative flex items-center justify-center">
                  <span className="mr-4 font-bold tracking-wide">START YOUR JOURNEY</span>
                  <ArrowRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Tech Icons - Subtle at bottom */}
          <div className={`flex justify-center gap-8 mt-20 transition-all duration-700 delay-500 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: <Cpu className="w-7 h-7" />, color: "text-orange-600/80", label: "AI/ML" },
              { icon: <Code className="w-7 h-7" />, color: "text-blue-600/80", label: "Development" },
              { icon: <Gamepad2 className="w-7 h-7" />, color: "text-green-600/80", label: "Gaming" },
              { icon: <Cloud className="w-7 h-7" />, color: "text-cyan-600/80", label: "Cloud" },
              { icon: <Sparkles className="w-7 h-7" />, color: "text-purple-600/80", label: "AR/VR" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <div className={`p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 mb-2 ${item.color} hover:bg-gray-50`}>
                  {item.icon}
                </div>
                <span className="text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx global>{`
        /* Fix for horizontal scrollbar */
        html, body {
          overflow-x: hidden !important;
          width: 100% !important;
          max-width: 100vw !important;
        }
        
        /* Remove horizontal scrollbar completely */
        .no-scrollbar {
          overflow-x: hidden !important;
        }
        
        /* Video element fixes for CLEAR HD VIDEO */
        video {
          background: transparent !important;
          background-color: transparent !important;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
        }
        
        /* Hide all video controls */
        video::-webkit-media-controls {
          display: none !important;
        }
        
        video::-webkit-media-controls-enclosure {
          display: none !important;
        }
        
        video::-webkit-media-controls-panel {
          display: none !important;
        }
        
        video::-webkit-media-controls-play-button {
          display: none !important;
        }
        
        video::-webkit-media-controls-start-playback-button {
          display: none !important;
        }
        
        video::-moz-media-controls {
          display: none !important;
        }
        
        /* Optimize video rendering */
        video {
          -webkit-transform: translateZ(0);
          -moz-transform: translateZ(0);
          -ms-transform: translateZ(0);
          -o-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          -ms-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000;
          -moz-perspective: 1000;
          -ms-perspective: 1000;
          perspective: 1000;
        }
        
        /* Force GPU acceleration for smooth video playback */
        .video-container {
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          -moz-transform: translate3d(0, 0, 0);
          -ms-transform: translate3d(0, 0, 0);
          -o-transform: translate3d(0, 0, 0);
        }
        
        /* Animations */
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float-glow {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-20px) scale(1.1);
            opacity: 0.3;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes float-bounce {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
          }
          25% { 
            transform: translateY(-10px) rotate(2deg);
          }
          50% { 
            transform: translateY(0) rotate(0deg);
          }
          75% { 
            transform: translateY(-5px) rotate(-2deg);
          }
        }
        
        @keyframes wave {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }
        
        @keyframes zigzag {
          0%, 100% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(10px) translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateX(-10px) translateY(0) rotate(-5deg);
          }
          75% {
            transform: translateX(5px) translateY(-10px) rotate(3deg);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          30% {
            transform: translateY(-25px) scale(1.1);
          }
          50% {
            transform: translateY(0) scale(0.95);
          }
          70% {
            transform: translateY(-15px) scale(1.05);
          }
        }
        
        @keyframes float-rotate {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-20px) rotate(5deg) scale(1.05);
          }
          50% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          75% {
            transform: translateY(-15px) rotate(-5deg) scale(1.03);
          }
        }
        
        @keyframes bounce-rotate {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          30% {
            transform: translateY(-25px) rotate(10deg) scale(1.1);
          }
          50% {
            transform: translateY(0) rotate(-5deg) scale(0.95);
          }
          70% {
            transform: translateY(-15px) rotate(5deg) scale(1.05);
          }
        }
        
        @keyframes pulse-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          25% {
            transform: translateY(-15px) scale(1.08);
            opacity: 0.9;
          }
          50% {
            transform: translateY(5px) scale(0.98);
            opacity: 1;
          }
          75% {
            transform: translateY(-10px) scale(1.05);
            opacity: 0.95;
          }
        }
        
        @keyframes spin-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-20px) rotate(120deg) scale(1.07);
          }
          66% {
            transform: translateY(10px) rotate(240deg) scale(0.97);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-float-glow {
          animation: float-glow 4s ease-in-out infinite;
        }
        
        .animate-slide {
          animation: slide 3s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        /* 3D Card Effects */
        .team-image-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .team-image {
          transform: translateZ(0);
          transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform;
        }

        .group:hover .team-image {
          transform: 
            translateZ(20px) 
            scale(1.1)
            rotateX(var(--mouse-x, 0deg)) 
            rotateY(var(--mouse-y, 0deg));
        }

        /* Enhanced 3D shadow effect */
        .group:hover .team-card-3d {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 60px rgba(249, 115, 22, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        /* Parallax effect for image */
        .parallax-image {
          transform: translateZ(0);
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        /* Video loading optimization */
        .video-loading {
          filter: blur(5px);
          transition: filter 0.5s ease-out;
        }
        
        .video-loaded {
          filter: blur(0);
        }
      `}</style>
    </div>
  );
}