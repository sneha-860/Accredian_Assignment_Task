import React from 'react';
import { Target, Users, Zap, ShieldCheck, Globe, LineChart, Cpu } from 'lucide-react';

const features = [
  {
    name: 'Tailored Solutions',
    description: 'Customized learning paths designed to align with your organization\'s unique goals and challenges.',
    icon: Target,
  },
  {
    name: 'Expert Guidance',
    description: 'Direct mentorship from industry practitioners ensuring a deep dive into practical, strategic insights.',
    icon: Users,
  },
  {
    name: 'Innovative Framework',
    description: 'Our proprietary CAT framework ensures learners not only understand but also apply concepts effectively.',
    icon: Zap,
  },
  {
    name: 'Advanced Technology',
    description: 'Leveraging cutting-edge tools and platforms to deliver a seamless and engaging learning experience.',
    icon: Cpu,
  },
  {
    name: 'Diverse Offerings',
    description: 'A wide range of domain expertise from AI mastery to leadership elevation to suit every role.',
    icon: Globe,
  },
  {
    name: 'Proven Impact',
    description: 'Measured results through our track record of enhancing workforce capabilities globally.',
    icon: LineChart,
  },
  {
    name: 'Flexible Delivery',
    description: 'Blended learning models tailored for the modern, fast-paced enterprise environment.',
    icon: ShieldCheck,
  },
];

export function AccredianEdge() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            The <span className="text-brand-blue">Accredian</span> Edge
          </h2>
          <p className="text-xl text-gray-600 font-medium">
             Why leading organizations choose us for their strategic transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col items-start p-10 bg-white rounded-[2.5rem] border border-gray-100/50 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(26,115,232,0.1)] transition-all duration-500 group ${idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gray-50 text-brand-blue mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 transform group-hover:scale-110 shadow-inner">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">{feature.name}</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
