import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [nameAndStatus, setNameAndStatus] = useState<string>(
        "Your Name is a student"
    );
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    useEffect(() => {
        if (isStudent) {
            setNameAndStatus(name + " is a student");
        } else {
            setNameAndStatus(name + " is not a student");
        }
    }, [name, isStudent]);

    return (
        <div>
            <Form.Group>
                <Form.Check
                    type="switch"
                    label="Edit Mode"
                    checked={isEditMode}
                    onChange={(e) => setIsEditMode(e.target.checked)}
                />
                <Form.Label>Name and status:</Form.Label>
                <p>{nameAndStatus}</p>

                {isEditMode ? (
                    <>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                        <Form.Check
                            type="switch"
                            id="is-happy-check"
                            label="is a student?"
                            checked={isStudent}
                            onChange={(e) => setIsStudent(e.target.checked)}
                        />
                    </>
                ) : null}
            </Form.Group>
        </div>
    );
}
