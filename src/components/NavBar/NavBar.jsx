// npm modules
import { NavLink } from 'react-router-dom'

//css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ? (
        <main className={`${styles.container}`}>
          <div className={`${styles.everythingbutlogout}`}>
            <span className={`${styles.navlinks}`}>
              <NavLink to="/">
                <img src="src/assets/images/bitebuddyicon.png" width="32" alt="home" />
                <span className={`${styles.label}`}>Home</span>
              </NavLink>
            </span>
            <span className={`${styles.navlinks}`}>
              <NavLink to="/profiles">
                <img src="src/assets/images/profilesicon.png" width="32" alt="profiles" />
                <span className={`${styles.label}`}>Profiles</span>
              </NavLink>
            </span>
            <span className={`${styles.navlinks}`}>
              <NavLink to="/recipes">
                <img src="src/assets/images/recipesicon.png" width="32" alt="images" />
                <span className={`${styles.label}`}>Recipes</span>
              </NavLink>
            </span>
            <span className={`${styles.navlinks}`}>
              <NavLink to="/boards">
                <img src="src/assets/images/boardsicon.png" width="32" alt="boards" />
                <span className={`${styles.label}`}>Boards</span>
              </NavLink>
            </span>
            {/* will put change password into profile */}
            {/* <span className={`${styles.navlinks}`}><NavLink to="/auth/change-password">Change Password</NavLink></span> */}
          </div>
          <div className={`${styles.logout}`}>
            <span className={`${styles.navlinks}`} id={`${styles.logout}`}>
              <NavLink to="" onClick={handleLogout}>
                <img src="src/assets/images/logouticon.png" width="32" alt="logout" />
                <span className={`${styles.label}`}>Logout</span>
              </NavLink>
            </span>
          </div>
        </main>
      ) : (
        <div className={`${styles.allnavlinks}`}>
          <span className={`${styles.navlinks}`}>
            <NavLink to="/auth/login">
              <img src="src/assets/images/loginicon.png" width="32" alt="login" />
              <span className={`${styles.label}`}>Login</span>
            </NavLink>
          </span>
          <span className={`${styles.navlinks}`}>
            <NavLink to="/auth/signup">
              <img src="src/assets/images/signupicon.png" width="32" alt="signup" />
              <span className={`${styles.label}`}>Signup</span>
            </NavLink>
          </span>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

