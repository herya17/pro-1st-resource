import React from 'react'
import ProductDetail from '../components/ProductDetail'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
  const { id } = useParams()

  return (
    <ProductDetail id={id} />
  )
}
