import css from 'components/Feedback/Feedback.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <ul>
        <li className={css.feedbackCounter}>Good: {good}</li>
        <li className={css.feedbackCounter}>Neutral: {neutral}</li>
        <li className={css.feedbackCounter}>Bad: {bad}</li>
        <li className={css.feedbackCounter}>Total: {total}</li>
        <li className={css.feedbackCounter}>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
}
