import styles from '../Partners/styles.module.css'

import airbnb from '../../imagens/Part/logos_airbnb.png'
import android_icon from '../../imagens/Part/logos_android-icon.png'
import apiaryrbnb from '../../imagens/Part/logos_apiary.png'
import app_store from '../../imagens/Part/logos_apple-app-store.png'
import logos_basecamp from '../../imagens/Part/logos_basecamp.png'
import logos_ibm from '../../imagens/Part/logos_ibm.png'

const Partners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Partners</h1>
        <h6>We focus on ergonomics and meeting you where you work. </h6>
        <h6>It's only a keystroke away.</h6>
      </div>
      <div className={styles.icon}>

          <img src={airbnb}></img>
          <img src={android_icon}></img>
          <img src={apiaryrbnb}></img>
          <img src={app_store}></img>
          <img src={logos_basecamp}></img>
          <img src={logos_ibm}></img>
      </div>
      <div className={styles.buttom}>

      </div>
    </div>
  )
}

export default Partners