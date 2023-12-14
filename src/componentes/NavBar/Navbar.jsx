import CartWidget from "./CartWidget"

const Navbar = () =>{
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">One Piece Store</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Manga</a></li>
            <li><a className="dropdown-item" href="#">OP TCG</a></li>
            <li><a className="dropdown-item" href="#">Figuras</a></li>
          </ul>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
    )
}
export default Navbar