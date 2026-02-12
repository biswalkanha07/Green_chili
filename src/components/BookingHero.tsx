export function BookingHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1769812343590-485512e27838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZGluaW5nJTIwY2FuZGxlc3xlbnwxfHx8fDE3NzA4MjkzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Restaurant Interior"
                    className="w-full h-full object-cover"
                />
                {/* Cinematic Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

                {/* Subtle Accent Glows */}
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#0B5D3B]/20 rounded-full blur-[130px]" />
                <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#C1121F]/15 rounded-full blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Reserve Your
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0B5D3B] to-emerald-500 mt-2">
                        Table
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light">
                    Experience the perfect blend of spice and ambiance.
                </p>
            </div>
        </section>
    );
}
