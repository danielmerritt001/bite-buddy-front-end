// npm modules
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

//component
import ProfileCard from '../../components/ProfileCard/ProfileCard'

// css
import styles from './Profiles.module.css'

const Profiles = (props) => {
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
    <main className={styles.container}>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map(profile => (
        <>
          <p key={profile._id}>
          {profile.name}</p>
          <ProfileCard profile={profile} handleGetRecipe={props.handleGetRecipe}/>
        </>
      ))}
    </main>
  )
}

export default Profiles
