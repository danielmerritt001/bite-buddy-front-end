import  { useState } from 'react'

const StarRating = (props) => {
  const [rating, setRating] = useState(0)

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating)
    props.handleStarChange(selectedRating)
  };

  const stars = [1, 2, 3, 4, 5]

  return (
    <div>
      <p>Rating: {rating} stars</p>
      {stars.map((star) => (
        <span
          key={star}
          value={props.formData.rating}
          name="rating"
          onClick={() => handleStarClick(star)}
          style={{ cursor: 'pointer' }}
        >
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating