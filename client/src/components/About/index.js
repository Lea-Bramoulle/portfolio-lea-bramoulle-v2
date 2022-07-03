import './about.scss';

import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedCategoryFront, changeSelectedCategoryBack, changeSelectedCategoryOther } from 'src/store/actions';

function About() {
  const selectedLanguagesCategory = useSelector((state) => state.selectedLanguagesCategory);
  const dispatch = useDispatch();

  return (
    <section className="container about">
      <div className="about__left">
        <h2 className="about__left-title">A propos et compétences</h2>
        <p className="about__left-text">Passionnée par le monde de la tech et du digital, et plus particulièrement par le développement web, j’ai décidé d’entamer une reconversion professionnelle pour me former au métier de développeuse Fullstack JS, spécialisée ReactJS.</p>
        <a href="#" className="portfolio__link"><i className="fas fa-arrow-alt-to-bottom" /> Curriculum Vitae</a>
      </div>

      <div className="about__right">
        <div className="about__right--right">
          <h3
            className={selectedLanguagesCategory.name === 'front-end' ? 'about__card-title active-color' : 'about__card-title'}
            onClick={() => dispatch(changeSelectedCategoryFront())}
          >
            #frontEnd
          </h3>
          <h3
            className={selectedLanguagesCategory.name === 'back-end' ? 'about__card-title active-color' : 'about__card-title'}
            onClick={() => dispatch(changeSelectedCategoryBack())}
          >
            #backEnd
          </h3>
          <h3
            className={selectedLanguagesCategory.name === 'other' ? 'about__card-title active-color' : 'about__card-title'}
            onClick={() => dispatch(changeSelectedCategoryOther())}
          >
            #autre
          </h3>
        </div>
        <div className="about__right--left" style={{ transform: `translateY(-${selectedLanguagesCategory.translateY}px)` }}>
          <ul className="about__competences">
            <li><i className="devicon-react-original colored" /> ReactJS</li>
            <li><i className="devicon-redux-original colored" /> Redux</li>
            <li><i className="devicon-sass-original colored" /> Sass</li>
            <li><i className="devicon-html5-plain colored" /> Html5</li>
            <li><i className="devicon-css3-plain colored" /> Css3</li>
            <li><i className="devicon-bootstrap-plain colored" /> Bootstrap</li>
            <li><i className="devicon-bulma-plain colored" /> Bulma</li>
          </ul>
          <ul className="about__competences">
            <li><i className="devicon-javascript-plain colored" /> Javascript</li>
            <li><i className="devicon-nodejs-plain colored" /> Node</li>
            <li><i className="devicon-express-original colored" /> Express</li>
            <li><i className="devicon-ruby-plain colored" /> Ruby</li>
            <li><i className="devicon-rails-plain colored" /> Ruby on Rails</li>
            <li><i className="devicon-postgresql-plain colored" /> PostgreSql</li>
            <li><i className="devicon-mysql-plain colored" /> MySql</li>
          </ul>
          <ul className="about__competences">
            <li><i className="devicon-github-original colored" /> GitHub</li>
            <li><i className="devicon-vscode-plain colored" /> VSCode</li>
            <li><i className="devicon-eslint-original colored" /> Eslint</li>
            <li><i className="devicon-heroku-plain colored" /> Heroku</li>
            <li><i className="devicon-amazonwebservices-original colored" /> Amazon Web Services</li>
            <li><i className="devicon-illustrator-plain colored" /> Adobe Illustrator</li>
            <li><i className="devicon-photoshop-plain colored" /> Adobe Photoshop</li>
            <li><i className="devicon-canva-plain colored" /> Canva</li>
          </ul>
        </div>
      </div>

    </section>
  );
}

export default About;
