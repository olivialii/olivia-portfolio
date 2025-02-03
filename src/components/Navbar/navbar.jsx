import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import styles from "./navbar.module.css";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className = {styles.navbar}>
        <a className={styles.logo} href="/">
            olivia li
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
                src={ 
                    menuOpen 
                        ? '/assets/nav/closeIcon.png' 
                        : '/assets/nav/menuIcon.png'
                    }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)} 
            /> 
            <u1 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li className={styles.work}><Link to="/projects">WORK</Link></li>
                <li><Link to="/#play">PLAY</Link></li>
                <li><Link to="/#about">ABOUT</Link></li>
            </u1>
        </div>
    </nav>
    );
}