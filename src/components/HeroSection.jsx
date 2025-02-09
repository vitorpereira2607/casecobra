'use client'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion, useAnimation } from 'framer-motion';
import { Check } from "lucide-react";
import { fadeInLeftVariant, fadeInRightVariant } from './animations/animations';
import PhoneSection from './PhoneSection';
import Star from './Star';

const HeroSection = () => {
  const heroImageSrc = "/snake-1.png";
  const userImages = [
    { src: "/users/user-1.png", alt: "User 1" },
    { src: "/users/user-2.png", alt: "User 2" },
    { src: "/users/user-3.png", alt: "User 3" },
    { src: "/users/user-4.jpg", alt: "User 4" },
    { src: "/users/user-5.jpg", alt: "User 5" }
  ];

  const mainImageSrc = "/your-image.png";
  const lineImageSrc = "/line.png";
  const phoneImageSrc = "/testimonials/1.jpg";

  const controls = useAnimation();

  return (
    <section>
      <MaxWidthWrapper
        className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 ">
        <motion.div
          initial="hidden"
          variants={fadeInLeftVariant}
          animate={controls}
          className="col-span-2 px-6 lg:px-0 lg:pt-4"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.3,
              ease: "easeInOut"
            }
          }}
        >
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start ">
            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
              <img src="/snake-1.png" className="w-full"></img>
            </div>
            <h1
              className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Your Image on a <span className="bg-green-600 px-2 text-white">Custom</span> Phone Case
            </h1>
            <p
              className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Capture your favorite memories with your own, <span className="font-semibold">one-of-one</span> phone case.
              CaseCobra allows you to protect your memories, not just your phone case.
            </p>

            <ul className="mt-8 space-y-2 text-left front-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" /> High-quality, durable material</li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" /> 5 year print guarantee</li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" /> Modern iPhone models supported</li>
              </div>
            </ul>

            <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
              <div className='flex -space-x-4'>
                {userImages.map((users, index) => (
                  <img
                    key={index}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src={users.src}
                    alt={users.alt}
                  />
                ))}
              </div>
              <div className='flex flex-col justify-between items-center sm:items-start'>
                <div className='flex gap-0.5'>
                  <Star count={5} />
                </div>
              </div>
              <p>
                <span className='font-semibold'>1.250</span> happy customers
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          variants={fadeInRightVariant}
          animate={controls}
          whileInView={{
            opacity: 1, x: 0, transition: {
              duration: 1.3,
              delay: 0.4,
              ease: "easeInOut"
            }
          }}>
          <PhoneSection
            mainImageSrc={mainImageSrc}
            lineImageSrc={lineImageSrc}
            phoneImageSrc={phoneImageSrc}

          />
        </motion.div>

      </MaxWidthWrapper>
    </section >
  )
}

export default HeroSection