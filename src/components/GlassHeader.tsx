import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GlassHeader = () => {
  return (
    <header className="w-full p-8 rounded-lg sticky top-0 z-50 animate__animated animate__fadeIn bg-gradient-to-r from-transparent via-transparent to-transparent backdrop-blur-md shadow-2xl">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4"> {/* Flex container for logo and text */}
        <Image
            src="/vivalogon.png"
            alt="Viva Technology Logo"
            width={80} 
            height={80} 
            className="object-cover" // Optional: Ensure image maintains aspect ratio
          />
          <div className="text-2xl font-bold text-black ">
            Viva Technology
          </div>
          
        </div>

        <nav>
          <div className="flex justify-center space-x-6">
            {['industrial-visits', 'techchase', 'hitaishi', 'isr-activity', 'additional', 'contact'].map((item, index) => (
              <Link
                key={index}
                href={`#${item}`}
                className="p-4 text-black bg-white/30 hover:bg-white/50 rounded-lg cursor-pointer backdrop-blur-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              >
                {item.replace('-', ' ').toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GlassHeader;
