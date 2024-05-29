import styles from './styles.module.css'

import Sreen from './../../imagens/SCREEN.png'
import Boards from './../../imagens/BoardsNotifications.png'

export const Content = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerText}>
                <h1>Contents</h1>
                <span>We focus on ergonomics and meeting you where you work. </span>
                <span>It's only a keystroke away.</span>
            </div>

            <div className={styles.section}>
                <div className={styles.cardContainer}>
                    <h1>Work</h1>
                    <text>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</text>
                    <div className={styles.buttonContainer}>
                        <div className={styles.free}>
                            Sign Up
                        </div>
                    </div>
                    <img src={Sreen}></img>
                </div>

                <div className={styles.cardContainer}>
                    <h1>Design with real data</h1>
                    <text>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</text>
                    <div className={styles.free}>
                        Try For Free
                    </div>
                    <img src={Boards}></img>
                </div>
            </div>
        </div>
    )
}
