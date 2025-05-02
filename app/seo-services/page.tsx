'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, LazyMotion, domAnimation, useInView } from 'framer-motion';
import { useRef, Suspense } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import s1 from '../../public/assets/s1.png';
import s2 from '../../public/assets/s2.png';
import s3 from '../../public/assets/s3.png';
import s4 from '../../public/assets/s4.png';
import s5 from '../../public/assets/s5.png';
import s6 from '../../public/assets/s6.png';
import s7 from '../../public/assets/s7.png';
import s8 from '../../public/assets/s8.png';
import s9 from '../../public/assets/s9.png';
import s10 from '../../public/assets/s10.png';
import s11 from '../../public/assets/s11.png';
import s12 from '../../public/assets/s12.png';
import s13 from '../../public/assets/s13.png';


// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-[400px] w-full bg-gray-800 rounded-2xl" />
  </div>
);

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className, 
  priority = false 
}) => (
  <Image
    src={src || "/placeholder.svg"}
    alt={alt}
    className={className}
    priority={priority}
    width={1200}
    height={800}
  />
);

export default function SEOServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });
  const secondRef = useRef(null);
  const secondInView = useInView(secondRef, { once: true, margin: "100px" });
  const thirdRef = useRef(null);
  const thirdInView = useInView(thirdRef, { once: true, margin: "100px" });
  const fourthRef = useRef(null);
  const fourthInView = useInView(fourthRef, { once: true, margin: "100px" });
  const fifthRef = useRef(null);
  const fifthInView = useInView(fifthRef, { once: true, margin: "100px" });
  const sixthRef = useRef(null);
  const sixthInView = useInView(sixthRef, { once: true, margin: "100px" });
  const seventhRef = useRef(null);
  const seventhInView = useInView(seventhRef, { once: true, margin: "100px" });
  const eighthRef = useRef(null);
  const eighthInView = useInView(eighthRef, { once: true, margin: "100px" });
  const ninthRef = useRef(null);
  const ninthInView = useInView(ninthRef, { once: true, margin: "100px" });

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
        <Navbar />
        {/* First Hero Section */}
        <div className="container mx-auto px-4 py-16 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
          </div>

          <motion.div 
            ref={ref}
            className="flex flex-col lg:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Best SEO Services in Pune & India — Rank Higher, Grow Faster with Leadzoro
              </motion.h1>
              
              <motion.div 
                className="space-y-6 text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="font-semibold text-xl text-blue-300">
                  Are you tired of watching your competitors appear on top of Google while your website stays buried on page 3?
                </p>
                
                <p className="text-2xl font-bold text-primary-400">
                  You're not alone.
                </p>
                
                <p className="font-semibold">
                  In 2025, visibility is currency, and SEO is how you earn it.
                </p>
                
                <p>
                  At Leadzoro, we help ambitious Indian businesses — from real estate consultants in Pune to e-commerce founders in Bangalore — turn their websites into lead-generating powerhouses through strategic, industry-smart, and ROI-driven SEO Services.
                </p>
                
                <p className="text-2xl font-bold text-primary-400">
                  Let's take your digital presence from invisible to unmissable.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button className="btn-primary text-lg px-8 py-6">
                  Get Started Today
                </Button>
              </motion.div>
            </div>
            
            {/* Image */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
                
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s1.src}
                    alt="SEO Services" 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Suspense>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Second Section - What is SEO */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
          </div>

          <motion.div
            ref={secondRef}
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={secondInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <motion.div
                className="relative h-[500px] w-full rounded-3xl overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={secondInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 z-10" />
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s2.src}
                    alt="What is SEO"
                    className="object-cover"
                    priority
                  />
                </Suspense>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={secondInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  What is SEO & Why It's a Game-Changer in 2025?
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Search Engine Optimization (SEO) is the art and science of improving your website's position on search engines like Google — so that when someone types a relevant keyword, your brand shows up before your competitors.
                </p>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-300">
                    There are 4 key pillars of SEO that matter in 2025:
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "On-Page SEO",
                        description: "Structuring your content, keywords, titles, and code"
                      },
                      {
                        title: "Off-Page SEO",
                        description: "Building trust through backlinks, mentions, and PR"
                      },
                      {
                        title: "Local SEO",
                        description: "Ranking for location-based searches (like 'dentist in Pune')"
                      },
                      {
                        title: "Technical SEO",
                        description: "Making your site fast, mobile-friendly, and crawlable"
                      }
                    ].map((pillar, index) => (
                      <motion.div
                        key={pillar.title}
                        className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={secondInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        <h4 className="text-xl font-semibold text-blue-400 mb-2">{pillar.title}</h4>
                        <p className="text-gray-300">{pillar.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <p className="text-lg text-blue-300 font-semibold">
                    🧠 Fact: Over 91% of Indian customers use Google before making a purchase decision.
                  </p>
                  <p className="text-xl text-white font-bold mt-2">
                    If you're not on Page 1, you're not even in the game.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Third Section - Indian Businesses */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-secondary-500/5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 to-primary-500" />
          </div>

          <motion.div
            ref={thirdRef}
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={thirdInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              {/* Image Section */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={thirdInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 z-10" />
                  <Suspense fallback={<LoadingSkeleton />}>
                    <OptimizedImage
                      src={s3.src}
                      alt="Indian Businesses SEO"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </Suspense>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="lg:w-1/2 space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={thirdInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="inline-flex items-center space-x-2 text-primary-400 mb-4">
                  <span className="text-2xl">🇮🇳</span>
                  <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                    Why Indian Businesses (Especially in Pune) Can't Ignore SEO
                  </h2>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you're a local gym in Kharadi, a doctor in Viman Nagar, or an e-commerce brand selling across India — your target audience is searching online right now.
                </p>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary-300">
                    Here's what the data says:
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "📈",
                        text: "7 out of 10 purchases in India start with a Google search"
                      },
                      {
                        icon: "🏙️",
                        text: "83% of local buyers trust businesses that appear on the first page"
                      },
                      {
                        icon: "📱",
                        text: "Mobile-first indexing is making local SEO more important than ever"
                      }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.text}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={thirdInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        <span className="text-2xl">{stat.icon}</span>
                        <p className="text-lg text-gray-300">{stat.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={thirdInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <p className="text-xl font-bold text-white">
                    Don't just compete — dominate. With Leadzoro's SEO Services in Pune and across India, we'll make sure your brand is found where it matters most.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Fourth Section - Why Choose Leadzoro */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary-500/5 via-secondary-500/5 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
          </div>

          <motion.div
            ref={fourthRef}
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={fourthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400"
                initial={{ opacity: 0, y: 20 }}
                animate={fourthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Why Choose Leadzoro as Your SEO Partner?
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={fourthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We're not just an SEO agency. We're your growth allies — focused on helping you attract, engage, and convert real customers through search.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Pune-based SEO Experts",
                  description: "with India-wide reach",
                  icon: "📍"
                },
                {
                  title: "Custom strategies",
                  description: "for your business and industry",
                  icon: "🎯"
                },
                {
                  title: "Transparent reporting",
                  description: "with real numbers",
                  icon: "📊"
                },
                {
                  title: "Quick WhatsApp support",
                  description: "no wait, no fluff",
                  icon: "💬"
                },
                {
                  title: "Trusted by 100+ brands",
                  description: "startups, local businesses, and eCommerce",
                  icon: "🏆"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={fourthInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="md:col-span-2 lg:col-span-3 p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={fourthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <p className="text-xl font-bold text-white text-center">
                  We know what works in Indian markets — and we've got the case studies to prove it.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Fifth Section - Core SEO Services */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-secondary-500/5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 via-primary-500 to-secondary-500" />
          </div>

          <motion.div
            ref={fifthRef}
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={fifthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={fifthInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                Our Core SEO Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Section */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={fifthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-primary-300">
                    On-Page SEO Services
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We optimize everything that lives on your site — the words, structure, images, and code — so Google clearly understands what you do.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">
                      What's included:
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Keyword research + placement",
                        "Meta tags, headers, and internal links",
                        "Schema markup & structured data",
                        "Image alt-text optimization",
                        "Mobile & Core Web Vitals fixes"
                      ].map((item, index) => (
                        <motion.div
                          key={item}
                          className="flex items-start space-x-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={fifthInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                          <span className="text-primary-400">✓</span>
                          <p className="text-gray-300">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.div
                      className="flex items-center space-x-2 p-3 rounded-lg bg-primary-500/10 border border-primary-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={fifthInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <span className="text-xl">📍</span>
                      <span className="text-gray-300">Best for: Service providers, coaches, educational sites</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-2 p-3 rounded-lg bg-secondary-500/10 border border-secondary-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={fifthInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <span className="text-xl">🔎</span>
                      <span className="text-gray-300">Keywords: On-Page SEO Services Pune, On-Page SEO India</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                className="relative h-[500px] w-full rounded-3xl overflow-hidden group"
                initial={{ opacity: 0, x: 50 }}
                animate={fifthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-secondary-500/10" />
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s4.src}
                    alt="On-Page SEO Services"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Suspense>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Sixth Section - Off-Page SEO */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-secondary-500/5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
          </div>

          <motion.div
            ref={sixthRef}
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={sixthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image on the left */}
              <motion.div
                className="relative h-[500px] w-full rounded-3xl overflow-hidden group order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={sixthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-secondary-500/10" />
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s5.src}
                    alt="Off-Page SEO Services"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Suspense>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
              </motion.div>

              {/* Content on the right */}
              <motion.div
                className="space-y-8 order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={sixthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-primary-300">
                    2️⃣ Off-Page SEO Services
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Think of this as your brand's online reputation. We help Google trust your site by building quality links and mentions across the web.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">
                      What we do:
                    </h4>

                    <div className="grid grid-cols-1 gap-4">
                      {[
                        "Authority link building",
                        "Guest posts on relevant blogs",
                        "Brand citations on Indian directories",
                        "PR placements in niche publications"
                      ].map((item, index) => (
                        <motion.div
                          key={item}
                          className="flex items-start space-x-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={sixthInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                          <span className="text-primary-400">✓</span>
                          <p className="text-gray-300">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.div
                      className="flex items-center space-x-2 p-3 rounded-lg bg-primary-500/10 border border-primary-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={sixthInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <span className="text-xl">📍</span>
                      <span className="text-gray-300">Best for: Startups, SaaS, e-commerce, personal brands</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-2 p-3 rounded-lg bg-secondary-500/10 border border-secondary-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={sixthInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <span className="text-xl">🔎</span>
                      <span className="text-gray-300">Keywords: Off-Page SEO India, SEO Expert Pune, Link Building Services</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Seventh Section - Local SEO */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-secondary-500/5" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 via-primary-500 to-secondary-500" />
          </div>

          <motion.div
            ref={seventhRef}
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={seventhInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content on the left */}
              <motion.div
                className="space-y-8 order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={seventhInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-primary-300">
                    3️⃣ Local SEO Services
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Want to appear when someone searches "salon near me" or "best clinic in Pune"? That's what Local SEO does — and we do it better than anyone.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">
                      Our focus:
                    </h4>

                    <div className="grid grid-cols-1 gap-4">
                      {[
                        "Google Business Profile optimization",
                        "Local keyword strategy (location + service)",
                        "Review generation + reputation building",
                        "Citations on local platforms (JustDial, Sulekha, etc.)",
                        "Geo-tagged content & service area pages"
                      ].map((item, index) => (
                        <motion.div
                          key={item}
                          className="flex items-start space-x-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={seventhInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                          <span className="text-primary-400">✓</span>
                          <p className="text-gray-300">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.div
                      className="flex items-center space-x-2 p-3 rounded-lg bg-primary-500/10 border border-primary-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={seventhInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <span className="text-xl">📍</span>
                      <span className="text-gray-300">Best for: Clinics, salons, gyms, real estate</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-2 p-3 rounded-lg bg-secondary-500/10 border border-secondary-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={seventhInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <span className="text-xl">🔎</span>
                      <span className="text-gray-300">Keywords: Local SEO Services Pune, Local SEO India, SEO for Clinics Pune</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Image on the right */}
              <motion.div
                className="relative h-[500px] w-full rounded-3xl overflow-hidden group order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={seventhInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-secondary-500/10" />
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s6.src}
                    alt="Local SEO Services"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Suspense>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Eighth Section - E-commerce SEO */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-secondary-500/5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
          </div>

          <motion.div
            ref={eighthRef}
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={eighthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content on the left */}
              <motion.div
                className="space-y-8 order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={eighthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-primary-300">
                    4️⃣ E-commerce SEO Services
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Online stores need more than pretty product pages. We turn your e-commerce website into a traffic magnet that converts clicks into sales.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">
                      Ecom SEO checklist:
                    </h4>

                    <div className="grid grid-cols-1 gap-4">
                      {[
                        "Product + category optimization",
                        "Title & review schema",
                        "Filtered URL cleanups",
                        "Mobile-first speed enhancements",
                        "SEO copy for product descriptions"
                      ].map((item, index) => (
                        <motion.div
                          key={item}
                          className="flex items-start space-x-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={eighthInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                          <span className="text-primary-400">✓</span>
                          <p className="text-gray-300">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.div
                      className="flex items-center space-x-2 p-3 rounded-lg bg-primary-500/10 border border-primary-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={eighthInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <span className="text-xl">📍</span>
                      <span className="text-gray-300">Best for: Shopify, WooCommerce, Magento, D2C brands</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-2 p-3 rounded-lg bg-secondary-500/10 border border-secondary-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={eighthInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <span className="text-xl">🔎</span>
                      <span className="text-gray-300">Keywords: E-commerce SEO Services India, Product SEO in Pune</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Image on the right */}
              <motion.div
                className="relative h-[500px] w-full rounded-3xl overflow-hidden group order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={eighthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-secondary-500/10" />
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s7.src}
                    alt="E-commerce SEO Services"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Suspense>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Ninth Section - Technical SEO */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-secondary-500/5" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 via-primary-500 to-secondary-500" />
          </div>

          <motion.div
            ref={ninthRef}
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={ninthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image on the left */}
              <motion.div
                className="relative h-[500px] w-full rounded-3xl overflow-hidden group order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-secondary-500/10" />
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s8.src}
                    alt="Technical SEO Services"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Suspense>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
              </motion.div>

              {/* Content on the right */}
              <motion.div
                className="space-y-8 order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-primary-300">
                    5️⃣ Technical SEO + SEO Audits
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Behind-the-scenes work that powers everything. Technical SEO ensures Google crawls, indexes, and ranks your site the way it should.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">
                      We handle:
                    </h4>

                    <div className="grid grid-cols-1 gap-4">
                      {[
                        "Indexing issues + crawl errors",
                        "Broken links, redirects, & 404s",
                        "Core Web Vitals optimization",
                        "Sitemap & Robots.txt configuration",
                        "Page load speed + mobile usability"
                      ].map((item, index) => (
                        <motion.div
                          key={item}
                          className="flex items-start space-x-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={ninthInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                          <span className="text-primary-400">✓</span>
                          <p className="text-gray-300">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.div
                      className="flex items-center space-x-2 p-3 rounded-lg bg-primary-500/10 border border-primary-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={ninthInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <span className="text-xl">📍</span>
                      <span className="text-gray-300">Best for: Medium to large websites with 50+ pages</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-2 p-3 rounded-lg bg-secondary-500/10 border border-secondary-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={ninthInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <span className="text-xl">🔎</span>
                      <span className="text-gray-300">Keywords: Technical SEO India, SEO Audit Company Pune</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Eleventh Section - SEO Growth Process */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-secondary-500/5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
          </div>

          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={ninthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="relative h-[300px] w-[2000px] max-w-5xl mx-auto mb-8 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={ninthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <OptimizedImage
                  src={s9.src}
                  alt="Our Proven 6-Step SEO Growth Process"
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
              
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400"
                initial={{ opacity: 0, y: 20 }}
                animate={ninthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our Proven 6-Step SEO Growth Process
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={ninthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Here's how we deliver search engine dominance
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Free Website Audit",
                  description: "Spot issues and opportunities",
                  icon: "🔍",
                  gradient: "from-blue-500/10 to-indigo-500/10"
                },
                {
                  step: "2",
                  title: "Keyword Planning",
                  description: "Target only what brings ROI",
                  icon: "🎯",
                  gradient: "from-purple-500/10 to-pink-500/10"
                },
                {
                  step: "3",
                  title: "On-Page Optimization",
                  description: "Fix your foundation",
                  icon: "⚙️",
                  gradient: "from-green-500/10 to-emerald-500/10"
                },
                {
                  step: "4",
                  title: "Authority Building",
                  description: "Boost trust & domain power",
                  icon: "🏆",
                  gradient: "from-yellow-500/10 to-amber-500/10"
                },
                {
                  step: "5",
                  title: "Local SEO Setup",
                  description: "Win your city, then the nation",
                  icon: "📍",
                  gradient: "from-red-500/10 to-orange-500/10"
                },
                {
                  step: "6",
                  title: "Transparent Reporting",
                  description: "Monthly updates, no jargon",
                  icon: "📊",
                  gradient: "from-cyan-500/10 to-blue-500/10"
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  className={`p-6 rounded-2xl bg-gradient-to-r ${process.gradient} backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300 group`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={ninthInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {process.icon}
                      </div>
                      <div className="mt-2 text-2xl font-bold text-primary-300 group-hover:text-white transition-colors">
                        {process.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-300 mb-2 group-hover:text-white transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ninthInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-xl text-gray-300 mb-8">
                No confusing reports. No ghosting. Just results.
              </p>
              <Button className="btn-primary text-lg px-8 py-6">
                Start Your SEO Journey Today
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Twelfth Section - Real SEO Results */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary-500/5 via-secondary-500/5 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
          </div>

          <motion.div
            ref={ninthRef}
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={ninthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              <motion.div
                className="lg:w-1/2 relative h-[400px] rounded-3xl overflow-hidden group"
                initial={{ opacity: 0, x: -50 }}
                animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s10.src}
                    alt="Real SEO Results Delivered by Leadzoro"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
              </motion.div>

              <motion.div
                className="lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                  Real SEO Results Delivered by Leadzoro
                </h2>
                <p className="text-xl text-gray-300">
                  See how we've transformed businesses across industries with our proven SEO strategies
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏡",
                  title: "Real Estate Client (Pune)",
                  results: [
                    "4 months → 6X increase in organic traffic",
                    "Ranked on Page 1 for 30+ location keywords",
                    "Generated 100+ inbound leads without ads"
                  ],
                  color: "blue"
                },
                {
                  icon: "🛍️",
                  title: "E-commerce Brand (India-wide)",
                  results: [
                    "6 months → 72% of traffic from SEO",
                    "Revenue doubled through organic product discovery"
                  ],
                  color: "purple"
                },
                {
                  icon: "🎓",
                  title: "EdTech Platform (Pan India)",
                  results: [
                    "#1 Rank for 'online coding classes for kids India'",
                    "4X growth in organic blog traffic within 90 days"
                  ],
                  color: "green"
                }
              ].map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.title}
                  className="relative p-8 rounded-2xl overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ninthInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${caseStudy.color}-500/10 to-${caseStudy.color}-900/10 backdrop-blur-sm`} />
                  <div className={`absolute inset-0 border-2 border-${caseStudy.color}-500/20 group-hover:border-${caseStudy.color}-500/40 transition-colors duration-300`} />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`text-4xl transform group-hover:scale-110 transition-transform duration-300 bg-${caseStudy.color}-500/20 p-3 rounded-xl`}>
                        {caseStudy.icon}
                      </div>
                      <h3 className={`text-2xl font-bold text-${caseStudy.color}-300 group-hover:text-white transition-colors`}>
                        {caseStudy.title}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {caseStudy.results.map((result, idx) => (
                        <motion.li
                          key={idx}
                          className={`text-gray-300 group-hover:text-gray-200 transition-colors flex items-center space-x-3`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + idx * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-${caseStudy.color}-500`} />
                          <span>{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ninthInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-xl text-gray-300 mb-8">
                Ready to see these kinds of results for your business?
              </p>
              <Button className="btn-primary text-lg px-8 py-6">
                Start Your SEO Journey Today
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Thirteenth Section - Who Do We Serve */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-secondary-500/5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
          </div>

          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={ninthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              <motion.div
                className="lg:w-1/2 relative h-[400px] rounded-3xl overflow-hidden group"
                initial={{ opacity: 0, x: -50 }}
                animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s11.src}
                    alt="Who Do We Serve?"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
              </motion.div>

              <motion.div
                className="lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                  Who Do We Serve?
                </h2>
                <p className="text-xl text-gray-300">
                  Leadzoro is the SEO agency India's growth-stage businesses trust.
                </p>
                <p className="text-lg text-gray-300 font-semibold">
                  We work with:
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Small business owners",
                  description: "in Pune & India",
                  icon: "🏢"
                },
                {
                  title: "Startup founders",
                  description: "scaling fast",
                  icon: "🚀"
                },
                {
                  title: "Real estate professionals",
                  description: "with area-specific goals",
                  icon: "🏠"
                },
                {
                  title: "Healthcare providers",
                  description: "(clinics, doctors, hospitals)",
                  icon: "🏥"
                },
                {
                  title: "Coaches & educators",
                  description: "online trainers",
                  icon: "🎓"
                },
                {
                  title: "D2C & e-commerce",
                  description: "brand owners",
                  icon: "🛍️"
                },
                {
                  title: "Food & tiffin",
                  description: "delivery businesses",
                  icon: "🍱"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ninthInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-300 group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ninthInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-xl text-gray-300 mb-8">
                No matter your niche — we help you rank, scale, and grow.
              </p>
              <Button className="btn-primary text-lg px-8 py-6">
                Start Your SEO Journey Today
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Fourteenth Section - SEO FAQs */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-primary-500/5 via-secondary-500/5 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
          </div>

          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={ninthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
              <motion.div
                className="lg:w-1/2 relative h-[400px] rounded-3xl overflow-hidden group"
                initial={{ opacity: 0, x: 50 }}
                animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s12.src}
                    alt="SEO FAQs — Answering Your Doubts"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
              </motion.div>

              <motion.div
                className="lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                  SEO FAQs — Answering Your Doubts
                </h2>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "How long does SEO take to show results in India?",
                  answer: "Usually 3 to 6 months depending on competition, niche, and website history.",
                  icon: "⏳"
                },
                {
                  question: "Is SEO better than paid ads?",
                  answer: "SEO brings compounding returns and long-term traffic. Ads stop when you stop spending.",
                  icon: "📈"
                },
                {
                  question: "Do you offer local SEO for Pune businesses?",
                  answer: "Yes! Local SEO Services Pune is one of our specialties — great for clinics, gyms, realtors, etc.",
                  icon: "📍"
                },
                {
                  question: "Are your SEO services affordable for small businesses?",
                  answer: "Absolutely. We have budget-friendly plans starting from ₹9,999/month.",
                  icon: "💸"
                },
                {
                  question: "What makes Leadzoro different from other SEO companies?",
                  answer: "We don't just chase rankings — we deliver business results. Our team is local, responsive, and focused on YOU.",
                  icon: "🧠"
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ninthInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <button
                    className="w-full p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300 text-left"
                    onClick={(e) => {
                      const answer = e.currentTarget.nextElementSibling;
                      answer?.classList.toggle('max-h-0');
                      answer?.classList.toggle('max-h-[500px]');
                      e.currentTarget.querySelector('.arrow')?.classList.toggle('rotate-180');
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{faq.icon}</span>
                        <h3 className="text-xl font-bold text-primary-300 group-hover:text-white transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <svg
                        className="arrow w-6 h-6 text-primary-300 transform transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  <div className="max-h-0 overflow-hidden transition-all duration-300">
                    <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ninthInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-xl text-gray-300 mb-8">
                Still have questions? We're here to help!
              </p>
              <Button className="btn-primary text-lg px-8 py-6">
                Contact Us Today
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Fifteenth Section - Call to Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary-500/5 via-secondary-500/5 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
          </div>

          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={ninthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                className="lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden group"
                initial={{ opacity: 0, x: -50 }}
                animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Suspense fallback={<LoadingSkeleton />}>
                  <OptimizedImage
                    src={s13.src}
                    alt="Ready to Dominate Google Search in 2025?"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-secondary-500/20 z-10" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 transition-colors duration-300" />
              </motion.div>

              <motion.div
                className="lg:w-1/2 space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={ninthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                  Ready to Dominate Google Search in 2025?
                </h2>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary-300">
                    Book Your Free SEO Audit Today!
                  </h3>
                  
                  <p className="text-xl text-gray-300">
                    Let's identify your SEO gaps and build a winning roadmap — together.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-500/20">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-2xl">
                          ✅
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-primary-300">WhatsApp Support</h4>
                          <p className="text-gray-300">Instant communication</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary-500/10 to-primary-500/10 backdrop-blur-sm border border-secondary-500/20">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary-500/20 flex items-center justify-center text-2xl">
                          🔎
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-secondary-300">Transparent Reports</h4>
                          <p className="text-gray-300">Clear progress tracking</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-500/20">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-2xl">
                          💼
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-primary-300">Industry-Specific SEO</h4>
                          <p className="text-gray-300">Tailored strategies</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary-500/10 to-primary-500/10 backdrop-blur-sm border border-secondary-500/20">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary-500/20 flex items-center justify-center text-2xl">
                          📍
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-secondary-300">Pune Based</h4>
                          <p className="text-gray-300">Serving All of India</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-500/20">
                    <p className="text-xl font-bold text-white text-center">
                      100+ Clients Across Sectors
                    </p>
                  </div>

                  <Button className="w-full btn-primary text-lg py-6">
                    Get Your Free SEO Audit
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </LazyMotion>
  );
}
