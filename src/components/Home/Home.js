import React from 'react'
import { useState, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import Gallery from './Gallery'
import SearchBar from './SearchBar'
import Navbar from '../NavbarLayout/Navbar'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom'
import { authenticateSession } from '../../lib'


const Home = () => {
  let [title, setTitle] = useState('Alex')
  let [author, setAuthor] = useState('')
  let [data, setData] = useState([])
  const navigate = useNavigate()


  const urlBase = "http://localhost:5000/books/"

   useEffect(() => {
   
    if (title || author) {
      const fetchData = async () => {
        let response = await fetch(urlBase + `${title}/${author}`,{
          headers: {
              'Authorization': `Bearer ${localStorage.token}`
          }})
        const resData = await response.json()
        console.log(resData)
        if (resData.message === "unauthorized") {
          navigate('/login')
        } else {
          setData(resData)
        }
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
    <>
      <Navbar />
      <Hero />
      <SearchBar handleSearch={handleSearch} />
      <DataContext.Provider value={data} >
        <Gallery />
      </DataContext.Provider>
    </>
  )


}

export default Home