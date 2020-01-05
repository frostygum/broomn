import React from 'react';
import { Link } from 'react-router-dom';

function Home( props ) {
  
  return(
    <div>
      <h1>Home</h1>
      <Link to={"/dashboard/profile"}>to profile</Link>
    </div>
  );
}

export default Home;