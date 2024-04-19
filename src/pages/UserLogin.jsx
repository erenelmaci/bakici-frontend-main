import React from "react"
import "../styles/Login.css"
import Logo from "../assets/logo.svg"
import googleicon from "../assets/google-icon.svg"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import AnaUyelik from "../components/AnaUyelik"
import axios from "axios"
import { useLoginContext } from "../context/LoginProvider"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const UserLogin = () => {
  const [ebeveynLogin, setEbeveynLogin] = useState({ email: "", password: "" })
  const [isSubmiting, setIsSubmiting] = useState(false)

  const { setCurrentUser } = useLoginContext()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setEbeveynLogin({ ...ebeveynLogin, [e.target.name]: e.target.value })
  }

  // const onSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     setIsSubmiting(true)
  //     const baseURL = process.env.REACT_APP_BASE_URL
  //     const res = await axios.post(`${baseURL}/user/signin`, ebeveynLogin, {
  //       withCredentials: true,
  //     })
  //     setCurrentUser(res?.data)
  //     toastSuccessNotify("Başarıyla Giriş Yapıldı")
  //     navigate("/bakiciara")
  //   } catch (err) {
  //     setIsSubmiting(false)
  //     toastErrorNotify(err.response.data.message || err?.message)
  //   }
  // }

  const [openAnaUyelik, setOpenAnaUyelik] = useState(false)

  const handleClick = () => {
    setOpenAnaUyelik(true)
  }

  return (
    <>
      <AnaUyelik
        openAnaUyelik={openAnaUyelik}
        setOpenAnaUyelik={setOpenAnaUyelik}
      />
      <div className="login">
        <div className="login-form-container">

        <NavLink className=" active"  to="/">
          <img src={Logo} alt="" className="login-logo" />
         </NavLink>
          <div className="login-form">
            <h1 className="login-form-title">OTURUM AÇ</h1>
            <button className="login-form-btn">
              <img
                src={googleicon}
                alt="Vgoogle-icon"
                className="login-form-btn-icon"
              />
              Google hesabınız ile giriş yapın
            </button>

            <p className="login-form-text">
              <span className="login-form-text-span">•••••</span>
              &nbsp;&nbsp; Ya da e-posta adresiniz ile &nbsp;&nbsp;
              <span className="login-form-text-span">•••••</span>
            </p>
            <form action="" onSubmit={navigate("/ebeveynprofil")}>
              <div className="login-form-email-div">
                <label htmlFor="email" className="login-form-label-email">
                  Email
                </label>
                <br />
                <input
                  type="text"
                  placeholder="mail@gmail.com"
                  className="login-form-input-email"
                  required
                  name="email"
                  value={ebeveynLogin.email || ""}
                  onChange={handleChange}
                />
                <br />
              </div>
              <div className="login-form-password-div">
                <label htmlFor="password" className="login-form-label-password">
                  Şifre
                </label>
                <p className="login-form-label-sifremiunuttum">
                  Şifremi unuttum?
                </p>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Min. 6 karakter"
                  className="login-form-input-password"
                  required
                  value={ebeveynLogin.password}
                  onChange={handleChange}
                />
                <br />
              </div>

              <button
                className="login-form-submit-btn"
                // disabled={isSubmiting}
                type="submit"
              >
               Oturum Aç
                {/* {isSubmiting ? "Giriş Yapılıyor..." : "Oturum Aç"} */}
              </button>
            </form>

            <p className="login-form-text-span-dot">•••••••••••••••</p>
            <div className="login-form-text-link-container">
              <p className="login-form-text-link">Hesabınız yok mu?</p>
              <Link className="login-form-link" onClick={handleClick}>
                Kayıt Ol
              </Link>
            </div>
          </div>
        </div>
        <div className="login-img-container d-none d-lg-block"></div>
      </div>
    </>
  )
}

export default UserLogin
