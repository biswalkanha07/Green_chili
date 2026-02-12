import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface ChefSpecialProps {
    dish: {
        name: string;
        description: string;
        price: number;
        image: string;
    };
}

export function ChefSpecial({ dish }: ChefSpecialProps) {
    return (
        <section className="py-12 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0B5D3B]/5 blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C1121F]/20 text-[#C1121F] mb-4 border border-[#C1121F]/30">
                            <Star className="w-3.5 h-3.5" fill="currentColor" />
                            <span className="text-xs font-bold uppercase tracking-wider">Chef's Special</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {dish.name}
                        </h2>

                        <p className="text-base text-gray-400 mb-6 leading-relaxed">
                            {dish.description}
                        </p>

                        <div className="flex items-center gap-6">
                            <span className="text-3xl font-bold text-[#0B5D3B]">
                                ${dish.price}
                            </span>
                            <button className="px-6 py-3 bg-[#C1121F] text-white rounded-xl font-bold text-base hover:bg-[#a00f19] transition-colors shadow-lg shadow-[#C1121F]/25 cursor-pointer border-none">
                                Order Now
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex-1 relative max-w-md"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src={dish.image}
                                alt={dish.name}
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#0B5D3B] rounded-full blur-[30px] opacity-50" />
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#C1121F] rounded-full blur-[30px] opacity-50" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
