const Intro = () => {
  return (
    <section className="intro">
      <div className="sky">
        <span className="clouds" style={{ "--i": 9 }}></span>
        <span className="clouds" style={{ "--i": 12 }}></span>
        <div className="sun-container">
          <div className="sun"></div>
        </div>

        <span className="clouds" style={{ "--i": 3 }}></span>
        <span className="clouds" style={{ "--i": 7 }}></span>

        <span className="clouds" style={{ "--i": 8 }}></span>
        <div className="intro-heading">
          <p className="kicker">Software developer · Luton, UK</p>
          <h1>Hi, I’m Yusuf.<br />I build useful things for the web.</h1>
          <p className="intro-copy">From thoughtful interfaces to reliable APIs, I enjoy turning an idea into a product people can use.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work</a><a className="button button-secondary" href="https://github.com/majorhaji" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </div>
        <span className="clouds" style={{ "--i": 2 }}></span>

        <span className="clouds" style={{ "--i": 13 }}></span>
        <span className="clouds" style={{ "--i": 10 }}></span>

        <span className="clouds" style={{ "--i": 14 }}></span>
        <span className="clouds" style={{ "--i": 5 }}></span>
      </div>
    </section>
  );
};

export default Intro;
