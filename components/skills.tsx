import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Front-End Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Back-End Development",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "Express"],
  },
  {
    title: "Data Analysis",
    skills: ["Statistics", "Python", "Pandas", "NumPy", "Data Visualization"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "VS Code", "Jupyter", "SQL"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-secondary hover:bg-secondary/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
