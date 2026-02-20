'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import FloatingWidget from '@/components/FloatingWidget';
import { useState } from 'react';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Header onBooking={() => setIsModalOpen(true)} />
            <main>
                <Hero onBooking={() => setIsModalOpen(true)} />
                <SocialProof />
                <Services />
                <Testimonials />
                <CTABanner onBooking={() => setIsModalOpen(true)} />
            </main>
            <Footer />
            <FloatingWidget onBooking={() => setIsModalOpen(true)} />
            {isModalOpen && (
                <BookingModal onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
}
