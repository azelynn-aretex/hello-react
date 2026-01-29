import './intro.css';

function Intro() {
  return (
    <div className="intro">
      <div className="intro__layer intro__layer--bg">
        <div className="intro__bg-fill">
          <div className="intro__line"></div>
        </div>
      </div>

      <div className="intro__layer intro__layer--fg">
        <div className="intro__layer intro__layer--fg-front">
          <h1 className="intro__title intro__title--hello">HELLO</h1>
          <h1 className="intro__title intro__title--world">WORLD</h1>
        </div>

        <div className="intro__layer intro__layer--fg-back">
          <div className="intro__title-shadow-container intro__title-shadow-container--hello">
            <h1 className="intro__title-shadow intro__title-shadow--hello">HELLO HELLO HELLO HELLO&nbsp;</h1>
          </div>
          <div className="intro__title-shadow-container intro__title-shadow-container--world">
            <h1 className="intro__title-shadow intro__title-shadow--world">WORLD WORLD WORLD WORLD&nbsp;</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;