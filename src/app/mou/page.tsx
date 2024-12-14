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
          imageSrc: "/Computer Engineering/Seminar_1.jpg",
          title: "AI and Healthcare: Transforming the Future",
          description:
            "A guest lecture focusing on the integration of Artificial Intelligence in healthcare, discussing its potential to predict medical conditions and revolutionize patient care.",
        },
        {
          imageSrc: "/Computer Engineering/Seminar_2.jpg",
          title: "Blockchain Technology: Security and Future Applications",
          description:
            "A lecture exploring how Blockchain technology ensures secure data storage and communication, and its potential impact on various industries like finance and healthcare.",
        },
        {
          imageSrc: "/Computer Engineering/Seminar_3.jpg",
          title: "IoT in Smart Cities: Enhancing Urban Life",
          description:
            "A guest lecture discussing the role of IoT systems in creating smart cities, with a focus on monitoring air quality, energy consumption, and urban infrastructure for sustainability.",
        },
        {
          imageSrc: "/Computer Engineering/Seminar_4.jpeg",
          title: "IoT and AI in Modern Agriculture",
          description:
            "A lecture on how IoT and AI are being applied in farming to optimize irrigation, monitor crop health, and make agriculture more efficient and sustainable.",
        },
        {
          imageSrc: "/Computer Engineering/Seminar_5.jpeg",
          title: "Virtual Reality in Education: Revolutionizing Learning",
          description:
            "A seminar on the use of Virtual Reality in education, showcasing how immersive VR tools can provide hands-on learning experiences for complex subjects.",
        },
        {
          imageSrc: "/Computer Engineering/TechChase_6.jpg",
          title: "AI for Mental Health: Innovations in Wellness",
          description:
            "A guest lecture on the potential of AI-powered applications to analyze user data and provide personalized mental health solutions, helping users manage stress and anxiety.",
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
        className="absolute top-40 left-0 w-full h-full object-cover  z-0"
      ></video>

      <main className="relative z-10 p-10 space-y-10">
        <section className="space-y-6">
          {/* TechChase Title */}
          <h1 className="text-4xl font-semibold">MOU Guest Lectures 2023-2024</h1>
         
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
