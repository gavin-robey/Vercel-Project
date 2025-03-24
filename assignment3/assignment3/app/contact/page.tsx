import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="gradient-bg min-h-screen text-white pt-32 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-serif mb-12">Get In Touch</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

const ContactInfo = () => (
    <div>
        <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
        <div className="space-y-4">
            {[
                { Icon: Mail, text: "gavin.robey15@gmail.com" },
                { Icon: Phone, text: "+1 (951) 216-5236" },
                { Icon: MapPin, text: "Logan, UT" },
            ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center">
                    <Icon className="w-6 h-6 mr-4" />
                    <p>{text}</p>
                </div>
            ))}
        </div>
    </div>
);

const ContactForm = () => (
    <div>
        <h2 className="text-2xl font-serif mb-6">Send Me a Message</h2>
        <form className="space-y-4">
            {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
            ].map(({ id, label, type }) => (
                <div key={id}>
                    <label htmlFor={id} className="block mb-2">{label}</label>
                    <input
                        type={type}
                        id={id}
                        className="w-full p-3 bg-white/10 backdrop-blur-md rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    />
                </div>
            ))}
            <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 bg-white/10 backdrop-blur-md bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
            </div>
            <button type="submit" className="btn-outline">Send Message</button>
        </form>
    </div>
);
