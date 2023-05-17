//modules
import { Link } from 'react-router-dom'

//component
import BoardCard from '../../components/BoardCard/BoardCard'

//css
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {
  // if(!(profile.boards.length === 0)) {
  //   return (  
  //     <Link to={`/profiles/${profile._id}`} >

  //       <main className={`${styles.container} ${styles.main}`}>
  //       <h1>Hello, I'm the Profile Card</h1>
  //       <h3>Again, I'm {profile.name}</h3>
  //       {profile.boards.map(board => 
  //         <>
  //           <BoardCard board={board} /> 
  //         </>
  //         )
  //       }
  //       </main>
  //     </Link>
  //   )
  // }
  console.log(profile)
  return (  
    <Link to={`/profiles/${profile._id}`} >
      <main className={`${styles.container} ${styles.main}`}>
      <h1>Replace Me With the Image</h1>
      <h3>{profile.name}</h3>
      <h4>{profile.boards.length} Boards</h4>
      </main>
    </Link>
  )
}

export default ProfileCard