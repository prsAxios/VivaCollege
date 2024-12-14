"use client";
import Image from "next/image";
import GlassHeader from "@/components/GlassHeader";
import Footer from "@/components/Footer";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TechChase() {
  const visits = [
    {
      imageSrc: "/Computer Engineering/TechChase_1.jpg",
      title: "AI-Driven Healthcare Project",
      description:
        "A cutting-edge project that uses Artificial Intelligence to predict medical conditions based on patient data. This project aims to revolutionize healthcare accessibility.",
      // date: "2024-01-20",  // Commented out
    },
    {
      imageSrc: "/Computer Engineering/TechChase_2.jpg",
      title: "Blockchain-based Security Solution",
      description:
        "A blockchain-based system designed to provide secure data storage and communication, ensuring privacy and integrity for sensitive information.",
      // date: "2024-01-21",  // Commented out
    },
    {
      imageSrc: "/Computer Engineering/TechChase_3.jpg",
      title: "Smart City IoT System",
      description:
        "A smart city project using IoT sensors to monitor air quality, traffic, and energy consumption, contributing to the creation of more sustainable urban environments.",
      // date: "2024-01-22",  // Commented out
    },
    {
      imageSrc: "/Computer Engineering/TechChase_4.jpg",
      title: "Automated Smart Farming",
      description:
        "An automated farming system using IoT and AI to monitor crop health and optimize irrigation, aiming to increase agricultural efficiency and sustainability.",
      // date: "2024-01-23",  // Commented out
    },
    {
      imageSrc: "/Computer Engineering/TechChase_5.jpg",
      title: "Virtual Reality Education Tool",
      description:
        "A VR-based educational platform that provides immersive learning experiences, helping students grasp complex subjects through interactive simulations.",
      // date: "2024-01-24",  // Commented out
    },
    {
      imageSrc: "/Computer Engineering/TechChase_6.jpg",
      title: "AI-powered Mental Health App",
      description:
        "An app designed to support mental health by using AI to analyze user inputs and suggest personalized wellness routines, helping users manage stress and anxiety.",
      // date: "2024-01-25",  // Commented out
    },
  ];

  return (
    <div className="relative bg-white min-h-screen text-gray-900 overflow-hidden">
      <GlassHeader />
      
      {/* Background Video */}
      <video
        src="orange.mp4"
        autoPlay
        loop
        muted
        className="absolute top-40 left-0 w-full h-full object-cover opacity-50 z-0"
      ></video>

      <main className="relative z-10 p-10 space-y-10">
        <section className="space-y-6">
          {/* TechChase Title */}
          <h1 className="text-4xl font-semibold">TechChase 2023-2024</h1>
          
          {/* Description about TechChase */}
          <p className="text-lg text-gray-700">
            TechChase is an annual event showcasing some of the most innovative and creative computer projects from talented students. Each year, we bring together projects that combine cutting-edge technology with practical applications, solving real-world problems. Whether it’s AI-driven solutions, machine learning models, or revolutionary software tools, TechChase is the platform where the future of technology meets creativity.
          </p>
          
          <p className="text-lg text-gray-700">
            This year, we're proud to feature a range of exciting projects, from smart healthcare solutions to advanced security systems. Our goal is to inspire the next generation of computer engineers to explore, create, and make a lasting impact through their projects.
          </p>
        </section>

        {/* Glass Effect Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visits.map((visit, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                {/* Card */}
                <div className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn">
                  <Image
                    src={visit.imageSrc}
                    alt={`Project ${index + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-semibold">{visit.title}</h3>
                    <p>{visit.description}</p>
                    {/* <span className="text-sm">Date: {visit.date}</span> */} {/* Commented out */}
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="overflow-auto max-h-[80vh] bg-white/60">
                <DialogHeader>
                  <DialogTitle className="text-3xl text-center text-blue-500">
                    {visit.title}
                  </DialogTitle>
                  <Image
                    src={visit.imageSrc}
                    alt={`Project ${index + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
                  />
                  <h2 className="text-xl text-center py-3">{visit.description}</h2>
                  {/* <h2 className="text-xl text-center">Date: {visit.date}</h2> */} {/* Commented out */}
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
