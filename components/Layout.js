import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h3>Main Layout</h3>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;
