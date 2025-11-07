import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    // state to store whether the timer has been started
    const [timerStarted, setTimerStarted] = useState(false);
    // state to know when timer duration has expired
    const [timerExpired, setTimerExpired] = useState(false);
    // function to start timer when start challenge button is pressed.
    function handleStart() {
        timer.current = setTimerStarted(true);
        setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000)
    }

    // function to handle stopping timer when stop challenge button is pressed.
    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
            {/* {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result="lost" />} */}
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? 'Time is running' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}