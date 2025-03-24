import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-serif hover:text-gray-300 transition-colors">
                    Gavin Robey
                </Link>
                <div className="flex items-center space-x-8">
                    <Link href="/" className="hover:text-gray-300 transition-colors">
                        Home
                    </Link>
                    <Link href="/projects" className="hover:text-gray-300 transition-colors">
                        Projects
                    </Link>
                    <Link href="/jobs" className="hover:text-gray-300 transition-colors">
                        Experience
                    </Link>
                    <Link href="/contact" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition-colors">
                        Hire Me
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
