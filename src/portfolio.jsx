import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import calligraphy from "./assets/calligraphy.png";
import image from "./assets/image.png";
import doodle from "./assets/doodle.png";

const Portfolio = () => {
  const sections = [
    {
      id: "experience",
      title: "Work Experience",
      content: (
        <ul className="space-y-3 text-foreground/90">
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Software developer since 2018</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>
              Full-stack development using <strong className="text-primary">MERN (MongoDB, Express, React, Node.js)</strong> and{" "}
              <strong className="text-primary">MEAN (MongoDB, Express, Angular, Node.js)</strong> stacks
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Designed and implemented scalable web applications</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Integrated RESTful APIs</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Mentored junior developers and conducted code reviews</span>
          </li>
        </ul>
      ),
    },
    {
      id: "achievements",
      title: "Achievements",
      content: (
        <ul className="space-y-3 text-foreground/90">
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Participated in multiple hackathons, including a project converting unstructured PDFs to extractable Excel using Python</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>
              Completed professional certifications: <strong className="text-primary">GitHub Copilot</strong>,{" "}
              <strong className="text-primary">Microsoft Certified: Azure AI Engineer Associate</strong>, and{" "}
              <strong className="text-primary">DP-900: Microsoft Azure Data Fundamentals</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Gave numerous speeches at Toastmasters and company events, including serving as an emcee for corporate functions</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Completed 5K and 10K races, demonstrating personal discipline and endurance</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Published around 4 Medium blogs on software development</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>
              Co-host of a podcast:{" "}
              <a
                href="https://open.spotify.com/show/6dsabE6x7qC3wWTvP3ssE1?si=ZF6_Eg0WSDWJ_AlAFUqfPg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:text-primary transition-colors underline decoration-accent/30 hover:decoration-primary/50"
              >
                Listen on Spotify <ExternalLink className="w-3 h-3" />
              </a>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Master's in Psychology with deep learning on human behavior, positive reinforcement, and experimental psychology</span>
          </li>
        </ul>
      ),
    },
    {
      id: "toastmasters",
      title: "Toastmasters Journey",
      content: (
        <ul className="space-y-3 text-foreground/90">
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Attended Toastmasters for 2 years, enhancing public speaking and leadership skills</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>
              Served on the executive committee as <strong className="text-primary">Secretary</strong> and{" "}
              <strong className="text-primary">Vice President of Education</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>
              Participated in multiple speech contests and won club-level <strong className="text-primary">Humorous</strong> and{" "}
              <strong className="text-primary">Evaluation</strong> contests
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-1">▸</span>
            <span>Mentored fellow members, helping them improve their speaking and presentation skills</span>
          </li>
        </ul>
      ),
    },
    {
      id: "blogs",
      title: "Medium Blogs",
      content: (
        <p className="text-foreground/90">
          Check out my blogs right here {" "}
          <a
            href="https://medium.com/@m.v.nivetha"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-primary transition-colors underline decoration-accent/30 hover:decoration-primary/50 font-medium"
          >
            Visit my Medium <ExternalLink className="w-4 h-4" />
          </a>
        </p>
      ),
    },
    {
      id: "fun",
      title: "Fun & Hobbies",
      content: (
        <div>
          <p className="text-foreground/90 mb-6">I enjoy calligraphy, photography, and creative expression.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img src={calligraphy} alt="Calligraphy sample 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img src={image} alt="Calligraphy sample 2" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img src={doodle} alt="Calligraphy sample 3" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden gradient-bg">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          style={{ backgroundColor: `hsl(var(--blob-1))` }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, 30, -50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          style={{ backgroundColor: `hsl(var(--blob-2))` }}
          animate={{
            x: [0, -40, 40, 0],
            y: [0, -20, 20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          style={{ backgroundColor: `hsl(var(--blob-3))` }}
          animate={{
            x: [0, 20, -20, 0],
            y: [0, 40, -40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <header className="relative max-w-6xl mx-auto text-center pt-20 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gradient">
            Nivetha Malli Visveswaran
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl font-medium mb-10 text-primary"
        >
          Software Developer | Creative | Learner
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="http://github.com/NivethaVisveswaran/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
          >
            <Github className="w-6 h-6 text-primary" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/nivetha-visveswaran/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-primary" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:m.v.nivetha@email.com"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
          >
            <Mail className="w-6 h-6 text-primary" />
          </motion.a>
        </motion.div>
      </header>

      {/* Sections */}
      <main className="space-y-16 max-w-5xl mx-auto px-6 pb-20">
        {sections.map((section, i) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-3xl transition-shadow duration-300"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-primary"
            >
              {section.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base md:text-lg leading-relaxed"
            >
              {section.content}
            </motion.div>
          </motion.section>
        ))}
      </main>

      {/* Footer */}
      <footer className="relative text-center py-12 mt-10 border-t border-border/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card inline-block px-8 py-4 rounded-full"
        >
          <p className="text-muted-foreground text-sm md:text-base">
            © {new Date().getFullYear()} Nivetha | Built with React + Tailwind + Framer Motion
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Portfolio;
