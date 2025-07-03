import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Clock,
} from "lucide-react";

const Doctors: React.FC = () => {
  const services = [
    {
      name: "Medicine Home Delivery",

      image: "/homeDelivery.jpeg",

      bio: "Fast & Reliable Medicine Delivery at Your Doorstep",
    },
    {
      name: "Free Lab Tests",

      image: "/labTest.jpeg",

      bio: "Essential Health Tests — Absolutely Free",
    },
    {
      name: "Caretaker & Nurse Support",

      image: "/careTaker.jpeg",

      bio: "Qualified Nursing Care & Compassionate Support at Home",
    },

    {
      name: "Free Taxi for Doctor Appointments",

      image: "/freeTaxi.jpeg",

      bio: "Free transportation to and from hospitals for your doctor visits",
    },

    {
      name: "Emergency Support",

      image: "/rrTeam.png",

      bio: "EQuick Emergency Help When You Need It Most",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="doctors" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="block text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500  font-bold">
            Carest Delivers These Services for You:
          </h2>
        </motion.div>
        {/* Doctors Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((doctor, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-secondary-900 mb-1">
                    {doctor.name}
                  </h3>
                </div>

                <p className="text-secondary-600 h-16 text-lg mb-4 leading-relaxed">
                  {doctor.bio}
                </p>

                {/* Details */}

                {/* Specializations */}

                {/* CTA Button */}
                {/* <motion.button
                  className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </motion.button> */}
                <h2 className="block w-28 text-lg hover:opacity-75 hover:underline cursor-pointer  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500  ">
                  View Details
                </h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* CTA Section */}
      </div>
    </section>
  );
};

export default Doctors;
