

'use client'

import { useEffect, useState } from 'react'

const techStack = [
  'Java',
  'Spring Boot',
  'Microservices',
  'Kafka',
  'MySQL',
  'REST APIs',
]

export function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const fullText = 'Java Backend Developer'

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(true)
        }, 500)
        return () => clearTimeout(timeout)
      }
    }
  }, [displayText, isTyping])

  return (
    <section className="min-h-[20vh] flex items-center ">
      <div className="w-full max-w-3xl mx-auto">
       
        <p className="text-muted-foreground text-sm font-medium mb-7 tracking-wide">
         
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
          Ashwani Pal
        </h1>

        {/* Typing Effect Subtitle */}
        <div className="h-10 md:h-12 mb-6 flex items-center">
          <span className="text-xl md:text-2xl lg:text-3xl font-medium text-accent">
            {displayText}
            <span className="inline-block w-0.5 h-6 md:h-7 bg-accent ml-1 animate-pulse" />
          </span>
        </div>

       

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-10 " >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-secondary text-amber-500  rounded-lg text-sm font-medium border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        
        
        
      </div>
    </section>
  )
}

