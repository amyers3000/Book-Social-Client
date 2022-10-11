import React from 'react'
import { useState, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import Gallery from './Gallery'
import SearchBar from './SearchBar'
import Navbar from '../NavbarLayout/Navbar'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'



const Home = () => {
  let [title, setTitle] = useState('Alex')
  let [author, setAuthor] = useState('')
  let [data, setData] = useState([])
  let [error, setError] = useState('')
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
        }else if(resData.message === "No books found"){
          setError(resData.message)
        } else {
          console.log(resData)
          setData(resData)
        }
      }
      
      fetchData()
      
    }
  }, [title, author, navigate])

  const handleSearch = (e, title, author) => {
    e.preventDefault()
    setTitle(title)
    setAuthor(author)

  }

  let content = error === "No books found" ? <Typography variant='h4' sx={{display:'flex', justifyContent:'center'}}>{error}</Typography> : <Gallery/>

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar handleSearch={handleSearch} />
      <DataContext.Provider value={data} >
        {content}
      </DataContext.Provider>
    </>
  )


}

export default Home