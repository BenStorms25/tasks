import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    let [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        if (inProgress) {
            setInProgress(false);
        }
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <button onClick={startQuiz} disabled={inProgress}>
                Start Quiz
            </button>
            <button onClick={stopQuiz} disabled={!inProgress || attempts === 0}>
                Stop Quiz
            </button>
            <button onClick={mulligan} disabled={inProgress && attempts != 0}>
                Mulligan
            </button>
            <p>{attempts}</p>
        </div>
    );
}
