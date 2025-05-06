import { motion } from 'framer-motion';

const Statistics = () => {
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
             Business Impact Section <span className="text-indigo-600">(Statistics)</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Forsa-Tech helps developers and graduates stand out. Our AI-powered tools have helped many create standout resumes, find jobs, and prepare for interviews.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all text-center"
          >
            <div className="text-5xl font-bold text-indigo-600 mb-3">1,200+</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Clients</h3>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500 font-medium">55%</span>
              <span className="text-gray-500">Annual Growth</span>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all text-center"
          >
            <div className="text-5xl font-bold text-indigo-600 mb-3">500+</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Resumes Built</h3>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500 font-medium">80%</span>
              <span className="text-gray-500">Positive Feedback</span>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;