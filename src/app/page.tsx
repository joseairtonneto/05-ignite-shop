'use client'

import Image from 'next/image'
import { HomeContainer, Product } from './styles-page'

import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '@/assets/camisetas/1.png'
import camiseta2 from '@/assets/camisetas/2.png'
import camiseta3 from '@/assets/camisetas/3.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={camiseta1} alt='' width={520} height={480} />

        <footer>
          <strong>Camiseta Nike</strong>
          <span>R$ 120,00</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta2} alt='' width={520} height={480} />

        <footer>
          <strong>Camiseta Adidas</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta3} alt='' width={520} height={480} />

        <footer>
          <strong>Camiseta Adidas</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
