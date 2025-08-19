import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Shield, Brain, Code2, Lock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Analytics Platform",
      description: "Developed a comprehensive AI analytics platform for enterprise clients, featuring real-time data processing, machine learning model deployment, and interactive dashboards. Handles 1M+ data points daily with 99.9% uptime.",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS", "Docker"],
      github: "#",
      demo: "#",
      category: "AI/ML",
      icon: Brain,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Security Vulnerability Scanner",
      description: "Built an automated security scanning tool that identifies vulnerabilities in web applications and APIs. Features custom rule engine, detailed reporting, and integration with CI/CD pipelines for continuous security monitoring.",
      tech: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
      github: "#",
      demo: "#",
      category: "Security",
      icon: Shield,
      gradient: "from-red-500 to-orange-600"
    },
    {
      title: "Real-time ML Model Deployment System",
      description: "Designed and implemented a scalable model deployment platform supporting A/B testing, automated rollbacks, and performance monitoring. Reduced model deployment time from hours to minutes.",
      tech: ["Python", "Kubernetes", "MLflow", "Prometheus", "Grafana", "AWS"],
      github: "#",
      demo: "#",
      category: "ML Ops",
      icon: Zap,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Intelligent Document Processing API",
      description: "Created an advanced document processing system using OCR, NLP, and computer vision to extract and classify information from various document types. Achieved 95%+ accuracy across multiple formats.",
      tech: ["Python", "OpenCV", "spaCy", "FastAPI", "PostgreSQL", "Redis"],
      github: "#",
      demo: "#",
      category: "AI/ML",
      icon: Code2,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Encrypted Communication Platform",
      description: "Developed a secure messaging platform with end-to-end encryption, perfect forward secrecy, and zero-knowledge architecture. Designed for enterprise environments requiring highest security standards.",
      tech: ["TypeScript", "Node.js", "React", "WebRTC", "PostgreSQL", "Docker"],
      github: "#",
      demo: "#",
      category: "Security",
      icon: Lock,
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Selected projects showcasing expertise in AI/ML engineering, security research, and full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover-lift glass"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                      className="px-3 py-1 bg-gray-800/80 text-gray-300 rounded-full text-xs border border-gray-700 hover:border-green-500/50 hover:text-green-400 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-all text-sm group/link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-all text-sm group/link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" />
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover-lift animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Build Something Amazing</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink size={18} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;