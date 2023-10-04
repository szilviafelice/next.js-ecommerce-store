import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products.js';

export const metadata = {
  title: 'Products',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function ProductsPage() {
  const products = getProducts();
  return (
    <main>
      <h1>Our Products</h1>

      {products.map((product) => {
        return (
          <div key={`product-${product.id}`}>
            <Link href={product.id}>{product.name}</Link>
            <Image
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
