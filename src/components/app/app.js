import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Login from '../pages/login'
import Register from '../pages/register'
import Forgot from '../pages/forgot'
import './app.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout'
import Protecter from '../protecter/protecter'

const App = () => {
    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={ <Layout /> }>
                { /* Public routes */ }
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='forgot' element={<Forgot />} />

                { /* Protected routes */ }
                <Route element={ <Protecter /> }>
                    <Route path="/" element={<span>Some main page</span>} />
                    <Route path="profile" element={<span>Profile page. coming soon!</span>} />
                </Route>

                { /* Catch all other */ }
                <Route path="*" element={<span>Page not found</span>} />
            </Route>
        </Routes>
        <Footer />
        </>
    );
}

export default App;