import React from 'react';
import { Button } from '../ui/Button';
import { BookOpen, BrainCircuit, LineChart, ShieldCheck, Zap, Globe, Layers } from 'lucide-react';

const hubs = [
  { name: 'Product & Innovation Hub', icon: BookOpen, color: 'bg-orange-100 text-orange-600' },
  { name: 'Gen-AI Mastery', icon: BrainCircuit, color: 'bg-blue-100 text-blue-600' },
  { name: 'Leadership Elevation', icon: Zap, color: 'bg-purple-100 text-purple-600' },
  { name: 'Tech & Data Insights', icon: LineChart, color: 'bg-green-100 text-green-600' },
  { name: 'Operations Excellence', icon: ShieldCheck, color: 'bg-red-100 text-red-600' },
  { name: 'Digital Enterprise', icon: Globe, color: 'bg-teal-100 text-teal-600' },
  { name: 'Fintech Innovation Lab', icon: Layers, color: 'bg-indigo-100 text-indigo-600' },
];

export function Programs() {
  return (
    <section className="py-24 bg-gray-50/50" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 px-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Domain <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Propel your organization forward with specialized learning hubs designed for high-stakes enterprise environments.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hubs.map((hub, idx) => (
            <div key={idx} className="group relative bg-white rounded-[2rem] p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(26,115,232,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
               <div className={`h-20 w-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${hub.color} shadow-inner`}>
                 <hub.icon className="h-10 w-10" />
               </div>
               <h3 className="text-xl font-black text-gray-900 mb-8 min-h-[3.5rem] leading-tight">
                 {hub.name}
               </h3>
               
               <div className="mt-auto w-full pt-6 border-t border-gray-50 flex flex-col gap-3">
                  <Button variant="outline" size="sm" className="w-full border-gray-200 text-gray-700 font-bold hover:!bg-brand-blue hover:!text-white transition-all duration-300 rounded-xl py-6">
                    View Programs
                  </Button>
               </div>
               
               {/* Accent Line */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
