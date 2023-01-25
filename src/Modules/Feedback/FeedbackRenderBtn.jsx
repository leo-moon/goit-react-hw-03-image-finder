import styles from './feedback.module.scss';
import Feedback from './Feedback';

const fbck = Feedback;

const FeedbackRenderBtn = item => {
  // const state = item.dataState;
  console.log('this', this.state);
  // console.log(Feedback.countPositiveFeedbackPercentage(state));

  const good = item.state.good;
  const neutral = item.state.neutral;
  const bad = item.state.bad;
  const total = good + neutral + bad;
  return (
    <>
      {/* <p>Hi</p> */}
      <p className={styles.feedback}>Good: {good}</p>
      <p className={styles.feedback}>Neutral: {neutral}</p>
      <p className={styles.feedback}>Bad: {bad}</p>
      <p className={styles.feedback}>Total: {total}</p>
      <p className={styles.feedback}>
        Positive feedback:
        {/* {fbck.countPositiveFeedbackPercentage(good, total)}% */}
      </p>
    </>
  );
};
// };

export default FeedbackRenderBtn;
