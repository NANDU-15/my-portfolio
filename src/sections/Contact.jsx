import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 tracking-[5px] uppercase text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Amazing
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Passionate about futuristic technology, AI systems, software
            engineering, and innovative digital experiences. Open to
            collaborations, opportunities, and impactful projects.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-14"
        >
          <a
            href="mailto:nandujaddu9@gmail.com"
            className="px-7 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition duration-300 flex items-center gap-3"
          >
            <FaEnvelope />
            Email Me
          </a>

          <a
            href="https://github.com/NANDU-15"
            target="_blank"
            className="px-7 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 flex items-center gap-3"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/jaddu-naganandini-329020275"
            target="_blank"
            className="px-7 py-4 rounded-full border border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white transition duration-300 flex items-center gap-3"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;