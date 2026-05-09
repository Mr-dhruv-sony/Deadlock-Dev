import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deadlock Devs | RIT',
  description:
    'Deadlock Devs is an elite student-led development collective at Roorkee Institute of Technology focused on rapid prototyping, competitive programming, AI/ML, and full-stack execution.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
