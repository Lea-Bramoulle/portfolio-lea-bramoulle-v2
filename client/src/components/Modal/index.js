/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../store/actions';

import './modal.scss';

function Modal() {
  const selectedProjectId = useSelector((state) => state.selectedProject);
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const project = projects.find((element) => element.id === selectedProjectId);

  return (
    <>
      <div className="darkBG" onClick={() => dispatch(toggleModal())} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <img src={require(`src/assets/images/${project.img}2.png`)} className="modal-img" alt="Github Profile Lea-Bramoulle" />
          </div>
          <button type="button" className="closeBtn" onClick={() => dispatch(toggleModal())}>
            <i className="fas fa-times" />
          </button>
          <div className="modalContent">
            <h2 className="heading">{project.name}</h2>
            <p>{project.description}</p>
            <h3 className="heading mtb">Technos utilisées</h3>
            <div className="technos-container">
              {
                project.technos.map((techno) => (
                  <p className="techno-item"><i className={`devicon-${techno.shortName}-plain colored`} /> {techno.name}</p>
                ))
              }
            </div>
            {
                project.disclaimer !== null
                  ? <p className="disclaimer">/!\ {project.disclaimer}</p>
                  : ''
              }
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              {
                project.githubLink !== null
                  ? <a href={`${project.githubLink}`} className="portfolio__link" target="_blank" rel="noreferrer"><i className="fab fa-github" /> Repository</a>
                  : ''
              }
              {
                project.websiteLink !== null
                  ? <a href={`${project.websiteLink}`} className="portfolio__link" target="_blank" rel="noreferrer"><i className="fas fa-external-link" /> Site web</a>
                  : ''
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
