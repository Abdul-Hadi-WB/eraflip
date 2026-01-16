"use client";

import React, { useState, useEffect } from 'react';
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
  Mail, MapPin, Menu, X,
  Target as TargetIcon, BarChart, Share2, 
  Filter, TrendingUp as TrendingUpIcon,
  DollarSign, LineChart
} from "lucide-react";

// Import karo images
import Img1 from "../../../../public/images/Group-2024-06-28T151001.065.png";
import Img2 from "../../../../public/images/Group-2024-06-28T150957.236.png";
import Img3 from "../../../../public/images/Group-2024-06-28T150953.569.png";
import Img4 from "../../../../public/images/Group-2024-06-28T150950.363.png";
import Img5 from "../../../../public/images/Group-2024-06-28T150946.903.png";
import Img6 from "../../../../public/images/Group-2024-06-28T150939.481.png";

const DigitalMarketingPPCCampaigns = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  // Digital Marketing Services Data
  const marketingServices = [
    {
      id: 1,
      title: "Meta (Facebook & Instagram) Ads",
      description: "Powerful Meta ads driving engagement, leads, and measurable growth across Facebook and Instagram.",
      icon: Img1,
      stats: "High ROI",
      color: "from-orange-500 to-orange-600",
      iconComponent: <TargetIcon className="w-8 h-8" />,
      features: ["Facebook Ads", "Instagram Ads", "Audience Targeting"]
    },
    {
      id: 2,
      title: "Google Ads (Search, Display, YouTube)",
      description: "Targeted Google Ads across Search, Display, and YouTube to maximize reach and conversions.",
      icon: Img2,
      stats: "Max Conversions",
      color: "from-blue-500 to-cyan-500",
      iconComponent: <Globe className="w-8 h-8" />,
      features: ["Search Ads", "Display Ads", "YouTube Campaigns"]
    },
    {
      id: 3,
      title: "LinkedIn & TikTok Campaigns",
      description: "Engaging LinkedIn and TikTok campaigns to boost brand awareness, leads, and audience growth.",
      icon: Img3,
      stats: "B2B Focus",
      color: "from-orange-500 to-amber-500",
      iconComponent: <Share2 className="w-8 h-8" />,
      features: ["LinkedIn Ads", "TikTok Campaigns", "Social Media"]
    },
    {
      id: 4,
      title: "Remarketing & Conversion Tracking",
      description: "Smart remarketing and conversion tracking to re-engage audiences and maximize ROI effectively.",
      icon: Img4,
      stats: "Retargeting",
      color: "from-blue-500 to-indigo-500",
      iconComponent: <Filter className="w-8 h-8" />,
      features: ["Remarketing", "Conversion Tracking", "ROI Analysis"]
    },
    {
      id: 5,
      title: "Campaign Strategy & A/B Testing",
      description: "Data-driven campaign strategies and A/B testing to optimize performance and boost conversions.",
      icon: Img5,
      stats: "Optimized",
      color: "from-orange-500 to-red-500",
      iconComponent: <BarChart3 className="w-8 h-8" />,
      features: ["Strategy Planning", "A/B Testing", "Performance Optimization"]
    },
    {
      id: 6,
      title: "Budget Optimization & ROI Reporting",
      description: "Strategic budget optimization and ROI reporting to maximize performance and marketing efficiency.",
      icon: Img6,
      stats: "Max ROI",
      color: "from-blue-500 to-purple-500",
      iconComponent: <LineChart className="w-8 h-8" />,
      features: ["Budget Management", "ROI Reporting", "Analytics"]
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - With Background Image ONLY */}
      <section 
        className="relative pt-20 pb-32 px-4 overflow-hidden min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "url('/images/v1030-069.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark Overlay for better readability - Hero Section Only */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90"></div>
        
        {/* Animated Background - Hero Section Only */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative container mx-auto max-w-6xl z-10">
          {/* Digital Marketing Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-gray-700">
            <SparkleIcon className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">📈 #1 Digital Marketing Agency</span>
          </div>

          {/* 3D Text Effect */}
          <div className="mb-6">
            {/* Main 3D Text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3 leading-tight">
              <div className="relative">
                {/* Shadow Layer - Creates Depth */}
                <span className="absolute top-2 left-2 text-orange-900/60 select-none">
                  Digital Marketing.
                </span>
              
                {/* Middle Layer - Creates Thickness */}
                <span className="absolute top-1 left-1 text-orange-800/70 select-none">
                  Digital Marketing.
                </span>
                
                {/* Main Text Layer */}
                <span className="relative block text-orange-500">
                  Digital Marketing.
                </span>
              </div>
            </h1>
            
            {/* Subtitle with 3D Effect */}
            <div className="mt-4">
              <div className="relative inline-block">
                {/* Shadow Layer */}
                <span className="absolute top-1.5 left-1.5 text-blue-900/50 text-4xl md:text-6xl font-bold select-none">
                  PPC CAMPAIGNS
                </span>
                
                {/* Middle Layer */}
                <span className="absolute top-0.5 left-0.5 text-blue-800/60 text-4xl md:text-6xl font-bold select-none">
                  PPC CAMPAIGNS
                </span>
                
                {/* Main Text Layer */}
                <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-4xl md:text-6xl font-bold">
                  PPC CAMPAIGNS
                </span>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl">
            We drive <span className="text-orange-300 font-bold">measurable results</span> with 
            data-driven digital marketing strategies that maximize ROI and grow your business worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl">
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Launch Campaign
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800/50 px-8 py-6 text-lg rounded-xl">
              <TargetIcon className="w-5 h-5 mr-2" />
              View Results
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Digital Marketing Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 px-4 py-2 rounded-full mb-4 border border-orange-500/30">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">OUR SERVICES</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">Solutions</span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Comprehensive digital marketing solutions for maximum reach and ROI
            </p>
            
            {/* Company Description */}
            <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
              Eraflip Tech is a creative technology studio driven by innovation, design, and a passion for digital excellence. 
              We specialize in crafting high-quality digital marketing campaigns, PPC strategies, and digital solutions that blend creativity 
              with cutting-edge technology. Our team of skilled marketers, analysts, and strategists transforms ideas into 
              impactful digital experiences. We build lasting client partnerships by delivering reliable, scalable, and visually 
              engaging products that meet global standards. From concept to completion, Eraflip Tech empowers brands through 
              innovation, quality, and commitment.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service) => (
              <div 
                key={service.id}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Service Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-500 group-hover:border-orange-500/50 group-hover:scale-[1.02] h-full">
                  {/* Icon with Animation */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                      <div className="text-white">
                        {service.iconComponent}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gray-900 px-3 py-1 rounded-full text-xs font-medium text-white border border-gray-700">
                      {service.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full mt-auto text-gray-400 hover:text-orange-400 hover:bg-gray-800/50"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Contact Us */}
      <section className="py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative">
        <div className="mx-auto max-w-6xl px-6">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
          </div>

          {/* Two Columns Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Start Your Marketing Campaign Today
                </h2>
                <p className="text-gray-300 text-lg mb-8 bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
                  Fill out the form or reach us via the provided contact number or email to discuss your ideas and get started on your digital marketing campaign with our expert team.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-indigo-900/20 hover:shadow-md p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">Email</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">info@eraflip.com</p>
                  </div>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-green-900/20 hover:to-emerald-900/20 hover:shadow-md p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">Phone</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">+92 309 7770073</p>
                  </div>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-violet-900/20 hover:shadow-md p-4 rounded-xl transition-all duration-300 border border-gray-800">
                  <div className="mr-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">Location</h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Office 1, Level #14, Arfa Software Technology Park,<br />
                      Ferozepur Road, Lahore, 54000, Pakistan
                    </p>
                  </div>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Your Details</h3>
                <p className="text-gray-300 mb-6">Let us know how to get back to you.</p>

                <form onSubmit={handleSubmit}>
                  {/* First Name and Last Name in same row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="group">
                      <label className="block text-gray-300 text-sm font-bold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 text-white group-hover:shadow-sm transition-all duration-300"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-gray-300 text-sm font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 text-white group-hover:shadow-sm transition-all duration-300"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 text-white group-hover:shadow-sm transition-all duration-300"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* How Can We Help? */}
                  <div className="group mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      How Can We Help?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 text-white group-hover:shadow-sm transition-all duration-300"
                      placeholder="Comments / Questions *"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-6 px-10 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
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
    </div>
  );
};

export default DigitalMarketingPPCCampaigns;