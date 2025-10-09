import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2024 — Present",
    title: "Data Analysis Student",
    company: "Self-Study",
    description:
      "Studying statistics, probability theory, and data analysis techniques. Building projects that combine web development with data visualization and statistical analysis.",
    technologies: ["Python", "Statistics", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    period: "2023 — 2024",
    title: "Full-Stack Developer",
    company: "Freelance",
    description:
      "Built responsive web applications for various clients. Developed both front-end interfaces and back-end APIs, managing the entire development lifecycle from design to deployment.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    period: "2022 — 2023",
    title: "Front-End Developer",
    company: "Previous Role",
    description:
      "Created user interfaces with a focus on accessibility and performance. Collaborated with designers to implement pixel-perfect designs and ensure optimal user experience.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Figma"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="md:w-40 flex-shrink-0">
                  <p className="text-sm font-mono text-muted-foreground">{exp.period}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-primary mb-3">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
