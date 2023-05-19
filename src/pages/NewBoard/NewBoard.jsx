// npm modules
import { useState } from 'react'

// css
import styles from './NewBoard.module.css'

const NewBoard = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    bgColor: 'White',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddBoard(formData)
  }

  return (
    <main>
      <div className={`${styles.newboardcontainer}`}>
        <form onSubmit={handleSubmit}>
          <div className={`${styles.titleboard}`}>
            <input
              required
              type='text'
              name='title'
              id='title-input'
              value={formData.title}
              placeholder='Title'
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.backgroundcolor}`}>
            <label htmlFor='bgColor-input'>Background Color: </label>
            <select className={`${styles.dropdown}`}
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
          </div>
          <div className={`${styles.submitbutton}`}>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default NewBoard