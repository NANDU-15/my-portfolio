import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full"
      />
    </div>
  );
}

export default Loader;