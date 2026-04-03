import { resumeData } from '@/lib/portfolio-data'
import { Award, BookOpen, Briefcase, Code, Download } from 'lucide-react'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {

  return (
    <div className="space-y-8 md:space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Resume</h2>
          <div className="w-10 h-1 bg-accent rounded-full" />
        </div>

        <a
          href="/Ashwani_Resume.pdf"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>

      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Experience</h3>
        </div>
        <div className="space-y-4">
          {data.experience.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                {'company' in item && (
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">{item.company as string}</p>
                )}
                <p className="text-xs md:text-sm text-accent mb-3 font-medium">{item.period}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Education</h3>
        </div>
        <div className="space-y-4">
          {data.education.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-xs md:text-sm text-accent mb-3 font-medium">{item.period}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Code className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">My Skills</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {data.skills.map((skill, index) => (
            <div key={index} className="bg-secondary/50 rounded-xl p-4 border border-border">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm font-bold text-accent">{skill.level}%</span>
              </div>
              <div className="h-2.5 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Tags */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Award className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Technologies</h3>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'GraphQL', 'Docker', 'AWS', 'Git', 'REST APIs'].map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-secondary text-foreground rounded-lg text-xs md:text-sm font-medium border border-border hover:border-accent hover:text-accent transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
