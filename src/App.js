import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  let [title, setTitle] = useState('')
  let [author, setAuthor] = useState('')

  let [data, setData] = useState([])


  const urlBase = "http://localhost:5000/books/"

  useEffect(() => {
    if (title || author) {
      const fetchData = async () => {
        document.title = `${title}`
        let response = await fetch(urlBase+ `${title}/${author}`)
        const resData = await response.json()
        if (resData) {
          setData(resData)
        }
        console.log(resData)
      }
      fetchData()
    }
  }, [title, author])

  const handleSearch = (e, title, author) => {
    e.preventDefault()
    setTitle(title)
    setAuthor(author)

  }

  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar handleSearch={handleSearch} />
      <DataContext.Provider value={data} >
        <Gallery />
      </DataContext.Provider>
    </div>
  )

}

export default App


