'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../../public/images/Eraflip-logo-png-scaled-e1756981494806-1024x720-1.png";
import { Menu, X, Search, ChevronDown, ChevronRight, Phone, Mail, Globe } from "lucide-react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const servicesRef = useRef(null);
  const mobileServicesRef = useRef(null);
  
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const services = [
    { name: "All Services", path: "/services", icon: "🔍" },
    { name: "Game Development", path: "/game-development", icon: "🎮" },
    { name: "Web Development", path: "/web-development", icon: "🌐" },
    { name: "Web Applications & Frameworks", path: "/web-applications-frameworks", icon: "⚙️" },
    { name: "Odoo Development & Integration", path: "/odoo-development-integration", icon: "🔧" },
    { name: "Digital Marketing & PPC Campaigns", path: "/digital-marketing-ppc-campaigns", icon: "🎯" },
    { name: "Social Media Management", path: "/social-media-management", icon: "📱" },
    { name: "Content Creation", path: "/content-creation", icon: "✍️" },
    { name: "Search Engine Optimization (SEO)", path: "/search-engine-optimization", icon: "🔎" },
    { name: "Design & Creative Services", path: "/design-creative-services", icon: "🎨" },
    { name: "IoT Smart Solutions", path: "/iot-smart-solutions", icon: "🤖" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleMobileClickOutside = (event) => {
      if (mobileServicesRef.current && !mobileServicesRef.current.contains(event.target)) {
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMobileClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleMobileClickOutside);
    };
  }, []);

  // Handle mouse enter with delay for closing
  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  // Handle click on services button
  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Handle mobile services click
  const handleMobileServicesClick = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Handle closing all dropdowns when clicking a link
  const handleLinkClick = () => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <header className={`relative w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 shadow-2xl sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'py-1' : 'py-2'}`}>
      {/* Top glowing accent line with animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent opacity-50"></div>

      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced styling */}
          <div className="flex items-center">
            <Link href="/home" onClick={handleLinkClick} className="group">
              <div className="p-2 bg-gradient-to-br from-white to-gray-100 rounded-xl border-2 border-orange-400/30 shadow-lg shadow-orange-500/10 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 hover:border-orange-400/50">
                <Image 
                  src={logo} 
                  alt="ERAFLIP Logo" 
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-110"
                  width={140}
                  height={56}
                  priority
                  sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 140px, 160px"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
            {/* Home */}
            <Link
              href="/home"
              onClick={handleLinkClick}
              className={`text-base xl:text-lg font-semibold transition-all duration-300 relative pb-2 group ${
                isActive("/home")
                  ? "text-white font-bold drop-shadow-[0_0_10px_rgba(251,146,60,0.7)]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="relative z-10">Home</span>
              {/* Animated background for active state */}
              {isActive("/home") && (
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-lg blur-md"></span>
              )}
              {/* Glowing underline effect */}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-all duration-500 ${isActive("/home") ? 'w-16 opacity-100' : 'w-0 opacity-0 group-hover:w-16 group-hover:opacity-100'}`}></span>
            </Link>
            
            {/* AboutUs */}
            <Link
              href="/about-us"
              onClick={handleLinkClick}
              className={`text-base xl:text-lg font-semibold transition-all duration-300 relative pb-2 group ${
                isActive("/about-us")
                  ? "text-white font-bold drop-shadow-[0_0_10px_rgba(251,146,60,0.7)]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="relative z-10">About Us</span>
              {isActive("/about-us") && (
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-lg blur-md"></span>
              )}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-all duration-500 ${isActive("/about-us") ? 'w-16 opacity-100' : 'w-0 opacity-0 group-hover:w-16 group-hover:opacity-100'}`}></span>
            </Link>
            
            {/* Services Dropdown - SIMPLE VERSION */}
            <div 
              className="relative" 
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={handleServicesClick}
                className={`flex items-center text-base xl:text-lg font-semibold transition-all duration-300 relative pb-2 group ${
                  isServicesOpen 
                    ? "text-white font-bold drop-shadow-[0_0_10px_rgba(251,146,60,0.7)]" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">Services</span>
                <ChevronDown 
                  className={`ml-2 w-4 h-4 xl:w-5 xl:h-5 transition-all duration-300 ${isServicesOpen ? 'rotate-180 text-orange-400 scale-110' : 'text-gray-400 group-hover:text-orange-400'}`} 
                />
                {isServicesOpen && (
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-lg blur-md"></span>
                )}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-all duration-500 ${isServicesOpen ? 'w-16 opacity-100' : 'w-0 opacity-0 group-hover:w-16 group-hover:opacity-100'}`}></span>
              </button>
              
              {/* Services Dropdown Menu - SIMPLE LIST */}
              {isServicesOpen && (
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-64 xl:w-72 bg-gray-900/95 backdrop-blur-lg border border-orange-500/30 rounded-xl shadow-2xl shadow-orange-500/10 z-50 overflow-hidden"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                  <div className="py-3 max-h-[70vh] overflow-y-auto">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.path}
                        className={`flex items-center space-x-3 px-4 py-3 text-base transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-transparent hover:text-white ${
                          isActive(service.path) 
                            ? 'bg-gradient-to-r from-orange-500/20 to-transparent text-white font-medium border-l-2 border-orange-400' 
                            : 'text-gray-300'
                        } ${index !== services.length - 1 ? 'border-b border-gray-800' : ''}`}
                        onClick={handleLinkClick}
                      >
                        <span className="text-lg">{service.icon}</span>
                        <span className="flex-1">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* EventHighlights */}
            <Link
              href="/event-highlights"
              onClick={handleLinkClick}
              className={`text-base xl:text-lg font-semibold transition-all duration-300 relative pb-2 group ${
                isActive("/event-highlights")
                  ? "text-white font-bold drop-shadow-[0_0_10px_rgba(251,146,60,0.7)]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="relative z-10">Event Highlights</span>
              {isActive("/event-highlights") && (
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-lg blur-md"></span>
              )}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-all duration-500 ${isActive("/event-highlights") ? 'w-16 opacity-100' : 'w-0 opacity-0 group-hover:w-16 group-hover:opacity-100'}`}></span>
            </Link>
            
            {/* Contact Us */}
            <Link
              href="/contact-us"
              onClick={handleLinkClick}
              className={`text-base xl:text-lg font-semibold transition-all duration-300 relative pb-2 group ${
                isActive("/contact-us")
                  ? "text-white font-bold drop-shadow-[0_0_10px_rgba(251,146,60,0.7)]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="relative z-10">Contact Us</span>
              {isActive("/contact-us") && (
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-lg blur-md"></span>
              )}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-all duration-500 ${isActive("/contact-us") ? 'w-16 opacity-100' : 'w-0 opacity-0 group-hover:w-16 group-hover:opacity-100'}`}></span>
            </Link>
          </nav>

          {/* Desktop CTA Button & Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              className="p-2 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110 relative group"
              onClick={handleLinkClick}
            >
              <Search className="w-6 h-6 xl:w-7 xl:h-7" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
            
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full text-base font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5">
              Start Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Search Icon */}
            <button 
              className="p-2 text-gray-300 hover:text-orange-400 transition-colors hover:bg-orange-500/10 rounded-lg"
              onClick={handleLinkClick}
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileServicesRef}
          className="lg:hidden fixed inset-0 top-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-40 overflow-y-auto"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          {/* Mobile header */}
          <div className="p-4 bg-gradient-to-r from-orange-600/20 to-transparent">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">Navigation</h3>
              <button 
                onClick={handleLinkClick}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                Get Quote
              </button>
            </div>
          </div>
          
          <div className="px-6 py-6">
            {/* Home */}
            <Link
              href="/home"
              onClick={handleLinkClick}
              className={`flex items-center py-4 text-lg font-semibold border-b border-gray-700 transition-all duration-300 ${
                isActive("/home")
                  ? "text-orange-400 pl-4 border-l-4 border-orange-400 bg-gradient-to-r from-orange-500/10 to-transparent"
                  : "text-gray-300 hover:text-orange-400 hover:pl-4 hover:border-l-4 hover:border-orange-400/50"
              }`}
            >
              🏠 Home
            </Link>
            
            {/* AboutUs */}
            <Link
              href="/about-us"
              onClick={handleLinkClick}
              className={`flex items-center py-4 text-lg font-semibold border-b border-gray-700 transition-all duration-300 ${
                isActive("/about-us")
                  ? "text-orange-400 pl-4 border-l-4 border-orange-400 bg-gradient-to-r from-orange-500/10 to-transparent"
                  : "text-gray-300 hover:text-orange-400 hover:pl-4 hover:border-l-4 hover:border-orange-400/50"
              }`}
            >
              👥 About Us
            </Link>
            
            {/* Services Mobile Dropdown - SIMPLE VERSION */}
            <div className="border-b border-gray-700">
              <button
                onClick={handleMobileServicesClick}
                className={`flex justify-between items-center w-full py-4 text-lg font-semibold transition-all duration-300 ${
                  isMobileServicesOpen
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                <span className="flex items-center">
                  🔧 <span className="ml-2">Services</span>
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-orange-400' : 'text-gray-400'}`} 
                />
              </button>
              
              {/* Mobile Services Menu - SIMPLE LIST */}
              {isMobileServicesOpen && (
                <div className="pl-6 pb-3 space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      className={`flex items-center space-x-3 py-3 text-base transition-all duration-300 ${
                        isActive(service.path) 
                          ? 'text-orange-400 font-medium pl-4 border-l-2 border-orange-400 bg-gradient-to-r from-orange-500/10 to-transparent' 
                          : 'text-gray-300 hover:text-orange-300 hover:pl-4 hover:border-l-2 hover:border-orange-400/50'
                      }`}
                      onClick={handleLinkClick}
                    >
                      <span>{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* EventHighlights */}
            <Link
              href="/event-highlights"
              onClick={handleLinkClick}
              className={`flex items-center py-4 text-lg font-semibold border-b border-gray-700 transition-all duration-300 ${
                isActive("/event-highlights")
                  ? "text-orange-400 pl-4 border-l-4 border-orange-400 bg-gradient-to-r from-orange-500/10 to-transparent"
                  : "text-gray-300 hover:text-orange-400 hover:pl-4 hover:border-l-4 hover:border-orange-400/50"
              }`}
            >
              🎉 Event Highlights
            </Link>
            
            {/* Contact Us */}
            <Link
              href="/contact-us"
              onClick={handleLinkClick}
              className={`flex items-center py-4 text-lg font-semibold transition-all duration-300 ${
                isActive("/contact-us")
                  ? "text-orange-400 pl-4 border-l-4 border-orange-400 bg-gradient-to-r from-orange-500/10 to-transparent"
                  : "text-gray-300 hover:text-orange-400 hover:pl-4 hover:border-l-4 hover:border-orange-400/50"
              }`}
            >
              📞 Contact Us
            </Link>

            {/* Mobile contact info */}
            <div className="mt-8 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700">
              <h4 className="text-white font-bold mb-3">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>+92 XXX XXXXXXX</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>contact@eraflip.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;