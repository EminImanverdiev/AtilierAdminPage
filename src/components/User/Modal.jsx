import React, { useState } from 'react';
import '../User/style.css'
export default function Modal({ isOpen, onClose, onSave }) {
    const [newUser, setNewUser] = useState({
        userId: "",
        userName: "",
        userSurname: "",
        userEmail: "",
        userPassword: "",
    });

    const handleSave = () => {
        onSave(newUser);
        setNewUser({
            userId: '',
            userName: ''
        });
        onClose();
    };
    if (!isOpen) {
        return null;
    }

    return (
        <div id='user-modal'>
            <div className="modal-content">
                <form action="" method="post">
                    <input
                        type="text"
                        placeholder="User Id"
                        value={newUser.userId}
                        onChange={(e) => setNewUser({ ...newUser, userId: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="User Name"
                        value={newUser.userName}
                        onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })}
                    />
                     <input
                        type="text"
                        placeholder="User Surname"
                        value={newUser.userSurname}
                        onChange={(e) => setNewUser({ ...newUser, userSurname: e.target.value })}
                    />
                     <input
                        type="email"
                        placeholder="User Email"
                        value={newUser.userEmail}
                        onChange={(e) => setNewUser({ ...newUser, userEmail: e.target.value })}
                    />
                      <input
                        type="password"
                        placeholder="User Password"
                        value={newUser.userPassword}
                        onChange={(e) => setNewUser({ ...newUser, userPassword: e.target.value })}
                    />
                    <div className='control-btns'>
                        <input type='submit' value="Add" className='submit' onClick={handleSave} />
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>

        </div>
    );
}
