//modules
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import { useState } from "react"

//css
import styles from './RecipeList.module.css'


const RecipeList = ( props ) => {

  const displayCount = 10
  const [currIdx, setCurrIdx] = useState(0)
  function increaseCurrIdx() {
    setCurrIdx(currIdx + displayCount)
  }
  function decreaseCurrIdx() {
    setCurrIdx(currIdx - displayCount)
  }

  function handleBack() {
    if(currIdx >= displayCount) {
      decreaseCurrIdx()
    } 
  }

  function handleForward() {
    if(currIdx <= (props.recipes.length - (displayCount+1))) {
      increaseCurrIdx()
    }
  }
  
  if(!props.recipes.length) return <h1>IM STILL GETTING READY!!!</h1>
  const filteredRecipes = props.recipes.filter(function(elem, idx) {
    return ((idx >= currIdx) && (idx < (currIdx + displayCount)))
  })
    console.log(filteredRecipes)
  return(
    <main className={`${styles.container} ${styles.main}`}>
            <form onSubmit={props.getSearch} className="search-form">
        <input className="search-bar"
          type="text"
          value={props.search}
          onChange={props.updateSearch}
          placeholder="Type your favorite ingredients..."/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="pagination-container">
      <button onClick={handleBack}>&lt;</button>
      <div>{1 + currIdx}-{10 + currIdx}</div>
      <button onClick={handleForward}>&gt;</button>
    </div>
      {filteredRecipes.map((recipeSingle, idx) => (
        <RecipeCard key={idx} recipe={recipeSingle.recipe} />
      ))}
    </main>
  )
} 

export default RecipeList
