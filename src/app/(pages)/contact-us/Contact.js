'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import * as THREE from 'three';

// Simple particle system
const Particles = () => {
  const particlesRef = useRef();
  const count = 1500;

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 10 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const color = new THREE.Color();
      
      if (i % 20 === 0) {
        color.setHSL(0.12, 0.8, 0.6); // Gold
      } else {
        const hue = 0.65 + Math.random() * 0.1;
        const saturation = 0.3 + Math.random() * 0.2;
        const lightness = 0.2 + Math.random() * 0.3;
        color.setHSL(hue, saturation, lightness);
      }
      
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    return colors;
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      particlesRef.current.rotation.x = time * 0.01;
      particlesRef.current.rotation.y = time * 0.005;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    // Page load pe animations trigger karein
    setIsLoaded(true);
    
    const timer1 = setTimeout(() => {
      setIsTitleVisible(true);
    }, 300); // Title 300ms baad slide in hoga
    
    const timer2 = setTimeout(() => {
      setIsContentVisible(true);
    }, 600); // Content 600ms baad slide in hoga
    
    const timer3 = setTimeout(() => {
      setIsFormVisible(true);
    }, 900); // Form 900ms baad slide in hoga

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 font-serif min-h-screen overflow-hidden">
      
      {/* Background with Image and Particles */}
      <div className="absolute inset-0 z-0">
        {/* Background Image - using inline style for simplicity */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'url(/images/desmumtz15.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 "></div>
        
        {/* Particles */}
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 0, 25], fov: 60 }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <Particles />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Additional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Slide Animation */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out ${
          isTitleVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}>
          <div className={`inline-block transition-all duration-700 delay-200 ${
            isTitleVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white transition-all duration-500 delay-300">
                Contact
              </span>
              <span className="text-[#c47128] ml-4 font-light italic transition-all duration-500 delay-400">
                Us
              </span>
            </h2>
          </div>
          
          <p className={`text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light tracking-wide leading-relaxed transition-all duration-700 delay-500 ${
            isTitleVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-6'
          }`}>
            Let's create digital excellence together
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Contact Info Side with Staggered Slide Animations */}
          <div className="space-y-8">
            <div className={`space-y-4 transition-all duration-800 ease-out ${
              isContentVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-10'
            }`}>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                <span className={`text-white block transition-all duration-600 delay-300 ${
                  isContentVisible ? 'translate-x-0' : '-translate-x-6'
                }`}>
                  Ready to get
                </span>
                <span className={`text-[#c47128] block mt-2 transition-all duration-600 delay-400 ${
                  isContentVisible ? 'translate-x-0' : '-translate-x-8'
                }`}>
                  started?
                </span>
              </h3>
              
              <p className={`text-lg md:text-xl text-gray-200 leading-relaxed font-light tracking-wide max-w-lg transition-all duration-700 delay-500 ${
                isContentVisible 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform -translate-x-4'
              }`}>
                Ready to elevate your business? Connect with us and let's create technology that drives real results.
              </p>
            </div>
            
            {/* Contact Cards with Staggered Animations */}
            <div className="space-y-4 pt-4">
              
              {/* Email Card */}
              <div className={`group relative overflow-hidden rounded-xl p-5 backdrop-blur-sm bg-white/10 border border-white/20 hover:border-[#D4AF37]/40 transition-all duration-500 hover:translate-x-2 ${
                isContentVisible 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform -translate-x-8'
              }`}
              style={{ transitionDelay: '600ms' }}>
                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1 tracking-wide">
                      Email
                    </h4>
                    <p className="text-gray-200 text-sm font-medium">
                      info@eraflip.com
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      help@eraflip.com
                    </p>
                  </div>
                  
                  <svg className="w-5 h-5 text-[#D4AF37] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
              
              {/* Phone Card */}
              <div className={`group relative overflow-hidden rounded-xl p-5 backdrop-blur-sm bg-white/10 border border-white/20 hover:border-[#D4AF37]/40 transition-all duration-500 hover:translate-x-2 ${
                isContentVisible 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform -translate-x-8'
              }`}
              style={{ transitionDelay: '700ms' }}>
                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-lg shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1 tracking-wide">
                      Phone
                    </h4>
                    <p className="text-gray-200 text-sm font-medium">
                      +92 309 7770073
                    </p>
                  </div>
                  
                  <svg className="w-5 h-5 text-[#D4AF37] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
              
              {/* Location Card */}
              <div className={`group relative overflow-hidden rounded-xl p-5 backdrop-blur-sm bg-white/10 border border-white/20 hover:border-[#D4AF37]/40 transition-all duration-500 hover:translate-x-2 ${
                isContentVisible 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform -translate-x-8'
              }`}
              style={{ transitionDelay: '800ms' }}>
                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-lg shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1 tracking-wide">
                      Location
                    </h4>
                    <p className="text-gray-200 text-sm font-medium">
                      Office, Level F1.5
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      An S-Software Technology Park, Forescour Road, Lahore, 54000
                    </p>
                  </div>
                  
                  <svg className="w-5 h-5 text-[#D4AF37] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Side with Slide Animation */}
          <div className={`relative transition-all duration-1000 ease-out ${
            isFormVisible 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform translate-x-10'
          }`}
          style={{ transitionDelay: '900ms' }}>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 md:p-10 overflow-hidden">
              
              <div className="relative space-y-8">
                {/* Form Header */}
                <div className={`space-y-4 transition-all duration-700 ${
                  isFormVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-6'
                }`}
                style={{ transitionDelay: '1000ms' }}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Your Details
                  </h3>
                  <p className="text-gray-200 text-base font-light tracking-wide">
                    Let us know how to get back to you
                  </p>
                  <div className="w-20 h-px bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                </div>
                
                {/* Contact Form with Staggered Input Animations */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className={`space-y-2 transition-all duration-600 ${
                      isFormVisible 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-8'
                    }`}
                    style={{ transitionDelay: '1100ms' }}>
                      <label className="block text-sm font-medium text-gray-200 tracking-wide">
                        First Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="name..."
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300/60 focus:border-[#D4AF37]/60 focus:bg-white/20 focus:ring-1 focus:ring-[#D4AF37]/40 transition-all duration-300 outline-none text-sm tracking-wide"
                        required
                      />
                    </div>
                    
                    <div className={`space-y-2 transition-all duration-600 ${
                      isFormVisible 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-8'
                    }`}
                    style={{ transitionDelay: '1200ms' }}>
                      <label className="block text-sm font-medium text-gray-200 tracking-wide">
                        Last Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="last name..."
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300/60 focus:border-[#D4AF37]/60 focus:bg-white/20 focus:ring-1 focus:ring-[#D4AF37]/40 transition-all duration-300 outline-none text-sm tracking-wide"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className={`space-y-2 transition-all duration-600 ${
                    isFormVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ transitionDelay: '1300ms' }}>
                    <label className="block text-sm font-medium text-gray-200 tracking-wide">
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email..."
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300/60 focus:border-[#D4AF37]/60 focus:bg-white/20 focus:ring-1 focus:ring-[#D4AF37]/40 transition-all duration-300 outline-none text-sm tracking-wide"
                      required
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className={`space-y-2 transition-all duration-600 ${
                    isFormVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ transitionDelay: '1400ms' }}>
                    <label className="block text-sm font-medium text-gray-200 tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+92"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300/60 focus:border-[#D4AF37]/60 focus:bg-white/20 focus:ring-1 focus:ring-[#D4AF37]/40 transition-all duration-300 outline-none text-sm tracking-wide"
                    />
                  </div>
                  
                  {/* Message */}
                  <div className={`space-y-2 transition-all duration-600 ${
                    isFormVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ transitionDelay: '1500ms' }}>
                    <label className="block text-sm font-medium text-gray-200 tracking-wide">
                      How Can We Help? <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300/60 focus:border-[#D4AF37]/60 focus:bg-white/20 focus:ring-1 focus:ring-[#D4AF37]/40 transition-all duration-300 resize-none outline-none text-sm tracking-wide"
                      required
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <div className={`transition-all duration-600 ${
                    isFormVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ transitionDelay: '1600ms' }}>
                    <button
                      type="submit"
                      className="group w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#0A2540] to-[#0A1929] hover:from-[#c47128] hover:to-[#c47128] text-white font-semibold text-sm tracking-wide transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#c47128]/30 border border-white/20 hover:border-[#c47128]/60 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <span className="relative flex items-center justify-center space-x-3">
                        <span>Send Message</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Note with Fade Animation */}
        <div className={`mt-16 pt-8 border-t border-white/20 text-center transition-all duration-1000 ${
          isFormVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}
        style={{ transitionDelay: '1700ms' }}>
          
        </div>
      </div>


      {/* Custom CSS for Smooth Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .page-enter {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .slide-left-enter {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .slide-right-enter {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        /* Prevent scroll during initial load */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
};

export default Contact;