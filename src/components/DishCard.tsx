import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

interface DishCardProps {
    name: string;
    description: string;
    price: number;
    image: string;
    index: number;
}

export function DishCard({ name, description, price, image, index }: DishCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#0B5D3B]/50 transition-all duration-300 shadow-md hover:shadow-xl"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-0.5 bg-[#C1121F] text-white text-xs font-bold rounded-full">
                        Recommended
                    </span>
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0B5D3B] transition-colors">
                    {name}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-[#0B5D3B]">
                        ${price}
                    </span>
                    <button className="p-2 bg-[#0B5D3B]/10 rounded-full text-[#0B5D3B] hover:bg-[#0B5D3B] hover:text-white transition-colors cursor-pointer border-none">
                        <ShoppingCart className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
