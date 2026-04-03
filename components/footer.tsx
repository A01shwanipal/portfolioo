'use client'

import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  const handleDownloadResume = () => {
    const resumeContent = `
ASHWANI PAL
Java Backend Developer
================================

CONTACT
Email: ashwani56740@gmail.com
Phone: +91-9424497754
Location: India

SKILLS
- Java / Spring Boot
- Microservices Architecture
- Apache Kafka
- MySQL / PostgreSQL
- REST APIs / WebSocket
- System Design

EXPERIENCE
- Building scalable backend systems
- Designing RESTful APIs
- Event-driven architectures with Kafka
- Database optimization

================================
Open for backend development, internships, and exciting opportunities.
    `
    
    const blob = new Blob([resumeContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ashwani-pal-resume.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <footer className="relative mt-8 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/50 to-[#020617]" />
      
      {/* Blurred gradient circles */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      {/* <div className="relative z-10 max-w-4xl mx-auto px-4 py-12"> */}
      
      <div className="relative z-10 w-full px-6 py-10 md:py-12">
        {/* Main Card */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl animate-in fade-in duration-700">
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-50 blur-sm -z-10" />
          
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Let&apos;s Work Together
              </span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
              Open for backend development, internships, and exciting opportunities.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
            <a 
              href="mailto:ashwani56740@gmail.com" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              ashwani56740@gmail.com
            </a>
            <a 
              href="tel:+919424497754" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91-9424497754
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[
              { icon: Github, href: 'https://github.com/ashwanipal', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/ashwanipal', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ashwani56740@gmail.com', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-blue-500/20 hover:border-blue-500/50 hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ashwani56740@gmail.com?subject=Job Opportunity"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Hire Me
            </a>
            <button
              onClick={handleDownloadResume}
              className="px-6 py-2.5 rounded-xl border border-white/20 bg-white/5 text-foreground text-sm font-medium hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </button>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Footer Bottom */}
          <p className="text-center text-xs text-muted-foreground">
            © 2026 Ashwani Pal • Built with React & Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
