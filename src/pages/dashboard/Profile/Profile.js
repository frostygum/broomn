import React from 'react';
import { Link } from 'react-router-dom';

function Profile( props ) {
  
  // let { url } = useRouteMatch();

  return(
    <div>
      <h1>Profile</h1>
      <Link to={"/dashboard"}>to home</Link>
      {/* <p>{props.location.pathname}</p> */}
    </div>
  );
}

export default Profile;