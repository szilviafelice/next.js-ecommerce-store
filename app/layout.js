import './globals.css';
import { Inter } from 'next/font/google';

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
          <a href="/">Home</a>
          <a href="/gin">Saneha Gin</a>
          <a href="/shaker">Boston shaker set</a>
          <a href="/glass">Highball glass set</a>
          <a href="/course">Cocktail course</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
