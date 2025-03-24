import ParallaxProfileCard from "@/components/ParallaxProfileCard";

export default function Home() {
  return (
    <div className="relative min-h-[110vh] bg-gradient-to-b from-[#5E383D] to-[#181E41] text-white">
      <div className="max-w-[1024px] mx-auto py-32 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-serif mb-4">I&apos;m Gavin Robey.</h1>
          <p className="text-lg mb-8 opacity-80">From hiking up treacherous mountain trails in the pouring rain to attempting to bake a soufflé that hilariously collapsed, I&apos;ve embraced life&apos;s randomness. Whether it&apos;s learning to play the ukulele on a whim or diving into the world of 3D printing to create custom figurines, I thrive on exploring the unexpected and turning challenges into stories worth sharing. (I do none of this, ChatGPT came up with this bio)</p>
        </div>

        <div className="flex justify-center">
          <ParallaxProfileCard
            name="Gavin Robey"
            title="Fullstack Web Developer"
            imageSrc="/gavin.png"
            email="gavin.robey15@gmail.com"
            githubUrl="https://github.com"
            linkedinUrl="https://linkedin.com"
            websiteUrl="https://example.com"
            bio="With over 5 years of experience in creating digital experiences that users love. Specializing in responsive design, accessibility, and modern web technologies."
            variant="default"
          />
        </div>
      </div>
    </div>
  )
}
