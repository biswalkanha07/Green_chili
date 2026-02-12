import { motion } from 'motion/react';
import { ArrowRight, Flame } from 'lucide-react';

export function DeliveryCTA() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px]" />
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    {/* Flame Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-700 shadow-2xl shadow-red-900/50 mb-8">
                        <Flame className="w-10 h-10 text-white" fill="currentColor" />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Craving Something
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                            Spicy?
                        </span>
                    </h2>

                    <p className="text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto">
                        Experience the perfect blend of heat and flavor, delivered fresh to your door in 30 minutes or less.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-xl font-medium text-lg transition-all duration-300 shadow-2xl shadow-red-900/40 hover:shadow-red-900/60 cursor-pointer border-none"
                    >
                        Order Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-emerald-900/30"
                >
                    <div>
                        <p className="text-4xl font-bold text-white mb-2">10K+</p>
                        <p className="text-emerald-100/60">Happy Customers</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white mb-2">30min</p>
                        <p className="text-emerald-100/60">Avg Delivery Time</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white mb-2">4.9★</p>
                        <p className="text-emerald-100/60">Customer Rating</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
