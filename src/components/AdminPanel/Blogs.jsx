import React, { useState } from 'react';
import { GrNotification } from 'react-icons/gr';
import Modal from '../Blog/Modal';
import { AiOutlineDelete } from 'react-icons/ai';
import { useAdminContext } from '../../contexts/AdminContext/AdminContext';

export default function Blogs() {
  const { blogs, setBlogs,DeleteBlog } = useAdminContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className='main-page'>
      <div className="main-title">
        <h2>Blog</h2>
        <div className="main-notification">
          <GrNotification className='main-title-icon' />
          <div className="notification-circle"><span>3</span></div>
        </div>
      </div>
      <div className="product-content">
        <div className="product-content-title">
          <h3>BlogPost</h3>
          <button onClick={openModal}>Add New BlogPost</button>
        </div>
        <div className="product-content-body">
          <table className='product-table active'>
            <thead>
              <tr>
                <th>Blog Id</th>
                <th>Blog Title</th>
                <th>Blog Content</th>
                <th>Blog Image</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={index}>
                  <td>{blog.id}</td>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td><img src={`http://localhost:8090/api/blog-post/file/download/${blog.id}`} /></td>
                  <td><AiOutlineDelete onClick={() => DeleteBlog(blog.id)} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
