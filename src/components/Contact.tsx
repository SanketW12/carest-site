import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Calendar,
  MessageSquare
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: '24/7 Emergency Line Available',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@carest.com', 'appointments@carest.com'],
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Healthcare Blvd', 'Medical City, MC 12345'],
      description: 'Free parking available',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat-Sun: 9:00 AM - 5:00 PM'],
      description: 'Emergency services 24/7',
    },
  ];

  const services = [
    'General Consultation',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Ophthalmology',
    'Emergency Care',
    'Other',
  ];

  return (
    <section id="contact" className="py-20 bg-white">
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
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Contact Us for
            <span className="text-primary-600 block">Exceptional Care</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to take the next step in your healthcare journey? We're here to help you 
            schedule appointments, answer questions, and provide the care you deserve.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                We're Here to Help
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                Whether you need to schedule an appointment, have questions about our services, 
                or require emergency care, our dedicated team is ready to assist you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-secondary-50 p-6 rounded-2xl hover:bg-secondary-100 transition-colors duration-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-2">{info.title}</h4>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-secondary-700">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-secondary-600">{info.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h4>
              <p className="text-primary-100 mb-6">
                For urgent medical concerns or to speak with our patient care team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Online</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-secondary-50 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-2">Message Sent!</h4>
                <p className="text-secondary-600">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-secondary-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Visit Our Facility</h3>
            <p className="text-secondary-600 mb-6">
              Located in the heart of Medical City with easy access and ample parking.
            </p>
            <div className="bg-secondary-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-2" />
                <p className="text-secondary-700 font-semibold">Interactive Map</p>
                <p className="text-sm text-secondary-600">123 Healthcare Blvd, Medical City, MC 12345</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;