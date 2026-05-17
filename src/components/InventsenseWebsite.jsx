export default function InventsenseWebsite() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Government Projects',
      desc: 'Executing scalable public sector and infrastructure solutions with operational excellence.'
    },
    {
      title: 'Workforce Management',
      desc: 'Professional outsourcing and staffing services for enterprise and government sectors.'
    },
    {
      title: 'Rural Development',
      desc: 'Empowering communities through sustainable and innovative development initiatives.'
    },
    {
      title: 'Advertising & Media',
      desc: 'Strategic branding, marketing, awareness campaigns and public communication solutions.'
    },
    {
      title: 'IT & Digital Services',
      desc: 'Cloud, infrastructure, software deployment and digital transformation services.'
    },
    {
      title: 'Supply Chain Solutions',
      desc: 'Efficient logistics, procurement and operations management for large-scale projects.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '10+', label: 'Government Partnerships' },
    { number: '100+', label: 'Skilled Professionals' },
    { number: '8+', label: 'Years Experience' }
  ];

  const projects = [
    'Government Workforce Deployment',
    'Digital Rural Outreach Program',
    'Infrastructure Resource Management',
    'Public Welfare Awareness Campaigns'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-950 to-slate-900 backdrop-blur border-b border-blue-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition">
            <img src="/images/InvetSense Pvt Ltd.png" alt="Inventsense Logo" className="h-14 w-auto" />
          </div>
          <nav className="hidden md:flex gap-10 items-center">
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition duration-300">Services</a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition duration-300">Projects</a>
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition duration-300">About</a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition duration-300">Contact</a>
          </nav>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-8 py-2.5 rounded-lg transition font-semibold text-sm text-white shadow-lg hover:shadow-blue-500/50 hover:shadow-xl">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your <span className="text-blue-400">Business</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Delivering comprehensive solutions in government projects, workforce management, rural development, and digital services with proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              Explore Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border border-slate-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            We provide end-to-end solutions tailored to meet diverse industry needs and government requirements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 hover:border-blue-500 rounded-lg p-8 transition transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-400">{service.title}</h3>
                <p className="text-slate-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border-l-4 border-blue-500 p-8 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold mb-2">{project}</h3>
                <p className="text-slate-400">
                  Successfully delivered comprehensive solutions tailored to meet specific project requirements and stakeholder expectations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Inventsense</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Inventsense Pvt Ltd is a leading professional services firm with over 8 years of experience delivering innovative solutions across government, corporate, and community development sectors.
              </p>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Our team of 100+ skilled professionals is committed to excellence, driving transformative initiatives that create lasting impact.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>✓ Industry-leading expertise</li>
                <li>✓ Government partnerships</li>
                <li>✓ Scalable solutions</li>
                <li>✓ Proven track record</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg h-80 flex items-center justify-center">
              <p className="text-center text-white text-lg font-semibold px-8">
                Building Tomorrow's Solutions Today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-slate-300 mb-8">
            Ready to transform your business? Let's connect and explore how we can help you achieve your goals.
          </p>
          <a href="mailto:contact@inventsense.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition text-lg cursor-pointer">
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Inventsense Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
