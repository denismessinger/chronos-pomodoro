import styles from './styles.module.css';

type HeadingPropos = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingPropos) {
  return <h1 className={styles.heading}>{children}</h1>;
}
