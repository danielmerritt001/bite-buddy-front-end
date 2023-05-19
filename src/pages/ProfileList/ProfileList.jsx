// npm modules
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

//component
import ProfileCard from '../../components/ProfileCard/ProfileCard'

// css
import styles from './ProfileList.module.css'

const ProfileList = () => {
  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }

  return (
    <main className={styles.profilelistcontainer}>
      {profiles.map(profile =>
        <ProfileCard key={profile._id} profile={profile} />
      )
      }
    </main>
  )
}

export default ProfileList
