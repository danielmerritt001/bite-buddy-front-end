//component
import DateCard from '../DateCard/DateCard'

//css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({user, createdAt}) => {

  return (
    <div className={styles.container}>
      <section>
        <h4> {user.name}</h4>
        <DateCard createdAt={createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo