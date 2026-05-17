export default function InventsenseWebsite() {
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
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-white">
              Inventsense Pvt Ltd
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#careers" className="hover:text-white transition">Careers</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl text-sm font-medium shadow-lg shadow-blue-900/30">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden pt-40 pb-32 px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-6">
              Trusted Government & Enterprise Solutions Partner
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Driving Innovation Through
              <span className="text-blue-500"> Professional Services</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              Inventsense Pvt Ltd delivers scalable workforce, infrastructure,
              digital transformation and public sector solutions with a focus
              on quality, transparency and operational excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-2xl font-semibold shadow-xl shadow-blue-900/30">
                Explore Services
              </button>

              <button className="border border-slate-700 hover:border-slate-500 px-7 py-4 rounded-2xl font-semibold transition bg-slate-900/50">
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((item, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6"
                    >
                      <h3 className="text-4xl font-bold text-blue-400 mb-2">
                        {item.number}
                      </h3>
                      <p className="text-slate-300 text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-6">
              About Us
            </div>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Building Trust Through Professional Excellence
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              Inventsense Pvt Ltd is committed to delivering reliable,
              innovative and scalable solutions across workforce management,
              government projects, infrastructure support and digital services.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              We focus on operational efficiency, transparency and long-term
              impact while supporting organizations, institutions and public
              sector initiatives with modern technology-driven approaches.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
                <h3 className="font-semibold mb-2">Mission</h3>
                <p className="text-sm text-slate-400">
                  Deliver impactful and scalable professional solutions.
                </p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
                <h3 className="font-semibold mb-2">Vision</h3>
                <p className="text-sm text-slate-400">
                  Become a trusted leader in enterprise and government services.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl h-72"></div>
            <div className="bg-slate-800 rounded-3xl h-56 mt-16 border border-slate-700"></div>
            <div className="bg-slate-800 rounded-3xl h-56 border border-slate-700"></div>
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl h-72"></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-6">
              Our Services
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Professional Solutions Across Industries
            </h2>

            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              Comprehensive services designed to support enterprise growth,
              government operations and large-scale development initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6 flex items-center justify-center text-blue-400 text-2xl">
                  ✦
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-6">
                Featured Projects
              </div>

              <h2 className="text-4xl font-bold max-w-2xl leading-tight">
                Delivering Impactful Projects With Measurable Results
              </h2>
            </div>

            <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
              We execute projects with a strong focus on planning, operational
              quality and long-term sustainability across public and private
              sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-10 hover:border-blue-500/40 transition"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="text-sm text-blue-400">Case Study</div>
                  <div className="text-slate-500">0{index + 1}</div>
                </div>

                <h3 className="text-3xl font-semibold mb-6">{project}</h3>

                <p className="text-slate-400 leading-relaxed mb-8">
                  Strategic execution and resource management designed for
                  efficiency, compliance and scalable impact.
                </p>

                <button className="text-blue-400 font-medium hover:text-blue-300 transition">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-6">
              Why Choose Us
            </div>

            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Trusted By Organizations For Reliable Execution
            </h2>

            <div className="space-y-6">
              {[
                'Experienced Professional Team',
                'Transparent Project Execution',
                'Government & Enterprise Expertise',
                'Scalable Workforce Solutions',
                'Modern Technology Integration'
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{item}</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Delivering professional quality standards with operational excellence.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-slate-900 border border-slate-800 rounded-[40px] p-10">
            <div className="bg-slate-950 rounded-3xl p-8 border border-slate-800">
              <h3 className="text-3xl font-bold mb-6">
                Let’s Build Something Impactful Together
              </h3>

              <p className="text-slate-400 leading-relaxed mb-8">
                We help organizations scale operations, manage workforce,
                execute projects and implement modern digital solutions.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <textarea
                  rows="4"
                  placeholder="Project Requirement"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                ></textarea>

                <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-xl font-semibold shadow-lg shadow-blue-900/30">
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-24 px-6 bg-slate-900/40">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-6">
            Careers
          </div>

          <h2 className="text-4xl font-bold mb-6">
            Join Our Growing Professional Team
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg mb-10">
            We are always looking for passionate professionals who are ready
            to contribute towards innovation, operations and impactful projects.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-semibold">
            Explore Opportunities
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-800 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Inventsense Pvt Ltd</h3>
            <p className="text-slate-400 leading-relaxed">
              Delivering trusted enterprise, workforce and government solutions
              with professionalism and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Government Projects</li>
              <li>Workforce Management</li>
              <li>Digital Services</li>
              <li>Supply Chain</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li>info@inventsense.com</li>
              <li>+91 98765 43210</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          © 2026 Inventsense Pvt Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
