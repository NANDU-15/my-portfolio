import { motion } from "framer-motion";
import { FaGlobeAsia, FaLaptopCode } from "react-icons/fa";

function Experience() {
  const experience = [
    {
      icon: <FaGlobeAsia />,
      role: "International Collaboration Program",
      company: "Cardiff Metropolitan University, UK",
      year: "Sept 2025 — Oct 2025",
      desc: "Participated in an advanced software engineering collaboration program focused on global development methodologies, technical communication, collaborative workflows, and project-based learning.",
    },

    {
      icon: <FaLaptopCode />,
      role: "Software Development & Project Building",
      company: "AI & Full Stack Development",
      year: "2023 — Present",
      desc: "Building modern applications, backend systems, immersive experiences, and AI-focused digital solutions using React, Django, Flask, MongoDB, and modern development technologies.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-cyan-400 tracking-[5px] uppercase text-sm mb-4">
            Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Professional
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Journey
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-purple-500 hidden md:block" />

          <div className="space-y-20">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_30px_rgba(0,255,255,0.8)] z-20" />

                {/* Card */}
                <div className="group relative w-full md:w-[45%] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8">
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

                  <div className="relative z-10">
                    
                    <div className="text-5xl text-cyan-400 mb-6">
                      {item.icon}
                    </div>

                    <span className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm mb-5">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-bold mb-3">
                      {item.role}
                    </h3>

                    <p className="text-purple-300 mb-4">
                      {item.company}
                    </p>

                    <p className="text-gray-400 leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;