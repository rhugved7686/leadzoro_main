'use client';

import Image from 'next/image';
import { 
  motion, 
  Variants 
} from 'framer-motion';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import j1 from '../../public/assets/j1.png'
import j2 from '../../public/assets/j2.png'
import j3 from '../../public/assets/j3.png'
import j4 from '../../public/assets/j4.png'
import j5 from '../../public/assets/j5.png'


const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Services5Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          <Navbar />
          {/* Hero Section */}
          <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src={j1}
                alt="Social Media Management Services"
                fill
                className="object-cover opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            </div>
            
            <motion.div 
              className="container mx-auto px-4 relative z-10 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Social Media Management Services India: Ignite Your Brand's Voice with Leadzoro
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-300">
                Crafting Digital Experiences That Convert
              </h2>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                Transform your digital presence with cutting-edge social media solutions
              </p>
            </motion.div>
          </section>

          {/* Main Content Section */}
          <section className="py-20 px-4">
            <motion.div 
              className="container mx-auto max-w-4xl"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                variants={fadeIn}
              >
                In a digital-first India, where over 600 million+ people scroll, swipe, and share daily — your brand needs more than just a presence. It needs personality, power, and performance. Whether you're a local salon in Pune or a nationwide D2C startup, Social Media isn't just optional anymore. It's essential.
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                variants={fadeIn}
              >
                Welcome to Leadzoro — the Best Social Media Marketing Agency in India, designed for the doers, dreamers, and disruptors who want more than just likes. We help you build influence, engage communities, and drive leads across platforms like Instagram, Facebook, YouTube, and LinkedIn with our tailored Social Media Management Services India.
              </motion.p>

              <motion.p 
                className="text-xl md:text-2xl font-semibold text-blue-400 mb-12"
                variants={fadeIn}
              >
                Transform your social media presence into a powerful growth engine with Leadzoro's expert social media management services.
              </motion.p>
            </motion.div>
          </section>

          {/* Why Social Media Marketing Matters Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>

            <motion.div 
              className="container mx-auto max-w-6xl relative z-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Image Column */}
                <motion.div
                  className="lg:col-span-5 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={j2}
                      alt="Why Social Media Marketing Matters in India"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                  className="lg:col-span-7 space-y-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                    variants={fadeIn}
                  >
                    Why Social Media Marketing Matters in India
                  </motion.h2>

                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed"
                    variants={fadeIn}
                  >
                    India is one of the fastest-growing digital economies. Here's why social media isn't just noise—it's your growth engine:
                  </motion.p>

                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                  >
                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">✨</span>
                        <p className="text-lg text-gray-300">71% of Indian consumers discover new brands via Instagram & Facebook</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">☕</span>
                        <p className="text-lg text-gray-300">90% of purchase decisions are influenced by social media storytelling</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">🌐</span>
                        <p className="text-lg text-gray-300">India ranks #1 in WhatsApp, Facebook & Instagram usage globally</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed"
                    variants={fadeIn}
                  >
                    Social media is where trust begins. It's where followers turn into loyal customers — and brands into movements. If you're not marketing here, you're missing where India listens, speaks, and buys.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* The New Buying Journey Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
            </div>

            <motion.div 
              className="container mx-auto max-w-6xl relative z-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Content Column */}
                <motion.div
                  className="lg:col-span-7 space-y-8 order-2 lg:order-1"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600"
                    variants={fadeIn}
                  >
                    The New Buying Journey Is Social
                  </motion.h2>

                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed"
                    variants={fadeIn}
                  >
                    Consumers in India don't just visit your website anymore — they check your Instagram reels, Facebook reviews, and story highlights. They judge your credibility by how consistent, creative, and human your brand feels online.
                  </motion.p>

                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed"
                    variants={fadeIn}
                  >
                    Whether you're a solopreneur or a growing brand, being social is being searchable.
                  </motion.p>

                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                  >
                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">📱</span>
                        <p className="text-lg text-gray-300">Instagram reels & story highlights showcase your brand personality</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">⭐</span>
                        <p className="text-lg text-gray-300">Facebook reviews build trust and credibility</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  className="lg:col-span-5 relative order-1 lg:order-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl transform -rotate-6 scale-95"></div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={require('../../public/assets/j3.png')}
                        alt="The New Buying Journey Is Social"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Organic + Paid Growth Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>

            <motion.div 
              className="container mx-auto max-w-6xl relative z-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Image Column */}
                <motion.div
                  className="lg:col-span-5 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl transform rotate-6 scale-95"></div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={require('../../public/assets/j3.png')}
                        alt="Organic + Paid = Scalable Growth"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                  className="lg:col-span-7 space-y-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600"
                    variants={fadeIn}
                  >
                    Organic + Paid = Scalable Growth
                  </motion.h2>

                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed"
                    variants={fadeIn}
                  >
                    The right mix of organic content and targeted paid campaigns can do magic. Social media isn't just a branding tool; it's a lead magnet, a feedback loop, and a direct sales engine — when done right.
                  </motion.p>

                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                  >
                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">🌱</span>
                        <p className="text-lg text-gray-300">Organic content builds trust and community</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">🚀</span>
                        <p className="text-lg text-gray-300">Paid campaigns drive targeted growth</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">💬</span>
                        <p className="text-lg text-gray-300">Engagement creates valuable feedback loops</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">💰</span>
                        <p className="text-lg text-gray-300">Direct sales through social commerce</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Local SMM Support in Pune Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <motion.div 
              className="container mx-auto max-w-6xl relative z-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 mb-6"
                  variants={fadeIn}
                >
                  Why Businesses in Pune Need Local SMM Support
                </motion.h2>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                  variants={fadeIn}
                >
                  Whether you're a cozy coffee shop in Koregaon Park, a real estate brand in Baner, or a tech startup in Kharadi — Social Media Marketing Services in Pune are your shortcut to local love and leads.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <motion.div 
                  className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-5xl mb-4">🚌</span>
                    <h3 className="text-xl font-semibold mb-3 text-blue-300">Geo-targeted Campaigns</h3>
                    <p className="text-gray-300">Bring footfalls & phone calls with precision targeting</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-5xl mb-4">⭐</span>
                    <h3 className="text-xl font-semibold mb-3 text-purple-300">Hyper-local Content</h3>
                    <p className="text-gray-300">Build loyalty and recall with community-focused content</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-8 rounded-2xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-5xl mb-4">🌎</span>
                    <h3 className="text-xl font-semibold mb-3 text-pink-300">Local Trends</h3>
                    <p className="text-gray-300">Leverage Pune-specific trends & festivals for higher relevance</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6"
                  variants={fadeIn}
                >
                  Cultural Relevance Drives Engagement
                </motion.h3>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                  variants={fadeIn}
                >
                  From celebrating Ganesh Chaturthi to local food trails and monsoon moments, Pune-based businesses need a social presence that resonates with the city's heart. That's where we come in — blending culture with conversion.
                </motion.p>
              </motion.div>
            </motion.div>
          </section>

          {/* Why Choose Leadzoro Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <motion.div 
              className="container mx-auto max-w-6xl relative z-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Image Column */}
                <motion.div
                  className="lg:col-span-5 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl transform rotate-6 scale-95"></div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={require('../../public/assets/j7.png')}
                        alt="Why Choose Leadzoro for Social Media Management"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                  className="lg:col-span-7 space-y-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600"
                    variants={fadeIn}
                  >
                    Why Choose Leadzoro for Social Media Management?
                  </motion.h2>

                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                  >
                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">🎉</span>
                        <p className="text-lg text-gray-300">Human-Led, Insight-Fueled: Every campaign is crafted by real social media experts who blend data with emotions.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">📊</span>
                        <p className="text-lg text-gray-300">AI-Powered Optimization: From post timings to audience targeting — we use AI tools to optimize reach, but keep creativity 100% human.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">📈</span>
                        <p className="text-lg text-gray-300">Focused on ROI, Not Just Reach: We don't chase vanity metrics. We generate leads, sales, sign-ups, bookings — whatever moves your needle.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">🫏🏻</span>
                        <p className="text-lg text-gray-300">Platform Specialists: From Instagram growth services for Indian brands to Facebook page management services India, we have domain-specific experts.</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">🚀</span>
                        <p className="text-lg text-gray-300">Startup-Minded Pricing: We understand budgets. Our affordable social media marketing India plans start from as low as ₹9,999/month.</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10"
                    variants={fadeIn}
                  >
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
                      variants={fadeIn}
                    >
                      Our Brand Promise
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-gray-300 leading-relaxed"
                      variants={fadeIn}
                    >
                      We don't just manage your socials — we craft narratives that position your brand as a thought leader, community builder, and conversion driver. We become your creative wing, your growth partner, and your biggest cheerleader.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Core Social Media Marketing Services Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <motion.div 
              className="container mx-auto max-w-6xl relative z-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 mb-6"
                  variants={fadeIn}
                >
                  Our Core Social Media Marketing Services
                </motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Image Column */}
                <motion.div
                  className="lg:col-span-5 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl transform rotate-6 scale-95"></div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={require('../../public/assets/j8.png')}
                        alt="Facebook & Instagram Management"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                  className="lg:col-span-7 space-y-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                    variants={fadeIn}
                  >
                    Facebook & Instagram Management
                  </motion.h3>

                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed"
                    variants={fadeIn}
                  >
                    We build your brand's personality, design scroll-stopping creatives, and keep your community active — every single day. Our social media page manager Pune team ensures consistency and interaction.
                  </motion.p>

                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                  >
                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">🎨</span>
                        <div>
                          <h4 className="text-lg font-semibold text-blue-300 mb-2">Creative Design</h4>
                          <p className="text-gray-300">Scroll-stopping visuals that capture attention</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">💬</span>
                        <div>
                          <h4 className="text-lg font-semibold text-purple-300 mb-2">Community Management</h4>
                          <p className="text-gray-300">Active engagement and consistent interaction</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">📱</span>
                        <div>
                          <h4 className="text-lg font-semibold text-pink-300 mb-2">Daily Management</h4>
                          <p className="text-gray-300">Consistent presence and timely responses</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">🎯</span>
                        <div>
                          <h4 className="text-lg font-semibold text-indigo-300 mb-2">Brand Personality</h4>
                          <p className="text-gray-300">Unique voice and consistent messaging</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Social Media Content Creation Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <motion.div 
              className="container mx-auto max-w-6xl relative z-10"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Content Column */}
                <motion.div
                  className="lg:col-span-7 space-y-8 order-2 lg:order-1"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                    variants={fadeIn}
                  >
                    Social Media Content Creation
                  </motion.h3>

                  <motion.p 
                    className="text-xl text-gray-300 leading-relaxed"
                    variants={fadeIn}
                  >
                From reels and carousels to captions and memes — we're your social media content agency for real estate Pune, e-commerce, and personal brands. We blend storytelling with trends.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🎬</span>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Video Content</h4>
                      <p className="text-gray-300">Engaging reels and stories that tell your story</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">📝</span>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-2">Captions & Copy</h4>
                      <p className="text-gray-300">Compelling text that resonates with your audience</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🎨</span>
                    <div>
                      <h4 className="text-lg font-semibold text-pink-300 mb-2">Visual Design</h4>
                      <p className="text-gray-300">Eye-catching carousels and static posts</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">📊</span>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Trend Integration</h4>
                      <p className="text-gray-300">Stay relevant with trending content formats</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10"
                variants={fadeIn}
              >
                <motion.h4 
                  className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
                  variants={fadeIn}
                >
                  Strategy + Calendar Planning
                </motion.h4>
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  variants={fadeIn}
                >
                  Monthly content calendars, campaign ideas, hashtag banks, and festival marketing plans tailored for your industry.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="lg:col-span-5 relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl transform -rotate-6 scale-95"></div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={require('../../public/assets/j9.png')}
                    alt="Social Media Content Creation"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Paid Ad Management Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl transform rotate-6 scale-95"></div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={require('../../public/assets/j10.png')}
                    alt="Paid Ad Management"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                variants={fadeIn}
              >
                Paid Ad Management (Meta + YouTube)
              </motion.h3>

              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                variants={fadeIn}
              >
                Want reach, leads, or conversions? Our Facebook & Instagram Ads Manager Pune team builds and monitors campaigns for optimal ROAS. Our YouTube Marketing Services in Pune give you visual dominance too.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">📱</span>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Meta Ads</h4>
                      <p className="text-gray-300">Targeted campaigns on Facebook & Instagram</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🎥</span>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-2">YouTube Ads</h4>
                      <p className="text-gray-300">Video campaigns for maximum impact</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">📊</span>
                    <div>
                      <h4 className="text-lg font-semibold text-pink-300 mb-2">ROAS Focus</h4>
                      <p className="text-gray-300">Optimized campaigns for maximum returns</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🎯</span>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">Lead Generation</h4>
                      <p className="text-gray-300">Targeted ads that convert visitors to leads</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10"
                variants={fadeIn}
              >
                <motion.h4 
                  className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
                  variants={fadeIn}
                >
                  Engagement & Community Building
                </motion.h4>
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  variants={fadeIn}
                >
                  We reply, react, and respond like a human — not a bot. Because comments build community. DMs build trust.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Influencer Collaborations Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content Column */}
            <motion.div
              className="lg:col-span-7 space-y-8 order-2 lg:order-1"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                variants={fadeIn}
              >
                Influencer Collaborations
              </motion.h3>

              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                variants={fadeIn}
              >
                Micro, macro, or nano — we find influencers your audience already trusts. Especially useful for Instagram marketing services India and D2C launches.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🌟</span>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Micro-Influencers</h4>
                      <p className="text-gray-300">High engagement with niche audiences</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">📱</span>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-2">Macro-Influencers</h4>
                      <p className="text-gray-300">Wide reach with established credibility</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🎯</span>
                    <div>
                      <h4 className="text-lg font-semibold text-pink-300 mb-2">Nano-Influencers</h4>
                      <p className="text-gray-300">Authentic connections with local audiences</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🚀</span>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-300 mb-2">D2C Launches</h4>
                      <p className="text-gray-300">Strategic partnerships for product launches</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10"
                variants={fadeIn}
              >
                <motion.h4 
                  className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
                  variants={fadeIn}
                >
                  Performance Analytics & Reporting
                </motion.h4>
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  variants={fadeIn}
                >
                  Monthly reports with real numbers — reach, engagement, clicks, conversions. No fluff, just facts.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="lg:col-span-5 relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl transform -rotate-6 scale-95"></div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={require('../../public/assets/j11.png')}
                    alt="Influencer Collaborations"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5-Step Social Media Growth Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 mb-6"
              variants={fadeIn}
            >
              Our 5-Step Social Media Growth Process
            </motion.h2>
          </motion.div>

          <div className="space-y-8">
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col md:flex-row items-start gap-8"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white">
                1
              </div>
              <div className="flex-grow p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Brand Discovery + Audit</h3>
                <p className="text-gray-300 leading-relaxed">
                  We understand your brand voice, USPs, audience type, and competition. We also study current analytics and set measurable goals.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="flex flex-col md:flex-row items-start gap-8"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl font-bold text-white">
                2
              </div>
              <div className="flex-grow p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Platform Strategy + Content Calendar</h3>
                <p className="text-gray-300 leading-relaxed">
                  We define which platforms matter most and build monthly calendars with post topics, dates, formats, and goals. This includes influencer tie-ups, reel hooks, and more.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="flex flex-col md:flex-row items-start gap-8"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-2xl font-bold text-white">
                3
              </div>
              <div className="flex-grow p-6 rounded-2xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30">
                <h3 className="text-2xl font-bold text-pink-300 mb-4">Content Production & Publishing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Designers, writers, editors — all working to build visually engaging and emotionally resonant content. From festival campaigns to weekly tips — we've got you.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              className="flex flex-col md:flex-row items-start gap-8"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white">
                4
              </div>
              <div className="flex-grow p-6 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30">
                <h3 className="text-2xl font-bold text-indigo-300 mb-4">Audience Engagement + Paid Boosting</h3>
                <p className="text-gray-300 leading-relaxed">
                  We reply to comments, respond to DMs, and strategically boost top-performing posts for visibility. Lead generation through Instagram Pune is maximized here.
                </p>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div 
              className="flex flex-col md:flex-row items-start gap-8"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
                5
              </div>
              <div className="flex-grow p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Reporting + Optimization</h3>
                <p className="text-gray-300 leading-relaxed">
                  We analyze what worked, what didn't — and refine your strategy for the next cycle. You'll always know what's driving growth.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Industry-Specific Social Media Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 mb-6"
              variants={fadeIn}
            >
              Industry-Specific Social Media Services
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* E-commerce & D2C Brands */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">🛍️</span>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">E-commerce & D2C Brands</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Product showcases & UGC
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Offer campaigns + story highlights
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Shopping integrations (Meta Catalog)
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Real Estate */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">🏠</span>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Real Estate</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Walkthrough reels, testimonial videos
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Builder announcements, project updates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Social media content agency for real estate Pune campaigns
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Coaches & Creators */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">🎓</span>
                <h3 className="text-2xl font-bold text-pink-300 mb-4">Coaches & Creators</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Personal branding strategy
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Community polls, live Q&As
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Lead funnels via Instagram stories
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Clinics, Salons, and Restaurants */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">💇</span>
                <h3 className="text-2xl font-bold text-indigo-300 mb-4">Clinics, Salons, and Restaurants</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Festive offers, client reviews, treatments
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Instagram grid branding + before-afters
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    Google Maps + WhatsApp CTA integrations
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Events & Education */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group md:col-span-2 lg:col-span-4"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">🎓</span>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Events & Education</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Event countdowns
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Speaker spotlights
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Student testimonials
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Course explainers
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Story highlights
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Post-event recap reels
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Client Results Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl transform rotate-6 scale-95"></div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={require('../../public/assets/j12.png')}
                    alt="Client Results"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600"
                variants={fadeIn}
              >
                Client Results (Mini Case Studies)
              </motion.h2>

              <div className="grid grid-cols-1 gap-6">
                {/* Case 1 */}
                <motion.div 
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🌟</span>
                    <div>
                      <h3 className="text-xl font-bold text-blue-300 mb-2">Local Pune Salon</h3>
                      <p className="text-gray-300 mb-2"><span className="font-semibold">Problem:</span> Low Instagram activity</p>
                      <p className="text-gray-300 mb-2"><span className="font-semibold">Solution:</span> Reels + influencer collab + festive calendar</p>
                      <p className="text-gray-300"><span className="font-semibold">Result:</span> +350% engagement, 180+ appointment leads/month</p>
                    </div>
                  </div>
                </motion.div>

                {/* Case 2 */}
                <motion.div 
                  className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🚀</span>
                    <div>
                      <h3 className="text-xl font-bold text-purple-300 mb-2">E-commerce Apparel Brand</h3>
                      <p className="text-gray-300 mb-2"><span className="font-semibold">Problem:</span> Low conversions from Meta Ads</p>
                      <p className="text-gray-300 mb-2"><span className="font-semibold">Solution:</span> Retargeting + UGC creatives</p>
                      <p className="text-gray-300"><span className="font-semibold">Result:</span> 3.2x ROAS, 40% revenue from IG/FB</p>
                    </div>
                  </div>
                </motion.div>

                {/* Case 3 */}
                <motion.div 
                  className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🏡</span>
                    <div>
                      <h3 className="text-xl font-bold text-pink-300 mb-2">Real Estate Developer</h3>
                      <p className="text-gray-300 mb-2"><span className="font-semibold">Problem:</span> No digital presence</p>
                      <p className="text-gray-300 mb-2"><span className="font-semibold">Solution:</span> Facebook page + walkthrough videos + leads form ads</p>
                      <p className="text-gray-300"><span className="font-semibold">Result:</span> 120+ qualified leads/month at ₹57 per lead</p>
                    </div>
                  </div>
                </motion.div>

                {/* Case 4 */}
                <motion.div 
                  className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🌿</span>
                    <div>
                      <h3 className="text-xl font-bold text-indigo-300 mb-2">Online Coach</h3>
                      <p className="text-gray-300 mb-2"><span className="font-semibold">Problem:</span> No lead funnel for workshops</p>
                      <p className="text-gray-300 mb-2"><span className="font-semibold">Solution:</span> Funnel-focused Instagram story ads</p>
                      <p className="text-gray-300"><span className="font-semibold">Result:</span> Sold out 2-day workshop in 5 days</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 mb-6"
              variants={fadeIn}
            >
              Who We Serve
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Small Businesses */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">🏢</span>
                <h3 className="text-xl font-bold text-blue-300 mb-4">Small Businesses</h3>
                <p className="text-gray-300">
                  Small businesses in Pune & India looking for affordable social media marketing
                </p>
              </div>
            </motion.div>

            {/* E-commerce & D2C */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">🚚</span>
                <h3 className="text-xl font-bold text-purple-300 mb-4">E-commerce & D2C</h3>
                <p className="text-gray-300">
                  E-commerce & D2C brands needing consistent storytelling and conversion-focused ads
                </p>
              </div>
            </motion.div>

            {/* Coaches & Creators */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">🤝</span>
                <h3 className="text-xl font-bold text-pink-300 mb-4">Coaches & Creators</h3>
                <p className="text-gray-300">
                  Coaches, mentors & creators who want a strong online identity
                </p>
              </div>
            </motion.div>

            {/* Local Businesses */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">🏛️</span>
                <h3 className="text-xl font-bold text-indigo-300 mb-4">Local Businesses</h3>
                <p className="text-gray-300">
                  Local clinics, salons, and cafés growing through Instagram reels and community pages
                </p>
              </div>
            </motion.div>

            {/* Real Estate & Education */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">🏫</span>
                <h3 className="text-xl font-bold text-blue-300 mb-4">Real Estate & Education</h3>
                <p className="text-gray-300">
                  Real estate firms and education providers building trust through video & visual content
                </p>
              </div>
            </motion.div>

            {/* Freelancers */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-6">💼</span>
                <h3 className="text-xl font-bold text-purple-300 mb-4">Freelancers</h3>
                <p className="text-gray-300">
                  Freelancers and solopreneurs needing visibility and lead generation without the agency bloat
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image Column */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl transform rotate-6 scale-95"></div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={require('../../public/assets/j13.png')}
                    alt="Frequently Asked Questions"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* FAQ Content Column */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600"
                variants={fadeIn}
              >
                Frequently Asked Questions
              </motion.h2>

              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <motion.div 
                  className="rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 overflow-hidden"
                  variants={fadeIn}
                >
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between group"
                    onClick={(e) => {
                      const answer = e.currentTarget.nextElementSibling;
                      const arrow = e.currentTarget.querySelector('.arrow');
                      if (answer && arrow) {
                        answer.classList.toggle('max-h-0');
                        answer.classList.toggle('max-h-[500px]');
                        arrow.classList.toggle('rotate-180');
                      }
                    }}
                  >
                    <span className="text-xl font-semibold text-blue-300">How much do your social media packages cost?</span>
                    <span className="arrow text-2xl transition-transform duration-300">▼</span>
                  </button>
                  <div className="max-h-0 overflow-hidden transition-all duration-300">
                    <div className="p-6 pt-0 text-gray-300">
                      Packages start at ₹9,999/month and scale based on platforms, post volume, and ad budget.
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Item 2 */}
                <motion.div 
                  className="rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 overflow-hidden"
                  variants={fadeIn}
                >
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between group"
                    onClick={(e) => {
                      const answer = e.currentTarget.nextElementSibling;
                      const arrow = e.currentTarget.querySelector('.arrow');
                      if (answer && arrow) {
                        answer.classList.toggle('max-h-0');
                        answer.classList.toggle('max-h-[500px]');
                        arrow.classList.toggle('rotate-180');
                      }
                    }}
                  >
                    <span className="text-xl font-semibold text-purple-300">Can I hire a freelance social media manager through Leadzoro?</span>
                    <span className="arrow text-2xl transition-transform duration-300">▼</span>
                  </button>
                  <div className="max-h-0 overflow-hidden transition-all duration-300">
                    <div className="p-6 pt-0 text-gray-300">
                      Yes! We provide Freelance Social Media Manager India options for startups and solopreneurs.
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Item 3 */}
                <motion.div 
                  className="rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 overflow-hidden"
                  variants={fadeIn}
                >
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between group"
                    onClick={(e) => {
                      const answer = e.currentTarget.nextElementSibling;
                      const arrow = e.currentTarget.querySelector('.arrow');
                      if (answer && arrow) {
                        answer.classList.toggle('max-h-0');
                        answer.classList.toggle('max-h-[500px]');
                        arrow.classList.toggle('rotate-180');
                      }
                    }}
                  >
                    <span className="text-xl font-semibold text-pink-300">Do you offer Instagram-only plans?</span>
                    <span className="arrow text-2xl transition-transform duration-300">▼</span>
                  </button>
                  <div className="max-h-0 overflow-hidden transition-all duration-300">
                    <div className="p-6 pt-0 text-gray-300">
                      Yes. Our Instagram Marketing Agency Pune team creates custom plans for IG-only growth.
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Item 4 */}
                <motion.div 
                  className="rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 overflow-hidden"
                  variants={fadeIn}
                >
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between group"
                    onClick={(e) => {
                      const answer = e.currentTarget.nextElementSibling;
                      const arrow = e.currentTarget.querySelector('.arrow');
                      if (answer && arrow) {
                        answer.classList.toggle('max-h-0');
                        answer.classList.toggle('max-h-[500px]');
                        arrow.classList.toggle('rotate-180');
                      }
                    }}
                  >
                    <span className="text-xl font-semibold text-indigo-300">How soon can I see results?</span>
                    <span className="arrow text-2xl transition-transform duration-300">▼</span>
                  </button>
                  <div className="max-h-0 overflow-hidden transition-all duration-300">
                    <div className="p-6 pt-0 text-gray-300">
                      Typically within 4–6 weeks. Ad campaigns may yield leads within days.
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Item 5 */}
                <motion.div 
                  className="rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 overflow-hidden"
                  variants={fadeIn}
                >
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between group"
                    onClick={(e) => {
                      const answer = e.currentTarget.nextElementSibling;
                      const arrow = e.currentTarget.querySelector('.arrow');
                      if (answer && arrow) {
                        answer.classList.toggle('max-h-0');
                        answer.classList.toggle('max-h-[500px]');
                        arrow.classList.toggle('rotate-180');
                      }
                    }}
                  >
                    <span className="text-xl font-semibold text-blue-300">Do you handle comment replies and DMs too?</span>
                    <span className="arrow text-2xl transition-transform duration-300">▼</span>
                  </button>
                  <div className="max-h-0 overflow-hidden transition-all duration-300">
                    <div className="p-6 pt-0 text-gray-300">
                      Absolutely. We manage Facebook Page Management Services India with full engagement.
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Item 6 */}
                <motion.div 
                  className="rounded-xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-purple-500/30 overflow-hidden"
                  variants={fadeIn}
                >
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between group"
                    onClick={(e) => {
                      const answer = e.currentTarget.nextElementSibling;
                      const arrow = e.currentTarget.querySelector('.arrow');
                      if (answer && arrow) {
                        answer.classList.toggle('max-h-0');
                        answer.classList.toggle('max-h-[500px]');
                        arrow.classList.toggle('rotate-180');
                      }
                    }}
                  >
                    <span className="text-xl font-semibold text-purple-300">Can you create content for real estate or coaching brands?</span>
                    <span className="arrow text-2xl transition-transform duration-300">▼</span>
                  </button>
                  <div className="max-h-0 overflow-hidden transition-all duration-300">
                    <div className="p-6 pt-0 text-gray-300">
                      Yes. We offer social media content creation services India tailored by industry.
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Item 7 */}
                <motion.div 
                  className="rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 overflow-hidden"
                  variants={fadeIn}
                >
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between group"
                    onClick={(e) => {
                      const answer = e.currentTarget.nextElementSibling;
                      const arrow = e.currentTarget.querySelector('.arrow');
                      if (answer && arrow) {
                        answer.classList.toggle('max-h-0');
                        answer.classList.toggle('max-h-[500px]');
                        arrow.classList.toggle('rotate-180');
                      }
                    }}
                  >
                    <span className="text-xl font-semibold text-pink-300">Do I retain content ownership?</span>
                    <span className="arrow text-2xl transition-transform duration-300">▼</span>
                  </button>
                  <div className="max-h-0 overflow-hidden transition-all duration-300">
                    <div className="p-6 pt-0 text-gray-300">
                      100% yes. All creatives and strategies belong to you.
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Item 8 */}
                <motion.div 
                  className="rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 overflow-hidden"
                  variants={fadeIn}
                >
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between group"
                    onClick={(e) => {
                      const answer = e.currentTarget.nextElementSibling;
                      const arrow = e.currentTarget.querySelector('.arrow');
                      if (answer && arrow) {
                        answer.classList.toggle('max-h-0');
                        answer.classList.toggle('max-h-[500px]');
                        arrow.classList.toggle('rotate-180');
                      }
                    }}
                  >
                    <span className="text-xl font-semibold text-indigo-300">Is your content AI-generated?</span>
                    <span className="arrow text-2xl transition-transform duration-300">▼</span>
                  </button>
                  <div className="max-h-0 overflow-hidden transition-all duration-300">
                    <div className="p-6 pt-0 text-gray-300">
                      No. Our content is 100% human-written, plagiarism-free, and passes AI detection tools. Your brand deserves real strategy, not copy-paste.
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 mb-6"
              variants={fadeIn}
            >
              Ready to Grow? Let's Make You Unforgettable Online
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
              variants={fadeIn}
            >
              Social media isn't just about being visible — it's about being valuable. With Leadzoro, you're not hiring an agency; you're gaining a strategic partner invested in your long-term growth.
            </motion.p>

            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
              variants={fadeIn}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                💼 Let's build something scroll-stopping
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                👉 Book your free strategy call now
              </motion.button>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300"
              variants={fadeIn}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span>+91-8789462971</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✉️</span>
                <span>hello@leadzoro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔗</span>
                <span>www.leadzoro.com</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services5Page;
