import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
    // state to store whether the timer has been started
    const [timerStarted, setTimerStarted] = useState(false);
    // state to know when timer duration has expired
    const [timerExpired, setTimerExpired] = useState(false);

    // function to start timer when start challenge button is pressed.
    function handleStart() {
        setTimerStarted(true);
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000)
    }

    // function to handle stopping timer when stop challenge button is pressed.
    

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? active : undefined}>
                {timerStarted ? 'Time is running' : 'Timer inactive'}
            </p>
        </section>
    )
}