import Image from 'next/image';
import GenerateButton from './GenerateButton';

export default function HomePage() {
  return (
    <main>
      <GenerateButton />
      <h1>Welcome to the jungle of senses</h1>

      <Image
        src="/Homepage-cocktail.png"
        alt="cocktails"
        width={650}
        height={410}
      />
    </main>
  );
}
