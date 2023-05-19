// npm imports
import { useState } from 'react'

// css
import styles from './NewComment.module.css'

//components
import StarRating from '../../components/StarRating/StarRating'

const NewComment = ({ recipe, handleAddComment }) => {
  const recipeLabel = recipe.label
  const recipeFoodId = recipe.uri.split('recipe_')[1]
  const [formData, setFormData] = useState({ text: '', foodId: recipeFoodId, label: recipeLabel, rating: 5 })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleStarChange = (selectedRating) => {
    setFormData({ ...formData, rating: selectedRating })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleAddComment(formData)
    setFormData({ text: '', rating: 5, foodId: recipeFoodId, label: recipeLabel })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input type='hidden' name='foodId' value={`formData.${recipeFoodId}`}></input>
      <input type='hidden' name='label' value={`${recipeLabel}`}></input>
      <textarea
        required
        type='text'
        name='text'
        id='text-input'
        value={formData.text}
        placeholder='Add a Comment'
        onChange={handleChange}
      />
      <StarRating formData={formData} handleStarChange={handleStarChange} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default NewComment