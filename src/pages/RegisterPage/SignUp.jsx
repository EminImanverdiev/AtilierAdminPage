import React from 'react'
import '../RegisterPage/style.css'
import info_pic from '../../assets/images/account_dashboard.png'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <section id='signup' className='account-page'>
    <div className="account-container">
        <div className="account-logo">
            <a href="#">Logo</a>
        </div>
        <div className="account-info">
            <h1>Salam Admin Səhifəmizə Xoş Gəlmisiniz!</h1>
            <img src={info_pic} alt="" />
        </div>
        <div className="account-form">
            <form action="#">
                <h1>Qeydiyyatdan keçin</h1>
                <p>Artıq bir hesabınız var mı?<span><Link to="/"> Daxil olun</Link></span></p>
                <div className="form-container">
                    <label for="username" className='label'>Adınız:</label>
                    <input type="text" id="username" class="username" placeholder="Adınzı daxil edin..." />
                </div>
                <div className="form-container">
                    <label for="userlastname" className='label'>SoyadıAdınzı:</label>
                    <input type="text" id="userlastname" class="userlastname" placeholder="SoyadıAdınzı daxil edin..." />
                </div>
                <div className="form-container">
                    <label for="useremail" className='label'>SoyadıAdı:</label>
                    <input type="email" id="useremail" class="useremail" placeholder="E-Poçt ünvanınızı daxil edin..." />
                </div>
                <div className="form-container">
                    <label for="password">Istifadəçi Şifrəsi:</label>
                    <input type="password" id="password" class="password" placeholder="Parolunuzu daxil edin..." />
                </div>
                <div className="form-container">
                    <input type="submit" id="submit" value="Hesab yaradın" />
                </div>
            </form>
        </div>
    </div>
</section>
  )
}
