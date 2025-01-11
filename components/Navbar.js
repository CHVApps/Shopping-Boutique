import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src="/Images/logo.jpg" alt="Boutique Logo" className={styles.logoImage} />
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/Shop">Shop</Link>
                </li>
                <li>
                    <Link href="/Contact">Contact</Link>
                </li>
                <li>
                    <Link href="/About">About Us</Link>
                </li>
                <li>
                    <Link href="/Offers">Offers</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
