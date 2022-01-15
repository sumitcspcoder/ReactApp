import './App.css';
// import About from './components/About';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


let name = "Sumit";
function App() {

  const [mode, setMode] = useState('light') // states for DARK MODE  
  const [alert, setAlert] = useState(null) // states for ALERT MESSAGES

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  // const modeGreen = () => {

  // }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");

      // setInterval(() => {
      //   document.title = 'visit cspcoder'
      // }, 2000);

      // setInterval(() => {
      //   document.title = ''
      // }, 1000);
      // setInterval(() => {
      //   document.title = '(1) New Message'
      // }, 3000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (

    // <Router>
    <div className='container'>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {/* modeGreen={modeGreen} */}
      <Alert alert={alert} />

      {/* <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below ' mode={mode} />}></Route>
        </Routes> */}
      <TextForm showAlert={showAlert} heading='Enter the text to analyze below ' mode={mode} />

    </div>
    // </Router>

  );
}

export default App;




// const [multiMode, setMultiMode] = useState({ green: 'green', red: 'red', blue: 'blue', gray: 'gray' }) // multi color mode
//   const [alert, setAlert] = useState(null) // states for ALERT MESSAGES

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//       setAlert(null);
//     }, 3000);
//   }

//   const toggleMultiMode = (selectMode) => {
//     if (multiMode.green == selectMode) {

//       setMode('#043718');
//       document.body.style.backgroundColor = "#017d10";

//     }
//     else if (multiMode.red == selectMode) {
//       document.body.style.backgroundColor = "red";
//     }
//     else if (multiMode.blue == selectMode) {
//       document.body.style.backgroundColor = "blue";
//     }
//     else if (multiMode.gray == selectMode) {
//       document.body.style.backgroundColor = "gray";
//     }
//   }


// 1. change color mode 
// 2. remove empty space from text