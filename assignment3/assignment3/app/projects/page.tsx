import Link from "next/link"
import Image from "next/image"
import projects from "@/data/projects.json"
import * as motion from "motion/react-client"

export default function ProjectsPage() {
    return (
        <div className="relative min-h-[110vh] bg-gradient-to-b from-[#5E383D] to-[#181E41] text-white pt-32 pb-32">
            <div className="max-w-[1200px] mx-auto px-4 overflow-y-scroll max-h-[80vh]">
                <h1 className="text-[2.5rem] font-serif mb-12">My Projects</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 pb-10">
                    {projects.map((project) => (
                    <Link href={`/projects/${project.id}`} key={project.id}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: project.id * 0.2 }}
                            className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:scale-102"
                        >
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.name}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-[1.25rem] font-semibold mb-2">
                                {project.name}
                                </h2>
                                <p className="text-[#b3b3b3] line-clamp-3">
                                {project.description}
                                </p>
                            </div>
                        </motion.div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}