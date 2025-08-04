import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Clock, Star } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "Women in Tech Summit 2024",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "SFIT Auditorium",
      attendees: 150,
      category: "Conference",
      description: "A day-long summit featuring industry leaders, technical workshops, and networking opportunities.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "AI/ML Workshop Series",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab 1",
      attendees: 80,
      category: "Workshop",
      description: "Hands-on workshop covering machine learning fundamentals and practical applications.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Career Guidance Seminar",
      date: "April 5, 2024",
      time: "11:00 AM - 1:00 PM",
      location: "Seminar Hall",
      attendees: 120,
      category: "Seminar",
      description: "Expert guidance on career paths, interview preparation, and industry insights.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "International Women's Day Celebration",
      date: "March 8, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "SFIT Campus",
      attendees: 200,
      category: "Celebration",
      description: "Celebrating achievements of women in engineering with inspiring talks and cultural programs.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Hackathon 2024",
      date: "February 20-21, 2024",
      time: "24 Hours",
      location: "Innovation Lab",
      attendees: 100,
      category: "Competition",
      description: "48-hour hackathon focusing on solutions for social good and sustainability.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exciting lineup of workshops, seminars, and networking events designed to 
            empower and inspire the next generation of women engineers.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'past'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentEvents.map((event, index) => (
            <div
              key={event.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                event.featured ? 'lg:col-span-2 xl:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    event.featured ? 'h-64' : 'h-48'
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-800 rounded-full">
                    {event.category}
                  </span>
                </div>
                {event.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium rounded-full">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </div>
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-3 text-purple-500" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-pink-500" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-3 text-green-500" />
                    <span className="text-sm">{event.attendees} attendees</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full group/btn bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  {activeTab === 'upcoming' ? 'Register Now' : 'View Details'}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;