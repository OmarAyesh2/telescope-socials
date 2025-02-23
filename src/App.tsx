import React from 'react';
import { Instagram, Facebook, Linkedin, Globe } from 'lucide-react';

const TiktokIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.6642 10.0536C20.9521 8.24003 19.9944 5.81471 20.0001 3.29333V2.66666H15.9601V20.4C15.9312 21.3986 15.5196 22.3433 14.8101 23.0399C14.1006 23.7365 13.1486 24.1306 12.1501 24.1413C10.0401 24.1413 8.32008 22.4213 8.32008 20.2813C8.32008 17.7613 10.6401 15.8213 13.1601 16.5013V12.3813C8.44008 11.8213 4.32008 15.4613 4.32008 20.2813C4.32008 24.9613 8.12008 28.1413 12.1201 28.1413C16.4801 28.1413 20.0001 24.6213 20.0001 20.2813V11.5013C21.8847 12.8435 24.1013 13.5698 26.3601 13.5813V9.54133C25.0352 9.54754 23.7442 9.06453 22.6642 10.0536Z"
      fill="currentColor"
    />
  </svg>
);

function App() {
  const links = [
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/telescopeagency?igsh=MXc1cHh5ZnQ3c2V4bA==',
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/share/1CE8Px6Fwd/',
      icon: <Facebook className="w-6 h-6" />,
    },
    {
      title: 'TikTok',
      url: 'https://www.tiktok.com/@telescope_agency3?_t=ZS-8u9XpYYSpGR&_r=13',
      icon: <TiktokIcon />,
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/telescope-agency-2397aa345',
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      title: 'Website',
      url: 'https://www.telescope-agency.com',
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 pt-8">
          <div className="mb-6 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
            <div className="w-full h-full bg-slate-900 rounded-full p-2">
              <img
                src="https://github.com/OmarAyesh2/svg/blob/main/Untitled-1-01.png?raw=true"
                alt="Telescope Agency Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Telescope Agency</h1>
          <div className="text-right w-full space-y-2 text-lg md:text-xl text-gray-300" dir="rtl">
            <p>شريكك الأمثل لتحقيق النجاح الرقمي</p>
            <p>تسويق | إبداع | استراتيجيات</p>
            <p>تواصل معنا الآن لتحقيق أهدافك</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/10 hover:bg-white/20 
                       transition-all duration-300 rounded-xl p-4 backdrop-blur-sm
                       border border-white/10 hover:border-white/20 group"
            >
              <span className="font-semibold text-lg">{link.title}</span>
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-400">
          <p>© 2025 Telescope Agency. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;