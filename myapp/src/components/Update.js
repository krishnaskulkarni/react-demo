/* eslint-disable no-restricted-globals */
import React, { useState } from 'react'


export default function Update() {

    const [text, setText] = useState("enter text here");

    const upperCase = () => {
        var newText = text.toLocaleUpperCase();
        setText(newText);
    }

    const changeIt = () => {
        setText(event.target.value);
    }

    return (
        <>
            <h1>Enter your text below</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={changeIt} id="mybox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mb-3" onClick={upperCase} id="btn">UpperCase</button>

        </>
    )
}
