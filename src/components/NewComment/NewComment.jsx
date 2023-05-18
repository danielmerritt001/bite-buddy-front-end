// npm imports
import { useState } from "react"

// css
import styles from './NewComment.module.css'


const NewComment = ({ recipe, handleAddComment }) => {
  const recipeLabel = recipe.label
  const recipeFoodId = recipe.uri.split("recipe_")[1]
  const [formData, setFormData] = useState({ text: '', foodId: recipeFoodId, label: recipeLabel, rating: 5 })

 
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleAddComment(formData)
    setFormData({ text: '', rating: 5, foodId: recipeFoodId, label: recipeLabel})
  }

  
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input type="hidden" name="foodId" value={`formData.${recipeFoodId}`}></input>
      <input type="hidden" name="label" value={`${recipeLabel}`}></input>
      <textarea 
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        placeholder="Add a Comment"
        onChange={handleChange}
      />

      <label htmlFor="rating-input">Rating</label>
        <select
          required
          type="number"
          name="rating"
          id="rating-input"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">Submit</button>
    </form>
  )
}

export default NewComment