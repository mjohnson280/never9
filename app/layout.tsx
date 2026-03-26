import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Never9',
  description: 'Never9 brand site starter.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
