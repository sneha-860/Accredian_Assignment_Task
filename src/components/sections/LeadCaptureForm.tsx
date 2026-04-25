'use client';
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Mail, User, Phone, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Gen-AI Mastery'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', program: 'Data Science & AI' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Failed to connect to the server.');
    }
  };

  return (
    <section className="py-32 bg-gray-50 overflow-hidden relative" id="contact">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(26,115,232,0.05),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          <div className="lg:w-5/12 bg-[#0a0a0a] p-12 lg:p-20 text-white flex flex-col relative overflow-hidden border-r border-white/5">
            {/* Background pattern for sidebar */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-12">
                <div className="inline-block px-5 py-2 rounded-xl bg-brand-blue/20 text-brand-blue text-xs font-black tracking-widest uppercase mb-8 border border-brand-blue/30">
                   Priority Access
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
                  Contact Our <br/>
                  <span className="text-brand-blue">Specialists</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
                   Schedule a priority callback with our senior corporate training consultants to tailor the perfect curriculum for your team.
                </p>
              </div>
              
              <div className="mt-auto space-y-10">
                 {[
                   { label: 'Strategic Roadmap', desc: 'Customized to your stack.' },
                   { label: 'Rapid Response', desc: 'Response within 12 business hours.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                         <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                         <h4 className="font-black text-white text-lg mb-1">{item.label}</h4>
                         <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 p-12 lg:p-20 bg-white">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-fade-in-up py-12">
                <div className="h-28 w-28 bg-green-50 rounded-full flex items-center justify-center mb-4">
                   <div className="h-20 w-20 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-200">
                     <CheckCircle className="h-12 w-12" />
                   </div>
                </div>
                <h3 className="text-3xl font-black text-gray-900 tracking-tighter">Enquiry Successful!</h3>
                <p className="text-gray-500 text-lg font-medium max-w-sm">Our corporate team will reach out to you within the next 12 business hours.</p>
                <Button variant="outline" className="mt-8 rounded-2xl px-12 py-8 border-gray-200 font-black text-gray-700 hover:bg-gray-50 bg-white shadow-sm" onClick={() => setStatus('idle')}>
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 animate-fade-in-up">
                <div className="flex flex-col space-y-3">
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter leading-none">Get In Touch</h3>
                  <div className="h-1.5 w-16 bg-brand-blue rounded-full"></div>
                </div>
                
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center text-red-600 font-medium animate-fade-in-up">
                    <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-black text-gray-900 ml-1 uppercase tracking-wider">Full Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none group-focus-within:text-brand-blue transition-colors">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-14 block w-full bg-gray-50/50 border-gray-100 border-2 rounded-[1.25rem] py-4 px-6 text-gray-900 font-medium focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-black text-gray-900 ml-1 uppercase tracking-wider">Work Email</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none group-focus-within:text-brand-blue transition-colors">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-14 block w-full bg-gray-50/50 border-gray-100 border-2 rounded-[1.25rem] py-4 px-6 text-gray-900 font-medium focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-black text-gray-900 ml-1 uppercase tracking-wider">Mobile Number</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none group-focus-within:text-brand-blue transition-colors">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="pl-14 block w-full bg-gray-50/50 border-gray-100 border-2 rounded-[1.25rem] py-4 px-6 text-gray-900 font-medium focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-black text-gray-900 ml-1 uppercase tracking-wider">Learning Hub</label>
                    <div className="relative">
                      <select
                        name="program"
                        id="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="block w-full bg-gray-50/50 border-gray-100 border-2 rounded-[1.25rem] py-4 px-6 text-gray-900 font-semibold focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="Product & Innovation">Product & Innovation Hub</option>
                        <option value="Gen-AI Mastery">Gen-AI Mastery Hub</option>
                        <option value="Leadership Elevation">Leadership Elevation Hub</option>
                        <option value="Tech & Data Insights">Tech & Data Insights Hub</option>
                        <option value="Operations Excellence">Operations Excellence Hub</option>
                        <option value="Digital Enterprise">Digital Enterprise Hub</option>
                        <option value="Fintech Innovation Lab">Fintech Innovation Lab Hub</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-gray-400">
                         <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button type="submit" className="w-full py-8 text-xl font-black rounded-[1.5rem] shadow-[0_12px_32px_rgba(26,115,232,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all shine-effect" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Processing...' : 'Submit Request'}
                  </Button>
                  <p className="text-center mt-6 text-sm text-gray-400 font-medium">
                     By clicking submit, you agree to our <Link href="#" className="text-brand-blue underline underline-offset-4">Privacy Policy</Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
