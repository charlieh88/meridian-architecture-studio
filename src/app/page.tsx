'use client';
import React from 'react';

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "Nexus Corporate Tower",
    category: "Commercial",
    location: "Manhattan, NY",
    year: "2024",
    description: "A 40-story sustainable office complex redefining downtown skylines with innovative glass facade systems and energy-efficient design.",
    awards: ["AIA Excellence Award", "LEED Platinum"],
    size: "1.2M sq ft"
  },
  {
    id: 2,
    title: "Waterfront Residence",
    category: "Residential",
    location: "Malibu, CA",
    year: "2023",
    description: "Modern coastal living with panoramic ocean views, featuring sustainable materials and seamless indoor-outdoor integration.",
    awards: ["Architectural Digest Home of the Year"],
    size: "8,500 sq ft"
  },
  {
    id: 3,
    title: "Cultural Arts Center",
    category: "Cultural",
    location: "Chicago, IL",
    year: "2024",
    description: "A community hub fostering creativity through innovative spatial design and flexible performance venues.",
    awards: ["Public Architecture Award"],
    size: "45,000 sq ft"
  }
];

const awards = [
  { name: "AIA Gold Medal", year: "2024", category: "Lifetime Achievement", icon: "🏆" },
  { name: "World Architecture Festival", year: "2023", category: "Commercial Winner", icon: "🌍" },
  { name: "Architizer A+ Award", year: "2023", category: "Residential Excellence", icon: "⭐" },
  { name: "RIBA International Prize", year: "2022", category: "Public Building", icon: "🏛️" }
];

const stats = [
  { number: "150+", label: "Projects Completed", icon: "📐" },
  { number: "25", label: "Years Experience", icon: "📅" },
  { number: "40+", label: "Awards Won", icon: "🏆" },
  { number: "12", label: "Countries", icon: "🌏" }
];

const team = [
  {
    name: "Elena Rodriguez",
    role: "Principal Architect",
    specialty: "Sustainable Design",
    image: "👩‍💼",
    experience: "15+ years"
  },
  {
    name: "Marcus Chen",
    role: "Design Director",
    specialty: "Commercial Architecture",
    image: "👨‍💼",
    experience: "12+ years"
  },
  {
    name: "Sarah Williams",
    role: "Senior Architect", 
    specialty: "Residential Projects",
    image: "👩‍🔬",
    experience: "10+ years"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-slate-200 z-50 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white text-xl font-bold">M</span>
              </div>
              <div>
                <span className="text-xl font-light text-slate-900">Meridian</span>
                <p className="text-xs text-slate-500 -mt-1">Architecture Studio</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#team" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group">
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            
            <button className="bg-slate-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Start Project
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Subtle architectural background */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg
            viewBox="0 0 800 200"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-auto max-w-6xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 180 L50 120 L90 120 L90 100 L130 100 L130 80 L170 80 L170 60 L210 60 L210 40 L250 40 L250 20 L290 20 L290 40 L330 40 L330 60 L370 60 L370 80 L410 80 L410 100 L450 100 L450 120 L490 120 L490 140 L530 140 L530 160 L570 160 L570 140 L610 140 L610 120 L650 120 L650 100 L690 100 L690 80 L730 80 L730 60 L770 60 L770 180"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-slate-900"
            />
            {/* Additional building details */}
            <rect x="70" y="130" width="15" height="50" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
            <rect x="150" y="90" width="15" height="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
            <rect x="230" y="50" width="15" height="130" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
            <rect x="310" y="50" width="15" height="130" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
            <rect x="390" y="90" width="15" height="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
            <rect x="470" y="130" width="15" height="50" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
            <rect x="550" y="150" width="15" height="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
            <rect x="630" y="130" width="15" height="50" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
            <rect x="710" y="90" width="15" height="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900" />
            
            {/* Window details on buildings */}
            <g className="text-slate-900" strokeWidth="0.5">
              <line x1="72" y1="135" x2="83" y2="135" stroke="currentColor" />
              <line x1="72" y1="145" x2="83" y2="145" stroke="currentColor" />
              <line x1="72" y1="155" x2="83" y2="155" stroke="currentColor" />
              <line x1="152" y1="95" x2="163" y2="95" stroke="currentColor" />
              <line x1="152" y1="105" x2="163" y2="105" stroke="currentColor" />
              <line x1="152" y1="115" x2="163" y2="115" stroke="currentColor" />
              <line x1="232" y1="55" x2="243" y2="55" stroke="currentColor" />
              <line x1="232" y1="65" x2="243" y2="65" stroke="currentColor" />
              <line x1="232" y1="75" x2="243" y2="75" stroke="currentColor" />
            </g>
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_70%)]"></div>
        <div className="relative text-center max-w-5xl mx-auto px-6 py-32">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-extralight text-slate-900 leading-tight">
              Where Vision
              <br />
              <span className="font-light bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Meets Precision
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Award-winning architecture studio creating transformative spaces that inspire, 
              function beautifully, and stand the test of time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="group bg-slate-900 text-white px-10 py-4 text-lg font-medium hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>View Our Work</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-10 py-4 text-lg font-medium hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-extralight text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight text-slate-900 mb-8">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Each project represents our commitment to innovative design, sustainable practices, 
              and exceptional craftsmanship that transforms spaces and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                    {/* Clean Project Images */}
                    <img
                      src={`/project-${project.id}.png`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-8xl" style={{display: 'none'}}>
                      {project.id === 1 ? '🏢' : project.id === 2 ? '🏡' : '🎭'}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-light text-slate-900 mb-2 group-hover:text-slate-700 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-2">
                          <span>{project.location}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                          <span>•</span>
                          <span>{project.size}</span>
                        </div>
                      </div>
                      <span className="text-xs uppercase tracking-wider text-white bg-slate-900 px-3 py-1.5 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed font-light">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-slate-900 uppercase tracking-wider">Recognition</h4>
                      {project.awards.map((award, awardIndex) => (
                        <div key={awardIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="border-2 border-slate-300 text-slate-700 px-10 py-4 text-lg font-medium hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-extralight text-slate-900 leading-tight">Our Philosophy</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Architecture is more than buildings—it's about creating experiences that elevate 
                  the human spirit. Every line we draw, every space we conceive, is born from a 
                  deep understanding of how people live, work, and dream.
                </p>
                <p>
                  We believe in the power of restraint, where every element serves a purpose and 
                  beauty emerges from function. Our designs speak quietly but powerfully, creating 
                  spaces that feel both timeless and thoroughly contemporary.
                </p>
                <p>
                  Sustainability isn't an afterthought—it's woven into the DNA of every project. 
                  We design for the next century, not just the next decade.
                </p>
              </div>
              
              <div className="pt-6">
                <button className="bg-slate-900 text-white px-8 py-3 text-lg font-medium hover:bg-slate-800 transition-all duration-300 transform hover:scale-105">
                  Learn More About Us
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg relative overflow-hidden group">
                <img
                  src="/philosophy-cityscape.jpg"
                  alt="Modern Architecture and Historic Buildings"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-9xl" style={{display: 'none'}}>
                  🏛️
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-900 rounded-lg transform rotate-12 opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight text-slate-900 mb-8">Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Visionary architects and designers who bring decades of experience and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-slate-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-slate-500 mb-4">{member.specialty}</p>
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    {member.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight mb-8">Recognition</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
              Our commitment to excellence has been recognized by leading architectural institutions worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {award.icon}
                  </div>
                  <h3 className="text-lg font-light mb-3 group-hover:text-slate-200 transition-colors">
                    {award.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-2">{award.year}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">
                    {award.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-slate-900 mb-8">Start Your Project</h2>
          <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your vision into reality? Let's discuss how we can create 
            something extraordinary together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center group cursor-pointer">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📧</div>
              <div className="text-slate-900 font-medium text-lg mb-2">Email</div>
              <div className="text-slate-600">hello@meridianarch.com</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📞</div>
              <div className="text-slate-900 font-medium text-lg mb-2">Phone</div>
              <div className="text-slate-600">+1 (555) 123-4567</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📍</div>
              <div className="text-slate-900 font-medium text-lg mb-2">Studio</div>
              <div className="text-slate-600">New York • Los Angeles</div>
            </div>
          </div>

          <div className="space-y-6">
            <button className="bg-slate-900 text-white px-12 py-4 text-lg font-medium hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Schedule Consultation
            </button>
            <p className="text-sm text-slate-500">
              Free initial consultation • Response within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 text-2xl font-bold">M</span>
              </div>
              <div>
                <span className="text-2xl font-light">Meridian Architecture Studio</span>
                <p className="text-slate-400 text-sm">Where Vision Meets Precision</p>
              </div>
            </div>
            
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Meridian Architecture Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
