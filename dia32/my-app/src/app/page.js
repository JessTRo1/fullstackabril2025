'use client';

import { useEffect, useState } from 'react';
import Slider from '@/components/Slider';
import Grid from '@/components/grid';


export default function HomePage() {
  return (
    <main className='home'>
      <h1 className='home__title'>HOME</h1>
      <Slider />
      <p className='home__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      <Grid />
      <p className='home__description'>Excepteur sint occaecat cupidatat non pro</p>
    </main>
  );
}

