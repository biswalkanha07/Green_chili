import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Navbar as MainNavbar } from './Navbar';
import { Footer } from './Footer';

// Actually, let's just make HomeContent accept props or be self-contained
export function HomeContent({ onNavigate }: { onNavigate: (page: 'home' | 'menu' | 'delivery' | 'book' | 'about') => void }) {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const trendingDishes = [
        {
            id: 1,
            name: 'Tandoori Chicken Platter',
            description: 'Charcoal-grilled chicken marinated in aromatic spices',
            price: '₹499',
            image: 'https://images.unsplash.com/photo-1744017680972-a80649588935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW4lMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA4MjgwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            id: 2,
            name: 'Spicy Green Curry Bowl',
            description: 'Authentic Thai green curry with fresh herbs & vegetables',
            price: '₹399',
            image: 'https://images.unsplash.com/photo-1716535232842-d10da4eb33d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGN1cnJ5JTIwYm93bCUyMHByZW1pdW18ZW58MXx8fHwxNzcwODI4MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            id: 3,
            name: 'Chili Chicken Wings',
            description: 'Crispy wings tossed in house special fiery chili sauce',
            price: '₹349',
            image: 'https://images.unsplash.com/photo-1760390952109-97b41176f790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsaSUyMGNoaWNrZW4lMjBhcHBldGl6ZXJ8ZW58MXx8fHwxNzcwODI4MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
        {
            id: 4,
            name: 'Royal Biryani Special',
            description: 'Fragrant basmati rice layered with tender meat & spices',
            price: '₹549',
            image: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzcwODI4MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 w-full overflow-x-hidden pt-28">


            {/* Navbar Integration */}
            {/* We are reusing the existing navbar structure from App.tsx but modified to use the new navigation handler if needed, 
          or we can just keep the hardcoded one for the Home page look. 
          To satisfy the user request "add this page in add field in nav bar book A Table", 
          we should use the new Navbar component we just created which has the "Book a Table" link.
      */}
            {/* Navbar Integration */}
            <MainNavbar activePage="home" onNavigate={onNavigate} />

            {/* Hero Section */}
            <section className="relative overflow-hidden w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B5D3B] via-[#0a4d31] to-[#083622]">
                    <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                                    <path d="M25 0L50 14.43V43.4L25 57.74L0 43.3V14.43L25 0z" fill="none" stroke="currentColor" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#hexagons)" />
                        </svg>
                    </div>
                </div>

                <div className="w-full mx-auto px-6 py-20 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="text-white space-y-6 text-center md:text-left">
                            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <span className="text-sm font-medium text-white">🌶️ Premium Spicy Cuisine</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                Serving Fresh &<br />
                                <span className="text-[#F97316]">Spicy Flavors</span>
                            </h1>

                            <p className="text-xl text-gray-200 leading-relaxed max-w-lg mx-auto md:mx-0">
                                Authentic taste. Fast delivery. Since 2026.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                                <button onClick={() => onNavigate('menu')} className="bg-[#C1121F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#9D0E19] transition-all hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center border-none cursor-pointer">
                                    <ShoppingCart className="w-5 h-5" />
                                    View Menu
                                </button>

                                <button onClick={() => onNavigate('book')} className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/30 w-full sm:w-auto cursor-pointer">
                                    Book a Table
                                </button>
                            </div>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-8">
                                <div>
                                    <div className="text-3xl font-bold text-white">500+</div>
                                    <div className="text-sm text-gray-300">Dishes Available</div>
                                </div>
                                <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                                <div>
                                    <div className="text-3xl font-bold text-white">30min</div>
                                    <div className="text-sm text-gray-300">Fast Delivery</div>
                                </div>
                                <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                                <div>
                                    <div className="text-3xl font-bold text-white">10K+</div>
                                    <div className="text-sm text-gray-300">Happy Customers</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-8 md:mt-0">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1690983322857-0811d47fedfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwbWVhdCUyMHNwaWN5JTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzA4MjgwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Grilled Premium Food"
                                    className="w-full h-[500px] md:h-[600px] object-cover"
                                />
                                <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl z-20 flex items-center gap-3 max-w-[90%]">
                                    <div className="w-12 h-12 bg-[#C1121F] rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0">
                                        🔥
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-gray-900">Today's Special</div>
                                        <div className="text-sm text-gray-600">20% Off on All Orders</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F97316]/20 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#C1121F]/20 rounded-full blur-3xl pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trending Dishes Section */}
            <section className="py-20 bg-gray-50 w-full">
                <div className="w-full mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending Dishes</h2>
                        <p className="text-gray-600 text-lg">Our most loved dishes crafted with authentic flavors</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trendingDishes.map((dish) => (
                            <div
                                key={dish.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer text-left flex flex-col"
                                style={{
                                    transform: hoveredCard === dish.id ? 'translateY(-8px)' : 'translateY(0)',
                                }}
                                onMouseEnter={() => setHoveredCard(dish.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="relative h-56 overflow-hidden shrink-0">
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-full h-full object-cover transition-transform duration-300"
                                        style={{
                                            transform: hoveredCard === dish.id ? 'scale(1.1)' : 'scale(1)',
                                        }}
                                    />
                                    <div className="absolute top-4 right-4 bg-[#C1121F] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        🔥 Spicy
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="font-bold text-lg text-gray-900">{dish.name}</h3>
                                    <p className="text-sm text-gray-600 line-clamp-2 mt-2 flex-grow">{dish.description}</p>

                                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                                        <div className="text-2xl font-bold text-[#0B5D3B]">{dish.price}</div>
                                        <button className="bg-[#0B5D3B] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#094a2f] transition-all flex items-center gap-1 border-none cursor-pointer">
                                            <ShoppingCart className="w-4 h-4" />
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button onClick={() => onNavigate('menu')} className="bg-white text-[#0B5D3B] border-2 border-[#0B5D3B] px-8 py-3 rounded-full font-semibold hover:bg-[#0B5D3B] hover:text-white transition-all cursor-pointer">
                            View Full Menu
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
