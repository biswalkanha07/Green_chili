import { Search, Package, ChefHat, Truck, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const steps = [
    { icon: Package, label: 'Order Placed' },
    { icon: ChefHat, label: 'Preparing' },
    { icon: Truck, label: 'Out for Delivery' },
    { icon: CheckCircle, label: 'Delivered' },
];

export function OrderTracking() {
    const [orderId, setOrderId] = useState('');

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#051410]">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Track Your Order
                    </h2>
                    <p className="text-emerald-100/70 text-lg">
                        Real-time updates on your delivery status
                    </p>
                </div>

                {/* Input & Button */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                placeholder="Enter Your Order ID"
                                className="w-full px-6 py-4 bg-[#0f3625] border border-emerald-900/50 rounded-xl text-white placeholder-emerald-100/40 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                            />
                            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-100/40" />
                        </div>
                        <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:scale-105 whitespace-nowrap cursor-pointer border-none">
                            Track Now
                        </button>
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-8 left-0 right-0 h-0.5 bg-emerald-900/30 hidden md:block">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, ease: 'easeInOut' }}
                            className="h-full bg-gradient-to-r from-emerald-600 to-red-600"
                        />
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isLast = index === steps.length - 1;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex flex-col items-center"
                                >
                                    {/* Icon Circle */}
                                    <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center mb-4 relative
                    ${isLast
                                            ? 'bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-900/50'
                                            : 'bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-lg shadow-emerald-900/50'
                                        }
                  `}>
                                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />

                                        {/* Pulse Effect */}
                                        <div className={`
                      absolute inset-0 rounded-full animate-ping opacity-20
                      ${isLast ? 'bg-red-600' : 'bg-emerald-600'}
                    `} />
                                    </div>

                                    {/* Label */}
                                    <p className="text-white font-medium text-center">
                                        {step.label}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
