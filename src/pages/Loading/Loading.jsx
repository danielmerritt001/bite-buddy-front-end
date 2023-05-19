//css
import styles from './Loading.module.css'

//assets
import loading from '../../assets/icons/loading.png'

const Loading = () => {
  return (
    //REMOVE THE FRAGMENT!!! FOR THE GREAT HUNTER WITHOUT WHOM OUR CODE WOULD BE STERILE AND OUR HEARTS EMPTY!!!
    <main>
      <div className={styles.landingcontainer}>
        <div className={`${styles.image}`}>
          <img src={loading} width='350' height='250' />
        </div>
        <div className={`${styles.marthastewart}`}>
          <h3>'If you learn something new every day you can teach something new every day.' - Martha Stewart</h3>
        </div>
      </div>
    </main>
  )
}

export default Loading