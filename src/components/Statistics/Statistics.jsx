import css from './Statistics.module.css';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      {title && (
        <li>
          <p className={css.feedbackHeader}>{title}</p>
        </li>
      )}
      <li className={css.statisticsItem}>
        <p className={css.feedbackText}>Good:</p>
        <span className={css.feedbackSpan}>{good}</span>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.feedbackText}>Neutral:</p>
        <span className={css.feedbackSpan}>{neutral}</span>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.feedbackText}>Bad:</p>
        <span className={css.feedbackSpan}>{bad}</span>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.feedbackText}>Total:</p>
        <span className={css.feedbackSpan}>{total}</span>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.feedbackText}>Positive Feedback:</p>
        <span className={css.feedbackSpan}>
          {Math.round(positivePercentage)}%
        </span>
      </li>
    </ul>
  );
};
// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
//   <div>
//     <p>Good: {good}</p>
//     <p>Neutral: {neutral}</p>
//     <p>Bad: {bad}</p>
//     <p>Total: {total}</p>
//     <p>Positive feedback:{Math.round(positivePercentage)}%</p>
//   </div>
// );

export default Statistics;
