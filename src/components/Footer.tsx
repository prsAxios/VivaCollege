import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* Background Video */}
      <video
        src="box.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50" 
        
      ></video>

      {/* Overlay to darken video */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              VIVA Institute of Technology (Approved by AICTE, New Delhi, DTE,
              Govt. of Maharashtra, and Affiliated to the University of Mumbai)
              was established under the aegis of Vishnu Waman Thakur Charitable
              Trust with the aim of imparting higher knowledge in Science and
              Technology to the aspiring boys and girls so that they can emerge
              as competent scientists, engineers, and technologists of repute.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.viva-technology.org/New/" className="hover:underline">
                  Home
                </a>
              </li>
            
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">VIVA Institute of Technology</p>
            <p className="text-sm">Shrigaon, Veer Sawarkar Road,</p>
            <p className="text-sm">Virar (E) 401305</p>
            <p className="text-sm">Phone: 7770002544</p>
            <p className="text-sm">
              E-mail: principalvit@vivacollege.org, contact@viva-technology.org
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm">
          <p>
            © Copyright - VIVA Institute of Technology by <a className='underline' href="https://www.viva-technology.org/New/?teacher=nitesh-kumar">Prof. Nitesh Kumar</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
