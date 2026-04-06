import { useState } from 'react'
import { useEffect } from 'react' 

function App() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  //without useEffect we can't call API in react 

 useEffect(() => {
  if (query === "") return

  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
    .then(res => res.json())
    .then(data => setResults(data))
    .catch(err => console.error(err))
}, [query])

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)} />

      {results.map(r => (
        <p key={r.id}>{r.name}</p>
      ))}
    </div>
  )


  
}

export default App
