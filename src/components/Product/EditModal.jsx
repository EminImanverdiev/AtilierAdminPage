import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditModal({ isEditOpen, onEditClose, onEditSave, productToEdit }) {
  const [editedProduct, setEditedProduct] = useState({});
  useEffect(() => {
    setEditedProduct({ ...productToEdit });
  }, [productToEdit]);

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8090/api/product/1/updateProduct/${editedProduct.id}`, editedProduct);
      console.log('Product updated:', response.data);
      onEditSave(editedProduct);
      onEditClose();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  const GetFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const imageFile = files[0];
      if (imageFile.type.startsWith('image/')) {
        setEditedProduct({
          ...editedProduct,
          images: imageFile,
        });
      } else {
      }
    }
  };

  if (!isEditOpen) {
    return null;
  }
  return (
    <div id="edit-modal">
      <div className="modal-content">
        <form action="put">
          <input
            type="file"
            name="image"
            id="image"
            onChange={GetFileChange}
            accept="image/*"
            multiple
          />
          <input
            type="text"
            id='name'
            name='name'
            value={editedProduct.name || ''}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
          />
          <input
            type="text"
            name='color'
            id='color'
            value={editedProduct.color || ''}
            onChange={(e) => setEditedProduct({ ...editedProduct, color: e.target.value })}
          />
          <input
            type="text"
            name='price'
            id='price'
            value={editedProduct.price || ''}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
          />
          <input 
            type="text"
            name='size'
            id='size' 
            value={editedProduct.size || ''}
            onChange={(e)=>setEditedProduct({...editedProduct, size: e.target.value})}
          />
          <input 
            type="text"
            name='style'
            id='style' 
            value={editedProduct.style || ''}
            onChange={(e)=>setEditedProduct({...editedProduct, style: e.target.value})}
          />
          <input 
            type="text"
            name='length'
            id='length' 
            value={editedProduct.length || ''}
            onChange={(e)=>setEditedProduct({...editedProduct, length: e.target.value})}
          />
           <input 
            type="text"
            name='propertyType'
            id='propertyType' 
            value={editedProduct.propertyType || ''}
            onChange={(e)=>setEditedProduct({...editedProduct, propertyType: e.target.value})}
          />
          <div className='control-btns'>
            <input type='submit' value="Update" className='submit' onClick={handleSave} />
            <button onClick={onEditClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
