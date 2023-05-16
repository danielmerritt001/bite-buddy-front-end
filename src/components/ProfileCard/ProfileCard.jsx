//component
import BoardCard from '../../components/BoardCard/BoardCard'

//css
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {
  if(!(profile.boards.length === 0)) {
    return (  
      <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, I'm the Profile Card</h1>
      <h3>Again, I'm {profile.name}</h3>
      {profile.boards.map(board => 
        <>
          <BoardCard board={board} /> 
        </>
        )
      }
      
    </main>
    )
  }
  return (  
    <main className={`${styles.container} ${styles.main}`}>
    <h1>Hello, I'm the Profile Card</h1>
    <h3>Again, I'm {profile.name}</h3>
  </main>
  )
}

export default ProfileCard