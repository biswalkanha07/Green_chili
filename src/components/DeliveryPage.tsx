import { Navbar } from './Navbar';
import { DeliveryHero } from './DeliveryHero';
import { DeliveryInfoCards } from './DeliveryInfoCards';
import { OrderTracking } from './OrderTracking';
import { DeliveryZones } from './DeliveryZones';
import { DeliveryCTA } from './DeliveryCTA';
import { Footer } from './Footer';

interface DeliveryPageProps {
    onNavigate: (page: 'home' | 'menu' | 'delivery' | 'book' | 'about') => void;
}

export default function DeliveryPage({ onNavigate }: DeliveryPageProps) {
    return (
        <div className="min-h-screen bg-[#0a2318] relative w-full overflow-x-hidden pt-28">
            {/* Smoke texture overlay */}
            <div
                className="fixed inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1655942144741-f5cff077553a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZSUyMHRleHR1cmUlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA4MjkxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            <div className="relative z-10 w-full">
                <Navbar activePage="delivery" onNavigate={onNavigate} />
                <DeliveryHero />
                <DeliveryInfoCards />
                <OrderTracking />
                <DeliveryZones />
                <DeliveryCTA />
                <Footer />
            </div>
        </div>
    );
}
