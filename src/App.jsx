import React from "react";
import { motion } from "framer-motion";
// Added Github to the imports below
import { Terminal, Database, Layout, Mail, FileText, Github, Linkedin } from "lucide-react";

export default function App() {
  return (
    <div style={{ backgroundColor: "#020617", color: "#f8fafc", minHeight: "100vh", fontFamily: "sans-serif", textAlign: "center", padding: "50px 20px" }}>
      
      {/* Hero Section */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img 
          src="/my-photo.jpg" 
          alt="Pranava" 
          style={{ width: "150px", height: "150px", borderRadius: "50%", border: "4px solid #3b82f6", marginBottom: "20px", objectFit: "cover" }} 
        />
        <h1 style={{ fontSize: "3.5rem", margin: "10px 0", color: "#60a5fa" }}>NANDU JADDU</h1>
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

      {/* Resume Button */}
      <a 
        href="/my-resume.pdf" 
        style={{ display: "inline-block", marginTop: "30px", padding: "12px 24px", backgroundColor: "#3b82f6", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}
      >
        Download My Resume
      </a>

      {/* --- NEW FOOTER SECTION --- */}
      <footer style={{ marginTop: "80px", padding: "40px 0", borderTop: "1px solid #1e293b" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "20px" }}>
          
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
          © 2026 Nandu • Built with React & Framer Motion
        </p>
      </footer>

    </div>
  );
}

// Helper component for the social icons
function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, color: "#3b82f6" }}
      style={{ 
        color: "#94a3b8", 
        textDecoration: "none", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        gap: "8px",
        transition: "color 0.2s"
      }}
    >
      {icon}
      <span style={{ fontSize: "0.7rem", fontWeight: "bold", textTransform: "uppercase" }}>{label}</span>
    </motion.a>
  );
}