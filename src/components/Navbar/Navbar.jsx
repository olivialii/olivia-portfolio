import React, {useState} from 'react'

import styles from "./Navbar.module.css";
import { getImageUrl } from '../../../utils';


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
                        ? '../assets/nav/closeIcon.png' 
                        : '../assets/nav/menuIcon.png'
                    }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)} 
            /> 
            <u1 className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
            >
                <li><a href="#work">WORK</a></li>
                <li><a href="#play">PLAY</a></li>
                <li><a href="#about">ABOUT</a></li>
            </u1>
        </div>
    </nav>
    );
}