import React, { useState } from 'react'
import Login from './RegisterPage/Login'
import SignUp from './RegisterPage/SignUp'
import SlideBar from '../components/AdminPanel/SlideBar'
import '../components/AdminPanel/style.css'
import Main from '../components/AdminPanel/Main'
import Customers from '../components/AdminPanel/Customers'
import Products from '../components/AdminPanel/Products'
import Messages from '../components/AdminPanel/Messages'
import Users from '../components/AdminPanel/Users'
import Blogs from '../components/AdminPanel/Blogs'
import { AdminProvider } from '../contexts/AdminContext/AdminProvider'

export default function AdminPage() {
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const GetPageChange = (page) => {
    setSelectedPage(page);
  };
  return (
    <AdminProvider>
      <section id='admin-page'>
        <SlideBar onPageChange={GetPageChange} />
        {selectedPage == 'Users' && <Users />}
        {selectedPage == 'Customers' && <Customers />}
        {selectedPage == 'Products' && <Products />}
        {selectedPage == 'Messages' && <Messages />}
        {selectedPage == 'Blogs' && <Blogs />}
      </section>
    </AdminProvider>
  )
}
