'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Elena Rodríguez',
        role: 'Empresaria venezolana',
        text: 'Llevaba 3 años con mi situación irregular. En 8 meses, Edita y su equipo me ayudaron a obtener mi residencia definitiva. Profesionalismo absoluto.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&q=80&auto=format&fit=crop',
        color: 'from-primary to-primary-dark',
        initials: 'ER',
    },
    {
        name: 'Marc Thompson',
        role: 'Inversor británico',
        text: 'Post-Brexit necesitaba asesoría urgente. El equipo de Edita González fue rápido, preciso y completamente bilingüe. Mi golden visa en tiempo récord.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop',
        color: 'from-secondary to-gray-700',
        initials: 'MT',
    },
    {
        name: 'Amira Al-Qasid',
        role: 'Médica marroquí',
        text: 'Querían deportarme después de 10 años en España. Su defensa penal fue impecable y hoy sigo ejerciendo aquí. No tengo palabras para agradecerles.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80&auto=format&fit=crop',
        color: 'from-accent to-amber-600',
        initials: 'AA',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    return (
        <section id="testimonios" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header — grouped left for better reading flow */}
                <div className="max-w-2xl flex flex-col gap-4 mb-12">
                    <span className="badge w-fit">Testimonios</span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-secondary leading-tight">
                        Historias que inspiran{' '}
                        <span className="text-primary italic">confianza</span>
                    </h2>
                    <p className="text-base text-secondary/60 leading-relaxed">
                        Eso es lo que más nos importa: haber ayudado a cada cliente a alcanzar lo suyo y resolver sus problemas legales en España.
                    </p>
                </div>

                {/* Desktop: 3-column grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={t.name} testimonial={t} isActive={i === current} />
                    ))}
                </div>

                {/* Mobile: Carousel */}
                <div className="md:hidden">
                    <div className="relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TestimonialCard testimonial={testimonials[current]} isActive={true} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <motion.button
                            onClick={prev}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 flex items-center justify-center"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`transition-all duration-200 rounded-full ${i === current ? 'w-6 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <motion.button
                            onClick={next}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 flex items-center justify-center"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Rating footer */}
                <div className="mt-12 flex items-center justify-center gap-4 text-sm text-secondary/50">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(s => (
                            <svg key={s} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span><strong className="text-secondary">4.9/5.0</strong> · Basado en +9 reseñas verificadas</span>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial, isActive }) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className={`bg-bg rounded-2xl overflow-hidden border transition-all duration-300 ${isActive ? 'border-primary/20 shadow-lg shadow-primary/10' : 'border-gray-100 shadow-md'
                }`}
        >
            {/* Photo / Video thumbnail */}
            <div className="relative h-48 cursor-pointer group overflow-hidden">
                {testimonial.image ? (
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${testimonial.color}`} />
                )}
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
                {/* Name watermark bottom-left */}
                <div className="absolute bottom-3 left-4">
                    <p className="text-white font-bold text-sm drop-shadow">{testimonial.name}</p>
                    <p className="text-white/70 text-xs">{testimonial.role}</p>
                </div>
                {/* Play button — centered exactly in the image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-200">
                    <svg className="w-5 h-5 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map(s => (
                        <svg key={s} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <p className="text-sm text-gray-800 font-medium italic leading-relaxed mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-xs font-bold`}>
                        {testimonial.initials}
                    </div>
                    <div>
                        <p className="text-sm font-bold text-secondary">{testimonial.name}</p>
                        <p className="text-xs text-secondary/50">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
