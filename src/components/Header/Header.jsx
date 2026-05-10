import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import logo from "../../assets/react.svg";

import "./Header.css";

export const Header = () => {
    return ( 
        <header>
            <div className="logo-container">
                <Link to={"/"}> 
                    <p>Clases de baile</p>
                </Link>
            </div>

            <Nav />
            
        </header>
    );
}