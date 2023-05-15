//component
import BoardCard from '../../components/BoardCard/BoardCard'

//css
import styles from './ProfileCard.module.css'

const ProfileCard = ({profile}) => {
  return (  
    <main className={`${styles.container} ${styles.main}`}>
    <h1>Hello, I'm the Profile Card</h1>
    <BoardCard profile={profile}/>
  </main>
  )
}

export default ProfileCard