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
        return (idx >= currIdx && idx < (currIdx + displayCount))
      })
      setDisplayedRecipes(recipeArray)
      }
    filterRecipes()
    }, [recipes, currIdx])

  // function updateDisplayedPokemon(forward) {
  //   if (forward) {
  //     setDisplayedPokemon(pokeData.filter(function(elem, idx) {
  //     return ((idx >= currIdx + displayCount) && idx < (currIdx + displayCount + displayCount))
  //     }))
  //   } else {
  //     setDisplayedPokemon(pokeData.filter(function(elem, idx) {
  //       return ((idx >= currIdx - displayCount) && idx < (currIdx))
  //       }))
  //   }
  // }

  // function handleBack() {
  //   if(currIdx >= displayCount) {
  //     decreaseCurrIdx()
  //     updateDisplayedPokemon(false)
  //   } 
  // }

  // function handleForward() {
  //   if(currIdx <= (pokeData.length - displayCount)) {
  //     increaseCurrIdx()
  //     updateDisplayedPokemon(true)
  //   }
  // }

  console.log(displayedRecipes)
  if (Array.isArray(displayedRecipes)) {
    return(
      <main className={`${styles.container} ${styles.main}`}>
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
