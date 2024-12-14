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
        imageSrc: "/Mechanical Engineering/1st place Jana Kalyan Hackathon IEEE TCET.png",
        title: "Jana Kalyan Hackathon",
        description:
          "A competition where participants present innovative AI solutions for healthcare, focusing on predicting medical conditions using patient data to improve healthcare accessibility.",
      },
      {
        imageSrc: "/Mechanical Engineering/1st place Technical Poster Presentation,ISHRAE Fr. c. Rodrigues Institute of Technology, Vashi.png",
        title: "1st place Technical Poster Presentation",
        description:
          "A competition where participants present innovative AI solutions for healthcare, focusing on predicting medical conditions using patient data to improve healthcare accessibility.",
      },
        {
          imageSrc: "/Mechanical Engineering/1st place Vidyavardhini's National Project Showcase.png",
          title: "1st place Vidyavardhini's National Project Showcase",
          description:
            "A competition where participants present innovative AI solutions for healthcare, focusing on predicting medical conditions using patient data to improve healthcare accessibility.",
        },
        {
          imageSrc: "/Computer Engineering/ProjectCompition_1.jpg",
          title: "AI-Driven Healthcare Project Competition",
          description:
            "A competition where participants present innovative AI solutions for healthcare, focusing on predicting medical conditions using patient data to improve healthcare accessibility.",
        },
        {
          imageSrc: "/Computer Engineering/ProjectCompition_2.jpg",
          title: "Blockchain-based Security Solution Competition",
          description:
            "A competition where teams develop blockchain-based security systems to protect sensitive data, ensuring privacy and integrity in communications and storage.",
        },
        {
          imageSrc: "/Computer Engineering/ProjectCompition_3.jpg",
          title: "Smart City IoT System Competition",
          description:
            "A competition where participants create IoT systems to monitor and optimize urban infrastructure like air quality, traffic, and energy usage for sustainable development.",
        },
        {
          imageSrc: "/Computer Engineering/ProjectCompition_4.jpg",
          title: "Automated Smart Farming Competition",
          description:
            "A competition focused on developing automated farming solutions using IoT and AI to enhance crop monitoring, optimize irrigation, and promote sustainable agriculture.",
        },
        {
          imageSrc: "/Computer Engineering/ProjectCompition_5.jpg",
          title: "Virtual Reality Education Tool Competition",
          description:
            "A competition to develop immersive VR-based educational tools that provide interactive learning experiences, helping students understand complex subjects in an engaging way.",
        },
        {
          imageSrc: "/Computer Engineering/TechChase_6.jpg",
          title: "AI-powered Mental Health App Competition",
          description:
            "A competition where participants create AI-powered apps aimed at supporting mental health by analyzing user data and suggesting personalized wellness routines to manage stress and anxiety.",
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
        className="absolute top-40 left-0 w-full h-full object-cover  z-0 " 
      ></video>

      <main className="relative z-10 p-10 space-y-10">
        <section className="space-y-6">
          {/* TechChase Title */}
          <h1 className="text-4xl font-semibold">Project Competitions 2023-2024</h1>
         
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

              <DialogContent className="overflow-auto max-h-[80vh] max-w-[40vw] bg-white/60">
  <DialogHeader>
    <DialogTitle className="text-3xl text-center text-blue-500">
      {visit.title}
    </DialogTitle>
    <Image
      src={visit.imageSrc}
      alt={`Project ${index + 1}`}
      width={400}
      height={200}
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
