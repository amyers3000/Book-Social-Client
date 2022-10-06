import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/NavbarLayout.js/Navbar"
import CurrentUserProvider from "./context/CurrentUser"
import LoginForm from "./components/Users/LoginForm"


function App() {
  return(
    <CurrentUserProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginForm/>}/>
    </Routes>
    </BrowserRouter>
    </CurrentUserProvider>
  )
}

export default App


