import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>();

    const updateAnswer = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setAnswer(e.target.value);
    };

    return (
        <div>
            <Form.Group controlId="favoriteColors">
                <Form.Label>Select the answer</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((color: string) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer.toString() ? "✔️" : "❌"}
        </div>
    );
}
