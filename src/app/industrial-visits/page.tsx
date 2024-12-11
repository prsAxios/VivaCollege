"use client"
import { useState } from 'react';
import Image from 'next/image';
import GlassHeader from '@/components/GlassHeader';
import Footer from '@/components/Footer';

export default function TechChase() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Function to open the modal with the selected image
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Transparent Glass Navbar */}
      <GlassHeader />

      <main className="p-10 space-y-10">
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold">Industrial Visits 2023 and 2024</h1>
          <p className="text-lg text-gray-700">Explore our various industrial visits and their significance.</p>
        </section>

        {/* Glass Effect Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            onClick={() => openModal('/image1.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/MainImage.jpg"
              alt="Industrial Visit 1"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 1</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-01-20</span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => openModal('/image2.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image2.jpg"
              alt="Industrial Visit 2"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 2</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-02-15</span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => openModal('/image3.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image3.jpg"
              alt="Industrial Visit 3"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 3</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-03-10</span>
            </div>
          </div>

          
          {/* Card 3 */}
          <div
            onClick={() => openModal('/image3.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image3.jpg"
              alt="Industrial Visit 3"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 3</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-03-10</span>
            </div>
          </div>

          
          {/* Card 3 */}
          <div
            onClick={() => openModal('/image3.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image3.jpg"
              alt="Industrial Visit 3"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 3</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-03-10</span>
            </div>
          </div>

          
          {/* Card 3 */}
          <div
            onClick={() => openModal('/image3.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image3.jpg"
              alt="Industrial Visit 3"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 3</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-03-10</span>
            </div>
          </div>
      {/* Card 1 */}
      <div
            onClick={() => openModal('/image1.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image1.jpg"
              alt="Industrial Visit 1"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 1</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-01-20</span>
            </div>
          </div>

            {/* Card 1 */}
            <div
            onClick={() => openModal('/image1.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image1.jpg"
              alt="Industrial Visit 1"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 1</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-01-20</span>
            </div>
          </div>

            {/* Card 1 */}
            <div
            onClick={() => openModal('/image1.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image1.jpg"
              alt="Industrial Visit 1"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 1</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-01-20</span>
            </div>
          </div>

            {/* Card 1 */}
            <div
            onClick={() => openModal('/image1.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image1.jpg"
              alt="Industrial Visit 1"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 1</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-01-20</span>
            </div>
          </div>

            {/* Card 1 */}
            <div
            onClick={() => openModal('/image1.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image1.jpg"
              alt="Industrial Visit 1"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 1</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-01-20</span>
            </div>
          </div>
          
          {/* Card 3 */}
          <div
            onClick={() => openModal('/image3.jpg')}
            className="relative group cursor-pointer bg-white/50 rounded-lg shadow-lg backdrop-blur-md overflow-hidden animate-slideIn"
          >
            <Image
              src="/image3.jpg"
              alt="Industrial Visit 3"
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold">Visit Title 3</h3>
              <p>Short description of the visit.</p>
              <span className="text-sm">Date: 2024-03-10</span>
            </div>
          </div>

          {/* More Cards... */}
        </section>

        {/* Modal for Enlarged Image */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Enlarged Image"
                width={800}
                height={600}
                className="object-contain"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white p-2 rounded-full text-black shadow-lg hover:bg-gray-200 hover:bg-transparent"
              >
                X
              </button>
            </div>
          </div>
        )}
      </main>

         {/* Footer */}
     {/* Footer */}
     <div className='mt-10'>
        <Footer />
      </div>
    </div>
  );
}

