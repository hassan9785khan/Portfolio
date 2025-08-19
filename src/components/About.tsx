import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Shield, Code } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML",
      description: "Developing production-ready AI systems using TensorFlow, PyTorch, and cloud platforms"
    },
    {
      icon: Shield,
      title: "Security Research",
      description: "Advanced threat analysis, vulnerability assessment, and security architecture design"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end application development with modern frameworks and scalable architectures"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "OCI Generative AI Professional with continuous learning in emerging technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              As an AI Engineer and Security Researcher, I specialize in developing intelligent systems 
              that address complex enterprise challenges while maintaining robust security standards. 
              My expertise spans machine learning model development, security architecture, and 
              full-stack application development.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Currently certified as an OCI Generative AI Professional, I focus on creating scalable 
              AI solutions that drive business value. My approach combines cutting-edge technology 
              with practical implementation strategies, ensuring solutions are both innovative and 
              production-ready.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Python', 'TypeScript', 'React', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;