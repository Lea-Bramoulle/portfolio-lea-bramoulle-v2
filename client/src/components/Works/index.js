/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import './works.scss';

import { toggleModal } from 'src/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';

function Works() {
  const isOpen = useSelector((state) => state.isOpen);
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  return (
    <section className="portfolio">
      <div className="portfolio__bg">
        <h2 className="portfolio__title">Mes réalisations</h2>
        <div className="portfolio__container">
          <div className="portfolio__card">
            <img src={require('src/assets/images/github.png')} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
          </div>
          <div className="portfolio__card">
            <img src={require('src/assets/images/1.jpg')} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
          </div>

          {
          projects.map((project) => (
            <div key={project.id} className="portfolio__card" onClick={() => dispatch(toggleModal(project.id))}>
              <img src={require(`src/assets/images/${project.img}1.png`)} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
            </div>
          ))
          }
          <div className="portfolio__card">
            <div className="portfolio__card__links">
              <a href="https://github.com/Lea-Bramoulle" target="_blank" className="portfolio__link" rel="noreferrer"><i className="fab fa-github" /> Profile</a>
              <a href="https://www.linkedin.com/in/l%C3%A9a-bramoull%C3%A9-55ba23158/" target="_blank" className="portfolio__link" rel="noreferrer"><i className="fab fa-linkedin-in" /> Profile</a>
              <a href="#" className="portfolio__link" download="CV-lea-bramoulle"><i className="fas fa-arrow-alt-to-bottom" /> CV</a>
            </div>
          </div>
          {isOpen && <Modal />}
        </div>
      </div>
    </section>

  );
}

export default Works;
