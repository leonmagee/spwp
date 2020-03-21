import React from 'react';

function Button(props) {
  const icon = props.icon ? <i className={`fas fa-${props.icon}`}></i> : <></>;
  return (
    <button className={`btn ${props.style}`}>{icon}{props.name}</button>
  )
}

export default Button;
