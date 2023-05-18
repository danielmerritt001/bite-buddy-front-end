
import { Link } from 'react-router-dom'

//css
import RecipeCard from '../RecipeCard/RecipeCard'
import styles from './BoardCard.module.css'

const BoardCard = (props) => {
  // console.log(props.profile.boards, 'boards')
  // const boards = props.profile.boards
  // if(boards.length>0){
  return (
    <Link to={`/boards/${props.board._id}`}>
      <div>
        {props.board.title}
        {props.board.author.name}
        {props.board.bgColor}
        <img src={props.board.thumbnail} alt="" />
      </div>
    </Link>
  )
  // return (
  //   <>


  //     {/* {props.profile.boards.map((board) => (
  //         <article className={styles.container} key={board._id}>
  //           <h1>This is the board card</h1>
  //           {/* were mapping the recipe and when the recipe exists we will use the service function to show foodId */}
  //             {board.recipes.map(recipe => {
  //               console.log(recipe.foodId, 'recipe food id')
  //               // const recipeObj = props.handleGetRecipe(recipe.foodId)
  //               // console.log(recipeObj, 'recipeobj')
  //               //RecipeCard/>
  //               })
  //             }
  //           {/* } */}
  //           {/* } */}
  //         </article> */}
  //     // ))}
  //   </>
  // )

}

export default BoardCard