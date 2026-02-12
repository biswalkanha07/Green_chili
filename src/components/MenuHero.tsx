import { motion } from 'motion/react';

export function MenuHero() {
    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-20 w-72 h-72 bg-[#0B5D3B] rounded-full blur-[100px]"></div>
                <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#C1121F] rounded-full blur-[120px]"></div>
            </div>

            {/* Decorative Pattern Overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Decorative line above title */}
                    <motion.div
                        className="flex items-center justify-center gap-4 mb-6"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C1121F] to-[#C1121F]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#C1121F] animate-pulse"></div>
                        <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-[#C1121F] to-[#C1121F]"></div>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-7xl mb-6 font-extrabold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className="text-white">Our </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] via-red-500 to-[#C1121F] animate-pulse">
                            Menu
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Explore our wide range of authentic dishes, prepared with love and the finest ingredients.
                    </motion.p>

                    {/* Decorative bottom accent */}
                    <motion.div
                        className="mt-8 flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#0B5D3B] rounded-full"></div>
                        <div className="w-3 h-3 rounded-full bg-[#0B5D3B] shadow-lg shadow-[#0B5D3B]/50"></div>
                        <div className="w-20 h-1 bg-[#0B5D3B] rounded-full"></div>
                        <div className="w-3 h-3 rounded-full bg-[#C1121F] shadow-lg shadow-[#C1121F]/50"></div>
                        <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#C1121F] rounded-full"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
