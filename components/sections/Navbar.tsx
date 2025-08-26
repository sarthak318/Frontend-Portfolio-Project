"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/image/Logo.svg";
import NextLink from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <NextLink href="/" className="flex items-center text-xl font-bold">
          <Image src={Logo || "/placeholder.svg"} alt="Logo" width={130} />
        </NextLink>

        {pathname === "/" && (
          <>
            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <Link
                to="about-us"
                smooth
                className="text-sm cursor-pointer font-medium text-gray-700 hover:text-gray-900"
              >
                About Us
              </Link>
              <Link
                to="why-us"
                smooth
                className="text-sm cursor-pointer font-medium text-gray-700 hover:text-gray-900"
              >
                Why Us
              </Link>
              <Link
                to="milestones"
                smooth
                className="text-sm cursor-pointer font-medium text-gray-700 hover:text-gray-900"
              >
                Milestones
              </Link>
              <Link
                to="testimonials"
                smooth
                className="text-sm cursor-pointer font-medium text-gray-700 hover:text-gray-900"
              >
                Testimonials
              </Link>
              <Link
                to="contact-us"
                smooth
                className="text-sm cursor-pointer font-medium text-gray-700 hover:text-gray-900"
              >
                Contact Us
              </Link>
              <Link
                to="contact-us"
                smooth
                className="text-sm cursor-pointer font-medium text-gray-700 hover:text-gray-900"
              >
                <Button className="rounded-full bg-[#7C3AED] px-6 hover:bg-[#6D28D9]">
                  Book Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      {isOpen && pathname === "/" && (
        <div className="absolute left-0 right-0 top-16 bg-white p-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              to="about-us"
              smooth
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="why-us"
              smooth
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </Link>
            <Link
              to="milestones"
              smooth
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Milestones
            </Link>
            <Link
              to="testimonials"
              smooth
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="contact-us"
              smooth
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link to={"contact-us"} smooth>
              <Button
                className="w-full rounded-full bg-[#7C3AED] hover:bg-[#6D28D9]"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
