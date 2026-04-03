'use client'

import { SkillsGrid } from './skills-grid'

export function SkillsSection() {
  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Technical Skills
        </h2>

        {/* Accent Line */}
        <div className="w-10 h-1 bg-accent rounded-full mb-8"></div>

        {/* 🔥 ICON BASED GRID ONLY */}
        <SkillsGrid />

      </div>
    </section>
  )
}