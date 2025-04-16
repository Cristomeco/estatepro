import "../styles/globals.css";

export const metadata = {
  title: "EstatePro - Inversión Inmobiliaria",
  description: "Invierte en propiedades de forma sencilla, segura y rentable.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
