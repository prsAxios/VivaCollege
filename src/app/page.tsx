"use client";
import GlassHeader from "@/components/GlassHeader";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  
    <div className="bg-gradient-to-r from-white via-gray-100 to-white">
        <GlassHeader />
      {/* Full-screen video section */}
      <div className="relative w-full h-screen -mt-6">
  {/* Video Background */}
  <video
    src="whitelines.mp4"
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover"
  ></video>
  
  {/* Optional Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>
  
  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-gradient-to-r from-white via-red-800 to-white z-10 px-4 mb-36">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Viva Institute of Technology</h1>
    <p className="text-lg md:text-2xl mb-6">
      Discover innovation, creativity, and opportunities with us.
    </p>
    <div>
      <a
        href="#explore"
        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg text-lg transition-all duration-300"
      >
        Explore Now
      </a>
    </div>
  </div>
</div>
    

      {/* Main content section */}
      <main className="flex flex-col items-center justify-center min-h-screen text-gray-900 mt-10">
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {/* Sections */}
          {[
            {
              id: "industrial-visits",
              title: "Industrial Visits",
              description: "Learn about various industrial visits and the experiences we offer.",
              href: "/industrial-visits",
              imgSrc: "/medical.jpeg",
              imgAlt: "Industrial Visits",
            },
            {
              id: "techchase",
              title: "TechChase",
              description: "Explore the latest tech trends with our TechChase initiative.",
              href: "/techchase",
              imgSrc: "/ISR.jpeg",
              imgAlt: "TechChase",
            },
            {
              id: "hitaishi",
              title: "Hitaishi",
              description: "Discover the Hitaishi project and its contributions to the tech world.",
              href: "/hitaishi",
              imgSrc: "/Trophy.jpeg",
              imgAlt: "Hitaishi",
            },
            {
              id: "isr-activity",
              title: "ISR Activity",
              description: "Get involved in the ISR activities to make a positive social impact.",
              href: "/isr-activity",
              imgSrc: "/image1.jpg",
              imgAlt: "ISR Activity",
            },
            {
              id: "additional",
              title: "Additional Activities",
              description:
                "Here you can find more activities and events hosted by our organization.",
              href: "/additional-activities",
              imgSrc: "/dahanu.jpg",
              imgAlt: "Additional Activities",
            },
            {
              id: "contact",
              title: "Contact Us",
              description:
                "Get in touch with us for more details or inquiries about the activities.",
              href: "/contact",
              imgSrc: "/contactUs.jpg",
              imgAlt: "Contact Us",
            },
          ].map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="p-6 w-full sm:w-1/2 lg:w-1/3 bg-white/90 shadow-2xl rounded-lg backdrop-blur-md animate-fadeIn transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex items-center gap-8"
            >
              <div className="flex-1">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-lg mb-4">{section.description}</p>
                <Link
                  href={section.href}
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600"
                >
                  Explore
                </Link>
              </div>
              <img
                src={section.imgSrc}
                alt={section.imgAlt}
                className="w-48 h-48 object-cover rounded-lg"
              />
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
