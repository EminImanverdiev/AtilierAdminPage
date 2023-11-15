import React, { useState } from 'react'
import { GrNotification } from 'react-icons/gr'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useAdminContext } from '../../contexts/AdminContext/AdminContext'

export default function Customers() {
    const { customers } = useAdminContext();
    if (!customers) {
        return <div>Loading...</div>;
    }

    return (
        <section className='main-page'>
            <div className="main-title">
                <h2>Customers</h2>
                <div className="main-notification">
                    <GrNotification className='main-title-icon' />
                    <div className="notification-circle"><span>3</span></div>
                </div>
            </div>
            <div className="product-content">

                <div className="product-content-body">
                    <table className='product-table'>
                        <thead>
                            <tr>
                                <th>Mushteri Id</th>
                                <th>Mushteri Ad</th>
                                <th>Mushteri Soyad</th>
                                <th>Mushteri Email</th>
                                <th>Mushteri Parol </th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers ? (
                                customers.map((customer, index) => (
                                    <tr key={index}>
                                        <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.surname}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.password}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Veriler yükleniyor...</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
