import styles from './styles.module.css'

import chat from './../../imagens/ChatBot.png'
import Boards from './../../imagens/Boards.svg'
import Dashboard from './../../imagens/Dashboard.svg'


const Header = () => {
  return (
    <div className={styles.container}>

      <section className={styles.section}>

        <h1>Work at the speed</h1>
        <h1 className={styles.separar}>of thought</h1>

        <h2>Most calendars are designed for teams. Slate is designed for </h2>
        <h2>freelancers who want a simple way to plan their schedule.</h2>
      </section>
      <div className={styles.buttonContainer}>

        <div className={styles.free}>
          Try For Free
        </div>

        <div className={styles.more}>
          Learn More
        </div>


      </div>

      <div className={styles.containerimagens}>
        <img src={Dashboard}></img>
      </div>
      <div className={styles.coutImage}>
        <img src={Boards} className={styles.imagens}></img>
        <img src={chat} className={styles.imagens}></img>
      </div>


    </div>
  )
}

export default Header