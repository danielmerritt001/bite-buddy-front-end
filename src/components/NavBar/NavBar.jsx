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
              <span className={`${styles.navlinks}`}><NavLink to="/profiles">Profiles</NavLink></span>
              <span className={`${styles.navlinks}`}><NavLink to="/recipes">Recipes</NavLink></span>
              <span className={`${styles.navlinks}`}><NavLink to="/boards">Boards</NavLink></span>
              {/* will put change password into profile */}
              {/* <span className={`${styles.navlinks}`}><NavLink to="/auth/change-password">Change Password</NavLink></span> */}
          </div>
            <div className={`${styles.logout}`}>
              <span className={`${styles.navlinks}`} id={`${styles.logout}`}><NavLink to="" onClick={handleLogout}>Log Out</NavLink></span>
            </div>
          </main>
          
      :
          <div className={`${styles.allnavlinks}`}>
            <span className={`${styles.navlinks}`}><NavLink to="/auth/login">Log In</NavLink></span>
            <span className={`${styles.navlinks}`}><NavLink to="/auth/signup">Sign Up</NavLink></span>
          </div>
      }
    </nav>
  )
}

export default NavBar
