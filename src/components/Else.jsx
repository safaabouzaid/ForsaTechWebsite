import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';


const questions = [
    {
      question: "How long does the recruitment process take?",
      answer: "Most companies complete their hiring process within 2-3 weeks using our platform."
    },
    {
      question: "Can we integrate with our existing HR software?",
      answer: "Yes, we offer seamless integration with most popular HR systems."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in tech recruitment but our tools work well for all industries."
    }
  ];

const Else = () => {
  return (
    <div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
      className="mb-16"
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
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-gray-800">{item.question}</h4>
            <FiChevronDown className="text-indigo-600" />
          </div>
          <p className="mt-2 text-gray-600">{item.answer}</p>
        </div>
      ))}
    </div>
  </motion.div>
  </div>

    


  );
};

export default Else;