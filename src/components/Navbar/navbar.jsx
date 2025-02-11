import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a href="/">
                <img className={styles.logo} src="/assets/nav/face.png" alt="logo" />
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? '/assets/nav/closeIcon.png' : '/assets/nav/menuIcon.png'}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? `${styles.activeLink}` : ''
                            }
                        >
                            WORK
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/play"
                            className={({ isActive }) =>
                                isActive ? `${styles.activeLink}` : ''
                            }
                        >
                            PLAY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/aboutme"
                            className={({ isActive }) =>
                                isActive ? `${styles.activeLink}` : ''
                            }
                        >
                            ABOUT
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

