import {
    ChefHat,
    Instagram,
    Facebook,
    Twitter,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-emerald-900/30 bg-black px-6 py-12">
            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-2.5 rounded-lg">
                                <ChefHat className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white">
                                Green Chili
                            </span>
                        </div>
                        <p className="text-emerald-100/60 mb-6">
                            Premium spicy cuisine delivered fresh to your
                            doorstep.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-emerald-900/30 hover:bg-emerald-600/30 flex items-center justify-center transition-colors group"
                            >
                                <Instagram className="w-5 h-5 text-emerald-100/60 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-emerald-900/30 hover:bg-emerald-600/30 flex items-center justify-center transition-colors group"
                            >
                                <Facebook className="w-5 h-5 text-emerald-100/60 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-emerald-900/30 hover:bg-emerald-600/30 flex items-center justify-center transition-colors group"
                            >
                                <Twitter className="w-5 h-5 text-emerald-100/60 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-medium mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-emerald-100/60 hover:text-white transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-emerald-100/60 hover:text-white transition-colors"
                                >
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-emerald-100/60 hover:text-white transition-colors"
                                >
                                    Delivery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-emerald-100/60 hover:text-white transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-medium mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-emerald-100/60 hover:text-white transition-colors"
                                >
                                    Track Order
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-emerald-100/60 hover:text-white transition-colors"
                                >
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-emerald-100/60 hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-emerald-100/60 hover:text-white transition-colors"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-medium mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-emerald-100/60">
                                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>+123-456-7890</span>
                            </li>
                            <li className="flex items-start gap-3 text-emerald-100/60">
                                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>hello@greenchili.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-emerald-100/60">
                                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>123 Spice Street, Flavor City</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-emerald-900/30 text-center">
                    <p className="text-emerald-100/50 text-sm">
                        © 2026 Green Chili. All rights reserved. Made with
                        🌶️ and passion.
                    </p>
                </div>
            </div>
        </footer>
    );
}
