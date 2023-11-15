import React, { useState } from 'react';
import '../Product/style.css';
import axios from 'axios';
export default function Modal({ isOpen, onClose }) {
  const [newProduct, setNewProduct] = useState({
    images: [],
    name: '',
    price: '',
    color: '',
    size: '',
    style: '',
    length: '',
    propertyType: ''
  });

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setNewProduct({ ...newProduct, images: Array.from(files) });
    }
  };
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      newProduct.images.map((image, index) => (
        formData.append(`image${index + 1}`, image)
      ));
      formData.append('name', newProduct.name);
      formData.append('price', newProduct.price);
      formData.append('color', newProduct.color);
      formData.append('size', newProduct.size);
      formData.append('style', newProduct.style);
      formData.append('length', newProduct.length);
      formData.append('propertyType', newProduct.propertyType);
      const response = await axios.post('http://localhost:8090/api/product/saveProduct/1', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        console.log('Ürün başarıyla eklendi.');
        setNewProduct({
          images: [],
          name: '',
          price: '',
          color: '',
          size: '',
          style: '',
          length: '',
          propertyType: ''
        });
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
    <div id='product-modal'>
      <div className="modal-content">
        <form action="" method="post">
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            multiple
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="text"
            name="color"
            id="color"
            placeholder="Product Color"
            value={newProduct.color}
            onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
          />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="text"
            name="size"
            id="size"
            placeholder="Product Size"
            value={newProduct.size}
            onChange={(e) => setNewProduct({ ...newProduct, size: e.target.value })}
          />
          <input
            type="text"
            name="style"
            id="style"
            placeholder="Product Category"
            value={newProduct.style}
            onChange={(e) => setNewProduct({ ...newProduct, style: e.target.value })}
          />
          <input
            type="text"
            name="length"
            id="length"
            placeholder="Product Length"
            value={newProduct.length}
            onChange={(e) => setNewProduct({ ...newProduct, length: e.target.value })}
          />
          <input
            type="text"
            name="propertyType"
            id="propertyType"
            placeholder="Product Type"
            value={newProduct.propertyType}
            onChange={(e) => setNewProduct({ ...newProduct, propertyType: e.target.value })}
          />
          <div className='control-btns'>
            <input type='submit' value="Add" onClick={handleSave} className='submit' />
            <button onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
