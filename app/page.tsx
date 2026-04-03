'use client'

import { useState } from 'react'

import { AboutSection } from '@/components/about-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section-new'
import { HeroSection } from '@/components/hero-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { ResumeSection } from '@/components/resume-section'
import { SkillsSection } from '@/components/skills-section'
import { ThemeToggle } from '@/components/theme-toggle'

import {
  aboutData,
  blogData,
  contactData,
  portfolioData,
  profileData,
  resumeData,
} from '@/lib/portfolio-data'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* 🔥 THEME TOGGLE */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      {/* 🔥 HERO (FULL WIDTH) */}
      <HeroSection />

      {/* 🔥 MAIN CONTENT */}
      <div className="flex-1 mx-auto max-w-7xl p-3 sm:p-4 md:p-6 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">

          {/* 🔥 SIDEBAR */}
          <ProfileSidebar data={profileData} />

          {/* 🔥 MAIN SECTION */}
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">

            {/* 🔥 NAVIGATION */}
            <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
              {[
                { id: 'about', label: 'About' },
                { id: 'resume', label: 'Resume' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'Contact' },
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                    activeSection === section.id
                      ? 'text-foreground bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            {/* 🔥 CONTENT */}
            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              {activeSection === 'about' && <AboutSection data={aboutData} />}
              {activeSection === 'resume' && <ResumeSection data={resumeData} />}
              {activeSection === 'projects' && <PortfolioSection data={portfolioData} />}
              {activeSection === 'skills' && <SkillsSection />}
              {activeSection === 'blog' && <BlogSection data={blogData} />}
              {activeSection === 'contact' && <ContactSection data={contactData} />}
            </div>

          </main>
        </div>
      </div>

      {/* 🔥 FOOTER (ALWAYS BOTTOM) */}
      {/* <Footer /> */}

    </div>
  )
}