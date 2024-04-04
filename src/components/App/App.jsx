import { useEffect, useState } from 'react'
import './App.css'
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import { object } from 'prop-types';

export default function App() {

  const [count, setCount] = useState(() => {
  const allClicks = localStorage.getItem("amountClicks");
  if (allClicks != null) {
    return JSON.parse(allClicks);
  }

    return { good: 0, neutral: 0, bad: 0 }
  });
  

   function updateFeedback(feedbackType) {
    setCount(count)({
      ...count,
      [feedbackType]: count[feedbackType] + 1,
    });
  };

  const handleReset(() => {
    setCount({
      good: 0, neutral: 0, bad: 0
    })
  })

  
   useEffect(() => {
    localStorage.setItem('amountClicks', JSON.stringify(count))
  }, [count]);

  return (
    <>
      <Description />
      <Options
        Good={() => { updateFeedback("good") }}
        Neutral={updateFeedback("neutral")}
        Bad={updateFeedback("bad")}
      />
      <Feedback value={count} />
    </>
  )
}


