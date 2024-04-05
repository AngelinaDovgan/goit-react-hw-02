import css from './Feedback.module.css'
export default function Feedback({ value: { good, neutral, bad }, summary, totalReviews }) {
    return (
        <div className={css.fb}>
            <p>Good: {good}</p>
            <p>Bad: {bad}</p>
            <p>Neutral: {neutral}</p>
            <p>Total: {totalReviews}</p>
            <p>Positive: {summary}%</p>
        </div>
    )
}