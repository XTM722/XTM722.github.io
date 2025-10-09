import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for exploring statistical data with real-time charts and filtering capabilities.",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/data-dashboard-charts.png",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with payment integration, inventory management, and analytics.",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/modern-ecommerce-website.png",
  },
  {
    title: "Statistical Analysis Tool",
    description: "Web-based tool for performing statistical tests and generating reports with visualizations.",
    technologies: ["Python", "Pandas", "Streamlit", "NumPy"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/statistical-analysis-interface.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-all duration-300 bg-card">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Live Demo</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
