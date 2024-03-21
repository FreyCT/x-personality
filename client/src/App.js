import Home from './pages/home';
import Questions from './pages/questions';
import About from './pages/home';
import Header from './components/header/Header';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = (props) => (

    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </div>
)

export default App;
