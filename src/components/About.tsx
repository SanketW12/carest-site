import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  Shield,
  Target,
  Heart,
  CheckCircle
} from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Award, value: '25+', label: 'Years of Excellence' },
    { icon: Users, value: '200+', label: 'Medical Experts' },
    { icon: Clock, value: '24/7', label: 'Emergency Services' },
    { icon: Shield, value: '99.9%', label: 'Patient Satisfaction' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and dignity, ensuring comfort throughout their healthcare journey.',
    },
    {
      icon: Target,
      title: 'Clinical Excellence',
      description: 'Our commitment to the highest medical standards drives us to deliver exceptional outcomes for every patient.',
    },
    {
      icon: Shield,
      title: 'Patient Safety',
      description: 'Safety is our top priority, with rigorous protocols and continuous monitoring to protect our patients.',
    },
  ];

  const milestones = [
    { year: '1998', event: 'Carest Healthcare founded with a vision to transform medical care' },
    { year: '2005', event: 'Opened our first specialized cardiac care center' },
    { year: '2012', event: 'Launched telemedicine services, pioneering remote healthcare' },
    { year: '2018', event: 'Achieved Joint Commission accreditation for quality and safety' },
    { year: '2023', event: 'Expanded to serve over 50,000 patients annually' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            <Heart className="w-4 h-4 mr-2" />
            About Carest
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Dedicated to Your
            <span className="text-primary-600 block">Health & Wellbeing</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            For over two decades, Carest has been at the forefront of healthcare innovation, 
            combining advanced medical technology with compassionate, personalized care.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                Leading Healthcare Innovation
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                At Carest, we believe that exceptional healthcare goes beyond treating illness—it's about 
                promoting wellness, preventing disease, and empowering patients to live their healthiest lives. 
                Our multidisciplinary team of experts works collaboratively to provide comprehensive, 
                coordinated care tailored to each patient's unique needs.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                With state-of-the-art facilities, cutting-edge medical technology, and a patient-centered 
                approach, we're committed to setting new standards in healthcare delivery while maintaining 
                the personal touch that makes all the difference.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              {[
                'Board-certified physicians and specialists',
                'Advanced diagnostic and treatment technologies',
                'Comprehensive preventive care programs',
                'Personalized treatment plans',
                'Seamless care coordination',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-secondary-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Team"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating Achievement Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-primary-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">25+</div>
                  <div className="text-sm text-secondary-600">Years of Excellence</div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl transform -rotate-6 scale-105 opacity-20"></div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-secondary-50 rounded-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">{achievement.value}</div>
              <div className="text-secondary-600">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape the culture of excellence at Carest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-4">{value.title}</h4>
                <p className="text-secondary-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">Our Journey</h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Key milestones that have shaped Carest into the healthcare leader we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-primary-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <p className="text-secondary-700">{milestone.event}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;