'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaGlobe, 
  FaClock, 
  FaMapMarkerAlt, 
  FaRocket, 
  FaShieldAlt,
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaLaptopCode,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaComments
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">📞 Contact Us</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Your Growth Starts With a Conversation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              At Leadzoro, we don't believe in just selling services — we build digital success stories.
              If you're looking for a digital marketing partner who understands your business goals and delivers performance-driven solutions — you're in the right place.
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Whether you're a startup founder, service provider, coach, freelancer, or a business scaling up across India — our team is ready to guide your digital journey with data-backed strategies, real-time execution, and measurable growth.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* How Can We Help Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-5s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <HowCanWeHelpSection />
        </div>
      </section>
      
      {/* Guarantee Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <MoneybackGuaranteeSection />
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 blur-3xl opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactInfoSection />
            <ContactFormSection 
              formData={formData} 
              handleChange={handleChange} 
              handleSubmit={handleSubmit}
              formSubmitted={formSubmitted}
            />
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <FinalCTASection />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const HowCanWeHelpSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const services = [
    {
      icon: <FaGoogle className="w-10 h-10 text-white" />,
      title: "Need leads through Google & Meta Ads?",
      color: "from-blue-500 to-blue-300"
    },
    {
      icon: <FaGoogle className="w-10 h-10 text-white" />,
      title: "Want your business to rank #1 on Google?",
      color: "from-green-500 to-green-300"
    },
    {
      icon: <FaLaptopCode className="w-10 h-10 text-white" />,
      title: "Looking to build a fast, modern website?",
      color: "from-purple-500 to-purple-300"
    },
    {
      icon: <FaInstagram className="w-10 h-10 text-white" />,
      title: "Want to grow your brand presence on social media?",
      color: "from-pink-500 to-pink-300"
    },
    {
      icon: <FaMapMarkedAlt className="w-10 h-10 text-white" />,
      title: "Need local customers through GMB optimization?",
      color: "from-yellow-500 to-yellow-300"
    }
  ];
  
  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">💬 How Can We Help You Today?</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col items-center shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${service.color} shadow-lg`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
          </motion.div>
        ))}
      </div>
      
      <motion.p
        className="text-xl text-gray-300 mt-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Let's connect. We promise honest advice, real support, and results that speak louder than promises.
      </motion.p>
    </motion.div>
  );
};

const MoneybackGuaranteeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <motion.div
      ref={ref}
      className="max-w-4xl mx-auto px-4 py-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center space-y-8">
        <motion.div
          className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-300 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1, rotate: 360 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <FaMoneyBillWave className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">💸 7-Day Moneyback Guarantee</span>
        </motion.h2>
        
        <motion.h3
          className="text-2xl font-semibold text-primary-400"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          No-Risk Partnership
        </motion.h3>
        
        <motion.p
          className="text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We know trust takes time. That's why we offer a 100% moneyback guarantee within 7 days of onboarding — if you're not satisfied, you get your investment back. No conditions, no catch. Just transparency.
        </motion.p>
      </div>
    </motion.div>
  );
};

const ContactInfoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Call or WhatsApp",
      details: "+91 81669 22792",
      link: "tel:+918166922792"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "Info@leadzoro.com",
      link: "mailto:Info@leadzoro.com"
    },
    {
      icon: <FaGlobe />,
      title: "Website",
      details: "www.leadzoro.com",
      link: "https://www.leadzoro.com"
    }
  ];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8">
        <span className="gradient-text">📍 Reach Out to Us</span>
      </h2>
      
      <div className="space-y-8 mb-12">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <a 
                href={item.link} 
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                {item.details}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaClock className="mr-3 text-primary-400" /> 
          <span>🕒 Business Hours</span>
        </h2>
        <p className="text-gray-300 ml-10">Monday to Saturday: 9:00 AM – 8:00 PM</p>
        <p className="text-gray-300 ml-10">Sunday: Closed (WhatsApp support available)</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FaMapMarkerAlt className="mr-3 text-primary-400" />
          <span>🗺️ Proudly Based in Pune, Serving All Over India</span>
        </h2>
        <p className="text-gray-300 ml-10">
          Though we're based in Pune, we work with clients across India — from Mumbai to Bangalore, Delhi to Hyderabad. Wherever you are, Leadzoro is just a message away.
        </p>
      </motion.div>
    </motion.div>
  );
};

const ContactFormSection = ({ 
  formData, 
  handleChange, 
  handleSubmit,
  formSubmitted
}: {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  formSubmitted: boolean;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
    >
      <h2 className="text-3xl font-bold mb-8">
        <span className="gradient-text">📬 Ready to Grow Your Business?</span>
      </h2>
      <p className="text-gray-300 mb-8">
        Fill out the form below and tell us what you're looking for. Our team will get in touch with you within 24 hours.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your name"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your email"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your phone number"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Tell us about your project"
          ></textarea>
        </motion.div>
        
        <motion.div
          className="flex items-center space-x-2 text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <FaShieldAlt />
          <p>
            🔐 Privacy First, Always. We keep your contact details 100% private. No spam, no third-party sharing, ever.
          </p>
        </motion.div>
        
        <motion.button
          type="submit"
          className="w-full py-4 px-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {formSubmitted ? 'Message Sent!' : 'Send Message'}
        </motion.button>
      </form>
    </motion.div>
  );
};

const FinalCTASection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1, rotate: 360 } : {}}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <FaRocket className="w-10 h-10 text-white" />
      </motion.div>
      
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="gradient-text">🚀 Let's Make It Happen. Let's Talk Growth.</span>
      </motion.h2>
      
      <motion.p
        className="text-xl text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Every brand you admire once started with a simple conversation.<br />
        Yours begins here — with Leadzoro.
      </motion.p>
    </motion.div>
  );
};

export default ContactPage;