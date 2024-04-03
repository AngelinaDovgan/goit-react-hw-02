import { useState } from 'react'
import './App.css'
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import { object } from 'prop-types';

export default function App() {
  const [count, setCount] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    });
  
   function updateFeedback(feedbackType) {
    setCount({
      ...count,
      [feedbackType]: count[feedbackType] + 1,
    });
}

  return (
    <>
      <Description />
      <Options updates={updateFeedback} />
      <Feedback value={object} />
    </>
  )
}


