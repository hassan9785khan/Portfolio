import { motion } from 'framer-motion';
import { Brain, Shield, Code, Cloud, BarChart3, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-blue-500 to-purple-600",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLTK", "spaCy", "Hugging Face", "MLflow"]
    },
    {
      title: "Security & Research",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      skills: ["Penetration Testing", "Vulnerability Assessment", "OWASP", "Cryptography", "Network Security", "Threat Analysis", "Security Architecture", "Compliance"]
    },
    {
      title: "Full-Stack Development",
      icon: Code,
      color: "from-green-500 to-teal-600",
      skills: ["TypeScript", "React", "Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs", "Microservices"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-cyan-500 to-blue-600",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring", "Prometheus", "Grafana", "Jenkins"]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      color: "from-purple-500 to-pink-600",
      skills: ["Pandas", "NumPy", "Jupyter", "Apache Spark", "Elasticsearch", "Time Series", "Statistical Analysis", "Data Visualization", "ETL Pipelines"]
    },
    {
      title: "Certifications & Tools",
      icon: Award,
      color: "from-yellow-500 to-orange-600",
      skills: ["OCI Generative AI Professional", "Git", "Linux", "Bash", "VS Code", "Postman", "Jira", "Agile", "Scrum"]
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1)_0%,transparent_50%)] pointer-events-none" />
      
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
            <span className="gradient-text">Technical Skills</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technical expertise across AI/ML engineering, security research, and modern development practices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative glass rounded-xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover-lift"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="group/skill flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-all cursor-default"
                    >
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <span className="text-gray-300 text-sm group-hover/skill:text-green-400 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Animated border */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Technologies", value: "50+" },
              { label: "Projects Completed", value: "100+" },
              { label: "Certifications", value: "6+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;