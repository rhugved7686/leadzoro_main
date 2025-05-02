'use client'

import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const CountingNumber = ({ 
  value, 
  suffix = '', 
  duration = 2 
}: { 
  value: number; 
  suffix?: string; 
  duration?: number 
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value; // Now we know value is a number
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-3xl font-bold gradient-text"
    >
      {count}{suffix}
    </motion.div>
  );
};

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">The Best Marketing Agency</span>
            <br />
            <span className="text-white">in Pune and India</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your Trusted Partner in Digital Success. We empower startups, SMEs, and enterprises with high-performance digital strategies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Schedule Free Strategy Session
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Our Services
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <CountingNumber value={50} suffix="+" />
              <div className="text-gray-400">Brands Trust Us</div>
            </div>
            <div className="text-center">
              <CountingNumber value={100} suffix="%" />
              <div className="text-gray-400">Transparent Reporting</div>
            </div>
            <div className="text-center">
              <CountingNumber value={100} suffix="+" />
              <div className="text-gray-400">ROI Driven Strategies</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;