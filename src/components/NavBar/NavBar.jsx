// npm modules
import { NavLink } from 'react-router-dom'

//assets
import home from '../../assets/icons/bitebuddyicon.png'
import profiles from '../../assets/icons/profilesicon.png'
import recipes from '../../assets/icons/recipesicon.png'
import boards from '../../assets/icons/boardsicon.png'
import logout from '../../assets/icons/logouticon.png'
import login from '../../assets/icons/loginicon.png'
import signup from '../../assets/icons/signupicon.png'

//css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ? (
        <main className={`${styles.navcontainer}`}>
          <div className={`${styles.everythingbutlogout}`}>
            <span className={`${styles.navlinks}`}>
              <NavLink to='/'>
                <img src={home} width='32' alt='home' />
                <span className={`${styles.labelnav}`}>Home</span>
              </NavLink>
            </span>
            <span className={`${styles.navlinks}`}>
              <NavLink to='/profiles'>
                <img src={profiles} width='32' alt='profiles' />
                <span className={`${styles.labelnav}`}>Profiles</span>
              </NavLink>
            </span>
            <span className={`${styles.navlinks}`}>
              <NavLink to='/recipes'>
                <img src={recipes} width='32' alt='images' />
                <span className={`${styles.labelnav}`}>Recipes</span>
              </NavLink>
            </span>
            <span className={`${styles.navlinks}`}>
              <NavLink to='/boards'>
                <img src={boards} width='32' alt='boards' />
                <span className={`${styles.labelnav}`}>Boards</span>
              </NavLink>
            </span>
          </div>
          <div className={`${styles.logout}`}>
            <span className={`${styles.navlinks}`} id={`${styles.logout}`}>
              <NavLink to='' onClick={handleLogout}>
                <img src={logout} width='32' alt='logout' />
                <span className={`${styles.labelnav}`}>Logout</span>
              </NavLink>
            </span>
          </div>
        </main>
      ) : (
        <div className={`${styles.allnavlinks}`}>
          <span className={`${styles.navlinks}`}>
            <NavLink to='/auth/login'>
              <img src={login} width='32' alt='login' />
              <span className={`${styles.labelnav}`}>Login</span>
            </NavLink>
          </span>
          <span className={`${styles.navlinks}`}>
            <NavLink to='/auth/signup'>
              <img src={signup} width='32' alt='signup' />
              <span className={`${styles.labelnav}`}>Signup</span>
            </NavLink>
          </span>
        </div>
      )}
    </nav>
  )
}

export default NavBar

