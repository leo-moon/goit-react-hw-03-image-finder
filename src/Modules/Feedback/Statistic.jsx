import styles from './feedback.module.scss';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.feedback}>Good: {good}</p>
      <p className={styles.feedback}>Neutral: {neutral}</p>
      <p className={styles.feedback}>Bad: {bad}</p>
      <p className={styles.feedback}>Total: {total}</p>
      <p className={styles.feedback}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

export default Statistic;
