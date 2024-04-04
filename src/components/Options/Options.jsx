
export default function Options({ good }) {
    return (
        <div>
            <button onClick={good}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            <button onClick={() => updateFeedback('reset')}>Reset</button>
        </div>
    )
}