import React from 'react';

const steps = [
  {
    step: 'C',
    title: 'Concept',
    description: 'Master the core foundational theories through intensive case-driven modules.'
  },
  {
    step: 'A',
    title: 'Application',
    description: 'Bridge theory and practice using real-world enterprise datasets and simulations.'
  },
  {
    step: 'T',
    title: 'Transformation',
    description: 'Translate learning into measurable business outcomes and team evolution.'
  }
];

export function Process() {
  return (
    <section className="py-24 bg-white" id="cat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
          The <span className="text-brand-blue">CAT</span> Framework
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-20 font-medium">
           Our proprietary learning methodology ensuring learners not only understand but also master the application of complex domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[3rem] left-[20%] right-[20%] h-1 bg-blue-50 z-0"></div>

          {steps.map((item, index) => (
            <div key={item.step} className="relative z-10 flex flex-col items-center group">
              <div className="h-24 w-24 rounded-3xl bg-white border-4 border-brand-blue text-brand-blue font-black text-4xl flex items-center justify-center mb-8 shadow-xl shadow-blue-100 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 px-6 text-base leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
