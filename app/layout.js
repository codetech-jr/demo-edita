import './globals.css';

export const metadata = {
    title: 'Edita González Abogados | Despacho Jurídico de Alto Nivel en España',
    description: 'Transformamos procesos complejos en soluciones reales. Resolvemos tu situación legal en España o la Internacional. Expertos en Extranjería, Derecho Penal y Asesoría Empresarial.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-sans bg-bg text-secondary antialiased">
                {children}
            </body>
        </html>
    );
}
