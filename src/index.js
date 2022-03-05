import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Guidelines from "./routes/GuidelinesPage";
import Freedomwall from "./routes/FreedomwallPage";
import Blogs from "./routes/BlogPage";
import About from "./routes/AboutPage";

import SubmissionPage from "./routes/SubmissionPage"

ReactDOM.render( 
<BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path='/guidelines' element={<Guidelines />} />
        <Route path='/Freedomwall' element={<Freedomwall />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/freedomwall/submission' element={<SubmissionPage />} />
  
    </Routes>
</BrowserRouter>,

document.getElementById('root'))