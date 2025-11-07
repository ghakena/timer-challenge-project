export default function TimerChallenge({ title, targetTime }) {
    // state to know when timer expired
    
    
    // function to start timer when start challenge button is pressed.
    function handleStart() {
        setTimeout(() => {

        }, targetTime * 1000)
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button>
                    Start Challenge
                </button>
            </p>
            <p className="">
                Time is running... / Timer inactive
            </p>
        </section>
    )
}