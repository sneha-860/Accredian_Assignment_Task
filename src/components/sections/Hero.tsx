import React from 'react';
import { Button } from '../ui/Button';
import { CheckCircle, BrainCircuit, Plus, User, Globe } from 'lucide-react';

export function Hero() {
  const features = [
    "Tailored Solutions: Customized to your specific business needs.",
    "Industry Insights: Real-world knowledge from top experts.",
    "Expert Guidance: Mentorship that drives professional growth."
  ];

  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-40 overflow-hidden bg-white">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 z-0" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-50 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-brand-blue text-sm font-semibold mb-8 border border-blue-100">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              Enterprise Training Redefined
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-brand-dark tracking-tighter leading-[1.1] mb-8">
              Next-Gen <br/>
              <span className="text-gradient">Expertise</span> <br/>
              For Your Enterprise
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed font-medium max-w-xl">
              Empower your teams with industry-leading knowledge and strategic execution through our premium learning hubs.
            </p>

            <ul className="mt-10 space-y-5">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className="h-6 w-6 rounded-md bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-brand-blue transition-colors duration-300">
                    <CheckCircle className="h-4 w-4 text-brand-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">{feature.split(':')[0]} <span className="font-normal text-gray-500">:{feature.split(':')[1]}</span></span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Button size="lg" className="w-full sm:w-auto font-bold text-lg px-12 py-8 shadow-2xl shadow-blue-500/30 hover:scale-105 transition-transform shine-effect">
                Get Started
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative h-[600px]">
             {/* Minimalist Professional Mosaic */}
             <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-6 p-8">
                {/* Metric 1: Quality */}
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:shadow-2xl hover:-translate-y-1">
                   <div className="h-1 bg-brand-blue w-12 mb-8" />
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Quality Standard</p>
                   <h3 className="text-4xl font-black text-gray-900 tracking-tighter">Gold Tier</h3>
                   <p className="text-sm text-gray-400 mt-4 font-medium leading-relaxed">
                      Accredited by global business regulatory bodies for training excellence.
                   </p>
                </div>

                {/* Metric 2: Network */}
                <div className="bg-brand-dark p-10 rounded-2xl shadow-2xl transition-all hover:scale-[1.02]">
                   <div className="h-1 bg-brand-blue w-12 mb-8" />
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300/50 mb-2">Enterprise Network</p>
                   <h3 className="text-4xl font-black text-white tracking-tighter">500+</h3>
                   <p className="text-sm text-gray-400 mt-4 font-medium leading-relaxed">
                      Leading multinational corporations leverage our strategic learning hubs.
                   </p>
                </div>

                {/* Metric 3: Success */}
                <div className="bg-gray-50/50 p-10 rounded-2xl border border-gray-100 flex flex-col justify-between">
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Avg. Performance</p>
                      <h3 className="text-4xl font-black text-gray-900 tracking-tighter">+45%</h3>
                   </div>
                   <div className="mt-8 flex items-center gap-4">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                         <div className="h-full w-3/4 bg-brand-blue" />
                      </div>
                      <span className="text-xs font-black text-brand-blue italic">KPI Uplift</span>
                   </div>
                </div>

                {/* Metric 4: Satisfaction */}
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-center items-center text-center">
                   <div className="h-16 w-16 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4">
                      <CheckCircle className="h-8 w-8" />
                   </div>
                   <p className="text-2xl font-black text-gray-900">9.8/10</p>
                   <p className="text-[10px] items-center font-black uppercase tracking-widest text-gray-400 mt-1">Client Satisfaction</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
