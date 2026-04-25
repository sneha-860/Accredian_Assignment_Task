import React from 'react';

const clients = [
  "Reliance", "HCL", "IBM", "CRIF", "ADP", "Bayer", "Microsoft", "Google", "Amazon", "Tesla"
];

export function Clients() {
  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h3 className="text-xl font-black text-gray-400 tracking-[0.2em] uppercase mb-4">Trusted by Market Leaders</h3>
        <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full" />
      </div>
      
      <div className="relative">
        {/* Gradients to mask the edges for a smoother look */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-scroll whitespace-nowrap gap-20 py-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
           {/* Duplicate array for seamless infinity loop */}
           {[...clients, ...clients].map((client, idx) => (
             <div key={idx} className="flex-shrink-0 flex items-center justify-center">
               <span className="text-4xl md:text-5xl font-black text-gray-500 tracking-tighter uppercase select-none hover:text-brand-blue transition-colors cursor-default">
                 {client}
               </span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
