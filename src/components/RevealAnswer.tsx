import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <button onClick={flipVisibility}>Reveal Answer</button>
            {visible ? <p>42</p> : <p></p>}
        </div>
    );
}
