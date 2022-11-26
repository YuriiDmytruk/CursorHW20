import {useLocation} from 'react-router-dom'

function User() {
    const location = useLocation();
    return (
        <div>
        <h1>
            <p>{location.state.firstName}</p>
            <p>{location.state.lastName}</p>
            <p>{location.state.phone}</p>
            <p>{location.state.gender}</p>
        </h1>
      </div>
    );
  }
  
  export default User;