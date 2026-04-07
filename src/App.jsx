import React from "react";
import { motion } from "framer-motion";
import { Terminal, Layout, Mail, Github, Linkedin, Trophy, Cpu, Award } from "lucide-react";

export default function App() {
  return (
    <div style={{ backgroundColor: "#020617", color: "#f8fafc", minHeight: "100vh", fontFamily: "sans-serif", textAlign: "center", padding: "50px 20px" }}>
      
      {/* Responsive Styles for Mobile */}
      <style>{`
        .responsive-title { font-size: 3.5rem; margin: 10px 0; color: #60a5fa; }
        .section-title { font-size: 2rem; margin-bottom: 30px; color: #f8fafc; display: flex; align-items: center; justify-content: center; gap: 12px; }
        .social-container { display: flex; justify-content: center; gap: 30px; margin-bottom: 20px; }
        
        @media (max-width: 600px) {
          .responsive-title { font-size: 2.4rem; }
          .section-title { font-size: 1.6rem; }
          .social-container { gap: 20px; }
        }
      `}</style>

      {/* Hero Section */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img 
          src="/my-photo.jpg" 
          alt="Nandu" 
          style={{ width: "150px", height: "150px", borderRadius: "50%", border: "4px solid #3b82f6", marginBottom: "20px", objectFit: "cover" }} 
        />
        <h1 className="responsive-title">NANDU JADDU</h1>
        <p style={{ fontSize: "1.2rem", color: "#94a3b8" }}>Python | Frontend | Flask | React | MongoDB</p>
      </motion.div>

      {/* Skills Grid */}
      <div style={{ marginTop: "50px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", maxWidth: "800px", margin: "50px auto" }}>
        <div style={{ padding: "20px", border: "1px solid #1e293b", borderRadius: "12px", background: "#0f172a" }}>
          <Terminal color="#60a5fa" style={{ marginBottom: "10px" }} />
          <h3>Backend</h3>
          <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>Python, Flask, Django</p>
        </div>
        <div style={{ padding: "20px", border: "1px solid #1e293b", borderRadius: "12px", background: "#0f172a" }}>
          <Layout color="#34d399" style={{ marginBottom: "10px" }} />
          <h3>Frontend</h3>
          <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>React JS, HTML/CSS</p>
        </div>
      </div>

      {/* Achievements Section */}
      <div style={{ marginTop: "80px", maxWidth: "800px", margin: "80px auto 0", textAlign: "left" }}>
        <h2 className="section-title"><Trophy color="#fbbf24" /> Top Achievements</h2>
        
        <div style={{ display: "grid", gap: "20px" }}>
          
          {/* Featured: Schrödinger’s Hackathon */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            style={{ padding: "25px", background: "linear-gradient(145deg, #0f172a, #1e293b)", borderLeft: "5px solid #60a5fa", borderRadius: "8px", position: "relative" }}
          >
            <div style={{ position: "absolute", top: "15px", right: "20px", color: "#34d399", fontWeight: "bold", fontSize: "0.9rem" }}>
              🏆 1st Prize (₹1,00,000)
            </div>
            <h3 style={{ margin: "0 0 10px 0", color: "#f8fafc", display: "flex", alignItems: "center", gap: "8px" }}>
              <Cpu size={20} color="#60a5fa" /> Schrodingers Cat Hackathon — SRM IST
            </h3>
            <p style={{ margin: "0 0 15px 0", fontSize: "1rem", color: "#60a5fa", fontWeight: "600" }}>XR Virtual Reality System</p>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "#94a3b8", fontSize: "0.9rem", lineHeight: "1.6" }}>
              <li>Built an Immersive XR Virtual Reality System for interactive real-world simulations.</li>
              <li>Developed core features integrating VR environments with user interaction modules.</li>
              <li>Collaborated in a team to design and implement the solution under tight deadlines.</li>
            </ul>
          </motion.div>

          {/* World Space Week */}
          <div style={{ padding: "20px", background: "#0f172a", borderLeft: "4px solid #fbbf24", borderRadius: "4px" }}>
            <h4 style={{ margin: "0 0 5px 0", color: "#f8fafc", display: "flex", alignItems: "center", gap: "8px" }}>
              <Award size={18} color="#fbbf24" /> World Space Week Winner — QISCET
            </h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8" }}>
              Awarded 1st Place in the Campus Rangoli Competition for a "Living in Space" conceptual design.
            </p>
          </div>
        </div>
      </div>

      {/* Resume Button */}
      <a 
        href="/my-resume.pdf" 
        style={{ display: "inline-block", marginTop: "50px", padding: "12px 24px", backgroundColor: "#3b82f6", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}
      >
        Download My Resume
      </a>

      {/* Footer Section */}
      <footer style={{ marginTop: "100px", padding: "40px 0", borderTop: "1px solid #1e293b" }}>
        <div className="social-container">
          <SocialLink 
            href="https://github.com/NANDU-15" 
            icon={<Github size={24} />} 
            label="GitHub" 
          />
          <SocialLink 
            href="https://linkedin.com/in/jaddu-naganandini-329020275" 
            icon={<Linkedin size={24} />} 
            label="LinkedIn" 
          />
          <SocialLink 
            href="mailto:your-email@example.com" 
            icon={<Mail size={24} />} 
            label="Email" 
          />
        </div>
        <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
          © 2026 Nandu Jaddu • Built with React & Framer Motion
        </p>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, color: "#3b82f6" }}
      style={{ color: "#94a3b8", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", transition: "color 0.2s" }}
    >
      {icon}
      <span style={{ fontSize: "0.7rem", fontWeight: "bold", textTransform: "uppercase" }}>{label}</span>
    </motion.a>
  );
}