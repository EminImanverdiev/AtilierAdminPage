import React, { useState } from 'react';
import '../RegisterPage/style.css';
import info_pic from '../../assets/images/account_dashboard.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [inputType, setInputType] = useState('password');
  const [icons, setIcons] = useState('🔒');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    setIcons((prevIcons) => (prevIcons === '🔒' ? '🔓' : '🔒'));
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Formun default davranışını engellemek için

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:8090/api/user/user-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        navigate('/admin');
      } else {
        alert('Giriş başarısız! Kullanıcı adı veya şifre hatalı.');
      }
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  return (
    <section id='login' className='account-page'>
      <div className='account-container'>
        <div className='account-logo'>
          <a href='#'>Logo</a>
        </div>
        <div className='account-info'>
          <h1>Salam Admin Səhifəmizə Xoş Gəlmisiniz!</h1>
          <img src={info_pic} alt='' />
        </div>
        <div className='account-form'>
          <form onSubmit={handleLogin}>
            <h1>Daxil ol</h1>
            <p>
              Yeni Istifadəçi? <span><Link to='/signup'>Hesab Yaradın</Link></span>
            </p>
            <div className='form-container'>
              <label htmlFor='username' className='label'>
                Istifadəçi Adı:
              </label>
              <input type='text' id='username' className='username' placeholder='Adinizi daxil edin...' />
            </div>
            <div className='form-container'>
              <label htmlFor='password'>Istifadəçi Şifrəsi:</label>
              <input type={inputType} id='password' className='password' placeholder='Parolunuzu daxil edin...' />
              <span className='password-icon' onClick={togglePasswordVisibility}>
                {icons}
              </span>
            </div>
            <div className='form-container'>
              <button type='submit' id='submit'>
                Daxil ol
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
