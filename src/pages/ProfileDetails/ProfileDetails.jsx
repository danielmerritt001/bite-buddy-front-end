//component
import BoardCard from '../../components/BoardCard/BoardCard'

//css
import styles from './ProfileDetails.module.css'

const ProfileDetails = (props) => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, I'm the profile details</h1>
      <BoardCard />
    </main>
  )
}

export default ProfileDetails