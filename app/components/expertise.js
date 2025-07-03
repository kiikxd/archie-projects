"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Expertise = () => {
  const sectionRef = useRef(null);
  const h1LeftRef = useRef(null);
  const pLeftRef = useRef(null);
  const h1RightRef = useRef(null);
  const pRightRef = useRef(null);
  const leftBgRef = useRef(null);
  const rightBgRef = useRef(null);

  useGSAP(() => {
    gsap.set(leftBgRef.current, { xPercent: -100 });
    gsap.set(h1LeftRef.current, { xPercent: -200, opacity: 0 });
    gsap.set(pLeftRef.current, { opacity: 0 });
    gsap.set(rightBgRef.current, { xPercent: 100 });
    gsap.set(h1RightRef.current, { xPercent: 200, opacity: 0 });
    gsap.set(pRightRef.current, {  opacity: 0 });

    
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      }
    })
    
    tl1.to(leftBgRef.current, { xPercent: 0, duration: 1 });
    tl1.to(rightBgRef.current, { xPercent: 0, duration: 1 });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        pin: true,
        scrub: true,
        end: "+=4000",
      },
    });

      tl2.to(h1LeftRef.current, { xPercent: 0, opacity: 1, duration: 2 });
      tl2.to(h1RightRef.current, { xPercent: 0, opacity: 1, duration: 2 }), "+=5";
      tl2.to(pLeftRef.current, { opacity: 1, duration: 2 });
      tl2.to(pRightRef.current, { opacity: 1, duration: 2 }, "-=0.5");
  }, {scope: sectionRef});

  return (
    <section
      ref={sectionRef}
      className="h-auto md:min-h-screen flex flex-col justify-between px-6 sm:px-10 md:px-0 overflow-hidden bg-white"
      id="expertise"
    >
      <p className="text-center text-black mb-16 text-xl md:text-2xl lg:text-[32px] xl:text-4xl leading-[29.05px]">
        Our Expertise
      </p>

      <div className="flex flex-col md:flex-row w-full h-auto md:h-[801px] relative text-custom-white">
        <div className="relative w-full md:w-1/2 h-80 md:h-full">
          <img
            ref={leftBgRef}
            src="./assets/images/rumah1.jpeg"
            className="w-full h-full object-cover bg-no-repeat"
            alt="Architectural Expertise"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-12 xl:p-16">
            <h1 
            ref={h1LeftRef} 
            className="text-xxl4 sm:text-xxl4 md:text-[60px] lg:text-[80px] xl:text-[100px]">
              Archi<span className="font-play-fair italic">tectural</span>
            </h1>
            <p ref={pLeftRef} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center pt-4 md:pt-8 lg:pt-12 xl:pt-16 px-6 sm:px-12 md:px-16 lg:px-[100px] xl:px-[150px]">
              With a team of visionary architects, we embark on the journey of
              architectural innovation. From conceptualization to execution, we
              push the boundaries of design, creating structures that seamlessly
              blend form, function, and sustainability.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-80 md:h-full mt-6 md:mt-0">
          <img
            ref={rightBgRef}
            src="./assets/images/rumah2.jpeg"
            className="w-full h-full object-cover"
            alt="Interior Design Expertise"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-12 xl:p-16">
            <h1 
            ref={h1RightRef}
             className="text-xxl4 sm:text-xxl4 md:text-[60px] md:text-center lg:text-[80px] xl:text-[100px]">
              Interior <span className="font-play-fair italic">Design</span>
            </h1>
            <p ref={pRightRef} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center pt-4 md:pt-8 lg:pt-12 xl:pt-16 px-6 sm:px-12 md:px-16 lg:px-[100px] xl:px-[150px]">
              Our interior design team is a symphony of creativity and
              functionality. We curate interiors that tell stories, where each
              element is thoughtfully chosen to enhance the overall aesthetic
              and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;