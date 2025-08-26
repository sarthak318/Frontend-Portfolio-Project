'use client'
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Underline from '@/public/image/UnderlineWavy.png';
import { useRef, useState, useEffect} from 'react';

const testimonials = [
  {
    id: 1,
    content: "Blintfly transformed our outdated website into a sleek, fast, and user-friendly platform. Their team understood our vision perfectly and delivered a site that not only looks great but also performs exceptionally well. Highly recommended!",
    author: "Dhruv Sharma",
    position: "Co-Founder, Veknom",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=Dhruv%20Sharma",
    logo: "Blintfly"
  },
  {
    id: 2,
    content: "Working with Blintfly was a game-changer for our app! Their UI/UX team designed an intuitive and visually stunning interface that significantly improved user engagement. Their attention to detail and creativity are truly commendable!",
    author: "Tushar Goyal",
    position: "CEO, DharTea",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=Tushar%20Goyal",
    logo: "Blintfly"
  },
  {
    id: 3,
    content: "Blintfly’s digital marketing strategies helped us reach a larger audience and increase our conversion rates. From SEO to paid ads, their expertise and data-driven approach made a huge impact on our business growth!",
    author: "Abhishek Singh",
    position: "Head of Marketing, Veknom",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=Abhishek%20Singh",
    logo: "Blintfly"
  },
  {
    id : 4,
    content : "Blintfly built a seamless and high-performing e-commerce platform for our brand. Their team ensured smooth functionality, fast load times, and a great user experience. Our online sales have grown tremendously since the launch!",
    author : "Robert James",
    position : "Founder, Veknom",
    avatar : "https://api.dicebear.com/9.x/initials/svg?seed=Robert%20James",
    logo : "Blintfly"
  },
  {
    id : 5,
    content : "Blintfly is the perfect digital partner! Their team is professional, innovative, and always delivers beyond expectations. From branding to web development and marketing, they’ve helped our business thrive in the digital space.",
    author : "Luan Bready",
    position : "Co-Founder, Veknom",
    avatar : "https://api.dicebear.com/9.x/initials/svg?seed=Luan%20Bready",
    logo : "Blintfly"
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1280, min: 768 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function Testimonials() {
    const testimonialCardRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    
    useEffect(() => {
       if(testimonialCardRef.current){
        const updateHeight = () => {
            if (testimonialCardRef.current) {
              setHeight(testimonialCardRef.current.getBoundingClientRect().height);
            }
          };
          setTimeout(updateHeight, 0);
         // Initial measurement
          window.addEventListener('resize', updateHeight);
      
          return () => window.removeEventListener('resize', updateHeight); // Cleanup
       }
      }, []);

      const CustomButtonGroup = ({ next, previous }: { next?: () => void; previous?: () => void }) => {
        return (
          <div     style={{
            transform: `translateY(-${height / 2}px)`, // Dynamically set the transform
          }} className={` w-[calc(100%+60px)]  flex justify-between absolute left-[-30px] right-[-30px] pointer-events-none`}>
            <button
              onClick={previous}
              className="pointer-events-auto"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 text-[#3461FF]" />
            </button>
            <button
              onClick={next}
              className="pointer-events-auto"
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-[#3461FF]" />
            </button>
          </div>
        );
      };
      
  return (
    <div id='testimonials' className=" bg-background py-[100px]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#3461FF]">What Our </span> Clients Say
            </h1>
            <img src={Underline.src} alt="" className="mt-[4px] mx-auto max-md:w-[250px] w-[400px]"/>
      
        </div>

        {/* Testimonials Carousel */}
        <div ref={testimonialCardRef} className="relative">
          <Carousel
          
            responsive={responsive}
            infinite={true}
            customButtonGroup={<CustomButtonGroup />}
            arrows={false}
            renderButtonGroupOutside
            className="py-4 sm:py-6 lg:py-8"
            autoPlay={true}
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2 h-full sm:px-4">
                <Card className="bg-white/5 backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl p-4 sm:p-6 lg:p-8 h-full">
                  <div className="space-y-4 flex h-full flex-col justify-between sm:space-y-6">
                    {/* Quote */}
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-white shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="object-cover"
                        />
                      </Avatar>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                          {testimonial.author}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 truncate">
                          {testimonial.position}
                        </p>
                      </div>
                     
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;