'use client'

import {
  BsCpu,
  BsDiagram3,
  BsLightningCharge
} from 'react-icons/bs'
import {
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNetworkWired,
  FaReact
} from 'react-icons/fa'
import {
  SiApachekafka,
  SiHibernate,
  SiMysql,
  SiSpringboot
} from 'react-icons/si'

const skills = [
  { icon: <FaJava color="#f89820" />, skill: "Java" },
  { icon: <SiSpringboot color="#6db33f" />, skill: "Spring Boot" },
  { icon: <BsDiagram3 color="#00d1b2" />, skill: "Microservices" },
  { icon: <SiApachekafka className="text-foreground" />, skill: "Apache Kafka" },
  { icon: <BsLightningCharge color="#facc15" />, skill: "WebSocket" },
  { icon: <SiHibernate color="#bcae79" />, skill: "Hibernate" },
  { icon: <FaNetworkWired color="#3b82f6" />, skill: "REST APIs" },
  { icon: <SiMysql color="#00758f" />, skill: "MySQL" },
  { icon: <FaReact color="#61dafb" />, skill: "React" },
  { icon: <FaHtml5 color="#e34c26" />, skill: "HTML/CSS" },
  { icon: <FaGitAlt color="#f1502f" />, skill: "Git & GitHub" },
  { icon: <BsCpu color="#8b5cf6" />, skill: "System Design Basics" },
  { icon: <BsDiagram3 color="#00d1b2" />, skill: "Event-Driven" },
]

function SkillCard({ icon, skill }: { icon: React.ReactNode; skill: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 p-4 bg-secondary/50 rounded-xl border border-border hover:border-accent hover:bg-secondary transition-all duration-300">
      <div className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-xs md:text-sm font-medium text-foreground text-center">
        {skill}
      </span>
    </div>
  )
}

export function SkillsGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg md:text-xl font-bold text-foreground">Skills</h3>
      <div className="w-8 h-1 bg-accent rounded-full" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((item, index) => (
          <SkillCard key={index} icon={item.icon} skill={item.skill} />
        ))}
      </div>
    </div>
  )
}
