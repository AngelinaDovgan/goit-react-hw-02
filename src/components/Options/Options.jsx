
export default function Options({ OnGood, OnNeutral, OnBad, OnReset, totalFeedback }) {
    return (
        <div>
            <button onClick={OnGood}>Good</button>
            <button onClick={OnNeutral}>Neutral</button>
            <button onClick={OnBad}>Bad</button>
            <button onClick={OnReset} style={{ display: totalFeedback > 0 ? "inline" : "none"}}>Reset</button>
            
        </div>
    )
}