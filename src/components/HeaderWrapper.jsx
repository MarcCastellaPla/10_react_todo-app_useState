import styles from './HeaderContainer.module.css';

export const HeaderContainer = ({ children }) => {
  return <header className={styles['header__container']}>{children}</header>;
};
