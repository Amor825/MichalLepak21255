import React from "react"

type Props = {
  onLog: () => void
}

export default function Counter({ onLog }: Props) {
  console.log("Counter zrenderowany")
  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={onLog}>Pokaż licznik</button>
    </div>
  )
}
