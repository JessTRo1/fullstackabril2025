'use client';
import Image from 'next/image';
import '../styles/grid.css';

export default function Grid() {
  return (
    <section className="grid">
      <div className="grid__item">
        <Image src="/pexels-karlsolano-2729899.jpg" alt="Imagen 1" fill className="grid__image" />
      </div>
      <div className="grid__item">
        <Image src="/pexels-melvin-buezo-1253763-2529148.jpg" alt="Imagen 2" fill className="grid__image" />
      </div>
      <div className="grid__item">
        <Image src="/pexels-pluyar-786003.jpg" alt="Imagen 3" fill className="grid__image" />
      </div>
      <div className="grid__item">
        <Image src="/pexels-pixabay-34514.jpg" alt="Imagen 4" fill className="grid__image" />
      </div>
    </section>
  );
}
