// npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

// css
import styles from './EditBoard.module.css'

const EditBoard = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateBoard(formData)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Board</h1>
        <label htmlFor='title-input'>Title</label>
        <input
          required
          type='text'
          name='title'
          id='title-input'
          value={formData.title}
          placeholder='Title'
          onChange={handleChange}
        />
        <label htmlFor='bgColor-input'>Background Color</label>
        <select
          required
          name='bgColor'
          id='bgColor-input'
          value={formData.bgColor}
          onChange={handleChange}
        >
          <option value='blue'>Cornflower Blue</option>
          <option value='gray'>Whisper Gray</option>
          <option value='green'>Cascade Green</option>
          <option value='pink'>Blush Pink</option>
          <option value='purple'>Lavender</option>
        </select>
        <button type='submit'>SUBMIT</button>
      </form>
    </main>
  )
}

export default EditBoard;