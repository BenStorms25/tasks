import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./ChangeColor.css";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");

    const updateColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setChosenColor(e.target.value);
    };

    return (
        <div>
            <Form.Group>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="red"
                    label="red"
                    value="red"
                    checked={chosenColor === "red"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="white"
                    label="white"
                    value="white"
                    checked={chosenColor === "white"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="magenta"
                    label="magenta"
                    value="magenta"
                    checked={chosenColor === "magenta"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="cyan"
                    label="cyan"
                    value="cyan"
                    checked={chosenColor === "cyan"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="purple"
                    label="purple"
                    value="purple"
                    checked={chosenColor === "purple"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="orange"
                    label="orange"
                    value="orange"
                    checked={chosenColor === "orange"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="green"
                    label="green"
                    value="green"
                    checked={chosenColor === "green"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="blue"
                    label="blue"
                    value="blue"
                    checked={chosenColor === "blue"}
                />
            </Form.Group>
            <div data-testid="colored-box" id={chosenColor}>
                <p>You have chosen</p>
                <span>{chosenColor}</span>
            </div>
        </div>
    );
}
