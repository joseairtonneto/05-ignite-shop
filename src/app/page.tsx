import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import { HomeContainer } from './styles-page'
import { Slider } from './components/Slider/Slider'

export interface Product {
  id: string
  name: string
  imageUrl: string
  description: string | null
  url: string | null
  price: string
}

export default async function Home() {
  const products = await getProducts()

  return (
    <HomeContainer>
      <Slider products={products} />
    </HomeContainer>
  )
}

const getProducts = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products: Product[] = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      description: product.description,
      imageUrl: product.images[0],
      url: product.url,
    }
  })

  return products
}
