import React from 'react';

export function Main() {
  return (
    <div className="relative h-screen pb-20 text-customBlue dark:text-slate-100">
      <div className="flex flex-col justify-center items-center h-full text-center px-4 sm:px-8">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl overflow-hidden">
          Welcome to our shop!
        </h1>
        <h3 className="mt-5 md:mt-10 text-lg md:text-xl overflow-hidden lg:whitespace-nowrap lg:animate-typing">
          Here you can find products from different categories and brands with the most reasonable
          prices!
        </h3>
      </div>
      <a
        href="#postPage"
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center mb-5"
      >
        <p className="text-sm sm:text-base md:text-lg">What are you waiting for!</p>
        <p className="mt-3 md:mt-5 animate-bounce text-xl md:text-2xl">👇🏻</p>
      </a>
    </div>
  );
}
