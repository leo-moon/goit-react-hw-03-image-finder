import { Component } from 'react';
// import FeedbackRenderBtn from './FeedbackRenderBtn';
import Statistic from './Statistic';

import styles from './feedback.module.scss';

class Feedback extends Component {
  state = {
    good: 10,
    neutral: 2,
    bad: 0,
  };

  changeState(feedback) {
    this.setState(stateValues => {
      return { [feedback]: stateValues[feedback] + 1 };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const value = ((this.state.good / total) * 100).toFixed(0);
    return Number(value);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const element = !total ? (
      <p>No feedback given</p>
    ) : (
      <>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );

    return (
      <>
        <div>
          <h3 className={styles.title}>Please leave feedback</h3>
          <button
            onClick={() => this.changeState('good')}
            className={styles.btn}
          >
            Good
          </button>
          <button
            onClick={() => this.changeState('neutral')}
            className={styles.btn}
          >
            Neutral
          </button>
          <button
            onClick={() => this.changeState('bad')}
            className={styles.btn}
          >
            Bad
          </button>
          <p className={styles.stat}> Statistic </p>
        </div>
        {element}
      </>
    );
  }
}

export default Feedback;
