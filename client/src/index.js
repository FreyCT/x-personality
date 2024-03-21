import App from './app/App';
// import { Header } from './components/components';
import Home from './pages/home';
import Questions from './pages/home';
import About from './pages/home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App>
            <BrowserRouter>
                {/* <Header></Header> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </App>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
