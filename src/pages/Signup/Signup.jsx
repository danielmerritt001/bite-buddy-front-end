// npm modules
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './Signup.module.css'

const Signup = ({ handleAuthEvt }) => {
  const navigate = useNavigate()
  const imgInputRef = useRef(null)

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pronouns: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({ photo: null })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleChangePhoto = evt => {
    const file = evt.target.files[0]
    let isFileInvalid = false
    let errMsg = ""
    const validFormats = ['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']
    const photoFormat = file.name.split('.').at(-1)

    // cloudinary supports files up to 10.4MB each as of May 2023
    if (file.size >= 10485760) {
      errMsg = "Image must be smaller than 10.4MB"
      isFileInvalid = true
    }
    if (!validFormats.includes(photoFormat)) {
      errMsg = "Image must be in gif, jpeg/jpg, png, svg, or webp format"
      isFileInvalid = true
    }
    
    setMessage(errMsg)
    
    if (isFileInvalid) {
      imgInputRef.current.value = null
      return
    }

    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      setIsSubmitted(true)
      await authService.signup(formData, photoData.photo)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
      setIsSubmitted(false)
    }
  }

  const { name, pronouns, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <main className={styles.container}>
      <h1>Sign Up</h1>
      <p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <input 
            type="text" 
            value={name} 
            name="name" 
            onChange={handleChange}
            placeholder="Name" />
        </label>
        <label className={styles.label}>
          <input 
            type="text" 
            value={pronouns} 
            name="pronouns" 
            onChange={handleChange} 
            placeholder="Pronouns"/>
        </label>
        <label className={styles.label}>
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
        </label>
        <label className={styles.label}>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </label>
        <label className={styles.label}>
          <input
            type="password"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </label>
        <label className={styles.labeluploadphoto}>
          Upload Photo
          <input
            type="file"
            name="photo"
            className={styles.file}
            onChange={handleChangePhoto}
            ref={imgInputRef}
          />
        </label>
        <div>
          <button
            className={styles.button}
            disabled={ isFormInvalid() || isSubmitted }
          >
            {!isSubmitted ? 'Sign Up' : '👩‍🍳Sending...'}
          </button>
        </div>
      </form>
    </main>
  )
}

export default Signup
