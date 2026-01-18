import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef(null); // ref for detecting outside clicks

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={styles.navbar} ref={navbarRef}>
            <div className={styles.leftNav}>
                <a href="/">
                    <img className={styles.logo} src="/assets/nav/face.png" alt="logo" />
                    <p>Olivia Li</p>
                </a>

                <img
                    className={styles.menuBtn}
                    src={menuOpen ? '/assets/nav/closeIcon.png' : '/assets/nav/menuIcon.png'}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            </div>

            <div className={styles.menu}>
                <ul
                    className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? `${styles.activeLink}` : ''
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/play"
                            className={({ isActive }) =>
                                isActive ? `${styles.activeLink}` : ''
                            }
                        >
                            Play
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/aboutme"
                            className={({ isActive }) =>
                                isActive ? `${styles.activeLink}` : ''
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
