import { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        requests: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Reservation submitted:', formData);
    };

    return (
        <section className="py-20 px-6 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0B5D3B]/5 to-black" />

            <div className="w-full mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                    {/* Booking Form - Takes 3 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-gradient-to-br from-[#0B5D3B]/10 to-black/40 backdrop-blur-xl border border-emerald-900/30 rounded-3xl p-8 md:p-12 shadow-2xl">
                            {/* Form Header */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <Sparkles className="w-6 h-6 text-[#C1121F]" />
                                    <h2 className="text-3xl font-bold text-white">Book Your Experience</h2>
                                </div>
                                <p className="text-white/60">Fill in your details to reserve a table</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Row 1: Name & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white/80 mb-2 text-sm font-medium">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-4 py-3.5 bg-black/40 border border-emerald-900/40 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/20 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white/80 mb-2 text-sm font-medium">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+1 (555) 000-0000"
                                            required
                                            className="w-full px-4 py-3.5 bg-black/40 border border-emerald-900/40 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/20 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Date & Time */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white/80 mb-2 text-sm font-medium">
                                            Date
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                                            <input
                                                type="date"
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                required
                                                className="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-emerald-900/40 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white/80 mb-2 text-sm font-medium">
                                            Time
                                        </label>
                                        <div className="relative">
                                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                                            <input
                                                type="time"
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                required
                                                className="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-emerald-900/40 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/20 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: Number of Guests */}
                                <div>
                                    <label className="block text-white/80 mb-2 text-sm font-medium">
                                        Number of Guests
                                    </label>
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                                        <select
                                            value={formData.guests}
                                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                            required
                                            className="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-emerald-900/40 rounded-xl text-white focus:outline-none focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/20 transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="3">3 Guests</option>
                                            <option value="4">4 Guests</option>
                                            <option value="5">5 Guests</option>
                                            <option value="6">6 Guests</option>
                                            <option value="7+">7+ Guests</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 4: Special Requests */}
                                <div>
                                    <label className="block text-white/80 mb-2 text-sm font-medium">
                                        Special Requests (Optional)
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40 pointer-events-none" />
                                        <textarea
                                            value={formData.requests}
                                            onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                                            placeholder="Any dietary restrictions or special occasions..."
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-emerald-900/40 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#0B5D3B] focus:ring-2 focus:ring-[#0B5D3B]/20 transition-all resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-[#C1121F] to-red-700 hover:from-red-700 hover:to-[#C1121F] text-white py-4 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg shadow-[#C1121F]/30 hover:shadow-[#C1121F]/50 hover:shadow-2xl"
                                >
                                    Confirm Reservation
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right Side Image - Takes 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2 hidden lg:block"
                    >
                        <div className="sticky top-24">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1763645246808-79c2c51d86ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwYW1iaWFuY2UlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzA4MjkzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Luxury Restaurant Ambiance"
                                    className="w-full h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Overlay Text */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Elegant Dining Experience
                                    </h3>
                                    <p className="text-white/80">
                                        Intimate ambiance with world-class service
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
