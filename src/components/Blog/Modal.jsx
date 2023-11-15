import React, { useState } from 'react';
import '../Blog/style.css';
import axios from 'axios';

export default function Modal({ isOpen, onClose }) {
  const [newBlog, setNewBlog] = useState({
    image: null,
    title: '',
    content: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewBlog({ ...newBlog, image: file });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', newBlog.image);
      formData.append('title', newBlog.title);
      formData.append('content', newBlog.content);
      const response = await axios.post('http://localhost:8090/api/blogs/createBlog/1', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      if (response.status === 201) {
        setNewBlog({ image: null, title: '', content: '' });
        onClose();
      }
    } catch (error) {
      console.error('Xeta:', error);
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div id="category-modal">
      <div className="modal-content">
        <form onSubmit={handleSave}>
          <input
            name='image'
            id='image'
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <input
            name='title'
            id='title'
            type="text"
            placeholder="Blog Title"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          />
          <input
            name='content'
            id='content'
            type="text"
            placeholder="Blog Content"
            value={newBlog.content}
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
          />
          <div className="control-btns">
            <button type="submit" className="submit">Add</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
