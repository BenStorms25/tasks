import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    const QUESTION_TYPES: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };

    function changeType(): void {
        const newType = QUESTION_TYPES[type];
        setType(newType);
    }

    return (
        <div>
            <button onClick={changeType}>Change Type</button>
            {type == "multiple_choice_question" ? (
                <p>Multiple Choice</p>
            ) : (
                <p>Short Answer</p>
            )}
        </div>
    );
}
