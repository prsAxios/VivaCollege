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

export default function IndustrialVisit() {
  const visits = [
    {
      imageSrc: "/Computer Engineering/IV_1.jpg",
      title: "Industrial Visit to AI-driven Healthcare Companies",
      description:
        "An industrial visit to companies working on AI-driven healthcare solutions, providing insights into how artificial intelligence is transforming the healthcare industry.",
      dialogDescription:
        "This visit highlighted how AI is being integrated into healthcare systems to predict and diagnose medical conditions, improving accessibility and efficiency in healthcare.",
    },
    {
      imageSrc: "/Computer Engineering/IV_2.jpg",
      title: "Blockchain-Based Security Systems in Industry",
      description:
        "A visit to industries implementing blockchain-based security solutions to protect sensitive data and ensure secure transactions in various sectors.",
      dialogDescription:
        "This visit focused on the practical use of blockchain technology for securing communications and data storage, ensuring integrity and privacy in business operations.",
    },
    {
      imageSrc: "/Mechanical Engineering/IV_ADANI THERMAL POWER PLANT DAHANU.JPG",
      title: "Industrial Visit to Smart City IoT Applications",
      description:
        "An industrial visit to companies utilizing IoT technology in smart cities for monitoring traffic, air quality, and energy usage to promote sustainability and urban development.",
      dialogDescription:
        "This visit gave students a glimpse into how IoT is revolutionizing urban living, optimizing city infrastructure, and improving quality of life through real-time monitoring and smart systems.",
    },
    {
      imageSrc: "/Mechanical Engineering/IV_ADANI THERMAL POWER PLANT DAHANU 2.jpg",
      title: "Automated Smart Farming Solutions",
      description:
        "An industrial visit to smart farming companies using IoT and AI to optimize crop production and reduce resource consumption, contributing to sustainable agricultural practices.",
      dialogDescription:
        "This visit showed how automation in farming, through IoT and AI, is making agriculture more efficient, improving crop health, and reducing environmental impact.",
    },
    {
      imageSrc: "/Mechanical Engineering/IV_BHARATBENZ_VASAI.JPG",
      title: "Virtual Reality in Manufacturing and Education",
      description:
        "An industrial visit to companies using Virtual Reality in manufacturing for employee training and in education to enhance learning experiences through immersive technology.",
      dialogDescription:
        "This visit demonstrated how VR is transforming industries by offering immersive simulations for training and learning, improving both safety and efficiency in manufacturing processes.",
    },
    {
      imageSrc: "/Mechanical Engineering/IV_SUZLON_SATARA.png",
      title: "AI-Powered Mental Health Solutions",
      description:
        "An industrial visit to companies developing AI-driven mental health solutions, exploring how technology can help individuals manage mental well-being more effectively.",
      dialogDescription:
        "This visit focused on how AI technology is being used to provide personalized mental health recommendations, offering new methods for stress management and promoting mental well-being.",
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
          {/* Industrial Visit Title */}
          <h1 className="text-4xl font-semibold">Industrial Visit 2023-2024</h1>
          
          {/* Description about Industrial Visit */}
          <p className="text-lg text-gray-700">
            Viva Institute of Technology is committed to providing students with real-world exposure to industry leaders and their innovative solutions. As part of the Industrial Visit initiative, our students visited multiple industries to gain insight into how the latest technologies and systems are implemented in various fields.
          </p>
          
          <p className="text-lg text-gray-700">
            These visits offer a unique opportunity to observe practical applications of engineering concepts, deepen understanding, and enhance technical skills in fields like AI, blockchain, automation, and more. Our aim is to bridge the gap between theoretical knowledge and practical experience, making students ready for the challenges of the real world.
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
                  <h2 className="text-xl text-center py-3">{visit.dialogDescription}</h2>
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
