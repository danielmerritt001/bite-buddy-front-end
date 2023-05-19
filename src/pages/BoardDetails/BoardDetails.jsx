//npm modules
import { useState, useEffect } from 'react'

import { useParams, Link, useNavigate } from 'react-router-dom'


// components
import RecipeCard from '../../components/RecipeCard/RecipeCard'

// services
import * as boardService from '../../services/boardService'

//css
import styles from './BoardDetails.module.css'
import { getAllProfiles } from '../../services/profileService'

const BoardDetails = (props) => {
  const { boardId } = useParams()

  const [board, setBoard] = useState({})
  const [recipes, setRecipes] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBoard = async () => {
      const boardData = await boardService.show(boardId)
      setBoard(boardData)
    }
    fetchBoard()
  }, [boardId])

  useEffect(() => {
    setRecipes(board.recipes)
  }, [board])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    navigate(`/boards/${boardId}/edit`)
  }

  const handleRemoveFromBoard = async (recipe) => {
    const foodId = recipe.uri.split('recipe_')[1]
    const removedRecipe = await boardService.removeRecipeFromBoard(boardId, foodId)
    setRecipes(recipes.filter((recipe) => recipe.foodId !== removedRecipe.foodId))
  }
  
  if (board && recipes) {
    console.log(recipes)
    return (
      <main className={`${styles.main}`}>
        <div className={`${styles.boarddetailscontainer}`} >
          <div id={board.bgColor}>
            <div className={`${styles.boarddetailstitle}`}>
              {board.title}
            </div>
            <div className={`${styles.boarddetailsauthor}`} >
              by {board.author.name}
            </div>
            {board.author._id === props.user?.profile &&
              <>
                <Link to={`/boards/${boardId}/edit`} state={board}>Edit</Link>
                <button onClick={handleSubmit}>Edit</button>
                <button onClick={() => props.handleDeleteBoard(boardId)}>
                  Delete
                </button>
              </>
            }
          </div>
          {board.recipes.map((recipe, idx) => (
            <div key={idx} >
              {board.author._id === props.user?.profile &&
                    <button  onClick={()=> handleRemoveFromBoard(recipe)}>
                      Remove
                    </button>
              }
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </main>
    )
  }
}

export default BoardDetails