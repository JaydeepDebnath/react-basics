import React from 'react';
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "jaydeep",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="FrontEnd" btnText="click me" />
      <Card username="Jaydeep" />
      <Card username ='Users'  btnText='Explore Me' />
      <Button/>
    </>
  )
}

export default App