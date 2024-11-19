"use client";
import Image from "next/image";

export default function TPOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Training and Placement Officer</h1>
          <p className="mt-2 text-lg">
            Empowering students for successful careers through training and placement.
          </p>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-5xl mx-auto mt-12 px-6 space-y-12">
        {/* TPO Section */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          {/* Image */}
          <div className="group relative h-[600px] bg-gray-200 overflow-hidden">
            <Image
              src="/ypo.jpeg"
              alt="TPO Image"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Description */}
          <div className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-indigo-700">
              Mr.Nitesh Kumar
            </h2>
            <p className="mt-4 text-gray-600">
              The Training and Placement Officer (TPO) at Viva Institute of
              Technology is dedicated to bridging the gap between academic
              excellence and professional success. With years of experience in
              the industry, the TPO ensures that students are equipped with
              essential skills to thrive in the competitive job market.
            </p>
            <p className="mt-4 text-gray-600">
              Through industry collaborations, mock interviews, and career
              counseling, the TPO fosters a seamless transition from campus to
              corporate life.
            </p>
          </div>
        </section>

        {/* Hover Cards Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-indigo-700">
            Why Choose Viva for Placements?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative group cursor-pointer bg-gradient-to-br from-purple-100 to-indigo-50 rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500 rounded-full blur-2xl opacity-30"></div>
              <h3 className="text-xl font-semibold text-indigo-800">
                Industry Tie-ups
              </h3>
              <p className="mt-4 text-gray-700">
                Collaborations with top companies ensure excellent placement
                opportunities for our students.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative group cursor-pointer bg-gradient-to-br from-purple-100 to-indigo-50 rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-30"></div>
              <h3 className="text-xl font-semibold text-indigo-800">
                Personality Development
              </h3>
              <p className="mt-4 text-gray-700">
                Training programs focused on communication, teamwork, and
                problem-solving skills.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative group cursor-pointer bg-gradient-to-br from-purple-100 to-indigo-50 rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500 rounded-full blur-2xl opacity-30"></div>
              <h3 className="text-xl font-semibold text-indigo-800">
                Mock Interviews
              </h3>
              <p className="mt-4 text-gray-700">
                Real-life interview simulations to boost students' confidence
                and preparation.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Viva Institute of Technology. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
