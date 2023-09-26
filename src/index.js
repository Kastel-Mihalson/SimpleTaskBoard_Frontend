import React from "react"
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./components/app";
import AuthApiService from './services/auth-api-service'

const root = createRoot(document.getElementById('root'));
// root.render(<App />);

// test
const service = new AuthApiService();
service.getPerson(1).then((body) => {
    console.log(body);
});