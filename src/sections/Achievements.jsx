import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaGlobe } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "1st Prize — Schrodinger's Cat Hackathon",
      subtitle: "SRM Institute of Science and Technology",
      year: "2025",
      desc: "Won ₹1,00,000 prize for developing a VR + AI Based Assemble and Disassemble Training System focused on immersive industrial training simulations.",
    },

    {
      icon: <FaGlobe />,
      title: "International Collaboration Program",
      subtitle: "Cardiff Metropolitan University, UK",
      year: "2025",
      desc: "Participated in an advanced software engineering collaboration program with exposure to global development practices and technical workflows.",
    },

    {
      icon: <FaMedal />,
      title: "Technical Project Presentations",
      subtitle: "Academic & Technical Events",
      year: "2024 - Present",
      desc: "Actively participated in project expos, technical presentations, collaborative innovation events, and software development activities.",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-cyan-400 tracking-[5px] uppercase text-sm mb-4">
            Achievements
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Milestones &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Recognition
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-400 to-purple-500 hidden md:block" />

          <div className="space-y-20">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_30px_rgba(0,255,255,0.8)] z-20" />

                {/* Card */}
                <div className="w-full md:w-[45%] group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8">
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

                  {/* Blur Orb */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-5xl text-cyan-400 mb-6">
                      {item.icon}
                    </div>

                    {/* Year */}
                    <span className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm mb-5">
                      {item.year}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3">
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-purple-300 mb-4">
                      {item.subtitle}
                    </p>

                    {/* Description */}
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

export default Achievements;