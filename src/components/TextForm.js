import React, { useState } from 'react'


export default function TextForm(props) {
    const UppercaseOnClick = () => {
        console.log("Uppercase Button Click")
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase", "success");
    }
    const LowercaseOnClick = () => {
        console.log("Lowercase Button Click")
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lowercase", "success");
    }

    const ClearOnClick = () => {
        console.log("Clear Button Click")
        let newtext = '';
        setText(newtext);
        props.showAlert("text cleared", "success");
    }
    const CamelCaseOnClick = () => {
        console.log("Camel Case Button Click")
        let newtext = camelCase(text);
        setText(newtext);
        props.showAlert("converted to Camelcase on words", "success");
    }



    function camelCase(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (str, index) {
            return index === 0 ? str.toLowerCase() : str.toUpperCase();
        }).replace(/\s+/g, ' ');
    }



    const showChange = (event) => {
        console.log("Show Changes on Textarea")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    <p>{props.mode}</p>
                    <textarea className="form-control" value={text} onChange={showChange} style={{ backgroundColor: props.mode === 'dark' ? '#808080' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={UppercaseOnClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={LowercaseOnClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={ClearOnClick}>Clear Text</button>

                <button className="btn btn-primary mx-1" onClick={CamelCaseOnClick}>Convert to Camel Case</button>

                {/* <button className="btn btn-primary mx-1" onClick={SetAccendingOderOnClick}>Convert to List</button> */}
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <b>Read Estimation Time: </b>  {Math.floor(1 * text.split(" ").length / 60)} Minutes and {Math.floor(1 * text.split(" ").length % 60)} Seconds


                <h2>Preview</h2>
                <p> {text}</p>
            </div>
        </>
    )
}
