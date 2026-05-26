import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "VR + AI Training System",
      desc: "Immersive industrial training platform using Artificial Intelligence and Virtual Reality for assemble and disassemble simulations.",
      tech: ["AI", "VR", "Simulation", "Training"],
    },
    {
      title: "Task Manager Web App",
      desc: "CRUD-based productivity application built with Django for structured task management workflows.",
      tech: ["Django", "Python", "HTML", "CSS"],
    },
    {
      title: "Cattle Hub Platform",
      desc: "Data management platform for cattle tracking and workflow organization using Flask and MongoDB.",
      tech: ["Flask", "MongoDB", "Python"],
    },
    {
      title: "Student Management System",
      desc: "Console-based Java application implementing CRUD operations and serialization-based storage.",
      tech: ["Java", "OOP", "File Handling"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 tracking-[5px] uppercase text-sm mb-4">
            Featured Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Innovative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Software Solutions
            </span>
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                rotateX: 4,
                rotateY: 4,
              }}
              className="group relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 overflow-hidden"
            >
              {/* Animated Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

              {/* Blur Orb */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-8">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="px-5 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 flex items-center gap-2">
                    <FaGithub />
                    Code
                  </button>

                  <button className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition duration-300 flex items-center gap-2">
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;