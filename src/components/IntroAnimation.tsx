import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import logoImage from '../assets/logo.png';

interface IntroAnimationProps {
    onComplete?: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
    const [emberParticles, setEmberParticles] = useState<Array<{
        id: number;
        x: number;
        y: number;
        size: number;
        duration: number;
        delay: number;
    }>>([]);

    const [explosionEmbers, setExplosionEmbers] = useState<Array<{
        id: number;
        angle: number;
        distance: number;
        size: number;
    }>>([]);

    useEffect(() => {
        // Generate subtle floating ember particles
        const particles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: 100 + Math.random() * 20,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 2,
        }));
        setEmberParticles(particles);

        // Generate explosion embers for impact scene
        const embers = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            angle: (360 / 40) * i + (Math.random() * 20 - 10),
            distance: 200 + Math.random() * 150,
            size: Math.random() * 4 + 2,
        }));
        setExplosionEmbers(embers);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black w-screen h-screen">
            {/* 1. Background Gradient (Subtle Pulse) */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        'radial-gradient(circle at center, #1a0800 0%, #000000 70%)',
                        'radial-gradient(circle at center, #2e1005 10%, #000000 80%)',
                        'radial-gradient(circle at center, #000000 100%, #000000 100%)',
                    ],
                }}
                transition={{ duration: 4, ease: "easeInOut" }}
            />

            {/* 2. Floating Embers (Background) */}
            {emberParticles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-orange-500 blur-[1px]"
                    style={{
                        left: `${p.x}%`,
                        bottom: '-10%',
                        width: p.size,
                        height: p.size,
                        opacity: 0,
                    }}
                    animate={{
                        y: [0, -window.innerHeight * 0.8],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.2, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeOut",
                    }}
                />
            ))}

            {/* CENTER STAGE */}
            <div className="relative flex items-center justify-center w-full h-full">

                {/* 3. Initial Spark (Gathering Energy) */}
                <motion.div
                    className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_20px_white]"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1.5, 0.5, 30], // Grow, shrink, EXPLODE
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        times: [0, 0.6, 0.8, 1],
                        ease: "easeInOut",
                    }}
                />

                {/* 4. Explosion Shockwave */}
                <motion.div
                    className="absolute rounded-full border-2 border-orange-500 blur-sm"
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    animate={{
                        width: ['0px', '1200px'],
                        height: ['0px', '1200px'],
                        opacity: [1, 0],
                        borderWidth: ['4px', '0px'],
                    }}
                    transition={{
                        delay: 1.4,
                        duration: 1.2,
                        ease: "circOut",
                    }}
                />

                {/* 5. Explosion Particles (Burst Out) */}
                {explosionEmbers.map((ember, i) => {
                    const radians = (ember.angle * Math.PI) / 180;
                    const x = Math.cos(radians) * ember.distance;
                    const y = Math.sin(radians) * ember.distance;
                    return (
                        <motion.div
                            key={`exp-${i}`}
                            className="absolute rounded-full"
                            style={{
                                width: ember.size,
                                height: ember.size,
                                background: i % 2 === 0 ? '#fb923c' : '#34d399', // orange-400 / emerald-400
                                boxShadow: `0 0 8px ${i % 2 === 0 ? '#ea580c' : '#059669'}`,
                            }}
                            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                            animate={{
                                x: [0, x],
                                y: [0, y],
                                opacity: [1, 1, 0],
                                scale: [1, 0.5, 0],
                            }}
                            transition={{
                                delay: 1.5,
                                duration: 1.5,
                                ease: "circOut",
                            }}
                        />
                    )
                })}

                {/* 6. MAIN LOGO REVEAL (Smooth & Majestic) */}
                <motion.div
                    className="absolute z-20"
                    initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)', y: 20 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        filter: 'blur(0px)',
                        y: 0,
                    }}
                    transition={{
                        delay: 1.6,
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1], // Custom gentle easeOut
                    }}
                >
                    <motion.img
                        src={logoImage}
                        className="w-[600px] max-w-[90vw] drop-shadow-[0_0_30px_rgba(255,100,0,0.3)]"
                        alt="Green Chili Logo"
                        animate={{
                            // A subtle breathing effect while visible
                            filter: [
                                'drop-shadow(0 0 30px rgba(255,100,0,0.3))',
                                'drop-shadow(0 0 50px rgba(255,100,0,0.5))',
                                'drop-shadow(0 0 30px rgba(255,100,0,0.3))'
                            ]
                        }}
                        transition={{
                            delay: 2.8,
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* 7. Final Transition Overlay */}
                <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ opacity: 0, pointerEvents: 'none' }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 5, // Wait for logo to be admired
                        duration: 1.0,
                        ease: "easeInOut",
                    }}
                    onAnimationComplete={onComplete}
                />
            </div>
        </div>
    );
}
