import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/RegisterPage/Login'
import SignUp from './pages/RegisterPage/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPage from './pages/AdminPage';
import SlideBar from './components/AdminPanel/SlideBar';
import { AdminProvider } from './contexts/AdminContext/AdminProvider';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<AdminPage/>}></Route>
           <Route path='/admin' element={<Login/>}></Route>
           <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
