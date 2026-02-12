import { Clock, MapPin, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const cards = [
    {
        icon: Clock,
        title: '30 Minute Delivery',
        subtitle: 'Guarantee',
        accent: 'green',
    },
    {
        icon: MapPin,
        title: 'Live Order',
        subtitle: 'Tracking',
        accent: 'red',
    },
    {
        icon: Shield,
        title: 'Safe & Hygienic',
        subtitle: 'Packaging',
        accent: 'green',
    },
];

export function DeliveryInfoCards() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        const isRed = card.accent === 'red';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`
                  relative bg-gradient-to-br from-[#0f3625] to-[#0a2318] 
                  rounded-2xl p-8 border 
                  ${isRed ? 'border-red-900/30' : 'border-emerald-900/30'}
                  shadow-xl hover:shadow-2xl transition-all duration-300
                  group
                `}
                            >
                                {/* Glow Effect */}
                                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${isRed ? 'shadow-[0_0_30px_rgba(220,38,38,0.3)]' : 'shadow-[0_0_30px_rgba(16,185,129,0.3)]'}
                `} />

                                {/* Icon */}
                                <div className={`
                  relative w-16 h-16 rounded-xl flex items-center justify-center mb-6
                  ${isRed
                                        ? 'bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-900/50'
                                        : 'bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-lg shadow-emerald-900/50'
                                    }
                  group-hover:scale-110 transition-transform duration-300
                `}>
                                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>

                                {/* Text */}
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    {card.title}
                                </h3>
                                <p className={`
                  text-xl font-medium
                  ${isRed ? 'text-red-400' : 'text-emerald-400'}
                `}>
                                    {card.subtitle}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
