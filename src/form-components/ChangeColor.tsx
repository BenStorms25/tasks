import React, { useState } from "react";
import { Form } from "react-bootstrap";

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
                    style={{ backgroundColor: "red" }}
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
                    style={{ backgroundColor: "white" }}
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
                    style={{ backgroundColor: "magenta" }}
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
                    style={{ backgroundColor: "cyan" }}
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
                    style={{ backgroundColor: "purple" }}
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
                    style={{ backgroundColor: "orange" }}
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
                    style={{ backgroundColor: "green" }}
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
                    style={{ backgroundColor: "blue" }}
                />
            </Form.Group>
            <div
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                <p>You have chosen</p>
                <span>{chosenColor}</span>
            </div>
        </div>
    );
}
