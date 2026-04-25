import React from 'react';
import { Search, PenTool, BarChart3 } from 'lucide-react';

const steps = [
  {
    title: 'Discover & Align',
    description: 'We begin with a deep dive into your business objectives and workforce gaps to align our training with your goals.',
    icon: Search
  },
  {
    title: 'Design & Deliver',
    description: 'Our experts craft a customized curriculum and deliver it through high-impact, interactive sessions.',
    icon: PenTool
  },
  {
    title: 'Measure & Scale',
    description: 'We assess the impact on performance and provide insights to help you scale these capabilities across the organization.',
    icon: BarChart3
  }
];

export function Delivery() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="process">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(rgba(26,115,232,0.03)_2px,transparent_1px)] [background-size:40px_40px] opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 px-4">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
            How We Deliver Results <br/>
            <span className="text-gradient">That Matter</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            A precision-engineered delivery model built to transform your workforce's capabilities at scale.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop - simplified and cleaner */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-blue-100 to-transparent z-0"></div>
          
          <div className="space-y-20 md:space-y-0 md:grid md:grid-cols-3 md:gap-16">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="relative flex flex-col items-center">
                   <div className="h-28 w-28 rounded-[2.5rem] bg-white border border-gray-100 text-brand-blue flex items-center justify-center z-10 shadow-xl shadow-blue-500/5 group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110 transition-all duration-500 transform-gpu">
                      <step.icon className="h-12 w-12" />
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 h-10 w-10 bg-brand-dark text-white rounded-xl flex items-center justify-center font-black text-sm border-4 border-white shadow-lg">
                        0{idx + 1}
                      </div>
                   </div>
                   <div className="mt-10">
                      <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-500 font-medium leading-relaxed max-w-sm px-4">
                        {step.description}
                      </p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
