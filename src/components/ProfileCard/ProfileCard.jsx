//npm modules
import { Link } from 'react-router-dom'

//assets
import tacoman from '../../assets/icons/tacoman.png'

//css
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {
  if (profile.image) {
    return (
      <Link to={`/profiles/${profile._id}`} >
        <main className={`${styles.profilecardcontainer} ${styles.main}`}>
          <div className={`${styles.profileimage}`}>
            {profile.image}
          </div>
          <h3>{profile.name}</h3>
          <h4>{profile.boards.length} Boards</h4>
        </main>
      </Link>
    )
  } else {
    return (
      <Link to={`/profiles/${profile._id}`} >
        <main className={`${styles.profilecardcontainer} ${styles.main}`}>
          <div className={`${styles.noprofileimage}`}>
            <img src={tacoman} width='200' alt='tacoman' />
          </div>
          <h3>{profile.name}</h3>
          <h4>{profile.boards.length} Boards</h4>
        </main>
      </Link>
    )
  }
}

export default ProfileCard