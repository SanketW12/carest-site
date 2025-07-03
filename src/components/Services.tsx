import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Baby, 
  Stethoscope,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
      features: ['ECG & Echo', 'Cardiac Surgery', 'Preventive Care'],
      color: 'bg-red-500',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care for brain and nervous system disorders.',
      features: ['Brain Imaging', 'Stroke Care', 'Epilepsy Treatment'],
      color: 'bg-purple-500',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
      features: ['Eye Exams', 'Cataract Surgery', 'Retinal Care'],
      color: 'bg-blue-500',
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Specialized care for bones, joints, and musculoskeletal system.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care'],
      color: 'bg-green-500',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Dedicated healthcare services for infants, children, and adolescents.',
      features: ['Well-child Visits', 'Vaccinations', 'Growth Monitoring'],
      color: 'bg-pink-500',
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare services for adults with comprehensive care.',
      features: ['Health Screenings', 'Chronic Disease', 'Preventive Care'],
      color: 'bg-indigo-500',
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
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Stethoscope className="w-4 h-4 mr-2" />
            Our Services
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Comprehensive Healthcare
            <span className="text-primary-600 block">Solutions</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            From routine check-ups to specialized treatments, we provide a full spectrum 
            of medical services with cutting-edge technology and compassionate care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-sm text-secondary-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                className="flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Need Immediate Medical Attention?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our emergency department is open 24/7 with experienced medical professionals 
              ready to provide immediate care when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Emergency Care
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call: (555) 123-4567
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;