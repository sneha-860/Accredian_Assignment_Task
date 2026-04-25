'use client';
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The customized learning hubs significantly reduced our onboarding time for new product managers. Accredian's depth of industry knowledge is unparalleled and consistently ahead of market trends.",
    author: "Sarah Jenkins",
    role: "VP of Product, TechScale Solutions",
    avatar: "SJ",
    color: "from-blue-600 to-indigo-600"
  },
  {
    quote: "Standardizing our engineering leads on Gen-AI Mastery was the best strategic move this year. The CAT framework ensures the training actually sticks and translates to real productivity.",
    author: "Marcus Chen",
    role: "Chief Technology Officer, GlobalFin",
    avatar: "MC",
    color: "from-brand-blue to-blue-400"
  },
  {
    quote: "We've tried multiple corporate training partners, but Accredian's focus on tailored business impact sets them apart. They aren't just vendors; they are an extension of our growth team.",
    author: "Elena Rodriguez",
    role: "Head of Talent Development, InnovateCo",
    avatar: "ER",
    color: "from-indigo-600 to-blue-700"
  },
  {
    quote: "The ability to customize curriculums for our specific fintech stack was a game changer. Our team's agility has improved by 40% since the transformation.",
    author: "David Park",
    role: "Engineering Director, PayNext",
    avatar: "DP",
    color: "from-blue-500 to-cyan-500"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlay || !mounted) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, mounted]);

  const next = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!mounted) {
    return (
      <section id="testimonials" className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">Voice of Partners</h2>
            <div className="h-64 bg-gray-100 rounded-[2.5rem] animate-pulse"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Abstract Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">
                  Voice of <span className="text-brand-blue">Partners</span>
                </h2>
                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                  Trusted by global enterprises to redefine excellence through tailored learning ecosystems.
                </p>
            </div>
            
            <div className="flex gap-4">
               <button onClick={prev} className="h-14 w-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue hover:shadow-lg transition-all duration-300">
                  <ChevronLeft className="h-6 w-6" />
               </button>
               <button onClick={next} className="h-14 w-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue hover:shadow-lg transition-all duration-300">
                  <ChevronRight className="h-6 w-6" />
               </button>
            </div>
        </div>

        <div className="relative overflow-hidden pt-8 pb-12">
           <div 
             className="flex transition-transform duration-700 ease-out" 
             style={{ 
               transform: `translateX(-${current * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 100 : 33.33)}%)`,
               gap: '1.5rem'
             }}
           >
             {testimonials.map((item, idx) => (
               <div key={idx} className="flex-shrink-0 w-full lg:w-[calc(33.33%-1.5rem)] group">
                  <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-12px_rgba(26,115,232,0.1)] transition-all duration-500 flex flex-col h-[420px] relative">
                     {/* Rating dots */}
                     <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(i => <Star key={i} className="h-3.5 w-3.5 text-blue-500 fill-current" />)}
                     </div>

                     <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-8">
                        <Quote className="h-6 w-6 fill-current" />
                     </div>
                     
                     <p className="text-lg font-semibold text-gray-800 leading-relaxed mb-6 pr-2">
                       "{item.quote}"
                     </p>
                     
                     <div className="mt-auto flex items-center gap-4">
                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} font-black text-white flex items-center justify-center text-base shadow-sm`}>
                          {item.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base leading-tight">{item.author}</h4>
                          <p className="text-brand-blue font-semibold text-xs mt-1">{item.role}</p>
                        </div>
                     </div>

                     {/* Progress bar for active card */}
                     <div className={`absolute bottom-0 left-10 right-10 h-0.5 bg-brand-blue transition-all duration-500 ${current === idx ? 'opacity-40 scale-x-100' : 'opacity-0 scale-x-0'}`} />
                  </div>
               </div>
             ))}
           </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => { setIsAutoPlay(false); setCurrent(i); }}
                className={`h-2.5 rounded-full transition-all duration-500 ${current === i ? 'w-12 bg-brand-blue' : 'w-2.5 bg-gray-200'}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
