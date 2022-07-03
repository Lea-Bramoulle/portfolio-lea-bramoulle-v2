import './navbar.scss';

function Navbar() {
  return (
    <header className="header">
      <div className="header__logo">
        <span>Mon Portfolio.</span>
      </div>
      <div className="header__nav">
        <ul className="header__nav-list">
          <li><a href="#" className="nav__btn-active">Accueil</a></li>
          <li><a href="#" className="nav__btn"> Compétences</a></li>
          <li><a href="#" className="nav__btn"> Réalisations</a></li>
          <li><a href="#" className="nav__btn"> Contact</a></li>
          <li><a href="#" className="nav__btn-cv"> Curriculum Vitae <i className="fas fa-arrow-to-bottom" /></a></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
