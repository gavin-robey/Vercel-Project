import Image from "next/image"
import { notFound } from "next/navigation"
import projects from "@/data/projects.json"

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id.toString() === params.id)

    if (!project) {
        notFound()
    }

    return (
        <div className="relative min-h-[110vh] bg-gradient-to-b from-[#5E383D] to-[#181E41] text-white pt-32 pb-32">
            <div className="max-w-[1200px] mx-auto px-4 overflow-y-scroll max-h-[80vh]">
                <h1 className="text-4xl font-serif mb-8">{project.name}</h1>
                <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        width={800}
                        height={500}
                        className="w-full h-44 object-cover"
                    />
                    <div className="p-8">
                    <h2 className="text-2xl font-serif mb-4">Description</h2>
                    <p className="text-gray-300 mb-8">{project.description}</p>

                    <h2 className="text-2xl font-serif mb-4">Technology Used</h2>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.technology.map((tech, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-white/20 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>

                    <h2 className="text-2xl font-serif mb-4">Project Dates</h2>
                    <p className="text-gray-300">
                        {project.startDate} - {project.endDate}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
