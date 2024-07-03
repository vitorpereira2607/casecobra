"use client"

import React, { useEffect, useRef, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from "@/components/Icons";
import Star from './Star';
import { Check } from 'lucide-react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import Phone from './Phone';
import ReviewPhoneAnimation from './ReviewPhoneAnimation';

const ReviewsSection = () => {
  return (

    <section className="bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl">
            What our <span className="relative px-2">customers{' '}<Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" /></span> say
          </h2>
          <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
              <Star count={5} />
            </div>
            <div className="text-lg leading-8">
              <p>&quot;The case feels durable and i even got a compliment on the design. Had the case for two and a half months now and <span className="p-0.5 bg-slate-800 text-white">the image is super clear</span>, on the case i had before, the image started fading into yellow-ish color after a couple weeks. Love it&quot;</p>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <img
              className="rounded-full size-12 object-cover"
              src="/users/user-1.png"
              alt="user image"
            />
            <div className="flex flex-col">
              <p className="font-semibold">Vitor Pereira</p>
              <div className="flex gap-1.5 items-center text-zinc-600">
                <Check className="size-4 stroke-[3px] text-green-600" />
                <p className="text-sm">Verified Purchase</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
              <Star count={5} />
            </div>
            <div className="text-lg leading-8">
              <p>
                &quot;I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, <span className="p-0.5 bg-slate-800 text-white">looks brand new after about half a year</span>. I dig it&quot;
              </p>

            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <img
              className="rounded-full size-12 object-cover"
              src="/users/user-4.jpg"
              alt="user image"
            />
            <div className="flex flex-col">
              <p className="font-semibold">Joaquim Abreu</p>
              <div className="flex gap-1.5 items-center text-zinc-600">
                <Check className="size-4 stroke-[3px] text-green-600" />
                <p className="text-sm">Verified Purchase</p>
              </div>
            </div>
          </div>
        </div>

      </MaxWidthWrapper>

      {/* Review Grid */}

      <div className="pt-16">
        <MaxWidthWrapper className="relative max-w-5xl">
          <img
            aria-hidden="true"
            src='/what-people-are-buying.png'
            className="absolute select-none hidden xl:block -left-32 top-1/3"
          />

          <ReviewPhoneAnimation />

        </MaxWidthWrapper>
      </div>
    </section>
  )
}

export default ReviewsSection