"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Camera, PenTool, MoreVertical } from "lucide-react"
import Masonry from "react-masonry-css"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AspectRatioImage } from "@/components/AspectRatioImage"

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Ghibli-esque Fields",
      image: "/generated-image.png",
      description: "This project showcases a square-aspect-ratio image, demonstrating the grid's adaptability.",
      date: "2023-10-27",
      width: 1024,
      height: 1024,
    },
    {
      id: 2,
      title: "Wide Image Project",
      image: "/placeholder.svg?height=600&width=800",
      description: "A landscape-oriented image. The card maintains the grid width while adjusting its height.",
      date: "2023-09-15",
      width: 800,
      height: 600,
    },
    {
      id: 3,
      title: "Standard Aspect Ratio",
      image: "/placeholder.svg?height=600&width=600",
      description: "This card demonstrates a standard 1:1 aspect ratio, fitting neatly within the grid.",
      date: "2023-08-01",
      width: 600,
      height: 600,
    },
     {
      id: 4,
      title: "Another Wide Project",
      image: "/placeholder.svg?height=500&width=800",
      description: "Showcasing another wide-format image to demonstrate the layout's flexibility.",
      date: "2023-07-22",
      width: 800,
      height: 500,
    },
    {
      id: 5,
      title: "A Very Tall Showcase",
      image: "/placeholder.svg?height=900&width=600",
      description: "This example uses a very tall image to highlight the masonry-like effect of the grid.",
      date: "2023-06-10",
      width: 600,
      height: 900,
    },
     {
      id: 6,
      title: "Standard 4:3 Project",
      image: "/placeholder.svg?height=600&width=800",
      description: "A project with a classic 4:3 aspect ratio, common in photography and design.",
      date: "2023-05-18",
      width: 800,
      height: 600,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-[#f0dcb7]">
      {/* Vertical Navigation Bookmark */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div
          className="relative overflow-hidden rounded-full border border-black/20 bg-[#f0dcb7] p-2"
        >
          {/* <Image
            src="/vertical-menu-bg.jpeg"
            alt="Vertical menu background"
            fill
            className="absolute inset-0 z-0 h-full w-full object-cover"
          /> */}
          <div className="relative z-10 flex flex-col space-y-4">
            {[
              { name: "Projects", icon: <ExternalLink className="h-4 w-4" /> },
              { name: "I Click", icon: <Camera className="h-4 w-4" /> },
              { name: "Writings", icon: <PenTool className="h-4 w-4" /> },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase().replace(" ", "-"))}
                className="group relative flex h-10 w-10 items-center justify-center text-black transition-all duration-300 hover:text-zinc-700"
                title={item.name}
              >
                {item.icon}
                <div className="absolute right-12 whitespace-nowrap rounded bg-white px-3 py-1 text-sm text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {item.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Projects Section - Now the first section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-extralight mb-4 tracking-tight">Work</h1>
          </motion.div>

          <Masonry
            breakpointCols={{
              default: 3,
              1100: 2,
              700: 1,
            }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <Card className="flex flex-col h-full bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 shadow-lg hover:shadow-xl hover:shadow-[#f0dcb7]/10 transition-all duration-300 transform hover:-translate-y-1">
                  <AspectRatioImage
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="p-4 flex flex-col">
                    <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-[#f0dcb7]/70 mb-3">{project.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-xs text-[#f0dcb7]/50">{project.date}</p>
                      <MoreVertical className="w-4 h-4 text-[#f0dcb7]/50" />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* I Click & Writings Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* I Click */}
            <motion.div
              id="i-click"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
              onClick={() => window.open("https://vsco.co/yourusername", "_blank")}
            >
              <Camera className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-light mb-4">I Click</h3>
              <Button
                variant="outline"
                className="border-[#f0dcb7]/30 text-[#f0dcb7] hover:bg-[#f0dcb7]/10 font-light bg-transparent"
              >
                View on VSCO
              </Button>
            </motion.div>

            {/* Writings */}
            <motion.div
              id="writings"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
              onClick={() => window.open("https://yourblog.blogspot.com", "_blank")}
            >
              <PenTool className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-light mb-4">Writings</h3>
              <Button
                variant="outline"
                className="border-[#f0dcb7]/30 text-[#f0dcb7] hover:bg-[#f0dcb7]/10 font-light bg-transparent"
              >
                Read on Blogspot
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Github className="w-6 h-6 cursor-pointer transition-colors duration-300 text-[#f0dcb7]/60 hover:text-[#f0dcb7]" />
            <Linkedin className="w-6 h-6 cursor-pointer transition-colors duration-300 text-[#f0dcb7]/60 hover:text-[#f0dcb7]" />
            <Mail className="w-6 h-6 cursor-pointer transition-colors duration-300 text-[#f0dcb7]/60 hover:text-[#f0dcb7]" />
          </div>
         </div>
      </footer>
    </div>
  )
}
