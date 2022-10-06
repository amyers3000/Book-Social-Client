import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CurrentUserProvider from "./context/CurrentUser"
import LoginForm from "./components/Users/LoginForm"


function App() {
  return(
    <CurrentUserProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<LoginForm/>}/>
    </Routes>
    </BrowserRouter>
    </CurrentUserProvider>
  )
}

export default App


