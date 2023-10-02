import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Login from '../pages/login'
import Register from '../pages/register'
import Forgot from '../pages/forgot'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.css';

const App = () => {
    return (
        <>
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<h2>Main</h2>} />  
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot" element={<Forgot />} />
                </Routes>
            </main>
            <Footer />
        </Router>
        </>
    );
}

export default App;