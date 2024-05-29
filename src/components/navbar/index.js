import styles from '../navbar/styles.module.css'

import logo from '../../imagens/logodark.png'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer'

const Navbar = () => {
  return (
    <div className={styles.container}>

       <div>
        <img src={logo}></img>
      </div>

      <div className={styles.link}>
        <NavLink>Home</NavLink>
        <NavLink>Product</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </div>

      <div className={styles.button}>
          <span>Login</span>
      </div>
    </div>
  )
}

export default Navbar