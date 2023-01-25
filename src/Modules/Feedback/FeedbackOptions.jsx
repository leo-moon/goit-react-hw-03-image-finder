import styles from './feedback.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(option => (
    <>
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        className={styles.btn}
      >
        {option}
      </button>
    </>
  ));

  return <>{elements}</>;
};

export default FeedbackOptions;
