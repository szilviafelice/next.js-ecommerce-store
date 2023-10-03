import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Products',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

const products = [
  { id: 'gin', name: 'Saneha Gin' },
  { id: 'shaker', name: 'Boston Shaker Set' },
  { id: 'glass', name: 'Highball Glass Set' },
  { id: 'course', name: 'Cocktail course' },
];

export default function ProductsPage() {
  return (
    <main>
      <h1>Our Products</h1>

      {products.map((product) => {
        return (
          <div key={`product-${product.id}`}>
            <Link href={product.id}>{product.name}</Link>
            <Image
              // eslint-disable-next-line no-template-curly-in-string
              src={`/${product.id}.jpg`}
              alt={product.name}
              width={300}
              height={200}
            />
          </div>
        );
      })}
    </main>
  );
}
