import './formations.scss';

function Formations() {
  return (
    <section className="formations">
      <h2 className="formations__title">Mes Diplômes.</h2>
      <div className="formations__container">
        <div className="formations__card">
          <h3 className="formations__card__title">Formation Développeur Fullstack JS</h3>
          <h4 className="formations__card__subtitle">O'Clock</h4>
          <span className="formations__card__span">2022</span>
        </div>
        <div className="formations__card">
          <h3 className="formations__card__title">Formation Fullstack Ruby & RoR</h3>
          <h4 className="formations__card__subtitle">The Hacking Projet </h4>
          <span className="formations__card__span">2019</span>
        </div>
        <div className="formations__card">
          <h3 className="formations__card__title">Master Marketing & Data Mining</h3>
          <h4 className="formations__card__subtitle">Montpellier Management</h4>
          <span className="formations__card__span">2018 - 2019</span>
        </div>
        <div className="formations__card">
          <h3 className="formations__card__title">Licence d'Economie et de Gestion</h3>
          <h4 className="formations__card__subtitle">Faculté d'Economie</h4>
          <span className="formations__card__span">2015 - 2018</span>
        </div>
      </div>
    </section>
  );
}

export default Formations;
