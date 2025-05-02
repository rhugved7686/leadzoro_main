'use client';

import { FaMapMarkerAlt, FaLightbulb, FaUserTie, FaRocket, FaGlobe, FaMobileAlt, FaSearch, FaLaptopCode, FaHandshake, FaQuoteLeft, FaWrench, FaComments, FaBullhorn, FaTag, FaHandsHelping, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import g11 from '../../public/assets/g11.png'; // Adjust the path if needed
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Custom CSS for animated border and card style
const animatedBorder = {
  background: 'linear-gradient(120deg, #333333 0%, #4a4a6e 50%, #222222 100%)',
  padding: '3px',
  borderRadius: '2rem',
  boxShadow: '0 0 30px 0 rgba(170, 205, 211, 0.45)'
};

const cardStyle = {
  background: 'rgba(25, 25, 30, 0.85)',
  borderRadius: '1.25rem',
  boxShadow: '0 4px 32px 0 rgba(34, 211, 238, 0.25)',
  border: '1.5px solid rgba(100, 120, 200, 0.3)',
  backdropFilter: 'blur(8px)'
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-200 to-cyan-100 text-blue py-10 px-2 flex items-center justify-center overflow-hidden">
      {/* Background Elements - Updated to match services2 page */}
      <Navbar />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/30 to-cyan-200/30" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-200/30 rounded-full filter blur-3xl animate-float" />
      </div>

      {/* Main content container - 90% width with top margin to prevent navbar overlap */}
      <div style={animatedBorder} className="relative w-[100%] mx-auto rounded-3xl z-10 mt-20">
        <div style={cardStyle} className="rounded-3xl p-8 md:p-14">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 drop-shadow-lg"
          >
            🧭 About Us – The Real Story Behind <span className="text-cyan-400">Leadzoro</span>
          </motion.h1>

          {/* Where It All Began */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <h2 className="text-2xl font-bold">Where It All Began – The Spark of Purpose (2021)</h2>
            </div>
            <p className="text-lg text-white">
              In 2021, while most digital marketers were busy chasing trends and vanity metrics, one individual quietly planted the seed for something different — something real.<br />
              That individual was <span className="font-semibold text-cyan-300">Ashutosh Pandey</span> — a marketer who believed in results before reputation. No investors, no hype, just a laptop, a deep understanding of digital growth, and a dream to help Indian businesses scale profitably.<br />
              Out of this intention, <span className="font-semibold text-cyan-300">Leadzoro</span> was born.<br />
              <span className="block mt-2 italic text-cyan-200">Not as a startup aiming for headlines.<br />Not as an agency selling dreams.<br />But as a promise — a commitment to be the most trustworthy marketing growth partner for Indian entrepreneurs.</span>
            </p>
          </motion.div>

          {/* What Makes Leadzoro Different */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaLightbulb className="text-yellow-300 text-2xl" />
              <h2 className="text-2xl font-bold">What Makes Leadzoro Different?</h2>
            </div>
            <p className="text-lg text-white">
              Let's be honest. The digital space is full of noise — tall claims, templated strategies, and zero empathy.<br />
              That's exactly what Leadzoro was created against.<br />
              While others focused on impressions and reach, we focused on return and impact. We didn't want to be an agency. We wanted to be your <span className="font-semibold text-cyan-300">in-house growth engine</span>.<br />
              What started as a one-man hustle has now grown into a dedicated team of creators, analysts, designers, and strategists who live and breathe performance marketing.
            </p>
          </motion.div>

          {/* Founder Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaUserTie className="text-blue-300 text-2xl" />
              <h2 className="text-2xl font-bold">Who is the Founder of Leadzoro?</h2>
            </div>
            <p className="text-lg text-white">
              If you've ever Googled:<br />
              <span className="text-cyan-300">Founder of Leadzoro<br />Ashutosh Pandey Leadzoro<br />Who started Leadzoro?</span><br />
              You'll land here — because <span className="font-semibold text-cyan-300">Ashutosh Pandey</span> is the brain, heart, and hustle behind Leadzoro.<br />
              But don't expect a typical success story. His journey began with failures, unpaid invoices, 16-hour workdays, and months of bootstrapped survival. What kept him going? A belief that small businesses in India deserve a fair chance at digital growth — just like the big brands.
            </p>
            <blockquote className="border-l-4 border-cyan-400 pl-4 mt-4 text-cyan-200 italic">
              "I didn't start Leadzoro to become popular. I started it because I was tired of seeing local businesses being fooled by fake agencies and fake metrics. We're here to give them real, trackable, honest growth."<br />
              <span className="font-semibold">– Ashutosh Pandey</span>
            </blockquote>
          </motion.div>

          {/* Core Services */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaRocket className="text-pink-400 text-2xl" />
              <h2 className="text-2xl font-bold">Our Core Services — But Delivered Differently</h2>
            </div>
            <p className="text-lg text-white mb-4">
              Unlike most agencies that serve and forget, we stay, listen, build, and evolve with your business. Every service is deeply integrated into your growth journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="hover:scale-105 transition-transform duration-300 p-4 flex items-center gap-3" style={cardStyle}>
                <FaGlobe className="text-cyan-400 text-xl" />
                <div>
                  <div className="font-semibold text-white">Google Ads That Convert</div>
                  <div className="text-white text-sm">We don't burn budgets. We build buyer journeys. From keyword mapping to ad extensions and performance reviews — we engineer each Google campaign for conversions, not just clicks.</div>
                </div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300 p-4 flex items-center gap-3" style={cardStyle}>
                <FaMobileAlt className="text-pink-400 text-xl" />
                <div>
                  <div className="font-semibold text-white">Meta Ads That Spark Sales</div>
                  <div className="text-white text-sm">Whether it's Instagram Stories or Facebook Reels, we use high-converting creatives and emotional storytelling to reach your audience — and make them act.</div>
                </div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300 p-4 flex items-center gap-3" style={cardStyle}>
                <FaMapMarkerAlt className="text-green-400 text-xl" />
                <div>
                  <div className="font-semibold text-white">Local SEO & Google My Business</div>
                  <div className="text-white text-sm">Ranking on maps isn't just an SEO trick — it's survival for local businesses. We optimize your GMB listings, reviews, services, and images to turn local searches into local customers.</div>
                </div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300 p-4 flex items-center gap-3" style={cardStyle}>
                <FaSearch className="text-yellow-400 text-xl" />
                <div>
                  <div className="font-semibold text-white">Organic SEO with Intent</div>
                  <div className="text-white text-sm">Content clusters, topic-based SEO, human-first blog writing, SERP-feature targeting. We believe in search that serves both Google and your users.</div>
                </div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300 p-4 flex items-center gap-3" style={cardStyle}>
                <FaLaptopCode className="text-blue-400 text-xl" />
                <div>
                  <div className="font-semibold text-white">Websites That Work (Not Just Look Good)</div>
                  <div className="text-white text-sm">Your website is your digital salesperson. We design lightning-fast, mobile-first, conversion-focused websites using modern frameworks like Next.js.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real Clients */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaHandshake className="text-green-400 text-2xl" />
              <h2 className="text-2xl font-bold">Real Clients. Real Growth. Real Gratitude.</h2>
            </div>
            <p className="text-lg text-white mb-4">
              From clinics in Pune to e-commerce brands across India, Leadzoro has helped over <span className="font-semibold text-cyan-300">250+ businesses</span>:
            </p>
            <ul className="list-disc list-inside text-white mb-4 pl-4">
              <li>Double their ROAS</li>
              <li>Scale lead generation by 5x</li>
              <li>Achieve Google first-page rankings in &lt;60 days</li>
              <li>Convert browsers into buyers using funnel psychology</li>
            </ul>
            <p className="text-cyan-200 italic">And this isn't luck. This is performance marketing done right.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-4 border border-cyan-400/30 shadow flex items-start gap-3">
                <FaQuoteLeft className="text-cyan-400 text-2xl mt-1" />
                <div>
                  <div className="text-white">"Leadzoro gave my business more than leads — they gave me a direction."</div>
                  <div className="text-cyan-300 font-semibold mt-2">– Dr. R. Sharma, Clinic Owner, Pune</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-pink-400/30 shadow flex items-start gap-3">
                <FaQuoteLeft className="text-pink-400 text-2xl mt-1" />
                <div>
                  <div className="text-white">"Ashutosh Pandey and his team are obsessed with performance. That's what makes them different."</div>
                  <div className="text-pink-300 font-semibold mt-2">– Swati Jain, Founder of an Apparel Brand</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Built With Culture Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaWrench className="text-blue-400 text-2xl" />
              <h2 className="text-2xl font-bold">🔧 Built With Culture. Grown With Clarity.</h2>
            </div>
            <p className="text-lg text-white mb-4">
              We aren't just a marketing team. We're a team built on:
            </p>
            <ul className="list-none text-white mb-6 pl-4 space-y-2">
              <li>✅ <span className="font-semibold text-cyan-300">Gratitude:</span> Every client win is a team win.</li>
              <li>✅ <span className="font-semibold text-cyan-300">Transparency:</span> Clear deliverables, no guesswork.</li>
              <li>✅ <span className="font-semibold text-cyan-300">Performance:</span> ROAS first. Vanity second.</li>
              <li>✅ <span className="font-semibold text-cyan-300">Care:</span> We treat your business like our own.</li>
            </ul>
            <p className="italic text-cyan-200 mb-8">Our internal motto? "Promise 1%, deliver 101%."</p>
          </motion.div>

          {/* Why Clients Search for Us Again & Again */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaComments className="text-yellow-400 text-2xl" />
              <h2 className="text-2xl font-bold">💬 Why Clients Search for Us Again & Again</h2>
            </div>
            <ul className="list-none text-white mb-6 pl-4 space-y-2">
              <li><span className="font-semibold text-cyan-300">Clear Communication:</span> No jargon, just honesty</li>
              <li><span className="font-semibold text-cyan-300">Result Obsession:</span> We chase ROAS, not recognition</li>
              <li><span className="font-semibold text-cyan-300">Founder Involvement:</span> Yes, Ashutosh Pandey personally audits every major client's strategy</li>
              <li><span className="font-semibold text-cyan-300">Performance Over Process:</span> We adapt daily, optimize weekly, and report truthfully</li>
            </ul>
          </motion.div>

          {/* Our Vision */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaBullhorn className="text-pink-400 text-2xl" />
              <h2 className="text-2xl font-bold">📢 Our Vision for 2025–2030: India's Most Trusted Growth Partner</h2>
            </div>
            <ul className="list-none text-white mb-6 pl-4 space-y-2">
              <li>🔸 Helping 10,000+ Indian founders</li>
              <li>🔸 Empowering Tier-2 & Tier-3 city businesses</li>
              <li>🔸 Creating India's most ethical, ROI-driven digital marketing brand</li>
            </ul>
            <p className="italic text-cyan-200 mb-8">And as we grow, Ashutosh Pandey still believes one thing:<br />"This isn't my company. This is India's answer to real digital marketing."</p>
          </motion.div>

          {/* Behind the Name */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaTag className="text-green-400 text-2xl" />
              <h2 className="text-2xl font-bold">📌 Behind the Name: Why "Leadzoro"?</h2>
            </div>
            <p className="text-lg text-white mb-4">
              The name 'Leadzoro' came from two ideas:
            </p>
            <ul className="list-none text-white mb-6 pl-4 space-y-2">
              <li>"Leads" — the core outcome businesses want</li>
              <li>"Zoro" — derived from the legendary masked hero who fights injustice</li>
            </ul>
            <p className="text-cyan-200 mb-8">Together, Leadzoro symbolizes fighting against bad marketing and bringing results to those who need them most.</p>
          </motion.div>

          {/* Let's Build Something */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaHandsHelping className="text-cyan-400 text-2xl" />
              <h2 className="text-2xl font-bold">🤝 Let's Build Something Meaningful — Together</h2>
            </div>
            <p className="text-lg text-white mb-4">
              If you're tired of:
            </p>
            <ul className="list-none text-white mb-6 pl-4 space-y-2">
              <li>❌ False promises</li>
              <li>❌ Low-quality leads</li>
              <li>❌ Dead SEO strategies</li>
              <li>❌ Social media managers who ghost you</li>
            </ul>
            <p className="text-cyan-200 mb-8">…then maybe, just maybe, you're ready for Leadzoro.<br />We're not perfect. But we are obsessed with getting your brand the growth it deserves.</p>
          </motion.div>

          {/* Let's Talk */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaPhone className="text-blue-400 text-2xl" />
              <h2 className="text-2xl font-bold">📞 Let's Talk</h2>
            </div>
            <ul className="list-none text-white mb-6 pl-4 space-y-2">
              <li>📧 <a href="mailto:hello@leadzoro.com" className="text-cyan-300 hover:underline">hello@leadzoro.com</a></li>
              <li>🌐 <a href="https://www.leadzoro.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">www.leadzoro.com</a></li>
              <li>📍 Based in Kharadi, Pune — Working with Brands Across India</li>
            </ul>
          </motion.div>

          {/* Final Words */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaQuoteLeft className="text-pink-400 text-2xl" />
              <h2 className="text-2xl font-bold">💎 Final Words from the Founder</h2>
            </div>
            <blockquote className="border-l-4 border-cyan-400 pl-4 mt-4 text-cyan-200 italic">
              "Every time someone searches 'Founder of Leadzoro' and finds my name — I feel responsible. Not for being popular. But for delivering on the promise that Leadzoro stands for."<br />
              <span className="font-semibold">– Ashutosh Pandey, Founder &amp; CEO, Leadzoro</span>
            </blockquote>
            
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10"
          >
            <div className="flex-1 flex flex-col  items-center bg-gradient-to-br from-black-100/80 via-cyan-800/60 to-black-900/80 rounded-3xl shadow-2xl p-10 border border-cyan-400/30 backdrop-blur-lg relative z-10"> 
              <Image 
                src={g11} 
                alt="Ashutosh Pandey - Founder" 
                width={180} 
                height={180} 
                className="rounded-full border-4 border-cyan-400 shadow-xl mb-6" 
                priority={false} 
              /> 
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">Ashutosh Pandey</h3> 
              <p className="text-cyan-100 text-lg mb-4 text-center">Founder & Chief Strategist</p> 
              <div className="text-gray-200 text-center italic"> 
                "Every local business deserves to be found. We're here to make that happen — with heart, hustle, and a little bit of magic." 
              </div> 
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12 flex justify-center"
          >
            <a href="mailto:hello@leadzoro.com" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-xl shadow-lg hover:scale-105 transition-transform duration-300">
              Let's Grow Together 🚀
            </a>
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
}