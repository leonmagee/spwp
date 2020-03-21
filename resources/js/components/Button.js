import React from 'react';

function Button(props) {
  const icon = props.icon ? <i className={`fas fa-${props.icon}`}></i> : <></>;
  //const href = props.href ? "href=" + props.href : <></>;
  const target = props.target ? props.target : "_self";
  //const callback = () => {console.log('callback working')};
  const callback = props.callback ? props.callback : () => {};
  return (
    <a href={props.href} onClick={callback} target={target} className={`btn ${props.style}`}>{icon}{props.name}</a>
  )
}

export default Button;
