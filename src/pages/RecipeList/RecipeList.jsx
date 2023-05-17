//modules
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import { useState, useEffect } from "react"

//css
import styles from './RecipeList.module.css'

const RecipeList = ( props ) => {
  const recipes = props.recipes.hits

  const displayCount = 10
  const [currIdx, setCurrIdx] = useState(0)
  function increaseCurrIdx() {
    setCurrIdx(currIdx + displayCount)
  }
  function decreaseCurrIdx() {
    setCurrIdx(currIdx - displayCount)
  }

  const [displayedRecipes, setDisplayedRecipes] = useState(null)
    

  useEffect(() => {
    const filterRecipes = async () => {
      const recipeArray = await recipes.filter(function(elem, idx) {
        return ((idx >= currIdx) && (idx < (currIdx + displayCount)))
      })
      setDisplayedRecipes(recipeArray)
      }
    filterRecipes()
    }, [recipes, currIdx])

  function handleBack() {
    if(currIdx >= displayCount) {
      decreaseCurrIdx()
    } 
  }

  function handleForward() {
    if(currIdx <= (recipes.length - displayCount)) {
      increaseCurrIdx()
    }
  }

  console.log(displayedRecipes)
  if (Array.isArray(displayedRecipes)) {
    return(
      <main className={`${styles.container} ${styles.main}`}>
        <div className="pagination-container">
        <button onClick={handleBack}>&lt;</button>
        <div>{1 + currIdx}-{10 + currIdx}</div>
        <button onClick={handleForward}>&gt;</button>
      </div>
        {displayedRecipes.map(recipeSingle => (
          <RecipeCard key={recipeSingle._id} recipe={recipeSingle.recipe} />
        ))}
      </main>
    )
    } else {
      <h1>IM STILL GETTING READY!!!</h1>
  }
}
export default RecipeList

// map recipes
// map goes to card and passes recipe 
// deconstruct recipe to be recipe 
