"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface FormData {
  firstName: string
  email: string
  phone: string
  instagram: string
  facebookTwitter: string
  requirements: string
}

interface FormErrors {
  firstName?: string
  email?: string
  phone?: string
  requirements?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phone: "",
    instagram: "",
    facebookTwitter: "",
    requirements: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = "Please explain your requirements"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      try {
        // Simulate API call
        const response = await fetch("/api/sendEmail?type=contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        })
        if (response.ok) {
          toast.success("Contact Details submitted successfully!")
          setFormData({ firstName: "", email: "", requirements: "",instagram : "",facebookTwitter : "",phone : "" })
         
        } else {
          throw new Error("Failed to submit feedback")
        }
      } catch (error) {
        toast.error("Failed to submit form. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  return (
    <motion.div
      className="max-w-2xl min-h-screen mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-[#333333] mb-8">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-xl text-[#333333]">Let&apos;s start with your personal details</h2>

          <div className="space-y-4">
            <div>
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full ${errors.firstName ? "border-red-500" : ""}`}
              
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full ${errors.email ? "border-red-500" : ""}`}
               
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full ${errors.phone ? "border-red-500" : ""}`}
               
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl text-[#333333]">Share your Socials</h2>

          <div className="space-y-4">
            <Input
              name="instagram"
              placeholder="Instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full"
            />

            <Input
              name="facebookTwitter"
              placeholder="Facebook/Twitter"
              value={formData.facebookTwitter}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl text-[#333333]">Explain your requirements</h2>

          <div>
            <Textarea
              name="requirements"
              placeholder="Type your message here"
              value={formData.requirements}
              onChange={handleChange}
              className={`min-h-[150px] w-full ${errors.requirements ? "border-red-500" : ""}`}
            
            />
            {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>}
          </div>
        </div>

        <Button type="submit" className="bg-black hover:bg-gray-800 text-white px-8 py-2" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </motion.div>
  )
}

