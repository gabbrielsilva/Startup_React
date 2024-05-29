import styles from './styles.module.css'

import alienigina from  './../../imagens/alien-outline.png'
import restaurant from  './../../imagens/ic_round-restaurant-menu.png'
import inclusive from  './../../imagens/inclusive.png'

import feature from './../../imagens/Frame.png'
const Features = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>FEATURES</h1>
                <h2>Most calendars are designed for teams. Slate is designed for </h2>
                <h2>freelancers who want a simple way to plan their schedule.</h2>
            </div>

            <div className={styles.containerFacture}>
                <div>
                    <img src={feature}></img>
                </div>

                <div className={styles.ContainerSection}>
                    <div >
                        <div className={styles.ContainerText}>
                            <img src={restaurant}></img>
                            <span>A single source<br/> of truth</span>
                        </div>

                        <div className={styles.textH2}>
                           <span> When you add work to your Slate calendar we automatically calculate useful insights</span>
                        </div>
                    </div>

                    <div>
                    <div  className={styles.featureText}>
                        <div className={styles.ContainerText}>
                            <img src={alienigina}></img>
                            <span>Intutive<br/> interface </span>
                        </div>

                        <div className={styles.textH2}>
                           <span> When you add work to your Slate calendar we automatically calculate useful insights</span>
                        </div>
                    </div>
                    </div>

                    <div>
                    <div  className={styles.featureText}>
                        <div className={styles.ContainerText}>
                            <img src={inclusive}></img>
                            <span>Or with rules</span>
                        </div>

                        <div className={styles.textH2}>
                           <span> When you add work to your Slate calendar we automatically calculate useful insights</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features