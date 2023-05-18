//css
import styles from './Loading.module.css'

//assets
import loading from '../../assets/icons/loading.png'

const Loading = () => {
  return (
    <>
    <main className={styles.container}>
      <div className={`${styles.image}`}>
        <img src={loading} width='350' height='200'/>
      </div>
      <div className={`${styles.marthastewart}`}>
        <h3>"If you learn something new every day you can teach something new every day." - Martha Stewart</h3>
      </div>
      
    </main>
    </>
  )
}

export default Loading