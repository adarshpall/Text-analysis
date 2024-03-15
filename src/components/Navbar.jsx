import React from 'react'

export default function Navbar(props) {
  
  return (
  
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/adarsh-pal-64038424a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">{props.title}</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li> */}
          <li className="nav-item dropdown" >
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul className="dropdown-menu" id="drop">
               <li><a className="dropdown-item" href="">Used to analyze and change case of words</a></li> 
              <li><a className="dropdown-item" href="/">Created on 15 march 2024 <strong>Adarsh pal</strong></a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="https://en.wikipedia.org/wiki/Text_mining">Click to know more</a></li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">{props.about}</a>
          </li> */}
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input"  onClick={props.change} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><strong>Click to change theme</strong></label>
</div>
       {/* { <form className="d-flex" role="search"> } */}
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        {/* </form> */}
        {/* < div className="d-flex">
<div className="bg-primary rounded mx-2" onClick={()=>{props.change('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
<div className="bg-dark rounded mx-2" onClick={()=>{props.change('dark')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
<div className="bg-success rounded mx-2" onClick={()=>{props.change('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
<div className="bg-warning rounded mx-2" onClick={()=>{props.change('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
<div className="bg-light rounded mx-2" onClick={()=>{props.change('light')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
<div className="bg-danger rounded mx-2" onClick={()=>{props.change('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        </div> */}
      </div>
    </div>
  </nav>
  
  </>
  );
}
