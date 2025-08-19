import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "OCI Generative AI Professional",
      issuer: "Oracle",
      date: "2024",
      credentialId: "OCI-GAI-2024-001",
      description: "Advanced certification in generative AI technologies, covering large language models, prompt engineering, and enterprise AI implementation.",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=your-badge-id",
      logo: "🔮"
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-2023-456",
      description: "Professional-level certification demonstrating expertise in designing distributed systems and applications on AWS platform.",
      link: "https://www.credly.com/badges/your-aws-badge-id",
      logo: "☁️"
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      credentialId: "CEH-2023-789",
      description: "Advanced certification in ethical hacking methodologies, penetration testing, and cybersecurity assessment techniques.",
      link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=your-cert-id",
      logo: "🛡️"
    },
    {
      title: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-MLE-2022-123",
      description: "Professional certification in machine learning engineering, covering ML model design, development, and deployment on GCP.",
      link: "https://www.credential.net/your-google-cert-id",
      logo: "🤖"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-567",
      description: "Hands-on certification demonstrating skills in Kubernetes cluster administration, troubleshooting, and management.",
      link: "https://www.credly.com/badges/your-cka-badge-id",
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