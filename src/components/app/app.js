import React from "react";
import Header from '../header';
import Footer from '../footer';
import Login from "../pages/login";
import './app.css';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Login />
            </main>
            <Footer />
        </>
    );
}

export default App;