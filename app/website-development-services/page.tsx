'use client';

import Image from 'next/image';
import { 
  motion, 
  Variants 
} from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import r1 from '../../public/assets/r1.png'

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

interface ServiceCardProps {
  title: string;
  content: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  delay?: number;
}

const ServiceCard = ({ title, content, icon: Icon, delay = 0 }: ServiceCardProps) => {
  // ... existing code ...
};

const Services4Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={r1}
            alt="Website Development Services"
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
            Website Development Services India | Custom Website Design Company in Pune
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-300">
            Crafting Digital Experiences That Convert
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Transform your digital presence with cutting-edge web solutions
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
            In today's fast-moving digital economy, your website isn't just another box to tick — it's your brand's handshake, digital showroom, and conversation starter rolled into one.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            variants={fadeIn}
          >
            Whether you're an ambitious startup in Delhi or a fitness hub in Pune, your website often sets the tone for how the world sees you.
          </motion.p>

          <motion.p 
            className="text-xl md:text-2xl font-semibold text-blue-400 mb-12"
            variants={fadeIn}
          >
            Welcome to Leadzoro — where innovation meets craftsmanship. As a top website development company in Pune and India, we empower businesses with dynamic, conversion-focused websites that drive growth and elevate brand perception.
          </motion.p>
        </motion.div>
      </section>

      {/* Why Website Development Still Dominates Section */}
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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            variants={fadeIn}
          >
            Why Website Development Still Dominates in 2025
          </motion.h2>

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
                  src={require('../../public/assets/r2.png')}
                  alt="Why Website Development Still Dominates"
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
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                variants={fadeIn}
              >
                New platforms may emerge, but your website remains your digital headquarters. It's the only online space you fully own and control — and it pays dividends.
              </motion.p>

              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
                variants={fadeIn}
              >
                Whether you're an ambitious startup in Delhi or a fitness hub in Pune, your website often sets the tone for how the world sees you.
              </motion.p>

              <motion.p 
                className="text-xl md:text-2xl font-semibold text-blue-400 mb-12"
                variants={fadeIn}
              >
                Welcome to Leadzoro — where innovation meets craftsmanship. As a top website development company in Pune and India, we empower businesses with dynamic, conversion-focused websites that drive growth and elevate brand perception.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Pune and Indian Businesses Need Scalable Websites Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Content Column */}
            <motion.div
              className="lg:w-1/2 space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                variants={fadeIn}
              >
                Why Pune and Indian Businesses Need Scalable Websites
              </motion.h2>

              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeIn}
              >
                From Pune to Chandigarh, Jaipur to Kochi, digital transformation is reshaping India. Whether it's a tech startup or a local salon, an effective website is no longer a luxury — it's a launchpad for business success.
              </motion.p>

              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
              >
                <motion.h3 
                  className="text-xl font-semibold text-blue-300"
                  variants={fadeIn}
                >
                  Here's why more Indian businesses are prioritizing website development:
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      stat: "93%",
                      text: "of buying decisions begin with Google searches",
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      stat: "Mobile",
                      text: "Mobile-first behavior demands responsive experiences",
                      color: "from-purple-500 to-purple-600"
                    },
                    {
                      stat: "D2C",
                      text: "D2C brands are booming, and websites power their journeys",
                      color: "from-pink-500 to-pink-600"
                    },
                    {
                      stat: "Local",
                      text: "Service-led businesses rely on local SEO and conversion-focused UI",
                      color: "from-indigo-500 to-indigo-600"
                    },
                    {
                      stat: "ROI",
                      text: "Cost-effective lead generation with higher long-term ROI",
                      color: "from-cyan-500 to-cyan-600"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group"
                      variants={fadeIn}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`min-w-[48px] h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                          {item.stat}
                        </div>
                        <p className="text-gray-300 text-sm leading-tight">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20"
                variants={fadeIn}
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  Rather than relying solely on social media or listings, forward-thinking businesses build powerful websites that can scale.
                </p>
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={require('../../public/assets/r3.png')}
                  alt="Why Pune and Indian Businesses Need Scalable Websites"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Partner with Leadzoro Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Content Column */}
            <motion.div
              className="lg:col-span-7 space-y-8 order-2 lg:order-1"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                  Why Partner with Leadzoro for Web Development?
                </h2>
                <div className="flex items-center space-x-2 text-blue-300 text-xl">
                  <span>🎯</span>
                  <span>Based in Pune. Trusted across India.</span>
                </div>
              </motion.div>

              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeIn}
              >
                We craft websites that blend design, performance, and purpose. At Leadzoro, we don't just build websites — we engineer experiences.
              </motion.p>

              <motion.div variants={fadeIn}>
                <h3 className="text-2xl font-semibold text-blue-300 mb-6">Here's what you get:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "⚙️",
                      title: "CMS or Custom-Built",
                      description: "WordPress, Shopify, HTML/CSS, Next.js",
                      gradient: "from-blue-500/20 to-blue-600/20"
                    },
                    {
                      icon: "📱",
                      title: "Mobile-First Design",
                      description: "Optimized for on-the-go audiences",
                      gradient: "from-purple-500/20 to-purple-600/20"
                    },
                    {
                      icon: "🚀",
                      title: "Speed-Tuned Layouts",
                      description: "Optimized for conversions",
                      gradient: "from-pink-500/20 to-pink-600/20"
                    },
                    {
                      icon: "🎨",
                      title: "UX/UI Excellence",
                      description: "Inspired by behavioral psychology",
                      gradient: "from-indigo-500/20 to-indigo-600/20"
                    },
                    {
                      icon: "📈",
                      title: "SEO-Ready Structure",
                      description: "Schema, metadata, and content hierarchy",
                      gradient: "from-cyan-500/20 to-cyan-600/20"
                    },
                    {
                      icon: "🌐",
                      title: "Core Web Vitals",
                      description: "Compliant for better rankings",
                      gradient: "from-teal-500/20 to-teal-600/20"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`p-6 rounded-xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group`}
                      variants={fadeIn}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h4 className="text-lg font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-blue-500/20 backdrop-blur-sm"
                variants={fadeIn}
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  You deserve more than just a pretty homepage. We deliver complete, scalable platforms tailored to your business goals.
                </p>
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="lg:col-span-5 order-1 lg:order-2 sticky top-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-3xl transform -rotate-6 scale-95"></div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={require('../../public/assets/r4.png')}
                    alt="Partner with Leadzoro for Web Development"
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

      {/* Our Website Development Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-800"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-6xl relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.div
            className="text-center mb-20"
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Our Website Development Services
              </span>
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Static Website Development */}
          <motion.div 
            className="relative"
            variants={staggerContainer}
          >
            {/* Background Card with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-20 transform -rotate-1"></div>
            
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm border border-gray-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Column */}
                <motion.div
                  className="p-8 lg:p-12 flex flex-col justify-center"
                  variants={fadeIn}
                >
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Static Website Development
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Ideal for startups, consultants, or event landing pages — fast to build, simple to maintain, and beautifully structured.
                    </p>

                    <motion.button
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  className="relative lg:h-auto"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[300px] lg:h-full">
                    <Image
                      src={require('../../public/assets/r5.png')}
                      alt="Static Website Development"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent lg:bg-gradient-to-l"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Website Development */}
          <motion.div 
            className="relative mt-20"
            variants={staggerContainer}
          >
            {/* Background Card with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-20 transform rotate-1"></div>
            
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm border border-gray-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Column */}
                <motion.div
                  className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1"
                  variants={fadeIn}
                >
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        Dynamic Website Development
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Need something robust? Whether it's appointment scheduling, dashboards, or customer portals — we build with flexibility and function in mind.
                    </p>

                    <motion.button
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  className="relative lg:h-auto order-1 lg:order-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[300px] lg:h-full">
                    <Image
                      src={require('../../public/assets/r6.png')}
                      alt="Dynamic Website Development"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-gray-900/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* WordPress Development Services */}
          <motion.div 
            className="relative mt-20"
            variants={staggerContainer}
          >
            {/* Background Card with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-20 transform -rotate-1"></div>
            
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm border border-gray-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Column */}
                <motion.div
                  className="p-8 lg:p-12 flex flex-col justify-center"
                  variants={fadeIn}
                >
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                        WordPress Development Services
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Our WordPress developers in Pune create:
                    </p>

                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-400">✓</span>
                        <span>Fully responsive, branded themes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-400">✓</span>
                        <span>WooCommerce stores for small and medium brands</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-400">✓</span>
                        <span>Lightweight and secure plugin setups</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-400">✓</span>
                        <span>Backend panels even beginners can manage</span>
                      </li>
                    </ul>

                    <motion.button
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  className="relative lg:h-auto"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[300px] lg:h-full">
                    <Image
                      src={require('../../public/assets/r7.png')}
                      alt="WordPress Development Services"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent lg:bg-gradient-to-l"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* E-commerce Website Development */}
          <motion.div 
            className="relative mt-20"
            variants={staggerContainer}
          >
            {/* Background Card with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-3xl blur-3xl opacity-20 transform rotate-1"></div>
            
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm border border-gray-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Column */}
                <motion.div
                  className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1"
                  variants={fadeIn}
                >
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 backdrop-blur-sm">
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                        E-commerce Website Development (Fashion, D2C, Retail)
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Whether you're launching a boutique brand or managing a large catalog:
                    </p>

                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-indigo-400">✓</span>
                        <span>Shopify with custom product logic & dynamic checkouts</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-indigo-400">✓</span>
                        <span>WooCommerce for deep content and product control</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-indigo-400">✓</span>
                        <span>Magento for high-volume B2B/B2C commerce</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-indigo-400">✓</span>
                        <span>Mobile cart flows and trust-building payment integrations</span>
                      </li>
                    </ul>

                    <motion.button
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  className="relative lg:h-auto order-1 lg:order-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[300px] lg:h-full">
                    <Image
                      src={require('../../public/assets/r8.png')}
                      alt="E-commerce Website Development"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-gray-900/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Custom Website Development Solutions */}
          <motion.div 
            className="relative mt-20"
            variants={staggerContainer}
          >
            {/* Background Card with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-3xl opacity-20 transform -rotate-1"></div>
            
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm border border-gray-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Column */}
                <motion.div
                  className="p-8 lg:p-12 flex flex-col justify-center"
                  variants={fadeIn}
                >
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 backdrop-blur-sm">
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
                        Custom Website Development Solutions
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Need something unique? We build from scratch using:
                    </p>

                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-teal-400">✓</span>
                        <span>HTML5 / CSS3 / JavaScript</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-teal-400">✓</span>
                        <span>Laravel for secure backends</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-teal-400">✓</span>
                        <span>React & Next.js for seamless app-like user journeys</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-teal-400">✓</span>
                        <span>Tailwind & Bootstrap for modern UI frameworks</span>
                      </li>
                    </ul>

                    <motion.button
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  className="relative lg:h-auto"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[300px] lg:h-full">
                    <Image
                      src={require('../../public/assets/r9.png')}
                      alt="Custom Website Development Solutions"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent lg:bg-gradient-to-l"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Website Redesign Services */}
          <motion.div 
            className="relative mt-20"
            variants={staggerContainer}
          >
            {/* Background Card with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-20 transform rotate-1"></div>
            
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm border border-gray-700/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Column */}
                <motion.div
                  className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1"
                  variants={fadeIn}
                >
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 backdrop-blur-sm">
                      <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-400">
                        Website Redesign Services
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      If your site is underperforming, it's time to revamp:
                    </p>

                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <span className="text-rose-400">✓</span>
                        <span>Update outdated visuals with modern, branded UI</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-rose-400">✓</span>
                        <span>Reorganize content and navigation for better SEO</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-rose-400">✓</span>
                        <span>Streamline performance for faster loading and mobile use</span>
                      </li>
                    </ul>

                    <motion.button
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  className="relative lg:h-auto order-1 lg:order-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[300px] lg:h-full">
                    <Image
                      src={require('../../public/assets/r10.png')}
                      alt="Website Redesign Services"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-gray-900/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div 
            className="relative mt-20"
            variants={staggerContainer}
          >
            {/* Background Card with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-3xl blur-3xl opacity-20 transform -rotate-1"></div>
            
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm border border-blue-500/20 p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 border border-blue-500/20 backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                    Tech Stack That Powers Leadzoro Websites
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Tech Cards */}
                <div className="space-y-8 lg:col-span-2">
                  {/* HTML/CSS/JS Card */}
                  <motion.div 
                    className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">H</span>
                      </div>
                      <h4 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200">HTML / CSS / JS</h4>
                    </div>
                    <p className="text-blue-100/80">Best-in-class front-end technologies for fast, lightweight design execution.</p>
                  </motion.div>

                  {/* React/Next.js Card */}
                  <motion.div 
                    className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">R</span>
                      </div>
                      <h4 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200">React / Next.js</h4>
                    </div>
                    <p className="text-purple-100/80">Perfect for SaaS, startups, and apps. Server-side rendering improves load speed and SEO rankings.</p>
                  </motion.div>

                  {/* PHP Stack Card */}
                  <motion.div 
                    className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">P</span>
                      </div>
                      <h4 className="text-xl font-semibold text-indigo-300 group-hover:text-indigo-200">PHP / WordPress / Laravel</h4>
                    </div>
                    <p className="text-indigo-100/80">From blogs to business platforms, these trusted tools power content-rich sites and powerful custom apps.</p>
                  </motion.div>

                  {/* E-commerce Stack Card */}
                  <motion.div 
                    className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">E</span>
                      </div>
                      <h4 className="text-xl font-semibold text-blue-300 group-hover:text-purple-200">Shopify / WooCommerce / Magento</h4>
                    </div>
                    <p className="text-blue-100/80 mb-4">We help brands build digital storefronts that convert — fast.</p>
                    <ul className="space-y-2 text-blue-100/80">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>Shopify: Rapid deployment and simplicity</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>WooCommerce: Complete WordPress eCommerce control</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-400">•</span>
                        <span>Magento: Ideal for enterprise-level commerce</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* Image Column */}
                <motion.div
                  className="relative lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src={require('../../public/assets/r11.png')}
                      alt="Tech Stack"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-purple-900/40 to-transparent"></div>
                  </div>
                </motion.div>
              </div>

              <div className="text-center mt-12">
                <motion.button
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Industry-Specific Website Solutions */}
      <motion.div 
        className="relative mt-20"
        variants={staggerContainer}
      >
        {/* Background Card with Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-red-600/20 rounded-3xl blur-3xl opacity-20 transform -rotate-1"></div>
        
        <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm border border-amber-500/20 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <motion.div
              className="space-y-8"
              variants={fadeIn}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-red-600/10 border border-amber-500/20 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                  Industry-Specific Website Solutions
                </h3>
              </div>

              <p className="text-lg text-amber-100/90 leading-relaxed">
                Tailored solutions for your industry's unique needs and challenges.
              </p>

              <div className="space-y-8">
                {/* Real Estate Firms */}
                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-amber-900/50 to-orange-900/50 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <span className="text-2xl">🏢</span>
                    <h4 className="text-xl font-semibold text-amber-300 group-hover:text-amber-200">Real Estate Firms</h4>
                  </div>
                  <ul className="space-y-2 text-amber-100/90">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400">•</span>
                      <span>Property listings with image carousels and smart filters</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400">•</span>
                      <span>Contact integrations with WhatsApp & CRM tools</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Clinics & Health Professionals */}
                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <span className="text-2xl">🏥</span>
                    <h4 className="text-xl font-semibold text-orange-300 group-hover:text-orange-200">Clinics & Health Professionals</h4>
                  </div>
                  <ul className="space-y-2 text-orange-100/90">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400">•</span>
                      <span>Appointment scheduling, patient intake forms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400">•</span>
                      <span>Gallery for services & client testimonials</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400">•</span>
                      <span>Secure health info pages + blog</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Coaches & Educators */}
                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-red-900/50 to-amber-900/50 backdrop-blur-sm border border-red-500/30 hover:border-red-400/50 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <span className="text-2xl">👨‍🏫</span>
                    <h4 className="text-xl font-semibold text-red-300 group-hover:text-red-200">Coaches & Educators</h4>
                  </div>
                  <ul className="space-y-2 text-red-100/90">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400">•</span>
                      <span>LMS platforms (Thinkific, custom LMS)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400">•</span>
                      <span>Recorded sessions + live class integration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400">•</span>
                      <span>Lead magnet setups + email automation tools</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Local Businesses */}
                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-amber-900/50 to-orange-900/50 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <span className="text-2xl">🏪</span>
                    <h4 className="text-xl font-semibold text-amber-300 group-hover:text-amber-200">Local Businesses (Restaurants, Salons, Gyms)</h4>
                  </div>
                  <ul className="space-y-2 text-amber-100/90">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400">•</span>
                      <span>Booking slots synced with your calendar</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400">•</span>
                      <span>Google Maps and review integrations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400">•</span>
                      <span>Promo pages for offers and events</span>
                    </li>
                  </ul>
                </motion.div>

                {/* SaaS / Tech Products */}
                <motion.div 
                  className="p-6 rounded-xl bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <span className="text-2xl">💻</span>
                    <h4 className="text-xl font-semibold text-orange-300 group-hover:text-orange-200">SaaS / Tech Products</h4>
                  </div>
                  <ul className="space-y-2 text-orange-100/90">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400">•</span>
                      <span>API documentation + changelog sections</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400">•</span>
                      <span>Pricing tables, comparison charts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400">•</span>
                      <span>Feature explanation using micro-animations</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={require('../../public/assets/r12.png')}
                  alt="Industry-Specific Website Solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-orange-900/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 5-Step Web Development Framework */}
      <section className="py-20 px-4 bg-black-to-b from-emerald-600 to-teal-600 relative overflow-hidden">
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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            variants={fadeIn}
          >
            Our 5-Step Web Development Framework
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Steps Column - Left */}
            <motion.div
              className="lg:w-1/2 space-y-6"
              variants={fadeIn}
            >
              {/* Step 1 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-300 group-hover:text-indigo-200 mb-2">Discovery & Planning</h4>
                    <p className="text-indigo-100/90">
                      We understand your audience, brand, and goals. Then we plan the sitemap, features, and structure.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200 mb-2">UI/UX Design Mockups</h4>
                    <p className="text-purple-100/90">
                      Designers create wireframes and visuals. You'll see your future site before we write a line of code.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Column - Middle */}
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-8">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={require('../../public/assets/r14.png')}
                    alt="5-Step Web Development Framework"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-purple-900/40 to-transparent"></div>
                </div>
              </div>

              {/* Step 3 - Below Image */}
              <motion.div 
                className="mt-8 p-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-indigo-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-pink-300 group-hover:text-pink-200 mb-2">Development</h4>
                    <p className="text-pink-100/90">
                      We write clean code, build custom logic, and integrate third-party tools. CMS or fully coded? You choose.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Steps Column - Right */}
            <motion.div
              className="lg:w-1/2 space-y-6"
              variants={fadeIn}
            >
              {/* Step 4 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-indigo-300 group-hover:text-indigo-200 mb-2">QA & Performance Optimization</h4>
                    <p className="text-indigo-100/90 mb-2">
                      Each page is tested on major browsers, devices, and load times. We ensure:
                    </p>
                    <ul className="space-y-1 text-indigo-100/90">
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-400">•</span>
                        <span>Lazy loading for images</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-400">•</span>
                        <span>Clean code hierarchy</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-400">•</span>
                        <span>Fast database queries</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200 mb-2">Launch + Post-Launch Support</h4>
                    <p className="text-purple-100/90">
                      We deploy your site and offer 30 days of free support for tweaks, bug fixes, and feedback implementation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who We Work With Section */}
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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            variants={fadeIn}
          >
            Who We Work With
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service-Based Small Businesses */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200">Service-Based Small Businesses</h3>
              </div>
            </motion.div>

            {/* Product Startups & D2C Brands */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200">Product Startups & D2C Brands</h3>
              </div>
            </motion.div>

            {/* Realtors, Developers, Brokers */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-pink-300 group-hover:text-pink-200">Realtors, Developers, Brokers</h3>
              </div>
            </motion.div>

            {/* Doctors, Clinics, and Hospitals */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-indigo-200">Doctors, Clinics, and Hospitals</h3>
              </div>
            </motion.div>

            {/* Trainers, Coaches, Educators */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/50 to-teal-900/50 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200">Trainers, Coaches, Educators</h3>
              </div>
            </motion.div>

            {/* Local Retailers & Restaurants */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/50 to-green-900/50 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                  <span className="text-2xl">🏪</span>
                </div>
                <h3 className="text-xl font-semibold text-emerald-300 group-hover:text-emerald-200">Local Retailers & Restaurants</h3>
              </div>
            </motion.div>

            {/* Legal & Accounting Firms */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-900/50 to-orange-900/50 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-300 group-hover:text-amber-200">Legal & Accounting Firms</h3>
              </div>
            </motion.div>

            {/* SaaS Founders & App Creators */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 backdrop-blur-sm border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-violet-300 group-hover:text-violet-200">SaaS Founders & App Creators</h3>
              </div>
            </motion.div>

            {/* NGOs & Purpose-Driven Brands */}
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-rose-900/50 to-red-900/50 backdrop-blur-sm border border-rose-500/30 hover:border-rose-400/50 transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-rose-300 group-hover:text-rose-200">NGOs & Purpose-Driven Brands</h3>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
          {/* Headline */}
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600"
              variants={fadeIn}
            >
              FAQs About Website Development
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Image Column */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-8">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={require('../../public/assets/r15.png')}
                    alt="FAQs About Website Development"
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
              className="lg:col-span-7 space-y-4"
              variants={fadeIn}
            >
              {/* FAQ Item 1 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
                variants={fadeIn}
                whileHover={{ y: -2 }}
              >
                <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 mb-2">What's the typical website build time?</h3>
                <p className="text-blue-100/90">5 to 30 days based on scope and features.</p>
              </motion.div>

              {/* FAQ Item 2 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                variants={fadeIn}
                whileHover={{ y: -2 }}
              >
                <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200 mb-2">What platforms do you offer?</h3>
                <p className="text-purple-100/90">We specialize in WordPress, Shopify, Laravel, HTML/CSS, and React-based frameworks.</p>
              </motion.div>

              {/* FAQ Item 3 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
                variants={fadeIn}
                whileHover={{ y: -2 }}
              >
                <h3 className="text-xl font-semibold text-pink-300 group-hover:text-pink-200 mb-2">Will my website be SEO-friendly?</h3>
                <p className="text-pink-100/90">Yes. All sites include metadata, schema markup, fast loads, and crawl-friendly structure.</p>
              </motion.div>

              {/* FAQ Item 4 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
                variants={fadeIn}
                whileHover={{ y: -2 }}
              >
                <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-indigo-200 mb-2">Can I manage the site myself later?</h3>
                <p className="text-indigo-100/90">Absolutely. We provide admin access and guidance.</p>
              </motion.div>

              {/* FAQ Item 5 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-cyan-900/50 to-teal-900/50 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group"
                variants={fadeIn}
                whileHover={{ y: -2 }}
              >
                <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200 mb-2">Do you handle domain/hosting too?</h3>
                <p className="text-cyan-100/90">Yes — we help you choose, purchase, and connect your hosting.</p>
              </motion.div>

              {/* FAQ Item 6 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-emerald-900/50 to-green-900/50 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group"
                variants={fadeIn}
                whileHover={{ y: -2 }}
              >
                <h3 className="text-xl font-semibold text-emerald-300 group-hover:text-emerald-200 mb-2">Do you offer redesigns of existing websites?</h3>
                <p className="text-emerald-100/90">Yes. We can modernize your site without losing SEO value or branding.</p>
              </motion.div>

              {/* FAQ Item 7 */}
              <motion.div 
                className="p-6 rounded-xl bg-gradient-to-br from-amber-900/50 to-orange-900/50 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 group"
                variants={fadeIn}
                whileHover={{ y: -2 }}
              >
                <h3 className="text-xl font-semibold text-amber-300 group-hover:text-amber-200 mb-2">What happens after launch?</h3>
                <p className="text-amber-100/90">We offer 30-day support and optional maintenance packages for updates, monitoring, and more.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(168,85,247,0.1),transparent_70%)]"></div>
        </div>

        <motion.div 
          className="container mx-auto max-w-3xl px-4 relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 flex items-center justify-center space-x-4"
              variants={fadeIn}
            >
              <FaCalendarAlt className="text-4xl md:text-5xl lg:text-6xl text-blue-400 transform hover:scale-110 transition-transform duration-300" />
              <span>Book a Free Website Strategy Call</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={fadeIn}
            >
              Let's build something remarkable together.
            </motion.p>
          </div>

          <motion.div 
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/30 shadow-2xl"
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Content Column */}
              <motion.div
                className="space-y-6"
                variants={fadeIn}
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you're launching your first business site or revamping your existing digital presence, Leadzoro has the tools, creativity, and expertise to make it happen.
                </p>
                <div className="flex items-center space-x-4 text-blue-400">
                  <span className="text-2xl">📞</span>
                  <p className="text-lg font-semibold">Call or WhatsApp us now — or book your free website strategy session below:</p>
                </div>
              </motion.div>

              {/* Button Column */}
              <motion.div
                className="flex justify-center md:justify-end"
                variants={fadeIn}
              >
                <motion.button
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <span>👉 Book Free Consultation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services4Page;
