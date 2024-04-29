import { useState } from 'react'
import './App.css'
import TopHeader from './TopHeader'

function App() {
  const [dropDown, setDropDown] = useState()

  return (
    <>
  <TopHeader/>
  <h1>This is the body of the website</h1>
    </>
  )
}

export default App
