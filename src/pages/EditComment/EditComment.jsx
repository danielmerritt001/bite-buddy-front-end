import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

// Services
import * as recipeService from '../../services/recipeService'

const EditComment = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { recipeId, commentId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await recipeService.updateComment(recipeId, commentId, formData)
    navigate(`/recipes/${recipeId}`)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Edit Comment</h1>
        <label htmlFor='text-input'>Text</label>
        <textarea
          required
          type='text'
          name='text'
          id='text-input'
          value={formData.text}
          placeholder='Text'
          onChange={handleChange}
        />
        <label htmlFor='rating-input'>Rating</label>
        <select
          required
          type='number'
          name='rating'
          id='rating-input'
          value={formData.rating}
          onChange={handleChange}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <button type='submit'>SUBMIT</button>
      </form>
    </main>
  )
}

export default EditComment