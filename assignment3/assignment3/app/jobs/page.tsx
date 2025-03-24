import Link from "next/link";
import Image from "next/image";
import jobs from "@/data/jobs.json";
import * as motion from "motion/react-client"

export default function JobsPage() {
    return (
        <div className="relative min-h-[110vh] bg-gradient-to-b from-[#5E383D] to-[#181E41] text-white pt-32 pb-10">
            <div className="max-w-[1200px] mx-auto px-4 overflow-y-scroll max-h-[80vh]">
                <h1 className="text-4xl font-serif mb-12">Work Experience</h1>
                <div className="flex flex-col gap-6">
                    {jobs.map((job) => (
                        <Link href={`/jobs/${job.id}`} key={job.id}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: job.id * 0.2 }}
                                className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden transition-transform cursor-pointer transform hover:scale-102">
                                <div className="p-6 flex items-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-full overflow-hidden flex items-center justify-center mr-6">
                                        <Image
                                            src={job.logo || "/placeholder.svg"}
                                            alt={job.company}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold">{job.name}</h2>
                                        <h3 className="text-base text-white/70 mb-1">{job.company}</h3>
                                        <p className="text-white/60">
                                            {job.startDate} - {job.endDate}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}