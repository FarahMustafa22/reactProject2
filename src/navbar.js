import React from "react";
import { BrowserRouter,Routes,Route,Link,Router } from 'react-router-dom';
import './App.css';
class NavBar extends React.Component{


    render()
    {
        return(
        <div className="nav">
       <div>
            <a href="/"> Home</a>
            <a href="/products"> Poduct</a>
            <a href="/payment"> Payment</a>
            </div>
        </div>);
    }
}

export default NavBar;