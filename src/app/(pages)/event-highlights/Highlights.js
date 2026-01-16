'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import event1 from "../../../../public/images/event1.jpeg";
import event2 from "../../../../public/images/event2.jpeg";
import event3 from "../../../../public/images/event3.jpeg";
import event4 from "../../../../public/images/event4.jpeg";
import event5 from "../../../../public/images/event5.jpeg";
import event6 from "../../../../public/images/event6.jpeg";
import event7 from "../../../../public/images/event7.jpeg";
import event8 from "../../../../public/images/event8.jpeg";
import hongkong1 from "../../../../public/images/hongkong1.jpg";
import hongkong2 from "../../../../public/images/hongkong2.jpg";
import hongkong3 from "../../../../public/images/hongkong3.jpg";
import hongkong4 from "../../../../public/images/hongkong4.jpg";
import hongkong5 from "../../../../public/images/hongkong5.jpg";
import hongkong6 from "../../../../public/images/hongkong6.jpg";
import hongkong7 from "../../../../public/images/hongkong7.jpg";
import hongkong8 from "../../../../public/images/hongkong8.jpg";
import hongkong9 from "../../../../public/images/hongkong9.jpg";
import hongkong10 from "../../../../public/images/hongkong10.jpg";

const Highlights = () => {
  const [activeTab, setActiveTab] = useState('islamabad');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // Background Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 80;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = Math.random() > 0.5 ? '#FF8C00' : '#3B82F6';
        this.opacity = Math.random() * 0.5 + 0.2;
        this.waveOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wave motion
        this.x += Math.sin(Date.now() * 0.001 + this.waveOffset) * 0.3;
        this.y += Math.cos(Date.now() * 0.001 + this.waveOffset) * 0.3;

        // Bounce off edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          this.x, this.y, this.size,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, `${this.color}40`);
        gradient.addColorStop(1, `${this.color}00`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles
    function connectParticles() {
      const maxDistance = 150;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 140, 0, ${0.2 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles and connections
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      connectParticles();

      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Islamabad images
  const islamabadImages = [
    { src: event1, alt: "Islamabad Tech Summit" },
    { src: event2, alt: "Islamabad Tech Summit" },
    { src: event3, alt: "Islamabad Tech Summit" },
    { src: event4, alt: "Islamabad Tech Summit" },
    { src: event5, alt: "Islamabad Tech Summit" },
    { src: event6, alt: "Islamabad Tech Summit" },
    { src: event7, alt: "Islamabad Tech Summit" },
    { src: event8, alt: "Islamabad Tech Summit" }
  ];

  // Hong Kong images
  const hongkongImages = [
    { src: hongkong1, alt: "Hong Kong Innovation Summit" },
    { src: hongkong2, alt: "Hong Kong Innovation Summit" },
    { src: hongkong3, alt: "Hong Kong Innovation Summit" },
    { src: hongkong4, alt: "Hong Kong Innovation Summit" },
    { src: hongkong5, alt: "Hong Kong Innovation Summit" },
    { src: hongkong6, alt: "Hong Kong Innovation Summit" },
    { src: hongkong7, alt: "Hong Kong Innovation Summit" },
    { src: hongkong8, alt: "Hong Kong Innovation Summit" },
    { src: hongkong9, alt: "Hong Kong Innovation Summit" },
    { src: hongkong10, alt: "Hong Kong Innovation Summit" }
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      {/* Canvas Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Magnificent Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-orange-500/10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {/* Large Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
          
          {/* Medium Shapes */}
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-blue-400/10 rounded-full blur-2xl animate-float-medium"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-l from-blue-400/10 to-orange-400/10 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: '1s' }}></div>
          
          {/* Small Sparkles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
              style={{
                left: `${10 + (i * 5)}%`,
                top: `${20 + Math.sin(i) * 50}%`,
                animationDelay: `${i * 0.5}s`,
                boxShadow: '0 0 20px 5px rgba(255, 165, 0, 0.5)'
              }}
            />
          ))}
        </div>

        {/* Interactive Light Beams */}
        <div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-light-sweep"
          style={{
            transform: `translateX(${mousePosition.x * 100}px)`,
            opacity: 0.5 + mousePosition.x * 0.5
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-light-sweep"
          style={{
            transform: `translateX(${(1 - mousePosition.x) * 100}px)`,
            opacity: 0.5 + (1 - mousePosition.x) * 0.5,
            animationDelay: '1s'
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 165, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Wave Patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-500/20 via-transparent to-transparent">
            <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="rgba(255, 165, 0, 0.1)" 
                className="animate-wave"
              />
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                fill="rgba(59, 130, 246, 0.1)" 
                className="animate-wave"
                style={{ animationDelay: '0.5s' }}
              />
            </svg>
          </div>
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-br from-orange-400 to-blue-400 rounded-full animate-float-random"
            style={{
              left: `${5 + (i * 7)}%`,
              top: `${10 + Math.cos(i) * 80}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section className="py-16 md:py-24">
          {/* Main Title Box */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-16 md:mb-20 relative">
            <div className="bg-gradient-to-br from-white/95 via-white/90 to-blue-50/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-orange-200/30 border border-orange-100/50 relative overflow-hidden group hover:shadow-orange-300/50 transition-all duration-500">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 via-blue-500 to-orange-400 opacity-0 group-hover:opacity-10 animate-gradient-x"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-300/20 rounded-full blur-xl animate-float-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-300/20 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
              
              {/* Sparkles */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-twinkle-fast"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + Math.sin(i) * 40}%`,
                    animationDelay: `${i * 0.3}s`,
                    boxShadow: '0 0 10px 2px rgba(255, 165, 0, 0.8)'
                  }}
                />
              ))}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent animate-gradient-text">
                  Moments that define
                </span>
                <span className="block text-blue-700 mt-2 md:mt-3 font-bold">
                  Innovation
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-orange-600 font-semibold tracking-wide">
                Eraflip Event Gallery
              </p>
              
              {/* Animated Underline */}
              <div className="w-48 h-1 mx-auto mt-6 bg-gradient-to-r from-orange-400 via-blue-500 to-orange-400 rounded-full animate-gradient-x"></div>
            </div>
          </div>

          {/* Location Tabs */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mb-12 md:mb-16 relative">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-orange-100/50 group hover:border-orange-200 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button 
                  onClick={() => setActiveTab('islamabad')}
                  className={`px-8 py-4 text-lg font-bold rounded-xl transform transition-all duration-300 flex items-center gap-3 justify-center relative overflow-hidden ${
                    activeTab === 'islamabad' 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105' 
                      : 'text-orange-700 hover:bg-orange-50 border border-orange-100'
                  }`}
                >
                  {activeTab === 'islamabad' && (
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  )}
                  
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="relative">Islamabad</span>
                  {activeTab === 'islamabad' && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full animate-ping"></div>
                  )}
                </button>
                
                <button 
                  onClick={() => setActiveTab('hongkong')}
                  className={`px-8 py-4 text-lg font-bold rounded-xl transform transition-all duration-300 flex items-center gap-3 justify-center relative overflow-hidden ${
                    activeTab === 'hongkong' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105' 
                      : 'text-blue-700 hover:bg-blue-50 border border-blue-100'
                  }`}
                >
                  {activeTab === 'hongkong' && (
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  )}
                  
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                  <span className="relative">Hong Kong</span>
                  {activeTab === 'hongkong' && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full animate-ping"></div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            {/* Gallery Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-3 animate-fade-in">
                {activeTab === 'islamabad' ? 'Islamabad Tech Summit' : 'Hong Kong Innovation Summit'}
              </h2>
              <p className="text-white max-w-2xl mx-auto text-lg md:text-xl">
                {activeTab === 'islamabad' 
                  ? 'Capturing the essence of innovation and technology in Pakistan\'s capital' 
                  : 'Global innovation meets Asian excellence in the heart of Hong Kong'}
              </p>
              
              <div className="flex justify-center gap-2 mt-4">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === (activeTab === 'islamabad' ? 0 : 1) ? 'bg-orange-500' : 'bg-blue-300'} animate-pulse`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Gallery Grid */}
            <div className={`gap-4 md:gap-6 ${activeTab === 'hongkong' ? 'columns-1 sm:columns-2 lg:columns-3' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
              {(activeTab === 'islamabad' ? islamabadImages : hongkongImages).map((image, index) => (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_0_50px_rgba(255,140,0,0.3)] transition-all duration-500 mb-4 md:mb-6 animate-fade-in-up bg-white/10 backdrop-blur-sm border border-white/20 ${
                    activeTab === 'hongkong' ? 'break-inside-avoid' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`overflow-hidden relative ${
                    activeTab === 'islamabad' ? 'aspect-square' : 'aspect-[4/3]'
                  }`}>
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      quality={100}
                      priority={index < 4}
                      placeholder="blur"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${activeTab === 'islamabad' ? 'bg-orange-400' : 'bg-blue-400'} animate-pulse`}></div>
                      <p className="text-white text-sm md:text-base font-medium">
                        {activeTab === 'islamabad' ? 'Tech Summit 2024' : 'Innovation Summit 2024'}
                      </p>
                    </div>
                    <h3 className="text-white text-lg md:text-xl font-bold mt-2">
                      {image.alt}
                    </h3>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-2 rounded-full transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gallery Footer */}
            <div className="text-center mt-12 md:mt-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 shadow-lg animate-pulse-slow">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1 h-1 rounded-full bg-orange-500 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <p className="text-white font-medium">
                  {(activeTab === 'islamabad' ? islamabadImages : hongkongImages).length} stunning moments captured
                </p>
                <div className={`w-3 h-3 rounded-full animate-ping ${activeTab === 'islamabad' ? 'bg-orange-400' : 'bg-blue-400'}`}></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-15px) translateX(8px); }
          66% { transform: translateY(8px) translateX(-8px); }
        }
        
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0); opacity: 0.5; }
          25% { transform: translate(10px, -20px); opacity: 0.8; }
          50% { transform: translate(-5px, -40px); opacity: 0.6; }
          75% { transform: translate(15px, -10px); opacity: 0.7; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes twinkle-fast {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes light-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 15s ease-in-out infinite; }
        .animate-float-random { animation: float-random 20s ease-in-out infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-gradient-text { 
          background-size: 200% auto;
          animation: gradient-text 5s ease infinite;
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-twinkle-fast { animation: twinkle-fast 2s ease-in-out infinite; }
        .animate-light-sweep { 
          animation: light-sweep 10s linear infinite;
          animation-play-state: running;
        }
        .animate-grid-move { animation: grid-move 20s linear infinite; }
        .animate-wave { animation: wave 20s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Highlights;