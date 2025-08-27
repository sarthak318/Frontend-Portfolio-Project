import Commitments from "../components/sections/Commitments";
import AboutUs from "@/components/sections/AboutUs";
import FeedbackForm from '@/components/sections/FeedbackForm'
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import CompaniesBanner from "@/components/sections/CompaniesBanner";
export default function Home() {
  return (
   <div className="">
    <Hero/>
    <CompaniesBanner/>
    <AboutUs/>
    <WhyUs/>
    <Commitments/>
    <Testimonials/>
    <FeedbackForm/>
   </div>
  );
}
