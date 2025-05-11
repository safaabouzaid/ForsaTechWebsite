import { motion } from 'framer-motion';
import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactUs = () => {
  const socialIcons = {
    Instagram: <FiInstagram size={18} />,
    Github: <FiGithub size={18} />,
    LinkedIn: <FiLinkedin size={18} />
  };

  return (
    <div id="contact" className="max-w-6xl mx-auto px-4 py-12">
      {/* Need More Information Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center bg-indigo-50 rounded-xl p-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need more information?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
       Send us an email with your inquiry and one of our experts will contact you.
        </p>
      </motion.div>

      {/* Links Sections */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About Us</h3>
          <ul className="space-y-3">
            {['Our Story', 'Team'].map((item, index) => (
              <li key={`about-${index}`}>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* For Developers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">For Developers</h3>
          <ul className="space-y-3">
            {['Browse Jobs', 'Create Profile'].map((item, index) => (
              <li key={`dev-${index}`}>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* For Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">For Companies</h3>
          <ul className="space-y-3">
            {['Register as company', 'Pricing'].map((item, index) => (
              <li key={`company-${index}`}>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Connect With Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with us</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <a href="mailto:forsatech@gmail.com" className="text-indigo-600 hover:text-indigo-800">
                forsatech@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Follow Us</p>
              <div className="flex gap-4">
                {['Instagram', 'Github', 'LinkedIn'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {socialIcons[social]}
                    <span>{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;