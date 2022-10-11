import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CurrentUserProvider from "./context/CurrentUser"
import LoginForm from "./components/Users/LoginForm"
import SignUpForm from "./components/Users/SignUpForm"
import BookShow from "./components/Profile/BookShow.js/BookShow"
import ProfileShow from "./components/Profile/ProfileShow"


function App() {
  return(
    <CurrentUserProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/books' element={<Home/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/signUp' element={<SignUpForm/>}/>
      <Route path='/books/:id' element={<BookShow/>}/>
      <Route path='/user/:username' element={<ProfileShow/>}/>
      <Route path='/user/:username/:id' element={<ProfileShow/>}/>
    </Routes>
    </BrowserRouter>
    </CurrentUserProvider>
  )
}

export default App


