import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return(
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>

                </div>
                <div className="item">
                <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                         iusto perspiciatis reprehenderit optio minima ad laudantium enim aut, 
                         fuga eos impedit voluptatum repellat quidem consequatur deserunt cum obcaecati
                          assumenda! Nihil?</span>
                </div>
                <div className="item">
                <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iusto perspiciatis reprehenderit optio minima ad laudantium enim aut, fuga eos impedit voluptatum repellat quidem consequatur deserunt cum obcaecati assumenda! Nihil?</span>
                    </div>

            </div>
                <div className="bottom">
                    <div className="left">
                        <span className="logo">Alien Workshop</span>
                        <span className="copyright">Copyright 2023. All Rights Reserved</span>
                    </div>
                    <div className="right">

                    </div>
                </div>
            
            
        </div>
    )
}

export default Footer