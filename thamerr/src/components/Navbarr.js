



export default function Navbarr() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary m-auto shadow">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SOCIAL BOOK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex me-auto" role="search">
        
        <button className="btn btn-outline-success" type="submit">Sig Up</button>
      </form>
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Log In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

  )
}
