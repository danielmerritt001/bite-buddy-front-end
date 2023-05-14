//component
import ProfileCard from '../../components/ProfileCard/ProfileCard'
//css
import styles from './ProfileList.module.css'

const ProfileList = (props) => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, I'm the profile list</h1>
      <ProfileCard />
    </main>
  )
}

export default ProfileList