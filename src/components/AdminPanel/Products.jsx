// Products.jsx
import React, { useState } from 'react';
import Modal from '../Product/Modal';
import EditModal from '../Product/EditModal';
import { useAdminContext } from '../../contexts/AdminContext/AdminContext';
import { GrNotification } from 'react-icons/gr';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

export default function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const { products, setProducts, DeleteProduct } = useAdminContext();
    const [editingProduct, setEditingProduct] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openEditModal = (product) => {
        setEditingProduct(product);
        setIsModalEditOpen(true);
    };

    const closeEditModal = () => {
        setIsModalEditOpen(false);
        setEditingProduct(null);
    };

    const handleSaveEditProduct = (editedProduct) => {
        const updatedProducts = products.map((product) =>
            product.id === editedProduct.id ? editedProduct : product
        );

        setProducts(updatedProducts);
        closeEditModal();
    };

    return (
        <section className='main-page'>
            <div className="main-title">
                <h2>Products</h2>
                <div className="main-notification">
                    <GrNotification className='main-title-icon' />
                    <div className="notification-circle"><span>3</span></div>
                </div>
            </div>
            <div className="product-content">
                <div className="product-content-title">
                    <h3>Products</h3>
                    <button onClick={openModal}>Add New Product</button>
                </div>
                <div className="product-content-body">
                    <table className='product-table'>
                        <thead>
                            <tr>
                                <th>Məhsul İd</th>
                                <th>Məhsul Ad</th>
                                <th>Məhsul Şəkil</th>
                                <th>Məhsul Rəng</th>
                                <th>Məhsul Qiymet</th>
                                <th>Məhsul Ölçü</th>
                                <th>Məhsul Kategoriya </th>
                                <th>Məhsul Uzunluq </th>
                                <th>Alış tipi</th>
                                <th colSpan={2}>Update/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td><img src={`http://localhost:8090/file/download/${product.id}`} alt="" /></td>
                                    <td>{product.color}</td>
                                    <td>{product.price}</td>
                                    <td>{product.size}</td>
                                    <td>{product.style}</td>
                                    <td>{product.length}</td>
                                    <td>{product.propertyType}</td>
                                    <td>
                                        <button onClick={() => openEditModal(product)}>
                                            {<AiOutlineEdit className='product-update-icon' />}
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => DeleteProduct(product.id)}>
                                            {<AiOutlineDelete className='product-delete-icon' />}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <EditModal isEditOpen={isModalEditOpen} onEditClose={closeEditModal} onEditSave={handleSaveEditProduct} productToEdit={editingProduct} />
        </section>
    );
}
