import { useState } from 'react'
import '../styles/App.scss'
import Header from "../composants/Header";
import APropos from "../composants/APropos";
import Realisations from "../composants/Realisations";
import Footer from "../composants/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <APropos/>
      <Realisations/>
      <Footer/>
    </>
  )
}

export default App
