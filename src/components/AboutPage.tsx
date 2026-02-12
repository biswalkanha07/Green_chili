import { motion } from 'motion/react';
import { Calendar, Leaf, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import greenChiliLogo from '../assets/green_chili_logo.png';

interface AboutPageProps {
    onNavigate: (page: 'home' | 'menu' | 'delivery' | 'book' | 'about') => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
    return (
        <div className="min-h-screen bg-black w-full overflow-x-hidden pt-28">
            <Navbar activePage="about" onNavigate={onNavigate} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1670819916552-67698b1c86ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGZpcmUlMjBraXRjaGVufGVufDF8fHx8MTc3MDgzMzcyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Chef cooking with fire"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-6xl md:text-7xl mb-6 text-white tracking-tight font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            About Green Chili
                        </motion.h1>
                        <motion.p
                            className="text-2xl text-gray-300 tracking-wide"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Where Flavor Meets Fire.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 bg-gradient-to-b from-black via-[#0B5D3B]/5 to-black">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0B5D3B]/20">
                                <img
                                    src="https://images.unsplash.com/photo-1680946496238-5272d3c407fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkYXJrfGVufDF8fHx8MTc3MDgzMzcyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Restaurant Interior"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C1121F]/20 rounded-full blur-3xl"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0B5D3B]/20 rounded-full blur-3xl"></div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div>
                                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                    Green Chili was founded with a passion for bold flavors and unforgettable dining experiences. We blend traditional recipes with modern culinary techniques to serve fresh, spicy, and authentic dishes.
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Every dish is crafted with care, using only the finest ingredients sourced from local farms and trusted suppliers. Our chefs bring years of expertise and a deep love for the art of cooking.
                                </p>
                            </div>

                            {/* Highlights */}
                            <div className="grid gap-6 pt-4">
                                <motion.div
                                    className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-[#0B5D3B]/30"
                                    whileHover={{
                                        scale: 1.02,
                                        borderColor: "rgba(11, 93, 59, 0.6)",
                                        boxShadow: "0 10px 30px rgba(11, 93, 59, 0.2)"
                                    }}
                                >
                                    <div className="w-12 h-12 bg-[#0B5D3B]/20 rounded-full flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-[#0B5D3B]" />
                                    </div>
                                    <div>
                                        <h3 className="text-white mb-1 font-bold">Established in 2026</h3>
                                        <p className="text-sm text-gray-400">A legacy of flavor and excellence</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-[#0B5D3B]/30"
                                    whileHover={{
                                        scale: 1.02,
                                        borderColor: "rgba(11, 93, 59, 0.6)",
                                        boxShadow: "0 10px 30px rgba(11, 93, 59, 0.2)"
                                    }}
                                >
                                    <div className="w-12 h-12 bg-[#0B5D3B]/20 rounded-full flex items-center justify-center">
                                        <Leaf className="w-6 h-6 text-[#0B5D3B]" />
                                    </div>
                                    <div>
                                        <h3 className="text-white mb-1 font-bold">100% Fresh Ingredients</h3>
                                        <p className="text-sm text-gray-400">Quality you can taste in every bite</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-[#0B5D3B]/30"
                                    whileHover={{
                                        scale: 1.02,
                                        borderColor: "rgba(11, 93, 59, 0.6)",
                                        boxShadow: "0 10px 30px rgba(11, 93, 59, 0.2)"
                                    }}
                                >
                                    <div className="w-12 h-12 bg-[#0B5D3B]/20 rounded-full flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-[#0B5D3B]" />
                                    </div>
                                    <div>
                                        <h3 className="text-white mb-1 font-bold">Fast & Friendly Service</h3>
                                        <p className="text-sm text-gray-400">Your satisfaction is our priority</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C1121F] rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0B5D3B] rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl mb-8 text-white font-bold">Our Story</h2>

                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                It all started with a simple belief: that food should ignite the senses and bring people together. Our founder, a culinary enthusiast with a deep love for spices, traveled across continents to discover the perfect blend of heat and flavor.
                            </p>
                            <p>
                                At Green Chili, we don't just serve food—we craft experiences. Each dish tells a story of tradition, innovation, and an unwavering commitment to quality. From the first sizzle in our kitchen to the final presentation on your plate, every moment is infused with passion.
                            </p>
                            <p>
                                We believe in the power of authentic taste. That's why we source our ingredients locally, support sustainable farming, and never compromise on freshness. Our chefs are artists, our kitchen is their canvas, and every meal is a masterpiece.
                            </p>
                        </div>

                        <motion.div
                            className="mt-12 inline-block"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="px-8 py-4 bg-gradient-to-r from-[#0B5D3B] to-[#0B5D3B]/70 rounded-full text-white shadow-lg shadow-[#0B5D3B]/30 italic font-medium">
                                "Where every meal is a celebration of flavor"
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-gradient-to-b from-black via-[#0B5D3B]/5 to-black">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl mb-4 text-white font-bold">Contact Us</h2>
                        <p className="text-xl text-gray-400">We'd love to hear from you</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Left Side - Contact Info Cards */}
                        <div className="space-y-6">
                            {[
                                { icon: MapPin, title: 'Address', content: '123 Spice Street, Flavor City' },
                                { icon: Phone, title: 'Phone', content: '+91-9876543210' },
                                { icon: Mail, title: 'Email', content: 'contact@greenchili.com' },
                                { icon: Clock, title: 'Opening Hours', content: '11:00 AM – 11:30 PM', subContent: '7 days a week' }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#0B5D3B]/50 transition-all cursor-pointer"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * (index + 1), duration: 0.6 }}
                                        whileHover={{
                                            y: -5,
                                            boxShadow: "0 20px 40px rgba(11, 93, 59, 0.2)"
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 bg-[#0B5D3B]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-7 h-7 text-[#0B5D3B]" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl mb-2 text-white font-bold">{item.title}</h3>
                                                <p className="text-gray-400">{item.content}</p>
                                                {item.subContent && <p className="text-sm text-gray-500 mt-1">{item.subContent}</p>}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Right Side - Contact Form */}
                        <motion.div
                            className="bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10 rounded-2xl border border-white/10 backdrop-blur-sm"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <h3 className="text-2xl mb-6 text-white font-bold">Send us a message</h3>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0B5D3B] transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0B5D3B] transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0B5D3B] transition-colors"
                                        placeholder="+91-XXXXXXXXXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0B5D3B] transition-colors resize-none"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#C1121F] to-[#C1121F]/80 text-white px-8 py-4 rounded-full shadow-xl shadow-[#C1121F]/30 font-bold text-lg border-none cursor-pointer"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 0 40px rgba(193, 18, 31, 0.5)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Logo Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl text-white font-bold mb-4">Our Brand</h2>
                        <p className="text-gray-400">Where flavor meets fire</p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center justify-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {/* Logo Image */}
                        <div className="mb-8 relative">
                            <img
                                src={greenChiliLogo}
                                alt="Green Chili Logo"
                                className="w-[700px] h-auto object-contain drop-shadow-2xl"
                            />
                            {/* Decorative glow effects */}
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-[#0B5D3B]/20 rounded-full blur-[80px] pointer-events-none"></div>
                            <div className="absolute -top-10 left-1/4 w-48 h-48 bg-[#C1121F]/10 rounded-full blur-[60px] pointer-events-none"></div>
                        </div>

                        {/* Brand Name */}
                        <motion.h1
                            className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0B5D3B] via-[#0B5D3B] to-[#C1121F] mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Green Chili
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            className="text-2xl text-gray-300 italic mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            "Igniting taste buds since 2026"
                        </motion.p>

                        {/* Decorative Elements */}
                        <div className="flex items-center gap-4 mt-4">
                            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-[#0B5D3B]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#C1121F] animate-pulse"></div>
                            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-[#0B5D3B]"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
