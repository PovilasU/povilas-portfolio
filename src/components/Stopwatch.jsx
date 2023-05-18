import { useState, useRef } from "react";
// import cn

export default function Stopwatch() {
    const [resetStopWatch, setResetStopWatch] = useState(false)

    const seconds = useRef(0);
    const minutes = useRef(0);

    const secondsEl = useRef()
    const minutesEl = useRef();
    /*
        useRef(5) returns...
            {
                current: 5
            }
    */

    // const startBtn = <button>Start</button>
    // const lapBtn = <button>Lap</button>
    // const stopBtn = <button>Stop</button>



    const start = () => {

        console.log("im here")

        let frame = () => {

            seconds.current += 1

            if (seconds.current >= 59) {
                seconds.current = 0;
                minutes.current += 1;
            }
            console.log(seconds.current)

            updateWatchFace()

        }
        const updateTimer = setInterval(frame, 1000);
        // if()

        // function frame() {
        //     if (width == 100) {
        //       clearInterval(id);
        //     } else {
        //       width++; 
        //       element.style.width = width + '%'; 
        //     }
        //   }

    }

    const reset = () => {
        setResetStopWatch(true);
        seconds.current = 0;
        minutes.current = 0;


    }


    const updateWatchFace = () => {
        let secs = seconds.current < 10 ? "0" + seconds.current : seconds.current
        secondsEl.current.innerText = secs;
        let mins = minutes.current < 10 ? "0" + minutes.current : minutes.current;
        minutesEl.current.innerText = mins;
    }

    // const minutes = ()=>{
    //     setMinutes(seconds + 1);
    // }

    // span, img, a, b, u, i, s, sub, sup, 
    // header, nav, article, section, div, h1, p

    return (
        <>
            <div>Stopwatch page</div>
            <div className="stopwatch-face">
                <span className="stopwatch-minutes" ref={minutesEl}>

                </span>
                :
                <span className="stopwatch-seconds" ref={secondsEl}>

                </span>
            </div>
            <div className="stopwatch-buttons">
                <button onClick={start}>Start</button>
                {/* <button onClick={pause}>Pause</button> */}
                <button onClick={reset}>Reset</button>
                {/* <button onClick={lap}>Lap</button> */}
            </div>
        </>
    )


}