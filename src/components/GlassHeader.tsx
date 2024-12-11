"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GlassHeader = () => {
  useEffect(() => {
    // Dynamically add Font Awesome CDN for icons
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
  }, []);

  return (
    <nav className="bg-white/30 shadow-lg sticky top-0 z-50 py-4 sm:py-6 rounded-lg border border-white/30 backdrop-blur-md">
      <div className="container mx-auto px-4 flex items-center justify-between space-x-6 sm:space-x-8">
        {/* Logo and Institute Details */}
        <div className="flex items-center space-x-4 sm:space-x-6 flex-shrink-0 w-full sm:w-auto">
          <Image
            src="/vivalogon-removebg-preview.png"
            alt="VIVA Institute Logo"
            width={150}
            height={150}
            className="max-w-full h-auto"
          />
          <div className="text-gray-900 space-y-1 sm:space-y-2">
            <h6 className="text-red-500 text-xs sm:text-sm font-bold">
              Vishnu Waman Thakur Charitable Trust's
            </h6>
            <h5 className="text-blue-600 text-sm sm:text-lg font-bold">
              VIVA Institute of Technology
            </h5>
            <p className="text-xs sm:text-sm">
              Approved by AICTE New Delhi, Recognized by DTE, Govt. of Maharashtra,
              <br />
              Affiliated to the University of Mumbai
              <br />
              <span className="text-red-500 font-bold">
                ACCREDITED by NAAC with "B++" Grade
              </span>
            </p>
          </div>
        </div>

        {/* Navbar Links (Icons) */}
        <div className="flex items-center space-x-6 sm:space-x-8">
          {/* Facebook Icon */}
          <Link href="https://facebook.com" target="_blank">
            <i className="fab fa-facebook-f text-2xl text-blue-600 hover:text-blue-700 transition duration-200"></i>
          </Link>

          {/* LinkedIn Icon */}
          <Link href="https://linkedin.com" target="_blank">
            <i className="fab fa-linkedin-in text-2xl text-blue-700 hover:text-blue-800 transition duration-200"></i>
          </Link>

          {/* Instagram Icon */}
          <Link href="https://instagram.com" target="_blank">
            <i className="fab fa-instagram text-2xl text-pink-500 hover:text-pink-600 transition duration-200"></i>
          </Link>
        </div>
      </div>

      {/* Mobile Version (hidden on larger screens, visible on mobile) */}
      <div className="sm:hidden flex justify-between mt-4 space-x-6">
        <div className="w-full flex justify-center space-x-4">
          {/* Facebook Icon */}
          <Link href="https://facebook.com" target="_blank">
            <i className="fab fa-facebook-f text-2xl text-blue-600 hover:text-blue-700 transition duration-200"></i>
          </Link>

          {/* LinkedIn Icon */}
          <Link href="https://linkedin.com" target="_blank">
            <i className="fab fa-linkedin-in text-2xl text-blue-700 hover:text-blue-800 transition duration-200"></i>
          </Link>

          {/* Instagram Icon */}
          <Link href="https://instagram.com" target="_blank">
            <i className="fab fa-instagram text-2xl text-pink-500 hover:text-pink-600 transition duration-200"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default GlassHeader;
