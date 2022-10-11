import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                aria-label="heading"
                style={{ background: "red" }}
                className="App-header"
            >
                COS420 with React Hooks and TypeScript with Ben
            </header>
            <h2>This is a smaller header</h2>
            <img
                src="../assets/images/pet-ada.jpg"
                alt="A picture of my dog Ada"
            />
            <ul>
                <li>Item one</li>
                <li>Item two</li>
                <li>Item three</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World!</p>
        </div>
    );
}

export default App;
