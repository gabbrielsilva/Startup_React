import styles from '../Testimonials/styles.module.css'

import avatar from '../../imagens/Testi/avatar.png'
import avatar1 from '../../imagens/Testi/avatar1.png'
import avatar2 from '../../imagens/Testi/avatar2.png'
import avatar3 from '../../imagens/Testi/avatar3.png'

const Testimonials = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Testimonials</h1>
            </div>
            <div className={styles.containerText}>
                <div className={styles.cardCima}>
                    <div className={styles.cardMaior}>
                        <div className={styles.cardText}>
                            <img src={avatar}></img>
                            <div>
                                <span>Claire Bell</span> <br />
                                <span>Desginer</span>
                            </div>
                        </div>

                        <text>
                            Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                        </text>
                    </div>

                    <div className={styles.cardMenor}>
                        <div className={styles.cardText}>
                            <img src={avatar1}></img>
                            <div>
                                <span>Francisco Lane</span> <br />
                                <span>Desginer</span>
                            </div>
                        </div>

                        <text>
                            Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                        </text>
                    </div>
                </div>
            </div>


            <div className={styles.containerText}>
                <div className={styles.cardBaixo}>
                    <div className={styles.cardMenor}>
                        <div className={styles.cardText}>
                            <img src={avatar2}></img>
                            <div>
                                <span>Ralph Fisher</span> <br />
                                <span>Desginer</span>
                            </div>
                        </div>

                        <text>
                            Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                        </text>
                    </div>

                    <div className={styles.cardMenor}>
                        <div className={styles.cardText}>
                            <img src={avatar3}></img>
                            <div>
                                <span>Jorge Murphy</span> <br />
                                <span>Desginer</span>
                            </div>
                        </div>

                        <text>
                            Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                        </text>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Testimonials