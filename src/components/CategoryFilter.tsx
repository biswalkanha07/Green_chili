
interface CategoryFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const categories = [
    'All',
    'Starters',
    'Main Course',
    'Grills',
    'Biryani',
    'Beverages',
    'Desserts',
];

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
    return (
        <section className="py-8 bg-black sticky top-[88px] z-40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
                <div className="flex gap-4 min-w-max justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer ${activeCategory === category
                                ? 'bg-[#0B5D3B] text-white border-[#0B5D3B]'
                                : 'bg-transparent text-gray-400 border-white/20 hover:border-white/50 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
