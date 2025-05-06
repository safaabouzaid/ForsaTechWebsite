import { motion } from 'framer-motion';
import interviewImage from '../assets/images/heroo.svg';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-tight text-gray-900">
              Transform Your Career Path with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Forsa-Tech</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              AI-powered platform that helps you build standout resumes, prepare for interviews, 
              and connect with top tech companies worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all font-medium text-sm"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-indigo-600 text-indigo-600 px-7 py-3.5 rounded-lg hover:bg-indigo-50 transition-all font-medium text-sm"
              >
                Watch Demo
              </motion.button>
            </div>

        
            
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-xl">
              <img
                src={interviewImage}
                alt="Career Growth"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;