"use client"
import { useEffect } from 'react';
import { gsap } from 'gsap';
import GlassHeader from '@/components/GlassHeader';
import Link from 'next/link';
import Footer from '@/components/Footer';


export default function Home() {
  useEffect(() => {
    // Select all section divs
    const sections = document.querySelectorAll('section');
    
    // Loop through all the sections and apply animations
    sections.forEach((section, index) => {
      const direction = Math.random() > 0.5 ? 'left' : 'right'; // Randomly choose left or right

      gsap.fromTo(
        section,
        {
          x: direction === 'left' ? '-100vw' : '100vw', // Starting from left or right off-screen
          opacity: 0, // Start with opacity 0
        },
        {
          x: 0, // Move to center
          opacity: 1, // Fade in
          duration: 1.5, // Duration of the animation
          ease: 'power3.out', // Ease type
          delay: index * 0.2, // Stagger the animations
        }
      );
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-white via-gray-100 to-white">
      {/* GlassHeader imported and used here */}
      <GlassHeader />

      {/* Main content below the header */}
      <main className="flex flex-col items-center justify-center min-h-screen text-gray-900">
        {/* Main Section */}
        <section
          id="industrial-visits"
          className="p-6 mt-10 max-w-screen-md w-full bg-white/90 rounded-lg shadow-2xl backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Industrial Visits</h2>
          <p className="text-lg mb-4">
            Learn about various industrial visits and the experiences we offer.
          </p>
          {/* Explore Button */}
          <Link
            href="/industrial-visits"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
          >
            Explore
          </Link>
        </section>

        <section
          id="techchase"
          className="p-6 mt-10 max-w-screen-md w-full shadow-2xl bg-white/90 rounded-lg backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">TechChase</h2>
          <p className="text-lg mb-4">
            Explore the latest tech trends with our TechChase initiative.
          </p>
          {/* Explore Button */}
          <Link
            href="/techchase"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
          >
            Explore
          </Link>
        </section>

        <section
          id="hitaishi"
          className="p-6 mt-10 max-w-screen-md w-full shadow-2xl bg-white/90 rounded-lg backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Hitaishi</h2>
          <p className="text-lg mb-4">
            Discover the Hitaishi project and its contributions to the tech world.
          </p>
          {/* Explore Button */}
          <Link
            href="/hitaishi"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
          >
            Explore
          </Link>
        </section>

        <section
          id="isr-activity"
          className="p-6 mt-10 max-w-screen-md w-full shadow-2xl bg-white/90 rounded-lg backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">ISR Activity</h2>
          <p className="text-lg mb-4">
            Get involved in the ISR activities to make a positive social impact.
          </p>
          {/* Explore Button */}
          <Link
            href="/isr-activity"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
          >
            Explore
          </Link>
        </section>

        <section
          id="additional"
          className="p-6 mt-10 max-w-screen-md w-full shadow-2xl bg-white/90 rounded-lg  backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Additional Activities</h2>
          <p className="text-lg mb-4">
            Here you can find more activities and events hosted by our organization.
          </p>
          {/* Explore Button */}
          <Link
            href="/additional-activities"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
          >
            Explore
          </Link>
        </section>

        <section
          id="contact"
          className="p-6 mt-10 max-w-screen-md w-full shadow-2xl bg-white/90 rounded-lg  backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact TPO</h2>
          <p className="text-lg mb-4">
            Get in touch with us for more details or inquiries about the activities.
          </p>
          {/* Explore Button */}
          <Link
            href="/contact"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
          >
            Explore
          </Link>
        </section>

        
      </main>
       {/* Footer */}

    </div>

    
           
  );
}
