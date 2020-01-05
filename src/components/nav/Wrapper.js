import React from 'react';

function SideBar( props ) {

  let backgroundColor = "";
  let textColor = "";

  function color() {
    if(props.color === "light") {
      backgroundColor = " bg-light ";
      textColor = " text-dark";
    }
    else if(props.color === "dark") {
      backgroundColor = " bg-dark ";
      textColor = " text-light";
    }
    else {
      backgroundColor = " bg-" + (props.color ? props.color : "dark ");
      textColor = " text-" + (props.light ? "dark " : "light ");
    }
  }

  color();

  return(
    <div className={"d-flex align-items-strech min-vh-100" + backgroundColor + textColor}>
      {props.children}
    </div>
  );
}

export default SideBar;