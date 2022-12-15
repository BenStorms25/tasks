import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);

    const increaseAttempts = () => {
        setAttempts(requested + attempts);
    };

    const decreaseAttempts = () => {
        setAttempts(attempts - 1);
    };

    return (
        <div>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        event.preventDefault();
                        if (isNaN(parseInt(event.target.value))) {
                            setRequested(0);
                        } else {
                            setRequested(parseInt(event.target.value));
                        }
                    }}
                />
                <button onClick={increaseAttempts}>gain</button>
                <button disabled={attempts === 0} onClick={decreaseAttempts}>
                    use
                </button>
            </Form.Group>
            <p>{attempts}</p>
        </div>
    );
}
