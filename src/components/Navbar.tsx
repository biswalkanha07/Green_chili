import navLogo from '../assets/nav_logo.png';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

interface NavbarProps {
    activePage?: 'home' | 'menu' | 'delivery' | 'book' | 'about';
    onNavigate?: (page: 'home' | 'menu' | 'delivery' | 'book' | 'about') => void;
}

export function Navbar({ activePage = 'home', onNavigate }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full">
            {/* Top Bar - Contact & Social */}
            <div className="bg-[#2a2a2a] text-gray-300 py-2 px-6">
                <div className="w-full mx-auto flex items-center justify-between text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:9876543210" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone className="w-3.5 h-3.5" />
                            <span>Contact Us: 098-4043434</span>
                        </a>
                        <a href="mailto:info@greenchili.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail className="w-3.5 h-3.5" />
                            <span>Direct Bank: 098-4041-4542</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-xs">Find us on:</span>
                        <div className="flex items-center gap-2">
                            <a href="#" className="w-7 h-7 bg-white/10 hover:bg-[#0B5D3B] rounded flex items-center justify-center transition-colors">
                                <Facebook className="w-3.5 h-3.5" />
                            </a>
                            <a href="#" className="w-7 h-7 bg-white/10 hover:bg-[#0B5D3B] rounded flex items-center justify-center transition-colors">
                                <Instagram className="w-3.5 h-3.5" />
                            </a>
                            <a href="#" className="w-7 h-7 bg-white/10 hover:bg-[#0B5D3B] rounded flex items-center justify-center transition-colors">
                                <Twitter className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-white border-b border-gray-200 shadow-md">
                <div className="w-full mx-auto px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => onNavigate?.('home')}
                    >
                        <img src={navLogo} alt="Green Chili" className="h-16 w-auto object-contain" />
                        <span className="text-2xl font-bold text-[#0B5D3B] tracking-tight">
                            Green Chili
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => onNavigate?.('home')}
                            className={`bg-transparent border-none cursor-pointer text-base font-medium transition-all px-2 py-1 ${activePage === 'home'
                                    ? 'text-[#0B5D3B] font-bold'
                                    : 'text-gray-700 hover:text-[#0B5D3B]'
                                }`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => onNavigate?.('menu')}
                            className={`bg-transparent border-none cursor-pointer text-base font-medium transition-all px-2 py-1 ${activePage === 'menu'
                                    ? 'text-[#0B5D3B] font-bold'
                                    : 'text-gray-700 hover:text-[#0B5D3B]'
                                }`}
                        >
                            Menu
                        </button>
                        <button
                            onClick={() => onNavigate?.('delivery')}
                            className={`bg-transparent border-none cursor-pointer text-base font-medium transition-all px-2 py-1 ${activePage === 'delivery'
                                    ? 'text-[#0B5D3B] font-bold'
                                    : 'text-gray-700 hover:text-[#0B5D3B]'
                                }`}
                        >
                            Delivery
                        </button>
                        <button
                            onClick={() => onNavigate?.('about')}
                            className={`bg-transparent border-none cursor-pointer text-base font-medium transition-all px-2 py-1 ${activePage === 'about'
                                    ? 'text-[#0B5D3B] font-bold'
                                    : 'text-gray-700 hover:text-[#0B5D3B]'
                                }`}
                        >
                            About Us
                        </button>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="bg-[#C1121F] text-white px-5 py-2 rounded font-semibold hover:bg-[#9D0E19] transition-all text-sm border-none cursor-pointer">
                            Order Food
                        </button>
                        <button
                            onClick={() => onNavigate?.('book')}
                            className="bg-transparent text-[#0B5D3B] px-5 py-2 rounded font-semibold border-2 border-[#0B5D3B] hover:bg-[#0B5D3B] hover:text-white transition-all text-sm cursor-pointer"
                        >
                            Book A Table
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
