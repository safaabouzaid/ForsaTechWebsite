import { motion } from 'framer-motion';
import { FiCheckCircle, FiDownload } from 'react-icons/fi';

const WhyChoose = () => {
  const features = [
    {
      title: "ATS-Optimized Resumes",
      description: "Create resumes that pass automated tracking systems with our AI analysis",
      checked: true
    },
    {
      title: "Smart Career Assistant",
      description: "Get personalized guidance from our AI assistant Mulhem",
      checked: true
    },
    {
      title: "Job Matching Algorithm",
      description: "Receive tailored job recommendations based on your profile",
      checked: true
    },
    {
      title: "Interview Preparation",
      description: "",
      checked: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose <span className="text-indigo-600">ForsaTech</span> 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our platform combines cutting-edge technology with career expertise to give you an unbeatable advantage
          </motion.p>
        </div>

        {/* Features  */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${feature.checked ? 'bg-indigo-100 text-blue-500' : 'bg-gray-100 text-gray-400'}`}>
                  <FiCheckCircle size={22} strokeWidth={feature.checked ? 2 : 1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                  {!feature.checked && (
                    <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-500">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/*  Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-indigo-50 rounded-2xl p-10 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Accelerate Your Career?</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Join thousands of professionals who landed their dream jobs with ForsaTech
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-500  to-purple-600 text-white px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all font-medium text-sm"
            >
              <FiDownload className="inline mr-2" size={18} />
              Download App
            </motion.button>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;