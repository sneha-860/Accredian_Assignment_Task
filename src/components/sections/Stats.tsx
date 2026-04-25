import React from 'react';

const stats = [
  { id: 1, name: 'Professionals trained across top-tier companies', value: '10,000+' },
  { id: 2, name: 'Sessions delivered by industry experts', value: '200+' },
  { id: 3, name: 'Active learners enhancing their skillsets', value: '5,000+' },
];

export function Stats() {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden" id="stats">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Our Global Impact</h2>
          <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <div key={stat.id} className="relative group p-12 rounded-[2.5rem] bg-indigo-950/20 border border-white/5 hover:border-brand-blue/30 transition-all duration-500 overflow-hidden text-center group">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative">
                <dd className="text-7xl font-black mb-4 tracking-tighter text-white group-hover:text-brand-blue transition-colors duration-500">
                  {stat.value}
                </dd>
                <dt className="text-lg font-bold text-gray-400 uppercase tracking-widest px-4 group-hover:text-gray-200 transition-colors">
                  {stat.name}
                </dt>
                
                {/* Secondary detail */}
                <div className="mt-8 flex items-center justify-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                   <div className="h-1 w-1 bg-brand-blue rounded-full" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue">Certified Benchmark</span>
                   <div className="h-1 w-1 bg-brand-blue rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
