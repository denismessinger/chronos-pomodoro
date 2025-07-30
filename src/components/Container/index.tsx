import styles from './styles.module.css';

type ContainerProprs = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProprs) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>{children}</section>
      </div>
    </div>
  );
}
