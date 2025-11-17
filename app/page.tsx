'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Patiharn L.
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#journey" className="text-slate-300 hover:text-cyan-400 transition-colors">Journey</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#awards" className="text-slate-300 hover:text-cyan-400 transition-colors">Awards</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-slate-300 text-sm">Available for opportunities in Thailand</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent animate-fade-in">
            Patiharn Liangkobkit
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto font-semibold">
            Data Scientist & AI Engineer
          </p>

          <p className="text-lg text-slate-400 mb-2">
            Specialized in Artificial Intelligence & Machine Learning
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            🇹🇭 Thailand • 🇺🇸 United States • 🇨🇦 Canada
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-300">
              GPA: 3.72
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-300">
              SEED Scholar 🇨🇦
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-300">
              University of Toronto
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-cyan-300">
              KMUTT
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Let&apos;s Connect
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          {/* Vision Statement */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">My Vision</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
              To revolutionize industries through cutting-edge AI and machine learning solutions.
              With hands-on experience in deep learning, LLMs, and data science across three countries,
              I&apos;m driven to create scalable, intelligent systems that solve real-world problems.
              My goal is to bridge global AI innovation with Thailand&apos;s growing tech ecosystem,
              building solutions that transform how we live and work.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square relative rounded-2xl shadow-2xl shadow-blue-500/20 overflow-hidden border-4 border-cyan-500/30">
                <Image
                  src="/images/profile/profile-formal.jpg"
                  alt="Patiharn Liangkobkit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Bridging AI Innovation Across Continents</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Currently pursuing Computer Engineering at <span className="text-cyan-400 font-semibold">King Mongkut&apos;s University of Technology Thonburi (KMUTT)</span>
                {' '}with a stellar 3.72 GPA, while simultaneously studying at the <span className="text-cyan-400 font-semibold">University of Toronto</span>
                {' '}as a <span className="text-cyan-400 font-semibold">SEED Scholarship recipient</span> ($10,200 CAD).
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                With 3+ years of Python experience, 1+ year in data modeling and machine learning, and international
                experience in the USA (1 year) and Canada (4 months), I specialize in AI, deep learning, and LLMs.
                I&apos;ve completed advanced courses in Machine Learning, Deep Learning, and built multiple AI-powered applications.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">3.72</div>
                  <div className="text-slate-400">Current GPA</div>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">3+</div>
                  <div className="text-slate-400">Years Coding</div>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">3</div>
                  <div className="text-slate-400">Countries</div>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400">Top 10</div>
                  <div className="text-slate-400">Hackathons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI & Machine Learning */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI & Machine Learning</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Machine Learning (U of T)</li>
                <li>• Deep Learning & Neural Networks</li>
                <li>• LLMs & Transformers</li>
                <li>• TensorFlow & PyTorch</li>
                <li>• Computer Vision & NLP</li>
                <li>• Recommendation Systems</li>
              </ul>
            </div>

            {/* Data Science */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Data Science</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Data Modeling & Analysis</li>
                <li>• Python (3+ years)</li>
                <li>• SQL & NoSQL Databases</li>
                <li>• Data Visualization</li>
                <li>• Statistical Analysis</li>
                <li>• Big Data Processing</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Full Stack Development</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Next.js & React</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• RESTful APIs</li>
                <li>• Responsive Design</li>
                <li>• Figma (UI/UX)</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Cloud & Infrastructure</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Google Cloud Platform</li>
                <li>• Alibaba Cloud (ACA Certified)</li>
                <li>• Vercel Deployment</li>
                <li>• Git & GitHub</li>
                <li>• CI/CD Pipelines</li>
                <li>• Docker Basics</li>
              </ul>
            </div>

            {/* AI Tools & Frameworks */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI Tools & APIs</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Claude API (Anthropic)</li>
                <li>• Hugging Face Transformers</li>
                <li>• BERT & Attention Mechanisms</li>
                <li>• Image Captioning Models</li>
                <li>• Encoder-Decoder Architecture</li>
                <li>• Edge AI & Visualization</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Professional Skills</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Project Management</li>
                <li>• Team Collaboration</li>
                <li>• Teaching & Mentoring (TA)</li>
                <li>• Entrepreneurial Mindset</li>
                <li>• Problem Solving</li>
                <li>• English (IELTS 6.5, DET 125)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            My International Journey
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block"></div>

            <div className="space-y-12">
              {/* Thailand - High School */}
              <div className="relative flex items-center justify-end md:justify-start">
                <div className="md:w-1/2 md:pr-12">
                  <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🇹🇭</div>
                      <div className="relative w-12 h-12">
                        <Image
                          src="/images/universities/bcc-logo.png"
                          alt="Bangkok Christian College"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Bangkok Christian College</h3>
                    <p className="text-slate-400 text-sm mb-2">May 2011 - March 2023</p>
                    <p className="text-slate-300 mb-3">High School - Graduated with 3.85 GPA</p>
                    <ul className="text-slate-400 space-y-1">
                      <li>• Strong academic foundation</li>
                      <li>• Built passion for technology</li>
                      <li>• Prepared for international experience</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950 hidden md:block"></div>
              </div>

              {/* United States */}
              <div className="relative flex items-center justify-start md:justify-end">
                <div className="md:w-1/2 md:pl-12">
                  <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="text-4xl mb-3">🇺🇸</div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">South Side High School, Jackson TN</h3>
                    <p className="text-slate-400 text-sm mb-2">July 2021 - July 2022 (1 year)</p>
                    <p className="text-slate-300 mb-3">11th Grade Exchange Program</p>
                    <ul className="text-slate-400 space-y-1">
                      <li>• First international experience</li>
                      <li>• Cultural immersion in United States</li>
                      <li>• Enhanced English proficiency</li>
                      <li>• Built global perspective</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950 hidden md:block"></div>
              </div>

              {/* Thailand - KMUTT */}
              <div className="relative flex items-center justify-end md:justify-start">
                <div className="md:w-1/2 md:pr-12">
                  <div className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🇹🇭</div>
                      <div className="relative w-16 h-16">
                        <Image
                          src="/images/universities/kmutt-logo.png"
                          alt="KMUTT"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">KMUTT - King Mongkut&apos;s University</h3>
                    <p className="text-slate-400 text-sm mb-2">August 2023 - Present</p>
                    <p className="text-slate-300 mb-3">BE in Computer Engineering - Current GPA 3.72</p>
                    <ul className="text-slate-400 space-y-1">
                      <li>• Teacher Assistant at INNO-X Lab</li>
                      <li>• Formula Racing Team Member</li>
                      <li>• Multiple hackathon wins (Top 10)</li>
                      <li>• Data Science & ML specialization</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950 hidden md:block"></div>
              </div>

              {/* Canada - Current */}
              <div className="relative flex items-center justify-start md:justify-end">
                <div className="md:w-1/2 md:pl-12">
                  <div className="p-6 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-2 border-cyan-500/50 rounded-xl shadow-xl shadow-cyan-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">🇨🇦</div>
                      <div className="relative w-16 h-16 bg-white rounded-lg p-2">
                        <Image
                          src="/images/universities/uoft-logo.png"
                          alt="University of Toronto"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-300 mb-2">University of Toronto - Current</h3>
                    <p className="text-slate-300 text-sm mb-2">Sep 2025 - Dec 2025 (1 term)</p>
                    <p className="text-slate-200 mb-3 font-semibold">SEED Scholarship Exchange Program ($10,200 CAD)</p>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Advanced Machine Learning</li>
                      <li>• Deep Learning Fundamentals</li>
                      <li>• Python Programming in Depth</li>
                      <li>• AI Conference attendance (UTMIST)</li>
                      <li>• International research exposure</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-950 animate-pulse hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 - Tron Crypto Tracker */}
            <div className="group p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🔐</span>
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Tron Cryptocurrency Tracker</h3>
              <p className="text-slate-300 mb-4">Desktop application tracking scammer transactions - Cyber Warrior Hackathon 2025 (Top 10)</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Blockchain</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Cybersecurity</span>
              </div>
              <div className="text-yellow-400 text-sm mb-2">🏆 Honorable Mention Award - 10,000 THB</div>
            </div>

            {/* Project 2 - Crosswalk Safety App */}
            <div className="group p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-teal-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🚦</span>
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Crosswalk Safety Application</h3>
              <p className="text-slate-300 mb-4">AI-powered safety solution - E-SAN Thailand PMU-B Hackathon</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">AI/ML</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Mobile</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">IoT</span>
              </div>
              <div className="text-yellow-400 text-sm mb-2">🏆 Social Impact Award + Gold Certificate - 3,000 THB</div>
            </div>

            {/* Project 3 - English Vocabulary Website */}
            <div className="group p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">English Vocabulary Training Website</h3>
              <p className="text-slate-300 mb-4">Interactive learning platform with JSON data integration</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">TypeScript</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Tailwind CSS</span>
              </div>
              <a href="https://englishnewwords.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                View Live Site →
              </a>
            </div>

            {/* Project 4 - T-Shirt Showcase */}
            <div className="group p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="aspect-video relative rounded-lg mb-4 overflow-hidden bg-slate-900">
                <Image
                  src="/images/projects/tshirt-overview.png"
                  alt="T-Shirt Showcase Website"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">T-Shirt Showcase Website</h3>
              <p className="text-slate-300 mb-4">E-commerce showcase with Figma design system</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Next.js</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">Figma</span>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs text-blue-300">UI/UX</span>
              </div>
              <a href="https://crazyfabric-websitex.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                View Live Site →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>

          <div className="space-y-6">
            {/* SEED Scholarship */}
            <div className="p-6 bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border-2 border-yellow-500/40 rounded-xl hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏆</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">SEED Scholarship - Government of Canada</h3>
                  <p className="text-slate-300 mb-2">Canada-ASEAN Scholarships and Educational Exchanges for Development</p>
                  <p className="text-cyan-400 font-semibold mb-2">Prize: $10,200 CAD • Year: 2025</p>
                  <p className="text-slate-400">Competitive scholarship awarded by Global Affairs Canada for exchange program at University of Toronto</p>
                </div>
              </div>
            </div>

            {/* Cyber Warrior Hackathon */}
            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🥉</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Cyber Warrior Hackathon 2025 - Honorable Mention (Top 10)</h3>
                  <p className="text-slate-300 mb-2">Organized by KMUTT x Cyber Crime Investigation Bureau (CCIB)</p>
                  <p className="text-cyan-400 font-semibold mb-2">Prize: 10,000 THB • Year: 2025</p>
                  <p className="text-slate-400">Team of 5 developed Tron Cryptocurrency tracking desktop application for scammer detection</p>
                </div>
              </div>
            </div>

            {/* E-SAN Hackathon */}
            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🥇</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">E-SAN Thailand PMU-B Hackathon - Social Impact Award + Gold Certificate</h3>
                  <p className="text-slate-300 mb-2">Coding & AI Academy Season 2 by PMU-B x Khon Kaen University</p>
                  <p className="text-cyan-400 font-semibold mb-2">Prize: 3,000 THB • Year: 2025</p>
                  <p className="text-slate-400 mb-4">Team of 3 developed innovative crosswalk safety application with AI</p>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/awards/esan-gold-certificate.png"
                      alt="E-SAN Gold Level Certificate"
                      fill
                      className="object-contain bg-slate-900/50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Top 20 Certificate */}
            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏅</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Top 20 Selected Teams - Outstanding Performance</h3>
                  <p className="text-slate-300 mb-2">Certificate of Accomplishment</p>
                  <p className="text-cyan-400 font-semibold mb-2">February 2025</p>
                  <p className="text-slate-400 mb-4">Recognition of outstanding performance and achievement</p>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/awards/top20-certificate.png"
                      alt="Top 20 Selected Teams Certificate"
                      fill
                      className="object-contain bg-slate-900/50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I&apos;m actively seeking Data Science, AI Engineering, and Machine Learning opportunities in Thailand.
            Let&apos;s connect and create innovative solutions together!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:patiharn.liang@gmail.com" className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">Email</h3>
              <p className="text-slate-400 text-sm">patiharn.liang@gmail.com</p>
            </a>

            <a href="https://github.com/Richyboy170" target="_blank" rel="noopener noreferrer" className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">GitHub</h3>
              <p className="text-slate-400 text-sm">@Richyboy170</p>
            </a>

            <a href="tel:+66636145491" className="p-6 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 border border-blue-500/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-1">Phone</h3>
              <p className="text-slate-400 text-sm">+66 63-614-5491</p>
            </a>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-cyan-500/40 rounded-2xl mb-8">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">Currently Based In</h3>
            <p className="text-xl text-slate-200 font-semibold">Bangkok, Thailand 🇹🇭</p>
            <p className="text-slate-400 mt-2">Bangkhuntian, Chomthong, Bangkok 10150</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-slate-300">
              IELTS: 6.5
            </div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-slate-300">
              Duolingo: 125
            </div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-slate-300">
              TOEFL iBT: 93-97
            </div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-slate-300">
              CEFR: B2
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950/80 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Patiharn Liangkobkit. Built with Next.js 15 & Tailwind CSS
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Data Scientist & AI Engineer | Crafted with passion in Thailand 🇹🇭
          </p>
        </div>
      </footer>
    </div>
  );
}
