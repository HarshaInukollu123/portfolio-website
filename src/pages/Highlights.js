import React from "react";

const Highlights = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          My Professional Highlights
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* First Item */}
          <div
            className="p-6 bg-white shadow rounded-lg text-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-2xl font-bold text-blue-500">5+</h2>
            <p className="mt-2 text-gray-600">Years of Experience</p>
          </div>

          {/* Second Item */}
          <div
            className="p-6 bg-white shadow rounded-lg text-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-2xl font-bold text-blue-500">10+</h2>
            <p className="mt-2 text-gray-600">Completed Projects</p>
          </div>

          {/* Third Item */}
          <div
            className="p-6 bg-white shadow rounded-lg text-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <h2 className="text-2xl font-bold text-blue-500">15+</h2>
            <p className="mt-2 text-gray-600">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
