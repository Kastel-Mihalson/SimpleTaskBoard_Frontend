import React from "react"
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./components/app";
import { AuthProvider } from "./contexts/auth-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = createRoot(document.getElementById('root'));

root.render(
    <Router>
        <AuthProvider>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </AuthProvider>
    </Router>
);