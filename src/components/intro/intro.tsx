import { motion, stagger } from 'motion/react';
import { useViewport } from '../../utils';
import './intro.css';

const mountainWidth = 1080 / 15;

const mountainContainerVariant = {
  hidden: {},
  show: { transition: {
    staggerChildren: 0.03,
  }}
};

const mountainContainerInverseVariant = {
  hidden: {},
  show: { transition: {
    staggerChildren: 0.03,
    staggerDirection: -1
  }}
};

const mountainVariant = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1 },
};

function getMountainContainerStyle() {
  return {
    width: mountainWidth,
    height: Math.random() * 100 + 50
  };
}

function Intro() {
  const viewportSize = useViewport();
  const mountainCount = Math.ceil(viewportSize.width / mountainWidth);
  const mountains = [...Array(mountainCount).keys()];

  return (
    <div className="intro">
      <div className="intro__layer intro__layer--bg">
        <div className="intro__layer intro__layer--bg-front">
          <div className="intro__mountains">
            <motion.div
              className="intro__mountains-container intro__mountains-container--top"
              variants={mountainContainerVariant}
              initial="hidden"
              animate="show"
            >
              {mountains.map(idx => (
                <div
                  key={idx}
                  className="intro__mountain-container"
                  style={getMountainContainerStyle()}
                >
                  <motion.div
                    variants={mountainVariant}
                    className="intro__mountain intro__mountain--top"
                  >
                  </motion.div>
                </div>
              ))}
            </motion.div>

            <div className="intro__mountains-container intro__mountains-container--bottom">
              <motion.div
                className="intro__mountains-container intro__mountains-container--bottom"
                variants={mountainContainerInverseVariant}
                initial="hidden"
                animate="show"
              >
                {mountains.map(idx => (
                  <div
                    key={idx}
                    className="intro__mountain-container"
                    style={getMountainContainerStyle()}
                  >
                    <motion.div
                      variants={mountainVariant}
                      className="intro__mountain intro__mountain--bottom"
                    >
                    </motion.div>
                  </div>
                ))}
              </motion.div>
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