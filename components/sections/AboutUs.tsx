"use client";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LightBulb from "@/public/image/light-bulbs-1603766_1280 1.png";
import Sparkles from "@/public/image/sparkle.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about-us" className="w-full bg-[#EBF5F8] py-16 md:py-24">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content Column */}
          <motion.div className="space-y-6 relative" variants={itemVariants}>
            {/* Decorative Star */}
            <motion.div className="absolute -top-[90px] max-md:-left-[80px] max-md:-top-10 -left-[140px] transform">
              <Image
                className="max-md:w-[150px] w-[250px]"
                src={Sparkles || "/placeholder.svg"}
                alt=""
              />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-[#3461FF]">At Blintfly, crafting</span>{" "}
              websites isn't just what we do—it's what we love.
            </motion.h1>
            <motion.p
              className="text-gray-700 text-lg max-w-xl"
              variants={itemVariants}
            >
              With a passionate team of designers, developers, and strategists,
              we specialize in creating visually captivating, high-performance
              websites that drive results. Whether you're a startup, a small
              business, or a global brand, we are here to elevate your digital
              journey.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <Link
                to="contact-us"
                smooth
                className="text-sm cursor-pointer font-medium text-gray-700 hover:text-gray-900"
              >
                <Button className="bg-[#3461FF] hover:bg-[#3461FF] text-white px-6 py-2 rounded-full text-lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div className="relative" variants={imageVariants}>
            <div className="relative border-[18px] bg-[#407BFF] border-r-0 z-0 border-[#407BFF] border-l-0 aspect-square max-w-md mx-auto">
              <motion.img
                src={LightBulb.src}
                alt="Decorative image"
                className="w-full absolute left-[-20px] h-full z-10 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
