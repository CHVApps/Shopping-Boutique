import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {/* Left Side: Logo */}
            <div className={styles.logo}>
                <img src="/Images/logo.jpg" alt="Boutique Logo" className={styles.logoImage} />
            </div>

            {/* Right Side: Navigation Links */}
            <ul className={styles.navLinks}>
                <li>Home</li>
                <li>Shop</li>
                <li>Contact</li>
                <li>About Us</li>
                <li>Offers</li>
            </ul>
        </nav>
    );
};

export default Navbar;
