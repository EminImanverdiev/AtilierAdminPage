import React, { useState } from 'react'
import { GrNotification } from 'react-icons/gr'
import Modal from '../User/Modal';
export default function Categories() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState([
        {
            userId: "1",
            userName: "Ramil",
            userSurname: "Qarayev",
            userEmail: "Ramil@mail.ru",
            userPassword: "23432",
        }
    ]);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleSaveUsers = (newUser) => {
        setUsers([...users, newUser]);
    };
    return (
        <section className='main-page'>
            <div className="main-title">
                <h2>Users</h2>
                <div className="main-notification">
                    <GrNotification className='main-title-icon' />
                    <div className="notification-circle"><span>3</span></div>
                </div>
            </div>
            <div className="product-content">
                <div className="product-content-title">
                    <h3>Users</h3>
                    <button onClick={openModal}>Add New User</button>
                </div>
                <div className="product-content-body">
                    <table className='product-table active'>
                        <thead>
                            <tr>
                                <th>Category Id</th>
                                <th>Category Name</th>
                                <th>Category Surname</th>
                                <th>Category Email</th>
                                <th>Category Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.userId}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.userSurname}</td>
                                        <td>{user.userEmail}</td>
                                        <td>{user.userPassword}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveUsers} />
        </section>
    )
}
