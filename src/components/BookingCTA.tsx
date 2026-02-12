import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export function BookingCTA() {
    const scrollToForm = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C1121F]/15 rounded-full blur-[150px]" />
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0B5D3B]/20 rounded-full blur-[130px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    {/* Calendar Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#C1121F] to-red-700 shadow-2xl shadow-[#C1121F]/50 mb-8">
                        <Calendar className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>

                    {/* Heading */}
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Make Every Meal
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C1121F] to-red-500 mt-2">
                            Memorable
                        </span>
                    </h2>

                    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
                        Join us for an unforgettable dining experience where every dish tells a story and every moment matters.
                    </p>

                    {/* CTA Button */}
                    <motion.button
                        onClick={scrollToForm}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#C1121F] to-red-700 hover:from-red-700 hover:to-[#C1121F] text-white px-10 py-5 rounded-xl font-medium text-lg transition-all duration-300 shadow-2xl shadow-[#C1121F]/40 hover:shadow-[#C1121F]/60"
                    >
                        Book Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>

                {/* Decorative Divider */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 pt-16 border-t border-[#0B5D3B]/20"
                >
                    <p className="text-white/50 text-sm">
                        Need help with your reservation? Call us at{' '}
                        <a href="tel:+1234567890" className="text-[#C1121F] hover:text-red-500 transition-colors font-medium">
                            +123-456-7890
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
