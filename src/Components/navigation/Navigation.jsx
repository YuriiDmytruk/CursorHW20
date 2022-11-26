import {NavLink} from "react-router-dom";
import "./styles/Navigation.css"

function Navigation() {
    return (
        <div>
        <ul className="header">
            <li className="option"><NavLink className="link" to="/">Home</NavLink></li>
            <li className="option"><NavLink className="link" to="/publication">Publication</NavLink></li>
            <li className="option"><NavLink className="link" to="/galery">Galery</NavLink></li>
            <li className="option"><NavLink className="link" to="/contacts">Contacts</NavLink></li>
          </ul>
      </div>
    );
  }
  
  export default Navigation;