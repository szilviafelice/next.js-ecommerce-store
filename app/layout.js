import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home page | Essence of Saneha',
    template: '%s | Essence of Saneha',
  },
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div>
            <Link href="/">Home</Link>
            <Link href="/gin">Saneha Gin</Link>
            <Link href="/shaker">Boston shaker set</Link>
            <Link href="/glass">Highball glass set</Link>
            <Link href="/course">Cocktail course</Link>
          </div>
          {Math.floor(Math.random() * 10)}
        </nav>

        {children}
      </body>
    </html>
  );
}
