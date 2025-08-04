import React from 'react';
import { ArrowRight, Sparkles, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Empowering Women in Engineering</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              IEEE×WIE
            </span>
            <br />
            <span className="text-gray-800 text-4xl md:text-5xl">SFIT</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            St. Francis Institute of Technology's IEEE Women in Engineering Committee - 
            Inspiring innovation, fostering collaboration, and building the future of technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center">
              Explore Events
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full font-semibold border border-gray-200 hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
              Meet Our Team
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800 mb-1">50+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800 mb-1">25+</h3>
              <p className="text-gray-600">Events Organized</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Sparkles className="w-8 h-8 text-pink-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800 mb-1">5+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;