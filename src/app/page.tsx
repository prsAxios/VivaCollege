"use client"
import GlassHeader from '@/components/GlassHeader';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <div className="bg-gradient-to-r from-white via-gray-100 to-white">
      {/* GlassHeader imported and used here */}
      <GlassHeader />

      {/* Main content below the header */}
      <main className="flex flex-col items-center justify-center min-h-screen text-gray-900">
        
        {/* Flex container for all sections */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {/* Industrial Visits Section */}
          <section
            id="industrial-visits"
            className="p-6 max-w-screen-md w-full md:w-1/2 bg-white/90 rounded-lg shadow-2xl backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex items-center gap-8"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Industrial Visits</h2>
              <p className="text-lg mb-4">
                Learn about various industrial visits and the experiences we offer.
              </p>
              <Link
                href="/industrial-visits"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
              >
                Explore
              </Link>
            </div>
            <img 
              src="/medical.jpeg" 
              alt="Industrial Visits" 
              className="w-48 h-48 object-cover rounded-lg" 
            />
          </section>

          {/* TechChase Section */}
          <section
            id="techchase"
            className="p-6 max-w-screen-md w-full md:w-1/2 shadow-2xl bg-white/90 rounded-lg backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex items-center gap-8"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">TechChase</h2>
              <p className="text-lg mb-4">
                Explore the latest tech trends with our TechChase initiative.
              </p>
              <Link
                href="/techchase"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
              >
                Explore
              </Link>
            </div>
            <img 
              src="/ISR.jpeg" 
              alt="TechChase" 
              className="w-48 h-48 object-cover rounded-lg" 
            />
          </section>

          {/* Hitaishi Section */}
          <section
            id="hitaishi"
            className="p-6 max-w-screen-md w-full md:w-1/2 shadow-2xl bg-white/90 rounded-lg backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex items-center gap-8"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Hitaishi</h2>
              <p className="text-lg mb-4">
                Discover the Hitaishi project and its contributions to the tech world.
              </p>
              <Link
                href="/hitaishi"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
              >
                Explore
              </Link>
            </div>
            <img 
              src="/Trophy.jpeg" 
              alt="Hitaishi" 
              className="w-48 h-48 object-cover rounded-lg" 
            />
          </section>

          {/* ISR Activity Section */}
          <section
            id="isr-activity"
            className="p-6 max-w-screen-md w-full md:w-1/2 shadow-2xl bg-white/90 rounded-lg backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex items-center gap-8"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">ISR Activity</h2>
              <p className="text-lg mb-4">
                Get involved in the ISR activities to make a positive social impact.
              </p>
              <Link
                href="/isr-activity"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
              >
                Explore
              </Link>
            </div>
            <img 
              src="/image1.jpg" 
              alt="ISR Activity" 
              className="w-48 h-48 object-cover rounded-lg" 
            />
          </section>

          {/* Additional Activities Section */}
          <section
            id="additional"
            className="p-6 max-w-screen-md w-full md:w-1/2 shadow-2xl bg-white/90 rounded-lg backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex items-center gap-8"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Additional Activities</h2>
              <p className="text-lg mb-4">
                Here you can find more activities and events hosted by our organization.
              </p>
              <Link
                href="/additional-activities"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
              >
                Explore
              </Link>
            </div>
            <img 
              src="/dahanu.jpg" 
              alt="Additional Activities" 
              className="w-48 h-48 object-cover rounded-lg" 
            />
          </section>

          {/* Contact Us Section */}
          <section
            id="contact"
            className="p-6 max-w-screen-md w-full md:w-1/2 shadow-2xl bg-white/90 rounded-lg backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex items-center gap-8"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-lg mb-4">
                Get in touch with us for more details or inquiries about the activities.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
              >
                Explore
              </Link>
            </div>
            <img 
              src="/contactUs.jpg" 
              alt="Contact Us" 
              className="w-48 h-48 object-cover rounded-lg" 
            />
          </section>
        </div>
      </main>

      {/* Footer */}
      <div className='mt-10'>
        <Footer />
      </div>

    </div>
  );
}
