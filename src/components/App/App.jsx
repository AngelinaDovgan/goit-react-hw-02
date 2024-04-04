import { useEffect, useState } from 'react'
import './App.css'
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {

  const [count, setCount] = useState(() => {
  const allClicks = localStorage.getItem("amountClicks");
  if (allClicks != null) {
    return JSON.parse(allClicks);
  }
    return { good: 0, neutral: 0, bad: 0 }
  });
  

   function updateFeedback(feedbackType) {
    setCount({
      ...count,
      [feedbackType]: count[feedbackType] + 1,
    });
   }
  
  const handleReset = () => {
    setCount({
      good: 0, neutral: 0, bad: 0
    });
  };

   useEffect(() => {
    localStorage.setItem("amountClicks", JSON.stringify(count))
   }, [count]);
  
  const totalFeedback = count.good + count.neutral + count.bad;
  const totalPositive = totalFeedback > 0 ? Math.round((count.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        OnGood={() => { updateFeedback("good"); }}
        OnNeutral={() => { updateFeedback("neutral"); }}
        OnBad={() => { updateFeedback("bad"); }}
        OnReset={handleReset}
        totalFeedback={totalFeedback}
      />
      
    {totalFeedback > 0 ? ( <Feedback value={count} summary={totalPositive} totalReviews={totalFeedback}/> )
     : (<Notification />)} 
    
    </>
  );
}


