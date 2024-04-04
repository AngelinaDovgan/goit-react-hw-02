export default function Feedback({ value: { good, neutral, bad}, summary, totalReviews }) {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Bad: {bad}</p>
            <p>Neutral: {neutral}</p>
            <p>Total: {totalReviews}</p>
            <p>Positive: {summary}%</p>
        </div>
    )
}