export function DeliveryHero() {
    return (
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1765659096717-f21c8f832de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHJpZGVyJTIwbW90b3JjeWNsZSUyMGZvb2R8ZW58MXx8fHwxNzcwODI5MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Delivery Rider"
                    className="w-full h-full object-cover"
                />
                {/* Cinematic Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0a2318]/80 to-[#0a2318]" />

                {/* Red Accent Glow */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Fast & Fresh
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                        Delivery
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-emerald-100/80 max-w-2xl mx-auto">
                    Hot and spicy, delivered to your doorstep.
                </p>
            </div>
        </section>
    );
}
