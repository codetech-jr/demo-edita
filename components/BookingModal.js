'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function BookingModal({ onClose }) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="modal-overlay"
                onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            >
                <motion.div
                    initial={{ scale: 0.92, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.92, opacity: 0, y: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Modal Header */}
                    <div className="bg-gradient-to-r from-secondary to-primary p-6 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 translate-x-8 -translate-y-8 pointer-events-none" />
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-10"
                            aria-label="Cerrar"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="pr-8">
                            <p className="text-xs text-white/60 uppercase tracking-widest font-semibold mb-1">Sin compromiso</p>
                            <h3 className="font-serif text-2xl text-white font-semibold">Solicitar Consulta Gratuita</h3>
                            <p className="text-sm text-white/70 mt-1">Tu situación merece atención personalizada</p>
                        </div>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6 flex flex-col gap-4">
                        {/* Success icon */}
                        <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl p-3.5">
                            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <svg className="w-4.5 h-4.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-sm text-secondary/80 font-medium">Primera consulta <span className="text-primary font-bold">100% gratuita</span> y confidencial</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-secondary/60 mb-1.5 uppercase tracking-wide">Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="w-full border border-gray-200 rounded-xl px-3.5 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-secondary/60 mb-1.5 uppercase tracking-wide">Apellidos</label>
                                <input
                                    type="text"
                                    placeholder="Tus apellidos"
                                    className="w-full border border-gray-200 rounded-xl px-3.5 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-secondary/60 mb-1.5 uppercase tracking-wide">Teléfono / WhatsApp</label>
                            <input
                                type="tel"
                                placeholder="+34 600 000 000"
                                className="w-full border border-gray-200 rounded-xl px-3.5 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-secondary/60 mb-1.5 uppercase tracking-wide">Área de consulta</label>
                            <select className="w-full border border-gray-200 rounded-xl px-3.5 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white">
                                <option value="">Selecciona el tipo de caso</option>
                                <option>Extranjería y Visados</option>
                                <option>Nacionalidad Española</option>
                                <option>Asesoría Empresarial</option>
                                <option>Derecho Civil y Familia</option>
                                <option>Defensa Penal</option>
                                <option>Asesoría para Inversores</option>
                                <option>Otro</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-secondary/60 mb-1.5 uppercase tracking-wide">Cuéntanos brevemente</label>
                            <textarea
                                placeholder="Describe tu situación legal en pocas palabras..."
                                rows={3}
                                className="w-full border border-gray-200 rounded-xl px-3.5 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Enviar Solicitud
                        </motion.button>

                        <p className="text-xs text-center text-secondary/40">
                            Al enviar aceptas nuestra política de privacidad. Tu información es confidencial.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
