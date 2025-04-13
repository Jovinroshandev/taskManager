import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/login';
import Signup from './pages/signup';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
function Main(){
    const [data,setData] = useState([
            {
                id:1,
                uname:"jovin",
                upassword:"123"
            }
        ])
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login data={data}/>}></Route>
                    <Route path="/signup" element={<Signup data={data} setData={setData} />}></Route>
                    <Route path="/dashboard" element={<App/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
// root.render(<App />);

