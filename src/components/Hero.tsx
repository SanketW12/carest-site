import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#f1f1f1] from-primary-50 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className=""
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Shield className="w-4 h-4 mr-2" />
              Trusted Healthcare Provider
            </motion.div> */}
            <div>
              <img
                src="/carestText.png"
                alt="Carest Logo"
                className="h-96 w-auto -mt-20 -ml-12"
              />
            </div>

            <motion.h1
              className="text-5xl -mt-28 lg:text-6xl font-bold text-secondary-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your Health,
              <span className="block text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500  font-bold">
                Our Priority
              </span>
            </motion.h1>

            <motion.p
              className="text-xl mt-2 text-secondary-600 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              From monthly medicine delivery to lab tests, from doctor visits to
              emergency response—Carest connects all your health needs through a
              single, reliable platform. Designed especially for chronic
              patients, we bring hospital-grade care home.
            </motion.p>

            {/* Stats */}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              <img
                src="/heroImage.jpg"
                alt="Healthcare Professional"
                className="rounded-2xl shadow-2xl "
                height={900}
              />

              {/* Floating Cards */}
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
