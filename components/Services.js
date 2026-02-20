'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
    {
        icon: (
            <svg className="w-6 h-6 text-teal-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Extranjería & Visados',
        description: 'Obtenemos tu residencia, podemos transformar tu situación migratoria y acompañarte en cada etapa del proceso legal.',
        tags: ['Visas', 'NIE', 'Residencia'],
        color: 'from-primary/10 to-primary/5',
        iconBg: 'bg-primary/10',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Nacionalidad Española',
        description: 'Analizamos tu situación para solicitar la nacionalidad española por residencia, opción, carta de naturaleza o matrimonio.',
        tags: ['CIE', 'CONI', 'BAU'],
        color: 'from-accent/10 to-accent/5',
        iconBg: 'bg-accent/10',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-rose-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Derecho Civil & Familia',
        description: 'Divorcios, herencias, contratos y reclamaciones. Protegemos tus derechos y los de tu familia en cada proceso judicial.',
        tags: ['Divorcios', 'Herencias', 'Contratos'],
        color: 'from-rose-50 to-pink-50',
        iconBg: 'bg-rose-100',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
        title: 'Defensa Penal',
        description: 'Defensa legal integral ante cualquier acusación criminal. Actuamos con diligencia y rigor para proteger tu libertad.',
        tags: ['Defensa DPE', 'Instrucción'],
        color: 'from-slate-50 to-gray-50',
        iconBg: 'bg-slate-100',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        title: 'Asesoría para Inversores',
        description: 'Acompañamos a empresarios e inversores extranjeros a establecerse en España con plenas garantías jurídicas.',
        tags: ['Sociedades', 'Fiscal'],
        color: 'from-emerald-50 to-teal-50',
        iconBg: 'bg-emerald-100',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-violet-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
        ),
        title: 'Recursos & Litigios',
        description: 'Recurrimos resoluciones desfavorables en todas las instancias administrativas y judiciales con máxima efectividad.',
        tags: ['Recursos', 'Amparo'],
        color: 'from-violet-50 to-purple-50',
        iconBg: 'bg-violet-100',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section id="servicios" className="py-20 lg:py-28 bg-[#6B8BA4]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 bg-white text-slate-800 border border-slate-200 shadow-sm">Nuestra Especialización</span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
                        No vendemos trámites,{' '}
                        <span className="text-accent italic">construimos</span>
                        <br />
                        nuevas vidas.
                    </h2>
                    <p className="text-base lg:text-lg text-white max-w-2xl mx-auto font-medium">
                        Cada caso es único. Nos focalizamos en entender tu situación personal para trazar el camino legal más ágil y seguro hasta tu objetivo.
                    </p>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariants}
                            onHoverStart={() => setHoveredCard(i)}
                            onHoverEnd={() => setHoveredCard(null)}
                            className={`group relative bg-white rounded-2xl border border-gray-100 transition-all duration-300 cursor-pointer overflow-hidden ${hoveredCard === i ? 'shadow-2xl shadow-slate-300/50 -translate-y-1' : 'shadow-xl shadow-slate-200/50'
                                }`}
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                            {/* Fitts Law: full-card inner flex column */}
                            <div className="relative h-full flex flex-col p-8">
                                {/* Icon — dark icon on pastel bg for WCAG AA contrast */}
                                <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shrink-0`}>
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-lg text-secondary font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-secondary/60 leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                {/* Tags — defined with border + slate bg */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {service.tags.map((tag) => (
                                        <span key={tag} className="text-xs border border-gray-200 bg-slate-50 text-gray-700 px-2.5 py-1 rounded-full font-medium transition-colors duration-200 group-hover:bg-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA — mt-auto pushes to bottom; before:absolute makes entire card clickable */}
                                <div className="mt-auto">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors duration-200 group/link before:absolute before:inset-0"
                                    >
                                        SABER MÁS
                                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View all */}
                <div className="text-center mt-10">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark border-b-2 border-primary/30 hover:border-primary pb-0.5 transition-all duration-200"
                    >
                        Explorar todos los servicios
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
