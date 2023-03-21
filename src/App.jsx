import { useState } from 'react'
import { Fragment } from 'react'
import './App.css'
import InputSbd from './components/input/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
     <InputSbd type={"text"} placeholder={"jgsdrg"}/>
     <InputSbd type={"text"} placeholder={"jgsdrg"}/>

    </Fragment>
  )
}

export default App
