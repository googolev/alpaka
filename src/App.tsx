import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderBar } from './components/HeaderBar'
import { Home } from './components/Home'
import { Info } from './components/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderBar />
      <Home />
      <Info />
    </>
  )
}

export default App
