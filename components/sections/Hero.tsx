"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Thinking from "@/public/image/Design Thinking.png";
import Working from "@/public/image/Designer Working 1.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { toast } from "sonner";

export default function Hero() {

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendEmail?type=email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("We’ll reach out to you soon!");
        setEmail("");
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="home"
      className="relative md:min-h-[700px] overflow-hidden bg-white md:px-[70px] py-12 md:py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute max-w-[100px] top-0 left-0">
        <svg
          className="max-md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="87"
          height="208"
          viewBox="0 0 87 208"
          fill="none"
        >
          <motion.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-33.9995 0C-3.96327 3.96421 16.3039 18.3711 38.5793 35.6379C66.111 56.9791 90.65 84.4849 86.4068 115.633C81.6845 150.299 56.8233 186.527 16.6862 196.352C-20.2844 205.401 0.706005 214.514 -34 200.556C-34 200.556 -33.9995 160.999 -33.9995 122.5C-33.9995 91.211 -33.9995 77.4986 -34 45.4998C-31.9539 37.9995 -33.9995 0 -33.9995 0Z"
            fill="#9853C1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column */}
          <motion.div className="flex flex-col justify-center space-y-8">
            <motion.h1
              className="text-6xl max-md:text-5xl font-bold leading-tight tracking-tight lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Empowering
              <br />
              Your Brand&apos;s
              <br />
              <motion.span className="text-[#3461FF]">
                <TypeAnimation
                  sequence={[
                    "Digital", // First word
                    1000, // Delay
                    "Online", // Second word
                    1000,
                    "Marketing",
                    1000,
                  ]}
                  speed={50} // Typing speed
                  deletionSpeed={30} // Erase speed
                  repeat={Infinity} // Loop infinitely
                />
                <br />
                Presence
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl max-w-[400px] font-inria text-gray-600"
              variants={itemVariants}
            >
              We make modern and futuristic websites for your company
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="flex max-md:flex-col max-md:gap-4 max-w-md gap-2"
              variants={itemVariants}
            >
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 py-2 rounded-full border-gray-200 bg-white px-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  className="rounded-full bg-[#3461FF] px-8 hover:bg-[#3461FF]"
                  disabled={isSubmitting}
                >
                  {!isSubmitting ? "We'll Reach You" :  "Submitting..."}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Right Column - Illustrations */}
          <div className="relative hidden md:block">
            <motion.div
              className="absolute left-[70px] top-0"
              variants={imageVariants}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="287"
                height="275"
                viewBox="0 0 287 275"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M145.485 7.68183C187.108 4.02619 235.364 -11.7565 265.738 16.5638C296.313 45.0713 286.044 93.891 282.289 135.235C278.984 171.624 271.776 208.201 245.956 234.385C219.812 260.899 182.894 271.565 145.485 273.972C104.88 276.585 60.1858 276.195 30.9948 248.219C1.5556 220.006 -1.92456 175.648 0.720483 135.235C3.17437 97.743 16.4886 60.9832 44.8873 35.9608C71.9246 12.138 109.382 10.8527 145.485 7.68183Z"
                  fill="#DB7157"
                />
                <image
                  href={Thinking.src}
                  width="240px"
                  className="transform translate-x-4 translate-y-5"
                  clipPath="url(#clip0)"
                />
                <defs>
                  <clipPath id="clip0">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M145.485 7.68183C187.108 4.02619 235.364 -11.7565 265.738 16.5638C296.313 45.0713 286.044 93.891 282.289 135.235C278.984 171.624 271.776 208.201 245.956 234.385C219.812 260.899 182.894 271.565 145.485 273.972C104.88 276.585 60.1858 276.195 30.9948 248.219C1.5556 220.006 -1.92456 175.648 0.720483 135.235C3.17437 97.743 16.4886 60.9832 44.8873 35.9608C71.9246 12.138 109.382 10.8527 145.485 7.68183Z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
            <motion.div
              className="absolute top-[200px] left-[280px]"
              variants={imageVariants}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="322"
                height="300"
                viewBox="0 0 322 300"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M147.49 0.127569C190.228 1.69828 226.498 24.8174 255.967 55.7694C290.129 91.649 331.122 133.234 320.202 181.528C309.269 229.877 253.228 247.221 208.039 267.723C164.75 287.364 118.091 312.536 74.8174 292.862C30.8366 272.866 12.814 222.322 3.86781 174.897C-4.57341 130.149 -0.410356 82.6095 28.5157 47.4102C57.0039 12.7437 102.613 -1.52169 147.49 0.127569Z"
                  fill="#F0B645"
                />
                <image
                  href={Working.src}
                  width="250"
                  className="transform translate-x-4 translate-y-4"
                  clipPath="url(#clip1)"
                />
                <defs>
                  <clipPath id="clip1">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M147.49 0.127569C190.228 1.69828 226.498 24.8174 255.967 55.7694C290.129 91.649 331.122 133.234 320.202 181.528C309.269 229.877 253.228 247.221 208.039 267.723C164.75 287.364 118.091 312.536 74.8174 292.862C30.8366 272.866 12.814 222.322 3.86781 174.897C-4.57341 130.149 -0.410356 82.6095 28.5157 47.4102C57.0039 12.7437 102.613 -1.52169 147.49 0.127569Z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
