import Image from 'next/image';

export const metadata = {
  title: 'Course',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function CoursePage() {
  return (
    <div>
      <h1>Cocktail course</h1>
      <Image src="/course.jpeg" alt="coctailcourse" width={650} height={490} />
    </div>
  );
}
