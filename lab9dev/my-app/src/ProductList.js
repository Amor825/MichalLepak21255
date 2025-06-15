import React, { useCallback, useState } from "react"

export default function ProductList() {
  const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan"])

  const removeProduct = useCallback((item: string) => {
    setProducts((prev) => prev.filter((p) => p !== item))
  }, [])

  return (
    <div>
      {products.map((item) => (
        <div
          key={item}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
            borderBottom: "1px solid #ddd",
            paddingBottom: "0.3rem",
          }}
        >
          <span>{item}</span>
          <button onClick={() => removeProduct(item)}>Usuń</button>
        </div>
      ))}
      {products.length === 0 && <p>Brak produktów.</p>}
    </div>
  )
}
