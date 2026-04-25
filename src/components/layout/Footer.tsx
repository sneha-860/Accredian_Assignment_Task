import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-0 font-sans">
      {/* Professional CTA Banner - Balanced & Spaced */}
      <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-brand-blue to-indigo-800 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-[0_40px_80px_-16px_rgba(26,115,232,0.3)]">
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[1.2]">
                  Want to Learn More <br className="hidden md:block" />
                  About Our Solutions?
                </h2>
                <p className="text-blue-50 text-lg md:text-xl font-medium opacity-90 max-w-xl">
                  Strategic guidance for your team’s transformation, delivered by our senior corporate consultants.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Button size="lg" className="!bg-white !text-brand-blue hover:!bg-gray-100 px-12 py-8 text-xl font-black rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-wide">Accredian</h3>
            <p className="text-sm text-gray-400 font-medium">credentials that matter</p>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed font-medium">
              We focus on building practical learning ecosystems for you. Upgrade your team's capabilities with our top-notch programs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Accredian</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Why Accredian</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Admission Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Referral Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-400 font-medium">enterprise@accredian.com</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-400 font-medium">+91 90696 54065</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-gray-400 font-medium leading-relaxed">
                  Data Science Technologies Private Limited,
                  Phase IV, Udyog Vihar, Sector 18, Gurugram,
                  Haryana 122015
                </span>
              </li>
            </ul>
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
              <div className="flex space-x-6">
                {[
                  { name: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                  { name: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                  { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                  { name: 'YouTube', path: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all transform hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
