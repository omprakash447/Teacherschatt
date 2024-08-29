import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from "./Components/Homepage/Homepage";
import Teacherspage from "./Components/Teacherschatt/Teacherspage";

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Homepage / > }
        /> <
        Route path = "/teacher/:name"
        element = { < Teacherspage / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;