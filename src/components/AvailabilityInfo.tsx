import { Clock, Crown, Users } from 'lucide-react';
import { motion } from 'motion/react';

const infoCards = [
    {
        icon: Clock,
        title: 'Open Daily',
        description: '11:00 AM – 11:30 PM',
        accent: 'green'
    },
    {
        icon: Crown,
        title: 'Private Dining',
        description: 'Available',
        accent: 'red'
    },
    {
        icon: Users,
        title: 'Group Reservations',
        description: 'Welcome',
        accent: 'green'
    }
];

export function AvailabilityInfo() {
    return (
        <section className="py-16 px-6">
            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {infoCards.map((card, index) => {
                        const Icon = card.icon;
                        const isRed = card.accent === 'red';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`
                  relative bg-gradient-to-br from-[#0B5D3B]/10 to-black/40 
                  backdrop-blur-sm border rounded-2xl p-6
                  ${isRed ? 'border-[#C1121F]/20' : 'border-[#0B5D3B]/30'}
                  shadow-lg hover:shadow-xl transition-all duration-300
                  group
                `}
                            >
                                {/* Glow Effect on Hover */}
                                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${isRed ? 'shadow-[0_0_25px_rgba(193,18,31,0.2)]' : 'shadow-[0_0_25px_rgba(11,93,59,0.3)]'}
                `} />

                                {/* Icon */}
                                <div className={`
                  relative w-12 h-12 rounded-lg flex items-center justify-center mb-4
                  ${isRed
                                        ? 'bg-gradient-to-br from-[#C1121F] to-red-700 shadow-md shadow-[#C1121F]/40'
                                        : 'bg-gradient-to-br from-[#0B5D3B] to-emerald-700 shadow-md shadow-[#0B5D3B]/40'
                                    }
                  group-hover:scale-110 transition-transform duration-300
                `}>
                                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                                </div>

                                {/* Text */}
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {card.title}
                                </h3>
                                <p className="text-white/60 font-medium">
                                    {card.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
