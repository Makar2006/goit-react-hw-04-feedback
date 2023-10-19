import { useState } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notifications/Notification';
import Statistics from './Statistics/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClick = option => {
    switch (option) {
      case 'good':
        setGood(a => a + 1);
        break;

      case 'neutral':
        setNeutral(a => a + 1);
        break;

      case 'bad':
        setBad(a => a + 1);
        break;
      default:
        throw new Error('Invalid option');
    }
  };

  const totalFeed = good + neutral + bad;
  const positFeedPercent = (good / totalFeed) * 100;

  return (
    <>
      <Section title="Please leave your feedback">
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onClick}
        ></Feedback>
      </Section>
      <Section>
        {!totalFeed === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            title="Statistics:"
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeed}
            positivePercentage={positFeedPercent}
          />
        )}
      </Section>
    </>
  );
}

export default App;
