import { Sparkles, Leaf, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
    {
        icon: Sparkles,
        title: 'Premium Ambiance',
        description: 'Elegant interiors with warm lighting and sophisticated decor that sets the perfect mood for any occasion.'
    },
    {
        icon: Leaf,
        title: 'Fresh Ingredients',
        description: 'Locally sourced, organic ingredients prepared daily by our expert chefs to deliver unmatched flavor and quality.'
    },
    {
        icon: Zap,
        title: 'Fast Service',
        description: 'Attentive staff and streamlined service ensuring your dining experience is both efficient and memorable.'
    }
];

export function WhyBookWithUs() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#0B5D3B]/5 to-transparent">
            <div className="w-full mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Why Book With Us
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Experience excellence in every detail
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -10 }}
                                className="bg-gradient-to-br from-[#0B5D3B]/10 to-black/60 backdrop-blur-sm border border-[#0B5D3B]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-[#0B5D3B]/40 transition-all duration-300 group"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0B5D3B] to-emerald-700 flex items-center justify-center mb-6 shadow-lg shadow-[#0B5D3B]/40 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
