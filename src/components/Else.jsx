import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Thanks to ForsaTech, I created a great resume and found a job I love all without paying anything.",
    name: "Safa",
    position: "Front End Developer",
    date: "November 2023",
    image: "https://ui-avatars.com/api/?name=Safa&background=random"
  },
  {
    quote: "We posted 3 openings and hired two amazing interns through ForsaTech. It just works.",
    name: "Mohamad",
    position: "HR Manager",
    company: "TechSolutions Inc.",
    image: "https://ui-avatars.com/api/?name=Mohamad&background=random"
  }
];

const questions = [
    {
      question: "Can I download my resume in PDF format after creating it ?",
      answer: "Yes, you can download your completed resume in multiple formats, such as PDF."
    },
    {
      question: "Can you help me check if my resume matches a specific job ?",
      answer: "Absolutely! We offer a resume evaluation service that compares your resume to job requirements to determine compatibility."
    },
    {
      question: "Can I apply directly to jobs through the Forsatek platform ?",
      answer: "Yes, you can apply directly, and your resume will be sent to the employer."
    }
  ];

const Else = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };
  
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
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div 
            key={`testimonial-${index}`} 
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full"
          >
          
              <div className="flex items-start mb-6">
              <img 
  src={testimonial.image} 
  alt={testimonial.name} 
  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4"
/>

              <div>
              <h4 className="font-semibold text-lg break-words truncate max-w-full">{testimonial.name}</h4>
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
        <div className="space-y-4 max-w-3xl mx-auto px-20">
          {questions.map((item, index) => (
  <div 
    key={`question-${index}`} 
    className="border-b border-gray-200 pb-4"
  >
    <div 
      className="flex justify-between items-start cursor-pointer group"
      onClick={() => toggleQuestion(index)} 
    >
      <h3 className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors">
        {item.question}
      </h3>
      <FiChevronDown
        className={`text-indigo-600 mt-1 flex-shrink-0 transform transition-transform ${
          openIndex === index ? 'rotate-180' : ''
        }`}
      />
    </div>

    
    {openIndex === index && (
      <p className="mt-3 text-gray-600 pl-2">{item.answer}</p>
    )}
  </div>
))}

        </div>
      </motion.div>
  </div>

    


  );
};

export default Else;