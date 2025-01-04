import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gray-900 text-white py-20">
      <h1 className="text-5xl font-bold mb-4">Welcome to MEDIOCTA</h1>
      <p className="text-xl mb-6">Explore premium collections crafted for style and comfort.</p>
      <button className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200">Shop Now</button>
    </section>
  );
};

export default Hero;

