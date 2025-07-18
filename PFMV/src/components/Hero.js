import React from "react";

export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-black px-6">
      <div className="text-center max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-4">
            Matthew
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight">
            Vogelsang
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
          Full-stack developer crafting digital experiences with modern technologies
        </p>
        <div className="text-sm text-gray-500 uppercase tracking-wider">
          Available for freelance work
        </div>
      </div>
    </section>
  );
} 