"use client";

import Image from "next/image"
import { notFound } from "next/navigation"
import jobs from "@/data/jobs.json"
import { use } from 'react';


export default function JobPage({ params }: { params: Promise<{ id: string }>}){
    const { id } = use(params);
    const job = jobs.find((j) => j.id.toString() === id )

    if (!job) {
        notFound()
    }

    return (
        <div className="relative min-h-[110vh] bg-gradient-to-b from-[#5E383D] to-[#181E41] text-white pt-32 pb-10">
            <div className="max-w-[1200px] mx-auto px-4 overflow-y-scroll max-h-[80vh]">
                <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
                    <div className="p-8">
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-16 h-16 bg-white/20 rounded-full overflow-hidden flex items-center justify-center mr-6">
                                <Image
                                    src={job.logo || "/placeholder.svg"}
                                    alt={job.company}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h1 className="text-2xl font-serif">{job.name}</h1>
                                <h2 className="text-lg text-gray-300">{job.company}</h2>
                            </div>
                        </div>
                        <h3 className="text-xl font-serif mb-4">Job Description</h3>
                        <p className="text-gray-300 mb-8">{job.description}</p>
                        <h3 className="text-xl font-serif mb-4">Job Dates</h3>
                        <p className="text-gray-300"> {job.startDate} - {job.endDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}