'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' }
  ];

  const contactInfo = [
    { icon: FaPhoneAlt, text: '+91 8789462971', href: 'tel:+918789462971' },
    { icon: FaEnvelope, text: 'info@leadzoro.com', href: 'mailto:info@leadzoro.com' },
    { icon: FaMapMarkerAlt, text: 'Pune, Maharashtra, India', href: '/' }
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Meta Ads', href: '/meta-ads-services' },
        { name: 'Google Ads', href: '/google-ads-services' },
        { name: 'SEO Services', href: '/seo-services' },
        { name: 'Website Development', href: '/website-development' },
        { name: 'Social Media', href: '/social-media-marketing' },
        { name: 'Local SEO', href: '/local-seo-services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Marketing Guide', href: '/resources/marketing-guide' },
        { name: 'SEO Checklist', href: '/resources/seo-checklist' },
        { name: 'Growth Tips', href: '/resources/growth-tips' },
        { name: 'Tools', href: '/resources/tools' }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black/50 pt-20 pb-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: '-5s' }}
        />
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold gradient-text mb-6">Leadzoro</h2>
            <p className="text-gray-300 mb-6">
              Your trusted digital growth partner. We transform clicks into customers and visitors into brand advocates.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + sectionIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + sectionIndex * 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.text}
              href={info.href}
              className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
            >
              <info.icon />
              <span>{info.text}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Leadzoro. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
