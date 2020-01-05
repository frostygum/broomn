import React from 'react';

function SideBar( props ) {

  return(
    <div style={{width: "100%", padding: "20px", minHeight: "100vh", transition: "all 0.3s"}}>
      {props.children}
    </div>
  );
}

export default SideBar;