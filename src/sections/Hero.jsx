import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6">
        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-cyan-400 tracking-[5px] uppercase text-sm mb-5"
          >
            AI & Software Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            NAGA NANDINI
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              JADDU
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-lg leading-8 mt-8 max-w-xl"
          >
            Building immersive, futuristic, and intelligent digital
            experiences through Artificial Intelligence, software
            engineering, and modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <a
              href="https://github.com/NANDU-15"
              target="_blank"
              className="px-7 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/jaddu-naganandini-329020275"
              target="_blank"
              className="px-7 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition duration-300"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-3xl opacity-30 animate-pulse" />

          {/* Image */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            whileHover={{
              scale: 1.04,
            }}
            className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border border-cyan-400/30 shadow-[0_0_60px_rgba(0,255,255,0.3)]"
          >
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;