import styles from './styles.module.css'

import cta from '../../imagens/CTA/cta.png'


const CTA = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ctaContainer}>
                <div>
                    <h1>OpenType features and Variable fonts</h1>
                    <div className={styles.free}>
                        Try For Free
                    </div>
                </div>

                <div >
                    <img src={cta}></img>
                </div>
            </div>
        </div>
    )
}

export default CTA