import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import '../css/nav.css';

class Navigation extends Component {
    render() {
        return (
            <div className="nav-div">
                <ul className="nav-ul">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/foodlist">Food list</Link>
                    </li>
                    <li>
                        <Link to="/review">Review</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;