import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return <div>Hello World</div>
}

document.querySelectorAll('#root').forEach((el) => {
  const root = createRoot(el)
  root.render(<App />)
})
