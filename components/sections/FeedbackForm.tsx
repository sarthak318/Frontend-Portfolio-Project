"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Star,
  User,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/image/LogoWithoutBackground.svg";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  instagram: string;
  facebookTwitter: string;
  requirements: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  requirements?: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phone: "",
    instagram: "",
    facebookTwitter: "",
    requirements: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = "Please explain your requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     setIsSubmitting(true);
  //     try {
  //       const response = await fetch("/api/sendEmail?type=feedback", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ ...formData, rating }),
  //       });
  //       if (response.ok) {
  //         toast.success("Feedback submitted successfully!");
  //         setFormData({ name: "", email: "", comments: "" });
  //         setRating(4);
  //       } else {
  //         throw new Error("Failed to submit feedback");
  //       }
  //     } catch (error) {
  //       toast.error("Failed to submit feedback. Please try again.");
  //       console.error("Error submitting feedback:", error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        const response = await fetch("/api/sendEmail?type=contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        });
        if (response.ok) {
          toast.success("Contact Details submitted successfully!");
          setFormData({
            firstName: "",
            email: "",
            requirements: "",
            instagram: "",
            facebookTwitter: "",
            phone: "",
          });
        } else {
          throw new Error("Failed to submit feedback");
        }
      } catch (error) {
        toast.error("Failed to submit form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div id="contact-us" className="mx-4 mb-[40px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container max-md:px-2 max-md:py-[8px] py-[100px] rounded-3xl bg-[#02033B]"
      >
        <div className="grid md:grid-cols-2">
          {/* Left Section */}
          <div className="p-8 mx-auto my-auto md:p-12">
            {/* Logo */}
            <motion.div
              variants={itemVariants}
              className="text-2xl mx-auto w-fit font-bold text-white"
            >
              <Image src={Logo || "/placeholder.svg"} alt="Logo" width={300} />
            </motion.div>

            {/* Social Links */}
            <div className="mt-auto mx-auto w-fit flex gap-6 ">
              {[
                {
                  icon: <Instagram size={24} />,
                  href: "https://www.instagram.com/blintfly_official?igsh=eHZteW5xanc3djY%3D&utm_source=qr",
                },
                {
                  icon: <Linkedin size={24} />,
                  href: "https://www.linkedin.com/company/blintfly/",
                },
                {
                  icon: <Facebook size={24} />,
                  href: "https://www.facebook.com/share/15apre6i7R/?mibextid=wwXIfr",
                },
              ].map((social, index) => (
                <Link
                  target="_blank"
                  key={index}
                  href={social.href}
                  className="rounded-full bg-[#3461FF]/10 p-3 text-[#3461FF] hover:bg-[#7C3AED]/20"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl bg-white m-4 p-8 md:p-12"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-8 text-2xl font-bold"
            >
              Contact Us
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={formFieldVariants} className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <div className="relative">
                  <Input
                    name="firstName"
                    placeholder="Enter your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`pl-10 ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                  />
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </motion.div>

              <motion.div variants={formFieldVariants} className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                  />
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </motion.div>

              <motion.div variants={formFieldVariants} className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <div className="relative">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Enter your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                  />
                  <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </motion.div>

              <motion.div variants={formFieldVariants} className="space-y-2">
                <label htmlFor="instagram" className="text-sm font-medium">
                  Instagram
                </label>
                <div className="relative">
                  <Input
                    name="instagram"
                    placeholder="Your Instagram handle"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="pl-10"
                  />
                  <Instagram className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                </div>
              </motion.div>

              <motion.div variants={formFieldVariants} className="space-y-2">
                <label
                  htmlFor="facebookTwitter"
                  className="text-sm font-medium"
                >
                  Facebook/Twitter
                </label>
                <div className="relative">
                  <Input
                    name="facebookTwitter"
                    placeholder="Your Facebook or Twitter handle"
                    value={formData.facebookTwitter}
                    onChange={handleChange}
                    className="pl-10"
                  />
                  <Facebook className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                </div>
              </motion.div>

              <motion.div variants={formFieldVariants} className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-medium">
                  Your Requirements
                </label>
                <Textarea
                  name="requirements"
                  placeholder="Type your message here"
                  value={formData.requirements}
                  onChange={handleChange}
                  className={`min-h-[120px] resize-none ${
                    errors.requirements ? "border-red-500" : ""
                  }`}
                />
                {errors.requirements && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.requirements}
                  </p>
                )}
              </motion.div>

              <Button
                type="submit"
                className="w-fit rounded-full bg-[#3461FF] hover:bg-[#3461FF] text-white px-8 py-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
