'use client'
import { useParams } from 'next/navigation'

export default function Product() {
  const query = useParams()

  return <h1>Product {JSON.stringify(query)}</h1>
}
