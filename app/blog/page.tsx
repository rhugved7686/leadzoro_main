'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  FaBlog,
  FaRocket,
  FaBell,
  FaEnvelope,
  FaArrowLeft,
  FaLightbulb,
  FaChartLine,
  FaArrowUp,
  FaUsers
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Cycle through animation steps
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const floatingIcons = [
    { icon: FaLightbulb, delay: 0, color: 'text-yellow-400' },
    { icon: FaChartLine, delay: 0.5, color: 'text-green-400' },
    { icon: FaArrowUp, delay: 1, color: 'text-blue-400' },
    { icon: FaUsers, delay: 1.5, color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
        
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-20`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: [100, -20, 100], 
              opacity: [0, 0.3, 0],
              x: [0, 50, -50, 0]
            }}
            transition={{
              duration: 8,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 10}%`,
            }}
          >
            <item.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <main className="relative pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Main Content */}
          <div className="text-center">
            
            {/* Animated Blog Icon */}
            <motion.div
              ref={ref}
              className="mb-8 flex justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            >
              <div className="relative">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: animationStep === 0 ? 1.1 : 1,
                    rotate: animationStep === 1 ? 360 : 0,
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <FaBlog className="w-12 h-12 text-white" />
                </motion.div>
                
                {/* Pulsing Ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 0, 0.8]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Title with Typewriter Effect */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Blog</span>
              <br />
              <motion.span
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Coming Soon
              </motion.span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Get ready for expert insights on 
              <motion.span
                className="text-primary-400 font-semibold ml-2"
                animate={{ 
                  color: animationStep === 2 ? '#38bdf8' : '#0ea5e9'
                }}
                transition={{ duration: 0.5 }}
              >
                Digital Marketing, SEO & Growth Strategies
              </motion.span>
            </motion.p>

            {/* Features Preview */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                { icon: FaRocket, title: 'Growth Strategies', desc: 'Proven tactics to scale your business' },
                { icon: FaChartLine, title: 'SEO Insights', desc: 'Latest trends and optimization tips' },
                { icon: FaLightbulb, title: 'Marketing Tips', desc: 'Expert advice from industry leaders' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <motion.div
                    className="text-primary-400 mb-4 flex justify-center"
                    animate={{ 
                      scale: animationStep === 3 ? 1.2 : 1,
                      rotate: animationStep === 3 ? 10 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Email Subscription */}
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                <FaBell className="inline mr-2 text-primary-400" />
                Get Notified When We Launch
              </h3>
              
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubscribe}
                    className="flex gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                      required
                    />
                    <motion.button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaEnvelope className="w-5 h-5" />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="text-green-400 font-semibold text-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    ✅ Thanks! We'll notify you when the blog launches.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Launch Timeline */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <p className="text-gray-400 mb-4">Expected Launch</p>
              <motion.div
                className="text-2xl font-bold text-primary-400"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Q1 2025
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogComingSoon;
