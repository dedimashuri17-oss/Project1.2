'use client'

import { useEffect, useState } from "react"

export default function ProductPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="p-4 space-y-2">
      <h1 className="text-xl font-bold">Daftar Produk</h1>
      <ul className="space-y-1">
        {products.map((p: any) => (
          <li key={p.id}>
            {p.name} - Rp{p.price} (stok: {p.stock})
          </li>
        ))}
      </ul>
    </div>
  )
}
