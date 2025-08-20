import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: " AWS Academy Machine Learning Foundation",
      issuer: "Amazon Web Services",
      date: "5/11/2025",
      credentialId: "9d7d8a56-d9df-4653-a751-4f8abb7b72eb",
      description: "Completed AWS Academy Machine Learning Foundations, gaining skills in ML concepts, AWS tools, and real-world applications.",
      link: "https://www.credly.com/badges/9d7d8a56-d9df-4653-a751-4f8abb7b72eb/public_url",
      logo: "🔮"
    },
    {
      title: "DevNet Associate",
      issuer: "Netacad",
      date: "6/13/2025",
      credentialId: "7290b59d-cf9e-4215-bb7d-7e8c2cafe967",
      description: "Certified Cisco DevNet Associate with expertise in networking, automation, and software development.",
      link: "https://www.credly.com/badges/7290b59d-cf9e-4215-bb7d-7e8c2cafe967/public_url",
      logo: "☁️"
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco",
      date: "10/12/2024",
      credentialId: "3b298aeb-4c8f-44ef-9f2b-b106f0e06156",
      description: "Completed Cisco Python Essentials 1, building strong foundations in Python programming and problem-solving.",
      link: "https://www.credly.com/badges/3b298aeb-4c8f-44ef-9f2b-b106f0e06156/public_url",
      logo: "🛡️"
    },
    {
      title: "Python Essentials 2",
      issuer: "Cisco",
      date: "5/13/2025",
      credentialId: "5d08c664-6c67-4d65-b35d-9cda45cfe0e1",
      description: "Completed Cisco Python Essentials 2, advancing skills in Python programming, OOP, and real-world applications.",
      link: "https://www.credly.com/badges/5d08c664-6c67-4d65-b35d-9cda45cfe0e1/public_url",
      logo: "🤖"
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco",
      date: "4/18/2024",
      credentialId:"340aed5d-6fd8-4a04-a241-99701aa16f2a",
      description:"Completed Cisco Cybersecurity Essentials, gaining knowledge of security principles, network defense, and threat analysis.",
      link: "https://www.credly.com/badges/340aed5d-6fd8-4a04-a241-99701aa16f2a/public_url",
      logo: "⚙️"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2021",
      credentialId: "TF-DEV-2021-890",
      description: "Practical certification in TensorFlow framework, covering deep learning model development and deployment.",
      link: "https://www.credential.net/your-tensorflow-cert-id",
      logo: "🧠"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications validating expertise in AI/ML, cloud technologies, and cybersecurity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300 border border-gray-800"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.logo}</div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Calendar size={12} />
                  {cert.date}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-green-400 text-sm font-medium mb-3">
                {cert.issuer}
              </p>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="mb-4">
                <p className="text-gray-500 text-xs">
                  Credential ID: <span className="font-mono">{cert.credentialId}</span>
                </p>
              </div>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
              >
                <Award size={16} />
                View Certificate
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            All certifications are current and verified. Click on any certificate to view the official credential.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;