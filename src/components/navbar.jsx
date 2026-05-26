import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "achievements",
    "experience",
    "contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <h1 className="text-2xl font-black tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          NANDU
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-cyan-400"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-6"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className="capitalize text-gray-300 hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;