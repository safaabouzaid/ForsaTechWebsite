import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const testimonials = [
    {
      quote: "Thanks to ForsaTech, I created a great resume and found a job I love all without paying anything.",
      name: "Jocopeline Wright",
      position: "UI/UX Designer",
      date: "November 2023",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "We posted 3 openings and hired two amazing interns through ForsaTech. It just works.",
      name: "Michael Johnson",
      position: "HR Manager",
      company: "TechSolutions Inc.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];
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
      className="mb-20 m-25"
    >
       <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our happy clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={`testimonial-${index}`} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-5"
                />
              <div>
              <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
              </div>
            </div>
            <p className="text-gray-700 italic relative pl-5 before:content-around before:absolute before:left-0 before:text-4xl before:text-gray-300 before:top-0 before:leading-none">
                {testimonial.quote}
              </p>
          </div>
        ))}
      </div>
    </motion.div>
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently asked questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {questions.map((item, index) => (
            <div 
              key={`question-${index}`} 
              className="border-b border-gray-200 pb-4"
            >
              <div className="flex justify-between items-start cursor-pointer group">
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {item.question}
                </h3>
                <FiChevronDown className="text-indigo-600 mt-1 flex-shrink-0 transform group-hover:rotate-180 transition-transform" />
              </div>
              <p className="mt-3 text-gray-600 pl-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </motion.div>
  </div>

    


  );
};

export default Else;