'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaFacebook, 
  FaGoogle, 
  FaSearchengin, 
  FaLaptopCode, 
  FaInstagram, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine,
  FaStore,
  FaGraduationCap,
  FaBuilding,
  FaHospital,
  FaRocket,
  FaPlane,
  FaTools,
  FaChevronDown
} from 'react-icons/fa'

// Import images
import DiscoverImg from '../../public/assets/Discover.png'
import StratergizeImg from '../../public/assets/Stratergize.png'
import ExecuteImg from '../../public/assets/Execute.png'
import OptimizeImg from '../../public/assets/Optimize.png'
import ScaleImg from '../../public/assets/Scale.png'

const services = [
  {
    title: 'Meta Ads',
    description: 'Craft thumb-stopping creatives and precision-targeted Meta Ads to put your brand in front of the right audience.',
    icon: <FaFacebook className="w-8 h-8" />,
    features: [
      'Laser-targeted audience segmentation',
      'A/B tested creatives',
      'Full-funnel Meta Ad strategies',
      'Conversion-optimized copy',
      'Retargeting campaigns'
    ]
  },
  {
    title: 'Google Ads Management',
    description: 'Get found when it matters most with keyword-optimized campaigns that reach ready-to-convert customers.',
    icon: <FaGoogle className="w-8 h-8" />,
    features: [
      'Search, Display & Video Ads',
      'Daily performance monitoring',
      'Location-based targeting',
      'Quality Score improvement',
      'Lower CPC, higher conversions'
    ]
  },
  {
    title: 'SEO Services',
    description: 'Stay on top of search results with robust SEO strategies that dominate Google rankings locally and nationally.',
    icon: <FaSearchengin className="w-8 h-8" />,
    features: [
      'Keyword research',
      'Technical SEO audits',
      'Quality backlink outreach',
      'Local SEO optimization',
      'Content strategy'
    ]
  },
  {
    title: 'Website Development',
    description: 'We build fast, responsive, SEO-friendly websites that convert visitors into paying customers.',
    icon: <FaLaptopCode className="w-8 h-8" />,
    features: [
      'WordPress & Next.js',
      'Mobile-first design',
      'UX/UI optimization',
      'Fast loading times',
      'Built-in SEO structure'
    ]
  },
  {
    title: 'Social Media Management',
    description: 'Build a brand that talks and listens with curated content and engagement strategies.',
    icon: <FaInstagram className="w-8 h-8" />,
    features: [
      'Content calendars',
      'Creative design',
      'Reel strategy',
      'Analytics tracking',
      'Community management'
    ]
  },
  {
    title: 'GMB Optimization',
    description: 'Dominate local searches and be the top choice in Pune with our GMB optimization services.',
    icon: <FaMapMarkerAlt className="w-8 h-8" />,
    features: [
      'Complete GMB setup',
      'Weekly post scheduling',
      'Review generation',
      'Local pack ranking',
      'Performance tracking'
    ]
  }
]

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px',
  });

  const features = [
    '100% Transparent Reporting',
    'ROI-Driven Strategies',
    'Pune-Based Team with India-Wide Reach',
    'Fast Turnaround. Proven Results.',
    'Trusted by 50+ Brands & Growing'
  ];

  return (
    <div className="mt-32 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '-2s' }} />
      </div>

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-block text-4xl mb-6 text-primary-400"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1, rotate: 360 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <FaLightbulb />
        </motion.div>
        
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">Why Choose Leadzoro?</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Because we don't just run campaigns — we drive business outcomes.
        </motion.p>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              className="flex items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <FaCheckCircle className="text-primary-400 flex-shrink-0 w-6 h-6 mr-4" />
              <span className="text-gray-200">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-12 text-xl text-gray-300 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We're not another agency — we're your growth partner.
        </motion.p>
      </motion.div>
    </div>
  );
};

const ProcessStep = ({ 
  step, 
  title, 
  description, 
  image, 
  index, 
  inView 
}: { 
  step: string | number;
  title: string;
  description: string;
  image: StaticImageData; // Change from string to StaticImageData
  index: number;
  inView: boolean;
}) => {  
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="flex-1">
        <motion.div 
          className="relative group cursor-pointer overflow-hidden rounded-2xl h-[300px] w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image 
            src={image}
            alt={`Step ${step}: ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
            priority={index === 0}
            className="rounded-2xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>
      
      <div className="flex-1 space-y-4">
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        >
          <span className="text-4xl font-bold gradient-text">Step {step}</span>
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px',
  });

  const steps = [
    {
      step: 1,
      title: "Discover",
      description: "We understand your goals, target audience, and market competitors.",
      image: DiscoverImg
    },
    {
      step: 2,
      title: "Strategize",
      description: "We build a tailored plan across platforms that aligns with your budget and business model.",
      image: StratergizeImg
    },
    {
      step: 3,
      title: "Execute",
      description: "Our experts launch your campaign with precision, creativity, and analytics-ready tracking.",
      image: ExecuteImg
    },
    {
      step: 4,
      title: "Optimize",
      description: "We tweak, refine, and split-test continuously for peak performance.",
      image: OptimizeImg
    },
    {
      step: 5,
      title: "Scale",
      description: "Once we hit ROI sweet spots, we scale your campaigns for long-term growth.",
      image: ScaleImg
    }
  ];

  return (
    <div className="mt-32 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '-5s' }} />
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-4xl mb-6 text-primary-400"
            initial={{ scale: 0, rotate: 0 }}
            animate={inView ? { scale: 1, rotate: 360 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <FaChartLine />
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Our 5-Step Process to Digital Domination</span>
          </motion.h2>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.step}
              {...step}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const IndustryCard = ({ 
  icon: Icon, 
  title, 
  inView, 
  delay 
}: { 
  icon: React.ElementType;
  title: string;
  inView: boolean;
  delay: number;
}) => (
  <motion.div
    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-primary-500/50"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="text-primary-400 text-4xl">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
  </motion.div>
);

const WhoWeWorkWith = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const industries = [
    { icon: FaStore, title: "E-commerce Brands" },
    { icon: FaGraduationCap, title: "Educational Institutes" },
    { icon: FaBuilding, title: "Real Estate Agencies" },
    { icon: FaHospital, title: "Healthcare & Clinics" },
    { icon: FaRocket, title: "SaaS Startups" },
    { icon: FaPlane, title: "Travel & Hospitality" },
    { icon: FaTools, title: "Local Service Providers" }
  ];

  return (
    <div className="mt-32 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '-5s' }} />
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-4xl mb-6 text-primary-400"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1, rotate: 360 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
          >
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Who We Work With</span>
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              {...industry}
              inView={inView}
              delay={0.4 + index * 0.1}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Whether you're in Pune or anywhere across India, Leadzoro adapts digital growth strategies that fit your industry like a glove.
        </motion.p>
      </motion.div>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}

const FAQItem = ({ question, answer, isOpen, onToggle, delay }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="border border-white/10 rounded-lg overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left bg-white/5 hover:bg-white/10 transition-all duration-300"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary-400"
        >
          <FaChevronDown />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 text-gray-300 bg-white/5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const faqs = [
    {
      question: "What makes Leadzoro the best marketing agency in Pune?",
      answer: "We combine proven strategies, deep local market understanding, and creative execution that brings in real business, not just traffic."
    },
    {
      question: "Do you offer packages for startups or small businesses?",
      answer: "Absolutely! We have flexible and affordable plans suited for every stage — from bootstrap to blitz-scale."
    },
    {
      question: "How quickly can I see results?",
      answer: "Depending on your service type, Meta & Google Ads deliver visible results within days, while SEO may take 3–6 months for full traction."
    },
    {
      question: "Can I track the performance of my campaigns?",
      answer: "Yes. We provide live dashboards, weekly reporting, and strategy calls to keep you in the loop at all times."
    },
    {
      question: "What if I only need one service like SEO or Google Ads?",
      answer: "No worries — we offer standalone services as well as bundled growth plans."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-32 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '-5s' }} />
      </div>

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Frequently Asked Questions</span>
          </motion.h2>
        </div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index} 
              onToggle={() => toggleFAQ(index)}
              delay={0.4 + index * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const CTASection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="mt-32 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 blur-3xl opacity-50" />
      </div>

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto px-4 py-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Ready to Take Your Brand to the Next Level?</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's talk growth. Let's talk results. Let's talk Leadzoro.
          </motion.p>

          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-300 flex items-center gap-2">
              Schedule your free strategy session now and discover why we're the best marketing agency in India trusted by 50+ fast-growing brands.
            </p>

            <motion.button
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg shadow-2xl shadow-primary-500/20 hover:shadow-primary-500/40 transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Click Here to Skyrocket Your Growth with Leadzoro</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/50 to-secondary-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px',
  })

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Core Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just market — we create measurable success with our comprehensive digital solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4 gradient-text">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                    className="text-gray-400 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Process Section */}
        <ProcessSection />

        {/* Who We Work With Section */}
        <WhoWeWorkWith />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </section>
  )
}

export default Services