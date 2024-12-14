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
  return (
    <div className="relative bg-white min-h-screen text-gray-900 overflow-hidden">
      <GlassHeader />
      
      {/* Animated Coming Soon */}
      <div className="flex items-center justify-center min-h-screen">
        <h3 className="text-4xl font-bold animate-pulse">Coming Soon . . .</h3>
      </div>

      <Footer />
    </div>
  );
}
