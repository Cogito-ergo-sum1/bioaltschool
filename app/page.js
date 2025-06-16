import Image from "next/image";
import logo from '../public/Gerald.jpg'

//import logo2 from '../public'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">The Future of Platform as a Service(PaaS)</h1>
          {/* <p className="mt-4 text-lg text-gray-600">Let me introduce myself.</p> */}
        </div>

        {/* Profile Card */}

          <div className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-10 transition duration-300 ease-in-out hover:scale-105">
          <div className="flex-1">
            <p className="mb-8">The future of Platform as a Service (PaaS) is bright and rapidly evolving, driven by the need for speed, simplicity, and scalability in modern application development. Platform as a Service (PaaS) is transforming how software is built, deployed, and scaled. All of these leads top organizations across various industries to the questions of: </p>
            <p>1. WHAT'S COMING NEXT?</p>
            <p>2. WHY DOES IT MATTER?</p>
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-10 transition duration-300 ease-in-out hover:scale-105 mt-12">
          <Image
            src={logo}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">Omole Fitzgerald <span className="text-blue-600 text-xl">(Cloud Administrator)</span></h2>
         
            <p className="text-gray-600 mt-8">
              I am a Cloud Engineering enthusiast & IT consultant with experience developing AL-based web applications and supporting enterprise operations across sectors. a passionate full-stack developer focused on building high-performance web applications. My
              background spans both frontend UI/UX design and scalable backend systems. I enjoy turning
              complex problems into clean and intuitive solutions.
            </p>
            
            <div className="flex mt-4 space-x-4 text-blue-500 text-xl">
              <a href="https://github.com/Cogito-ergo-sum1" target="_blank"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "JavaScript",
              "React / Next.js",
              "Node.js",
              "Tailwind CSS",
              "Cloud Platform Expertise ",
              "Git / GitHub",
              "AL",
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-blue-100 text-blue-700 font-medium px-4 py-2 rounded-full text-center shadow-sm hover:bg-blue-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Omole Fitzgerald. All rights reserved.
        </div>
      </div>
    </div>

  );
}