"use client";
import GlassHeader from "@/components/GlassHeader";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function TPOPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Header */}
      <GlassHeader />

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Meet Our Training and Placement Officer</h1>
          <p className="mt-4 text-lg">
            Guiding students to bridge the gap between academics and the corporate world.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto mt-12 px-6 space-y-12">
        {/* TPO Information Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/ypo.jpeg"
              alt="TPO Profile Picture"
              width={200}
              height={200}
              className="rounded-full border-4 border-indigo-600"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold text-indigo-700">Mr. Nitesh Kumar</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              As the Training and Placement Officer at Viva Institute of Technology, Mr. Kumar brings
              unparalleled experience in bridging the academic and corporate divide. His focus lies on
              empowering students through skill-building workshops, industry tie-ups, and career
              counseling.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With his dedicated efforts, students are well-prepared to excel in placements and
              embrace the challenges of professional life.
            </p>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="space-y-8 py-8">
          <h2 className="text-3xl font-bold text-center text-indigo-700">Why Choose Viva for Placements?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-800">Industry Partnerships</h3>
              <p className="mt-4 text-gray-700">
                Collaborations with leading companies provide top-notch placement opportunities.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-800">Skill-Building Workshops</h3>
              <p className="mt-4 text-gray-700">
                Comprehensive programs focusing on communication, teamwork, and problem-solving.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-800">Mock Interview Sessions</h3>
              <p className="mt-4 text-gray-700">
                Realistic interview scenarios to prepare students for success in the job market.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
