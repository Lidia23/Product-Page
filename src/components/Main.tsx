import React from 'react';

export function Main() {
  return (
    <div className="relative h-screen pb-20 text-customBlue dark:text-slate-100">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <h1 className="font-bold text-4xl overflow-hidden">Welcome to our shop!</h1>
        <h3 className="mt-10 text-xl overflow-hidden whitespace-nowrap animate-typing">
          Here you can find products from different categories and brands with the most reasonable
          prices!
        </h3>
      </div>
      <a
        href="#postPage"
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center mb-5"
      >
        <p>What are you waiting for!</p>
        <p className="mt-5 animate-bounce">👇🏻</p>
      </a>
    </div>
  );
}
