import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FiSettings, FiUsers } from 'react-icons/fi'
import {FaUsers} from 'react-icons/fa'
import { AiOutlineMessage, AiOutlineDashboard, AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'
import { TbBrandProducthunt } from 'react-icons/tb'
export default function SlideBar({onPageChange}) {
   const [CloseIsActive, setCloseIsActive] = useState(false);
   const toggleClassActive = () => {
      setCloseIsActive(!CloseIsActive);
   }
   return (
      <aside id='slidebar' className={CloseIsActive ? 'active' : 'inactive'}>
         <div className="slidebar-container">
            <div className="slidebar-logo">
               <a href="#" className='link'>NewStyle</a>
               <span>
                  <AiOutlineClose
                     className="logo-close"
                     onClick={toggleClassActive}
                  />
                  <AiOutlineMenuFold
                     className="logo-menu"
                     onClick={toggleClassActive}
                  />
               </span>
            </div>
            <div className="slidebar-content">
               <ul className='slidebar-list'>
                  <li onClick={()=>onPageChange('Users')} className='slidebar-list-item'>
                     <a className='link' href="#">
                        <FaUsers className='list-item-icon' /> <span className='list-text'>Users</span> 
                     </a>
                  </li>
                  <li onClick={()=>onPageChange('Customers')} className='slidebar-list-item'>
                     <a className='link' href="#">
                        <FiUsers className='list-item-icon' /> <span className='list-text'>Customers</span> 
                     </a>
                  </li>
                  <li onClick={()=>onPageChange('Products')} className='slidebar-list-item'>
                     <a className='link' href="#">
                        <BsCart3 className='list-item-icon' /> <span className='list-text'>Products</span> 
                     </a>
                  </li>
                  <li onClick={()=>onPageChange('Messages')} className='slidebar-list-item'>
                     <a className='link' href="#">
                        <AiOutlineMessage className='list-item-icon' /> <span className='list-text'>Messages</span> 
                     </a>
                  </li>
                  <li onClick={()=>onPageChange('Blogs')} className='slidebar-list-item'>
                     <a className='link' href="#">
                        <BiCategoryAlt className='list-item-icon' /> <span className='list-text'>Blogs</span> 
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </aside>
   )
}
