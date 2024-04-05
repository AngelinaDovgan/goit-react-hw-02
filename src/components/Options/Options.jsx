import css from './Options.module.css'
export default function Options({ OnGood, OnNeutral, OnBad, OnReset, totalFeedback }) {
    return (
        <div className={css.btn}>
            <button onClick={OnGood}>Good</button>
            <button onClick={OnNeutral}>Neutral</button>
            <button onClick={OnBad}>Bad</button>
            <button onClick={OnReset} style={{ display: totalFeedback > 0 ? "inline" : "none"}}>Reset</button>
            
        </div>
    )
}