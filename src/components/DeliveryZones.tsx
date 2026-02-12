import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const zones = [
    'Downtown District',
    'North Avenue',
    'East Garden',
    'West Park',
    'Central Plaza',
    'Riverside',
    'Hillside',
    'Lakeside',
    'Greenwood',
    'Sunset Valley',
    'Harbor Bay',
    'Oak Heights',
];

export function DeliveryZones() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        We Deliver In These Areas
                    </h2>
                    <p className="text-emerald-100/70 text-lg">
                        Serving premium food across the city
                    </p>
                </div>

                {/* Zones Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {zones.map((zone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-br from-[#0f3625] to-[#0a2318] border border-emerald-900/30 rounded-xl p-4 hover:border-emerald-600/50 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-emerald-600/20 flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors">
                                    <MapPin className="w-5 h-5 text-emerald-400" strokeWidth={2} />
                                </div>
                                <span className="text-white font-medium">{zone}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-12 text-center bg-gradient-to-r from-emerald-900/20 to-red-900/20 border border-emerald-900/30 rounded-2xl p-8"
                >
                    <p className="text-emerald-100/70 text-lg mb-2">
                        Don't see your area?
                    </p>
                    <p className="text-white font-medium">
                        Contact us at{' '}
                        <a href="tel:+1234567890" className="text-red-400 hover:text-red-300 transition-colors">
                            +123-456-7890
                        </a>
                        {' '}to check availability
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
