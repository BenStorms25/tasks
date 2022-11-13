import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Color } from "react-bootstrap/esm/types";

interface ColorProps {
    colors: string[];
    setIndex: (newIndex: number) => void;
    index: number;
}

function ChangeColor(props: ColorProps): JSX.Element {
    return (
        <Button
            onClick={() =>
                props.setIndex((1 + props.index) % props.colors.length)
            }
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ colors, setIndex, index }: ColorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: `${colors[index]}`,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colors, setColors] = useState<string[]>(["red", "blue", "green"]);
    const [index, setIndex] = useState<number>(0);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {colors[index]}</span>
            <div>
                <ChangeColor
                    colors={colors}
                    setIndex={setIndex}
                    index={index}
                ></ChangeColor>
                <ColorPreview
                    colors={colors}
                    index={index}
                    setIndex={setIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
