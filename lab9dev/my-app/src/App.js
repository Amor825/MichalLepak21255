import React, { useCallback, useState } from "react"
import Counter from "./Counter"
import ProductList from "./ProductList"
import "./App.css" // ⬅️ Import stylów

export default function App() {
  const [count, setCount] = useState(0)
  const [logText, setLogText] = useState("")

  const onLog = useCallback(() => {
    const text = `Licznik: ${count}`
    console.log(text)
    setLogText(text)
  }, [count])

  return (
    <div className="container">
      <h1>Ćwiczenia z React i useCallback</h1>

      <section>
        <h2>Ćwiczenie 1: Kliknij mnie</h2>
        <button onClick={() => setLogText("Kliknięto przycisk!")}>
          Kliknij mnie
        </button>
      </section>

      <section>
        <h2>Ćwiczenia 2 i 3: Counter</h2>
        <button onClick={() => setCount((c) => c + 1)}>
          Zwiększ: {count}
        </button>
        <Counter onLog={onLog} />
        <p className="log-text">{logText}</p>
      </section>

      <section>
        <h2>Ćwiczenie 4: Lista produktów</h2>
        <ProductList />
      </section>
    </div>
  )
}
