'use client';

import { motion } from 'framer-motion';

const stats = [
    { icon: '⚖️', label: 'Contrato Negociado', count: '1,200+' },
    { icon: '👥', label: 'CONI', count: '450+' },
    { icon: '🏛️', label: 'Juicios', count: '320+' },
];

export default function SocialProof() {
    return (
        <section className="py-8 lg:py-10 border-y border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Google Reviews */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {['MR', 'AB', 'JP', 'CL'].map((initials, i) => (
                                <div
                                    key={i}
                                    className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br ${['from-primary to-primary-dark', 'from-accent to-amber-600', 'from-secondary to-gray-600', 'from-teal-400 to-teal-600'][i]
                                        }`}
                                >
                                    {initials}
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <svg key={s} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-1 text-sm font-bold text-secondary">4.9</span>
                            </div>
                            <p className="text-xs text-secondary/50 mt-0.5">+200 Reseñas en Google</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-gray-200" />

                    {/* Stats */}
                    <div className="flex items-center gap-8">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2.5"
                            >
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-lg">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-secondary/50">{stat.label}</p>
                                    <p className="text-sm font-bold text-secondary">{stat.count}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
