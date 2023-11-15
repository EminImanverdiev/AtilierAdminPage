import React, { useState } from 'react'
import { GrNotification } from 'react-icons/gr'
export default function Main() {
    return (
        <section id='main'>
            <div className="main-title">
                <h2>Dashboard</h2>
                <div className="main-notification">
                    <GrNotification className='main-title-icon' />
                    <div className="notification-circle"><span>3</span></div>
                </div>
            </div>
        </section>
    )
}
