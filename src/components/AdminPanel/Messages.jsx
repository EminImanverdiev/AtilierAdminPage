import React from 'react'
import { GrNotification } from 'react-icons/gr'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useAdminContext } from '../../contexts/AdminContext/AdminContext'
export default function Messages() {
    const { messages } = useAdminContext();
    return (
        <section className='main-page'>
            <div className="main-title">
                <h2>Messages</h2>
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
                                <th>Insan Ceki</th>
                                <th>Insan Boyu</th>
                                <th>Insan Ciyin olcusu</th>
                                <th>Insan qarin olcusu</th>
                                <th>Insan yan olcusu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message, index) => (
                                <tr key={index}>
                                    <td><span>{message.weight }</span>kq</td>
                                    <td><span>{message.height }</span>sm</td>
                                    <td><span>{message.shoulderMeasurement } </span>sm</td>
                                    <td><span>{message.waistMeasurement} </span>sm</td>
                                    <td><span>{message.sideMeasurement} </span>sm</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
