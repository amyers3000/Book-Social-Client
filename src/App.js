import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CurrentUserProvider from "./context/CurrentUser"
import LoginForm from "./components/Users/LoginForm"
import SignUpForm from "./components/Users/SignUpForm"


function App() {
  return(
    <CurrentUserProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/signUp' element={<SignUpForm/>}/>
    </Routes>
    </BrowserRouter>
    </CurrentUserProvider>
  )
}

export default App


