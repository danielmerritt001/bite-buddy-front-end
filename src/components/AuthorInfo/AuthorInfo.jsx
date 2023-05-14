//css
import styles from './AuthorInfo.module.css'

const AuthorInfo = (props) => {
  //const { content } = props - will use for author.name

  //const photo = content.author.photo ? content.author.photo : profileIcon - will use for profile photo

  return (
    <div className={styles.container}>
      {/* <img src={photo} alt="The user's avatar" /> */}
      <section>
        <h4>Authors Name Here</h4>
      </section>
    </div>
  )
}

export default AuthorInfo