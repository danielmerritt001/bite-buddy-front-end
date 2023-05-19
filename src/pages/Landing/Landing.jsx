// npm modules
import { Link } from 'react-router-dom'

// css
import styles from './Landing.module.css'

//assets
import cookingblue from '../../assets/icons/familycookingblue.png'
import cookingpink from '../../assets/icons/familycookingpink.png'

const Landing = ({ user }) => {
  if(!user){
  return (
    <>
      <main className={`${styles.square} ${styles.landingcontainer}`}>
        <div className={`${styles.square} ${styles.squareone}`}>
          <h1>Bite Buddy</h1>
          <h2>Hey {user ? user.name : 'friend'}! </h2>
          <h2>Bake your day better with these recipes!</h2>
        </div>
        <div className={`${styles.square} ${styles.squaretwo}`}>
          <img src={cookingblue} width='300' height='300' />
        </div>
        <div className={`${styles.square} ${styles.squarethree}`}>
          <h1>Bite Buddy</h1>
            <h2>Sign in for some <br></br>spec-taco-lar recipes</h2>
            <Link to='/auth/login'>
              <button>Sign-In</button>
            </Link>
          </div>
        <div className={`${styles.square} ${styles.squarefour}`}>
          <img src={cookingpink} width='300' height='300' />
        </div>
      </main>
    </>
  )
}else{
  return(
    <>
      <main className={`${styles.square} ${styles.landingcontainer}`}>
        <div className={`${styles.square} ${styles.squareone}`}>
          <h1>Bite Buddy</h1>
          <h2>Hey {user ? user.name : 'friend'}! </h2>
          <h2>Bake your day better with these recipes!</h2>
        </div>
        <div className={`${styles.square} ${styles.squaretwo}`}>
          <img src={cookingblue} width='300' height='300' />
        </div>
        <div className={`${styles.square} ${styles.squarethree}`}>
          <h1>Bite Buddy</h1>
            <h2> Go find some <br></br>spec-taco-lar recipes</h2>
          </div>
        <div className={`${styles.square} ${styles.squarefour}`}>
          <img src={cookingpink} width='300' height='300' />
        </div>
      </main>
    </>
  )
}
}

export default Landing
