import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBriefcase, FiFilter, FiClipboard, FiUsers, FiBarChart2 } from 'react-icons/fi';

const ForCompanies = () => {
  const [showForm, setShowForm] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-forsatech.onrender.com/admin-dash/request-registration/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
          },
        body: JSON.stringify({
          company_name: companyName,
          contact_email: contactEmail,
        }),
      });

      if (response.ok) {
        alert('Your registration request has been sent! We will contact you by email.');
        setShowForm(false);
        setCompanyName('');
        setContactEmail('');
      } else {
        alert('There was an issue. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending request.');
    }
  };

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
      description: "",
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
    <section id="companies" className="py-20 px-6 bg-gray-50">
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

        {/* Features */}
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
              <a href="#" className="text-indigo-600 font-medium flex items-center gap-2 hover:text-indigo-600 transition-colors">
                {feature.link} <FiArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Register */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-indigo-50 rounded-2xl p-10 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Join companies that have found their ideal candidates with ForsaTech.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all font-medium text-sm"
          >
            Register as a company
          </button>
        </motion.div>

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">Company Registration</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Contact Email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <div className="flex justify-end gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ForCompanies;
