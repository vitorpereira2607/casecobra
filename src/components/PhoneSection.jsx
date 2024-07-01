// components/PhoneSection.js
import React from 'react';
import Phone from './Phone';

const PhoneSection = ({ mainImageSrc, lineImageSrc, phoneImageSrc }) => (
  <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
    <div className="relative md:max-w-xl">
      <img
        src={mainImageSrc}
        alt="Main Image"
        className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
      />
      <img
        src={lineImageSrc}
        alt="Line Image"
        className="absolute w-20 -left-6 -bottom-6 select-none"
      />
      <Phone className="w-64" imgSrc={phoneImageSrc} />
    </div>
  </div>
);

export default PhoneSection;
