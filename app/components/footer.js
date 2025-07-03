"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const addressRefs = useRef([]);
  const linkRefs = useRef([]);
  const createdByRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(logoRef.current, { opacity: 0, y: 100 });
    gsap.set(addressRefs.current, { opacity: 0, y: 40 });
    gsap.set(linkRefs.current, { opacity: 0, y: 40 });
    gsap.set(createdByRef.current, { opacity: 0, y: 60 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    })
      .to(
        addressRefs.current,
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.25, ease: "power2.out" },
        "-=0.5"
      )
      .to(
        linkRefs.current,
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.25, ease: "power2.out" },
        "-=0.5"
      )
      .to(
        createdByRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
  }, []);

  return (
    <section
      ref={footerRef}
      className="flex flex-col min-h-screen bg-[#246FA6] text-custom-white"
    >
      <div className="flex items-center justify-center pt-28 md:pt-[200px] lg:pt-[160px] xl:pt-[200px] px-4 md:px-[100px] lg:px-[180px] xl:px-[220px]">
        <img
          ref={logoRef}
          src="./assets/icons/Archie-Studio.svg"
          alt="Logo"
          className="w-[300px] md:w-[600px] lg:w-[900px] xl:w-[89.7vw] h-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between px-4 md:px-[60px] lg:px-[120px] xl:px-[180px] mt-8 md:mt-[280px] lg:mt-[180px] xl:mt-[280px]">
        <div className="flex flex-col md:flex-row gap-10 md:gap-5 md:mb-0">
          <div className="flex flex-col">
            <h3
              className="text-xl md:text-[32px] lg:text-[36px] xl:text-[40px]"
              ref={(el) => addressRefs.current.push(el)}
            >
              Bali, Indonesia
            </h3>
            <p
              className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-8 leading-relaxed"
              ref={(el) => addressRefs.current.push(el)}
            >
              Jl. Mawar No.70, Denpasar,
            </p>
            <p
              className="text-sm md:text-base lg:text-lg xl:text-xl"
              ref={(el) => addressRefs.current.push(el)}
            >
              Bali 707
            </p>
            <p
              className="text-sm md:text-base lg:text-lg xl:text-xl"
              ref={(el) => addressRefs.current.push(el)}
            >
              +62-857-6114
            </p>
          </div>
          <div className="flex flex-col">
            <h3
              className="text-xl md:text-[32px] lg:text-[36px] xl:text-[40px]"
              ref={(el) => addressRefs.current.push(el)}
            >
              Jakarta, Indonesia
            </h3>
            <p
              className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-8 leading-relaxed"
              ref={(el) => addressRefs.current.push(el)}
            >
              Jl. Permata 10 No.10, Central Jakarta,
            </p>
            <p
              className="text-sm md:text-base lg:text-lg xl:text-xl"
              ref={(el) => addressRefs.current.push(el)}
            >
              Jakarta 707
            </p>
            <p
              className="text-sm md:text-base lg:text-lg xl:text-xl"
              ref={(el) => addressRefs.current.push(el)}
            >
              +62-812-0440
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-16 text-lg md:text-[28px] lg:text-[32px] xl:text-[36px]">
          <div className="flex flex-col lg:space-y-3 xl:space-y-4">
            <a
              href="#"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              Home
            </a>
            <a
              href="#story"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              About Us
            </a>
            <a
              href="#expertise"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              Expertise
            </a>
          </div>
          <div className="flex flex-col lg:space-y-3 xl:space-y-4 md:space-y-[10px]">
            <a
              href="#project"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:underline"
              ref={(el) => linkRefs.current.push(el)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-[172px] lg:mt-[120px] xl:mt-[172px] md:mb-8 text-sm md:text-base lg:text-lg xl:text-xl px-4 md:px-12 lg:px-24 xl:px-32"
        ref={createdByRef}
      >
        <div>
          <p>&copy; 2024 Copyright Archie Studio</p>
        </div>

        <div className="flex space-x-4 md:space-x-2 xl:space-x-6">
          <a href="#" className="hover:underline">
            Legal
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Warranty
          </a>
        </div>

        <div className="flex space-x-1 md:space-x-2">
          <p>Created by |</p>
          <img
            src="./assets/icons/Archie-Studio.svg"
            className="w-20 md:w-32 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
