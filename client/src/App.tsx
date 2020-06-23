import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState('')
  const fetchTest = async () => {
    const test = await axios.get('/test').then((res) => res.data)
    setData(test.data)
  }
  fetchTest()
  return (
    <div className="App">
      <div>{data}</div>
    </div>
  )
}

export default App
