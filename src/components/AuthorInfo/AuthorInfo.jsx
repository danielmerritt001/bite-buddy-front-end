//component
import DateCard from '../DateCard/DateCard'

const AuthorInfo = ({ user, createdAt }) => {

  return (
    <div>
      <section>
        <h4> {user.name}</h4>
        <DateCard createdAt={createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo