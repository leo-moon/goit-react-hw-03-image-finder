import { Component } from 'react';

import styles from './feedback.module.scss';

class Feedback extends Component {
  state = {
    // good: 0,
    // neutral: 0,
    // bad: 0,
    good: 5,
    neutral: 20,
    bad: 3,
  };

  totalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  goodPercent() {
    const total = this.totalFeedback();
    const value = ((this.state.good / total) * 100).toFixed(0);
    return Number(value);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback();
    const element = !total ? (
      <p>No feedback given</p>
    ) : (
      <>
        <p className={styles.feedback}>Good: {good}</p>
        <p className={styles.feedback}>Neutral: {neutral}</p>
        <p className={styles.feedback}>Bad: {bad}</p>
        <p className={styles.feedback}>Total: {total}</p>
        <p className={styles.feedback}>
          Positive feedback: {this.goodPercent()}%
        </p>
      </>
    );

    return (
      <>
        <div>
          <h3 className={styles.title}>Please leave feedback</h3>
          <button className={styles.btn}>Good</button>
          <button className={styles.btn}>Neutral</button>
          <button className={styles.btn}>Bad</button>
          <p className={styles.stat}> Statistic </p>
        </div>
        {element}
      </>
    );
  }
}

export default Feedback;
