import { motion } from "framer-motion";
import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaBrain />,
      title: "AI & Innovation",
      desc: "Focused on building intelligent systems and immersive digital experiences using AI-driven technologies.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      desc: "Developing modern responsive applications using React, Django, Flask, MongoDB, and modern UI systems.",
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
      desc: "Passionate about solving real-world problems through clean architecture and scalable software solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 tracking-[5px] uppercase text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Crafting Future-Ready
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Digital Experiences
            </span>
          </h2>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-gray-400 text-lg leading-8"
        >
          I am an Artificial Intelligence & Data Science student passionate
          about software engineering, immersive technologies, and futuristic
          user experiences. I enjoy building scalable applications, AI-powered
          systems, and interactive digital products that combine performance,
          creativity, and innovation.
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                rotateX: 5,
                rotateY: 5,
              }}
              className="relative group border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

              <div className="relative z-10">
                <div className="text-5xl text-cyan-400 mb-6">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;