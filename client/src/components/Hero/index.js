import './hero.scss';

function Hero() {
  return (
    <section className="hero-main">
      <p className="hero-main__background-title">Hello World</p>
      <div className="hero-main__container">
        <h1 className="hero-main__title">Hello World, <br />I'm <span className="primary-color">Léa</span> <br /> Bramoullé<span className="primary-color">.</span></h1>
        <h2 className="hero-main__subtitle">Développeuse Fullstack JS, spécialisée ReactJs </h2>
      </div>
    </section>
  );
}

export default Hero;
