'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I determine which training program is right for my team?',
    answer: 'We offer a collaborative discovery session where our experts analyze your workforce gaps and business goals to recommend the most impactful learning paths tailored for your organization.'
  },
  {
    question: 'Can the curriculum be customized for our specific industry?',
    answer: 'Yes, our programs are highly modular. We can incorporate industry-specific case studies, tools, and real-world scenarios that are directly relevant to your business domain.'
  },
  {
    question: 'What is the background of the instructors at Accredian?',
    answer: 'Our instructors are seasoned industry practitioners from top-tier global firms. They bring years of practical, hands-on experience, ensuring that the training is deeply rooted in current industry trends.'
  },
  {
    question: 'How do you measure the impact of the training programs?',
    answer: 'We utilize a comprehensive impact assessment framework that tracks skill acquisition, learner engagement, and progress against organizational benchmarks throughout the program.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our programs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-blue/30 hover:shadow-lg"
            >
              <button
                className="w-full px-8 py-6 flex justify-between items-center bg-white text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-bold text-gray-900 pr-8 group-hover:text-brand-blue transition-colors">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-brand-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0 group-hover:text-brand-blue transition-colors" />
                )}
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                role="region"
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
