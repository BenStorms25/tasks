import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { disposeEmitNodes } from "typescript";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
} 

export function TwoDice(): JSX.Element {
    const [dieLeft, setDieLeft] = useState<number>(d6());
    const [dieRight, setDieRight] = useState<number>(d6());

    while (dieLeft == dieRight) {
        setDieLeft(d6());
    }

    function rollLeft(): void {
        setDieLeft(d6());
    }

    function rollRight(): void {
        setDieRight(d6());
    }

    return (
        <div>
            <span data-testid="left-side">{dieLeft}</span>
            <span data-testid="right-side">{dieRight}</span>

            <button onClick={rollLeft}>Roll Left</button>
            <button onClick={rollRight}>Roll Right</button>

            {dieLeft == dieRight ? <p>Lose</p> : <p>Win</p>}
        </div>
    );
}
