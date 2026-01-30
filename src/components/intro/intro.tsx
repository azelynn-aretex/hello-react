import { useViewport } from '../../utils';
import './intro.css';

const mountainWidth = 1080 / 15;

function Intro() {
  const viewportSize = useViewport();
  const mountainCount = Math.ceil(viewportSize.width / mountainWidth);
  const mountains = [...Array(mountainCount).keys()];

  return (
    <div className="intro">
      <div className="intro__layer intro__layer--bg">
        <div className="intro__layer intro__layer--bg-front">
          <div className="intro__mountains">
            <div className="intro__mountains-container intro__mountains-container--top">
              {mountains.map(idx => (
                <div
                  key={idx}
                  className="intro__mountain-container"
                  style={{
                    width: mountainWidth,
                    height: Math.random() * 100 + 50
                  }}
                >
                  <div
                    key={idx}
                    className="intro__mountain"
                    style={{
                      transformOrigin: "top",
                      animation: `expand-y 1s var(--out-quint) ${idx * 0.05 + 1}s both`
                    }}
                  >
                  </div>
                </div>
              ))}
            </div>

            <div className="intro__mountains-container intro__mountains-container--bottom">

            </div>
          </div>
        </div>

        <div className="intro__layer intro__layer--bg-back">
          <div className="intro__bg-fill">
            <div className="intro__line"></div>
          </div>
        </div>
      </div>

      <div className="intro__layer intro__layer--fg">
        <div className="intro__layer intro__layer--fg-front">
          <h1 className="intro__title intro__title--hello">HELLO</h1>
          <h1 className="intro__title intro__title--world">WORLD</h1>
        </div>

        <div className="intro__layer intro__layer--fg-back">
          <div className="intro__title-shadow-container intro__title-shadow-container--hello">
            <h2 className="intro__title-shadow-small intro__title-shadow-small--hello">HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO&nbsp;</h2>
            <h1 className="intro__title-shadow intro__title-shadow--hello">HELLO HELLO HELLO HELLO&nbsp;</h1>
          </div>
          <div className="intro__title-shadow-container intro__title-shadow-container--world">
            <h1 className="intro__title-shadow intro__title-shadow--world">WORLD WORLD WORLD WORLD&nbsp;</h1>
            <h2 className="intro__title-shadow-small intro__title-shadow-small--world">WORLD WORLD WORLD WORLD WORLD WORLD WORLD WORLD&nbsp;</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;