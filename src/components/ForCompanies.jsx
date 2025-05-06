import { motion } from 'framer-motion';
import { FiArrowRight, FiBriefcase, FiFilter, FiClipboard, FiUsers, FiBarChart2,  } from 'react-icons/fi';

const ForCompanies = () => {
  const features = [
    {
      icon: <FiBriefcase className="text-indigo-600" size={24} />,
      title: "Custom Dashboards",
      description: "Manage job listings & candidates efficiently",
      link: "Learn more"
    },
    {
      icon: <FiFilter className="text-indigo-600" size={24} />,
      title: "Smart Filtering",
      description: "Advanced resume scoring system",
      link: "Learn more"
    },
    {
      icon: <FiClipboard className="text-indigo-600" size={24} />,
      title: "Technical Tests",
      description: "Built-in assessment functionality",
      link: "Learn more"
    },
    {
      icon: <FiUsers className="text-indigo-600" size={24} />,
      title: "Applicant Tracking",
      description: "Trace progress & schedule interviews",
      link: "Learn more"
    },
    {
      icon: <FiBarChart2 className="text-indigo-600" size={24} />,
      title: "Hiring Analytics",
      description: "Get data-driven insights",
      link: "Learn more"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
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
            For <span className="text-indigo-600">Companies & HR</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 max-w-2xl mx-auto"
      >
        Powerful tools to streamline your hiring process and find top tech talent
      </motion.p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-50 rounded-lg">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
          </div>
          <p className="text-gray-500 mb-6">{feature.description}</p>
          <a href="#" className="text-indigo-600 font-medium flex items-center gap-2 hover:text-indigo-800 transition-colors">
            {feature.link} <FiArrowRight size={16} />
          </a>
        </motion.div>
      ))}
    </div>

    {/* CTA & Testimonials */}
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Register Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="lg:w-1/2 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl p-10 text-white"
      >
        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
        <p className="mb-6 opacity-90">Join hundreds of companies who found their perfect candidates with ForsaTech</p>
        <button className="bg-white text-indigo-600 px-8 py-3.5 rounded-lg shadow-md hover:shadow-xl transition-all font-medium">
          Register as a company
        </button>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our happy clients</h3>
        <div className="space-y-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i+30}.jpg`} 
                  alt="Client" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Mohammed Al-Farsi</h4>
                  <p className="text-gray-500 text-sm">HR Director, TechSolutions</p>
                </div>
              </div>
              <p className="text-gray-600">
                ForsaTech reduced our hiring time by 60% with their smart filtering. The technical tests integration saved us hundreds of hours!
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default ForCompanies;