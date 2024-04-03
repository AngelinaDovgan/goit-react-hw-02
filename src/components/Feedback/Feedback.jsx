export default function Feedback({ value: { good, neutral, bad }, summary }) {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Bad: {bad}</p>
            <p>Neutral: {neutral}</p>
            <p>Result: {summary}</p>
        </div>
    )
}