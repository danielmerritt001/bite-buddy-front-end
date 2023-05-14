//css
import styles from './DateCard.module.css'

//replace props with {createdAt}
const DateCard = (props) => {
  // const date = new Date(createdAt).toLocaleDateString()
  return (
    <div className={styles.container}>
      {/* <Icon category="Calendar" /> */}
      {/* replace Date with {date} */}
      <h5>Date</h5>
    </div>
  )
}

export default DateCard
