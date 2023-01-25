import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistic';
import FeedbackBlock from './FeedbackBlock/FeedbackBlock';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = feedback => {
    this.setState(stateValues => {
      return { [feedback]: stateValues[feedback] + 1 };
    });
  };

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
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    );

    return (
      <>
        <FeedbackBlock title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.changeState}
          />
        </FeedbackBlock>

        <FeedbackBlock title="Statistic">{element}</FeedbackBlock>
      </>
    );
  }
}

export default Feedback;
