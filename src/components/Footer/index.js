import styles from './styles.module.css'

import facebook from './../../imagens/Footer/facebook.png'
import linkedin from './../../imagens/Footer/linkedin.png'
import map from './../../imagens/Footer/map.png'
import phone from './../../imagens/Footer/phone.png'
import twitter from './../../imagens/Footer/twitter.png'


const Footer
 = () => {
  return (
    <div className={styles.container} id='Footer'>
        <div className={styles.text}>
          <img src={map}></img>
          <text>7480 Mockingbird Hill undefined</text>
        </div>
        <div className={styles.text}>
            <img src={phone}></img>
            <text>(21) 000000000</text>
        </div>
        <div>
            <img src={twitter}></img>
            <img src={facebook}></img>
            <img src={linkedin}></img>
        </div>
    </div>
  )
}

export default Footer
