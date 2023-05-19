//modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//assets
import tacocat from '../../assets/icons/tacocat.png'
import tacoman from '../../assets/icons/tacoman.png'

//services
import * as profileService from '../../services/profileService'

//component
import BoardCard from '../../components/BoardCard/BoardCard'

//css
import styles from './ProfileDetails.module.css'

const ProfileDetails = () => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(profileId)
      setProfile(profileData)
    }
    fetchProfile()
  }, [profileId])
  

  if (profile) {
    const photo = profile.photo ? profile.photo : tacoman
    return (
      <main className={`${styles.container} ${styles.main}`}>
        <h3>Profile: {profile.name}</h3>
        <h3>Prounouns:{profile.pronouns}</h3>
        <img style={{width: '300px', height: '300px'}} src={photo} alt="A beautiful Image" />
        <div className={styles.boardscontainer}>
        <h3>Board List</h3>
        {profile.boards.map((board) => (
          (board ? <BoardCard key={board._id} board={board} /> : <h3 key={board._id}>No Recipes Yet!</h3>)
        ))}
        </div>
      </main>
    )
  }
}

export default ProfileDetails