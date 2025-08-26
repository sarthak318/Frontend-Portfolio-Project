"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import Underline from "@/public/image/underline.png"
import Arrow from "@/public/image/Arrow.svg"
import Image from "next/image"
import { motion } from "framer-motion"

const WhyUs = () => {
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

  const arrowVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.5, // Delay the arrow animation until after main content is loaded
      },
    },
  }

  const cardData = [
    {
      number: 1,
      title: "Tailored Solution",
      description: "We create custom websites that perfectly align with your business goals, audience, and brand.",
      bgColor: "bg-[#3461FF]",
      translateY: "md:translate-y-0",
    },
    {
      number: 2,
      title: "User-Centric Design",
      description: "Our websites are intuitive, user-friendly, and designed to drive conversions.",
      bgColor: "bg-[#9853C1]",
      translateY: "md:translate-y-16",
    },
    {
      number: 3,
      title: "Quality Delivery",
      description: "We ensure fast, SEO-optimized, and mobile-responsive websites delivered on time and within budget.",
      bgColor: "bg-[#F0B645]",
      translateY: "md:translate-y-32",
    },
  ]

  return (
    <motion.div
      id="why-us"
      className="min-h-[800px] flex"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container relative h-full mb-[80px] py-[120px]">
        <motion.div variants={arrowVariants}>
          <Image
            src={Arrow || "/placeholder.svg"}
            width={150}
            height={150}
            alt="arrow"
            className="absolute max-md:hidden top-[170px] left-0"
          />
        </motion.div>
        <motion.div variants={arrowVariants}>
          <Image
            src={Arrow || "/placeholder.svg"}
            width={150}
            height={150}
            alt="arrow"
            className="absolute max-md:hidden bottom-[-120px] left-[50%] rotate-180"
          />
        </motion.div>
        <motion.div variants={arrowVariants}>
          <Image
            src={Arrow || "/placeholder.svg"}
            width={150}
            height={150}
            alt="arrow"
            className="absolute max-md:hidden scale-x-[-1] bottom-[180px] right-[20px]"
          />
        </motion.div>

        {/* Header */}
        <motion.div className="text-center mb-12" variants={containerVariants}>
          <motion.h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight" variants={itemVariants}>
            <span className="text-[#3461FF]">Why </span> Us
          </motion.h1>
          <motion.div variants={itemVariants}>
            <img
              src={Underline.src || "/placeholder.svg"}
              alt=""
              className="mt-[4px] mx-auto w-[220px] max-md:w-[120px]"
            />
          </motion.div>
          <motion.p
            className="text-black font-semibold mt-4 mx-auto text-center text-lg max-w-xl"
            variants={itemVariants}
          >
            Blintfly simplifies web creation with unique designs tailored to your brand—no coding required. Build your
            perfect landing page today!
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className={`${card.bgColor} text-white rounded-[2rem] overflow-hidden ${card.translateY}`}>
                <motion.div
                  className="p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex flex-row items-center space-x-2">
                    <motion.span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white font-bold mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {card.number}
                    </motion.span>
                    <h2 className="text-xl font-bold mb-3">{card.title}</h2>
                  </div>
                  <p className="text-white/90">{card.description}</p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default WhyUs

