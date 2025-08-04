import React from 'react';
import { Target, Heart, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To inspire and empower women in engineering through innovative programs, mentorship, and professional development opportunities."
    },
    {
      icon: Heart,
      title: "Vision",
      description: "Creating an inclusive environment where women engineers can thrive, lead, and make significant contributions to technology."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creativity and technical excellence through workshops, hackathons, and collaborative projects."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in all our initiatives while celebrating achievements and milestones."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IEEE×WIE SFIT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The IEEE Women in Engineering (WIE) Student Branch at St. Francis Institute of Technology 
            is dedicated to promoting women engineers and scientists, and inspiring girls around the world 
            to follow their academic interests in a career in engineering.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* IEEE WIE Description */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                What is IEEE Women in Engineering?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                IEEE Women in Engineering (WIE) is one of the largest international professional organizations 
                dedicated to promoting women engineers and scientists, and inspiring girls around the world 
                to follow their academic interests in a career in engineering and science.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our SFIT chapter focuses on creating opportunities for professional development, networking, 
                and technical advancement while fostering an inclusive environment for all students.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Professional Development
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Technical Workshops
                </span>
                <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  Networking Events
                </span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  Mentorship Programs
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Award className="w-12 h-12 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Excellence in Engineering</h4>
                  <p className="text-gray-600">Empowering the next generation</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;