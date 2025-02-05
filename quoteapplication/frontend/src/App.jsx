import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    axios.get('/api/quotes/')
    .then((response) => {
      setQuotes(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  })

  return (
    <>
      <h1>"How I Met Your Mother" Once Said: </h1>
      {
        quotes.map((quote, index) => (
          <div key={quote.id}>
            <h3>{quote.title}</h3>
            <p>{quote.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
