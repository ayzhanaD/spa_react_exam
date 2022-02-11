import React, {Component} from 'react';
import {Route, NavLink, HashRouter, Routes} from 'react-router-dom';
import table from './images/table.png';
import Home from './components/Home.js';
import Product from './components/Product.js';
import Info from './components/Info.js';

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <div className='title'>
                        <h1>TABLES</h1>
                        <img className="logo" src={table} alt='logo'/>
                    </div>
           
                 <ul className="header">
                    <li><NavLink to="/" style={{color: "#f8dccc"}}>home</NavLink></li>
                    <li><NavLink to="product" style={{color: "#f8dccc"}}>product</NavLink></li>
                    <li><NavLink to="info" style={{color: "#f8dccc"}}>info</NavLink></li>
                </ul>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="product" element={<Product/>}/>
                        <Route path="info" element={<Info/>}/>
                    </Routes>
                
                </div>
             </div>
            </HashRouter>
        );
    }
}



export default Main;