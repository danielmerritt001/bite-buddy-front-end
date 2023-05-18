//modules
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import { useState, } from "react"

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
            <form onSubmit={props.getSearch} className={`${styles.searchform}`}>
        <input className={`${styles.searchbar}`}
          type="text"
          value={props.search}
          onChange={props.updateSearch}
          placeholder="Type your favorite ingredients..."/>
        <button className={`${styles.searchbutton}`} type="submit">
          Search
        </button>
      </form>
      <div className={`${styles.pagination}`}>
        <button className={`${styles.paginationback}`}onClick={handleBack}>&lt;</button>
        <div className={`${styles.paginationnumbers}`}>{1 + currIdx}-{10 + currIdx}</div>
        <button className={`${styles.paginationback}`} onClick={handleForward}>&gt;</button>
      </div>
      {filteredRecipes.map((recipeSingle, idx) => (
        <RecipeCard key={idx} recipe={recipeSingle.recipe} />
      ))}
    </main>
  )
} 

export default RecipeList
