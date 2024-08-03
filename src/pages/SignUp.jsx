import React from 'react'
import '../styles/signUp.css'
function SignUp() {
  return (
    <div className='signUp'>
      <div className="container">
        <div className="sign_top">
          <h1>Registratsiyadan o'tish</h1>
        </div>
        <div className="sign__content">
          <h2>DAVOM ETISH UCHUN REGISTRATSIYADAN O'TING</h2>
          <form >
            <label>Foydalanuvchi ismi</label>
            <input type="text" placeholder='Fotima' />
            <label>Email</label>
            <input type="email" placeholder='demo.mail@gmail.com' />
            <label>Parol</label>
            <input type="password" placeholder='**********' />
            <label>Parolni tasdiqlash</label>
            <input type="password" placeholder='**********' />
            <button type="submit">Registratsiyadan o'tish</button>
          </form>
        </div>
        <div className="sign_bottom">
          <div className="sign_bottom_content">
            <h4>Allaqachon tizimda bo'lsangiz unda</h4>
            <h5>Kirish</h5>
          </div>
        </div>

      </div>
     
    </div>
  )
}

export default SignUp
