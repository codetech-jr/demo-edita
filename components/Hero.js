'use client';

import { motion } from 'framer-motion';

// Unsplash high-quality legal/architecture image
const BG_IMAGE =
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=85&auto=format&fit=crop';

const STATS = [
    { number: '15+', label: 'Años de experiencia' },
    { number: '2.5k+', label: 'Casos resueltos' },
    { number: '98%', label: 'Clientes satisfechos' },
];

export default function Hero({ onBooking }) {
    return (
        <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
            {/* ── Background image ── */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${BG_IMAGE}')` }}
            />

            {/* ── Multi-layer overlay for depth & legibility ── */}
            {/* Base dark wash */}
            <div className="absolute inset-0 bg-slate-900/55" />
            {/* Bottom-left radial teal accent */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(23,107,135,0.35) 0%, transparent 55%)',
                }}
            />
            {/* Bottom vignette for ground text */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 40%, transparent 75%)',
                }}
            />

            {/* ── Content ── */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pb-20 pt-36 lg:pt-44">

                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 mb-6"
                >
                    <span className="inline-flex items-center gap-2 bg-white/10 border border-white/25 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                        Despacho de Alto Nivel · Madrid, España
                    </span>
                </motion.div>

                {/* H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                    className="font-serif text-white leading-tight mb-6"
                    style={{ fontSize: 'clamp(2.6rem, 6vw, 5.2rem)', letterSpacing: '-0.01em' }}
                >
                    Tu tranquilidad legal
                    <br />
                    <em className="not-italic" style={{ color: '#D4AF37' }}>empieza</em> hoy.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
                    className="text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl text-gray-200"
                >
                    Transformamos procesos complejos en soluciones reales. Expertos en
                    Extranjería, Derecho Penal y Asesoría Empresarial en España.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 mb-16"
                >
                    {/* Primary — Gold */}
                    <motion.button
                        onClick={onBooking}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center justify-center gap-2.5 font-bold text-base px-9 py-4 rounded-full shadow-2xl transition-all duration-200"
                        style={{
                            background: 'linear-gradient(135deg, #D4AF37 0%, #b8960e 100%)',
                            color: '#1a1200',
                            boxShadow: '0 8px 32px rgba(212,175,55,0.45)',
                        }}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Agendar Consulta
                    </motion.button>

                    {/* Secondary — Outline white */}
                    <motion.a
                        href="#servicios"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.12)' }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center justify-center gap-2.5 font-bold text-base px-9 py-4 rounded-full border-2 border-white/50 text-white transition-all duration-200"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        Nuestros Servicios
                    </motion.a>
                </motion.div>

                {/* ── Stats bar ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-8 border-t border-white/15"
                >
                    {/* Avatars + social proof copy (no stars — reviews live in the bar below) */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[
                                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80&auto=format&fit=crop&crop=face',
                                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop&crop=face',
                                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop&crop=face',
                                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop&crop=face',
                            ].map((src, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white/50 overflow-hidden shadow-md">
                                    <img src={src} alt="cliente satisfecho" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="text-white/85 text-sm font-medium leading-snug max-w-[200px]">
                            Más de <span className="text-white font-bold">2.000 familias</span> asesoradas con éxito
                        </p>
                    </div>

                    {/* Stat dividers */}
                    {STATS.map((stat, i) => (
                        <div key={stat.label} className="flex items-center gap-5">
                            {i > 0 && <div className="hidden sm:block w-px h-8 bg-white/20" />}
                            <div>
                                <p className="font-serif text-2xl font-bold text-white">{stat.number}</p>
                                <p className="text-xs text-white/55 mt-0.5">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ── Bottom scroll cue ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                >
                    <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
