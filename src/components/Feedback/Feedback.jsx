import { useState } from 'react';

import css from 'components/Feedback/Feedback.module.css';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistic';
import Notification from './Notification';

const FEEDBACK_OPTIONS = ['Good', 'Bad', 'Neutral'];

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackOptions = option => {
    switch (option) {
      case FEEDBACK_OPTIONS[0]:
        setGood(state => state + 1);
        break;
      case FEEDBACK_OPTIONS[1]:
        setBad(state => state + 1);
        break;
      case FEEDBACK_OPTIONS[2]:
        setNeutral(state => state + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const positiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div className={css.Statistic}>
      <Section title="Please, leave feedback">
        <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={handleFeedbackOptions} />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
