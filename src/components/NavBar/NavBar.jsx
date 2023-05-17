// npm modules
import { NavLink } from 'react-router-dom'

//css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?

          <main className={`${styles.container}`}>
          <div className={`${styles.everythingbutlogout}`}>
              <span className={`${styles.navlinks}`}><NavLink to="/"><img src="src/assets/images/bitebuddyicon.png" width="32" alt="home"/></NavLink></span>
              <span className={`${styles.navlinks}`}><NavLink to="/profiles"><img src="src/assets/images/profilesicon.png" width="32" alt="profiles"/></NavLink></span>
              <span className={`${styles.navlinks}`}><NavLink to="/recipes"><img src="src/assets/images/recipesicon.png" width="32" alt="images"/></NavLink></span>
              <span className={`${styles.navlinks}`}><NavLink to="/boards"><img src="src/assets/images/boardsicon.png" width="32" alt="boards"/></NavLink></span>
              {/* will put change password into profile */}
              {/* <span className={`${styles.navlinks}`}><NavLink to="/auth/change-password">Change Password</NavLink></span> */}
          </div>
            <div className={`${styles.logout}`}>
              <span className={`${styles.navlinks}`} id={`${styles.logout}`}><NavLink to="" onClick={handleLogout}><img src="src/assets/images/logouticon.png" width="32"/></NavLink></span>
            </div>
          </main>
          
      :
          <div className={`${styles.allnavlinks}`}>
            <span className={`${styles.navlinks}`}><NavLink to="/auth/login"><img src="src/assets/images/loginicon.png" width="32" alt="login"/></NavLink></span>
            <span className={`${styles.navlinks}`}><NavLink to="/auth/signup"><img src="src/assets/images/signupicon.png" width="32" alt="signup"/></NavLink></span>
          </div>
      }
    </nav>
  )
}

export default NavBar
