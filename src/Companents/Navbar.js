import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
    return (

            <nav>
                <ul>
                    <li>
                      <Link to="/">Ex1 </Link>
                    </li>
                    <li>
                        <Link to="/ex2"> Ex2 </Link>
                    </li>
                    <li>
                        <Link to="/ex3"> Ex3 </Link>
                    </li>
                    <li>
                        <Link to="/ex4"> Ex4 </Link>
                    </li>
                    <li>
                        <Link to="/ex5"> Ex5 </Link>
                    </li>

                </ul>
            </nav>


    );
}

export default Navbar;