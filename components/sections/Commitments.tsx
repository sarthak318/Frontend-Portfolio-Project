"use client"

import { motion } from "framer-motion"

export default function Commitments() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      id="milestones"
      className="w-full text-black bg-[#FFD02F] p-8 md:p-16 lg:p-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 container mx-auto my-[100px] md:grid-cols-12 gap-12 lg:gap-24">
        {/* Left side stats */}
        <motion.div className="md:col-span-5 grid grid-cols-2 gap-12 lg:gap-16" variants={containerVariants}>
          {[
            { value: "145%", description: "More revenues for the brand" },
            { value: "30K+", description: "Audiences reached" },
            { value: "25+", description: "Brands trust us" },
            { value: "99%", description: "Client Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div key={index} className="space-y-4" variants={itemVariants}>
              <motion.div
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right side commitments */}
        <motion.div className="md:col-span-7 md:pl-12 lg:pl-24 space-y-8" variants={containerVariants}>
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" variants={itemVariants}>
            Commitments
          </motion.h2>
          <motion.p className="text-base md:text-lg lg:text-xl leading-relaxed" variants={itemVariants}>
            At Blintfly, we are dedicated to crafting visually appealing and high-performance websites. Our mission is
            to help your business thrive online by aligning with your goals and creating strategies that deliver
            measurable success.
          </motion.p>
          <motion.p className="text-base md:text-lg lg:text-xl leading-relaxed" variants={itemVariants}>
            We commit to innovation, excellence, and your digital growth. Our team of experts ensures that every project
            we undertake is a step towards realizing your brand's full potential in the digital landscape.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

