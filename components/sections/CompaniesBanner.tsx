"use client"

import React from "react"
import Marquee from "react-fast-marquee"
import Image from "next/image"

import { motion } from "framer-motion"
import Company1 from "@/public/image/Company1.jpeg"
import Company2 from "@/public/image/Company2.jpeg"
import Company3 from "@/public/image/Company3.jpeg"
import Company4 from "@/public/image/Company4.jpeg"
import Company5 from "@/public/image/Company5.jpeg"
import Company6 from "@/public/image/Company6.jpeg"
const companyLogos = [Company1, Company2, Company3, Company4, Company5, Company6]

export default function CompaniesBanner() {
  return (
    <motion.div
      className="w-full bg-white py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto mb-8">
        <motion.h2
          className="text-center text-2xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted by 20+ Partners
        </motion.h2>
      </div>

      <Marquee speed={40} pauseOnHover={true} gradient={false} className="py-4">
        <div className="flex">
          {companyLogos.concat(companyLogos).map((logo, index) => (
            <motion.div
              key={index}
              className="mx-[80px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Partner Logo ${index + 1}`}
                className="h-[120px] w-auto object-contain"
                width={180}
                height={64}
              />
            </motion.div>
          ))}
        </div>
      </Marquee>
    </motion.div>
  )
}

