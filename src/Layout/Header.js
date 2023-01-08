import HeaderCard from "../Cart/HeaderCard";
const Header=(props)=>{

    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    
     <HeaderCard Toggle={props.Toggle}/>
    </div>
  </div>
</nav>
        </div>
    )
}

export  default Header;