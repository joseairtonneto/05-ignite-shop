'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { type Product as ProductType } from '@/app/page'

import { Product } from './styles'
import 'keen-slider/keen-slider.min.css'

interface SliderProps {
  products: ProductType[]
}

export function Slider({ products }: SliderProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <div ref={sliderRef} className='keen-slider'>
      {products.map(product => (
        <Product key={product.id} className='keen-slider__slide'>
          <Image src={product.imageUrl} alt='' width={520} height={480} />

          <footer>
            <strong>{product.name}</strong>
            <span>
              {product.price}
            </span>
          </footer>
        </Product>
      ))}
    </div>
  )
}
