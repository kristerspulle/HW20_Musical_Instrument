import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to={'/music'}>
        Begin
      </Link>
    </div>
  );
};
