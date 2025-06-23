'use client';
import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import '../styles/slider.css';

export default function Slider() {
  const [mounted, setMounted] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);

  const [sliderInstanceRef, instance] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [
      // Autoplay plugin
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (sliderRef) {
      sliderInstanceRef(sliderRef);
    }
  }, [sliderRef, sliderInstanceRef]);

  if (!mounted) return null;

  return (
    <div className="slider">
      <div ref={setSliderRef} className="keen-slider slider__container">
        <div className="keen-slider__slide slider__slide">
          <Image src="/pexels-nappy-936094.jpg" alt="Imagen 1" width={1200} height={600} />
        </div>
        <div className="keen-slider__slide slider__slide">
          <Image src="/pexels-pixabay-34514.jpg" alt="Imagen 2" width={1200} height={600} />
        </div>
        <div className="keen-slider__slide slider__slide">
          <Image src="/pexels-drerun-2254135.jpg" alt="Imagen 3" width={1200} height={600} />
        </div>
      </div>
    </div>
  );
}
