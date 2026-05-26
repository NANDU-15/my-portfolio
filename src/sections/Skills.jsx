import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiDjango,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiReact,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <SiReact /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "SQL", icon: <FaDatabase /> },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

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
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Tech Stack
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotateY: 8,
                rotateX: 8,
              }}
              className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center text-center"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

              {/* Floating Blur */}
              <div className="absolute w-24 h-24 bg-cyan-400/10 blur-3xl rounded-full top-[-20px] right-[-20px]" />

              <div className="relative z-10">
                <div className="text-5xl mb-5 text-cyan-400 group-hover:scale-110 transition duration-300">
                  {skill.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-200">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-16 text-lg max-w-3xl mx-auto leading-8"
        >
          Passionate about building scalable, intelligent, and modern digital
          systems using advanced technologies, backend frameworks, databases,
          and immersive development practices.
        </motion.p>
      </div>
    </section>
  );
}

export default Skills;