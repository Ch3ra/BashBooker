import {BrowserRouter,Routes,Route, Form } from 'react-router-dom'
import './App.css'
import Landing from './Pages/Landing'
import Navbar from './Global/Navbar'
import Footer from './Global/Footer'
import Login from './Auth/Login/Login'
import Register from './Auth/Register/Register'
import Description from './Pages/Description'
import ADD from './Global/Form'
import Venue from './Pages/Venue'
import Profile from './Global/Profile'




function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/footer' element={<Footer/>}/>
     <Route path='/description' element={<Description/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/form' element={<ADD/>}/>
     <Route path='/venue' element={<Venue/>}/>
     <Route path='/profile' element={<Profile/>}/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
