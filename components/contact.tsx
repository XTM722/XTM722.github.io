import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="space-y-6">
          <p className="text-xl text-muted-foreground leading-relaxed text-balance">
            I'm currently looking for new opportunities in data analysis, full-stack development, or roles that combine
            both. If you have a project in mind or just want to chat about tech, data, or statistics, feel free to reach
            out.
          </p>
          <Button size="lg" className="group" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Say Hello
            </a>
          </Button>
        </div>
        <div className="mt-24 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}
