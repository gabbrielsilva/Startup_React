import styles from '../Gallery/styles.module.css'

import React from 'react'

import galeria from '../../imagens/Card.png'
import galeria_1 from '../../imagens/Card1.png'
import galeria_2 from '../../imagens/Card2.png'
import galeria_3 from '../../imagens/Card3.png'
import galeria_4 from '../../imagens/Card4.png'
import galeria_5 from '../../imagens/Card5.png'
import galeria_6 from '../../imagens/Card6.png'

const Gallery = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Gallery</h1>
                <h6>We focus on ergonomics and meeting you where you work.</h6>
                <h6> It's only a keystroke away.</h6>
            </div>

            <div>
                <img src={galeria}></img>
                <img src={galeria_1}></img>
                <img src={galeria_2}></img>
                <img src={galeria_3}></img>
            </div>

            <div>
                <img src={galeria_4}></img>
                <img src={galeria_5}></img>
                <img src={galeria_6}></img>
            </div>

            <div className={styles.buttonContainer }>
                <div className={styles.See}>See more</div>
            </div>

        </div>
    )
}

export default Gallery