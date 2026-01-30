import { motion } from 'motion/react';
import { easeOutQuint, useViewport } from '../../utils';
import './intro.css';

const openingDuration = 1;

const mountainWidth = 1080 / 15;

const mountainContainerVariant = {
  hidden: {},
  show: { transition: {
    delayChildren: openingDuration,
    staggerChildren: 0.03,
  }}
};

const mountainContainerInverseVariant = {
  ...mountainContainerVariant,
  show: {
    ...mountainContainerVariant.show,
    transition: {
      ...mountainContainerVariant.show.transition,
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
          <motion.h1
            className="intro__title intro__title--hello"
            initial={{ opacity: 0, y: "20%", letterSpacing: "-0.5em" }}
            animate={{ opacity: 1, y: "0%", letterSpacing: "0.2em" }}
            transition={{ duration: 1, delay: openingDuration, ease: easeOutQuint }}
          >
            HELLO
          </motion.h1>
          <motion.h1
            className="intro__title intro__title--world"
            initial={{ opacity: 0, y: "-20%", letterSpacing: "-0.5em" }}
            animate={{ opacity: 1, y: "0%", letterSpacing: "0.2em" }}
            transition={{ duration: 1, delay: openingDuration + 0.5, ease: easeOutQuint }}
          >
            WORLD
          </motion.h1>
        </div>

        <div className="intro__layer intro__layer--fg-back">
          <motion.div
            className="intro__title-shadow-container intro__title-shadow-container--hello"
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 2, delay: openingDuration, ease: easeOutQuint }}
          >
            <h2 className="intro__title-shadow-small intro__title-shadow-small--hello">HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO&nbsp;</h2>
            <h1 className="intro__title-shadow intro__title-shadow--hello">HELLO HELLO HELLO HELLO&nbsp;</h1>
          </motion.div>
          <motion.div
            className="intro__title-shadow-container intro__title-shadow-container--world"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 2, delay: openingDuration + 0.5, ease: easeOutQuint }}
          >
            <h1 className="intro__title-shadow intro__title-shadow--world">WORLD WORLD WORLD WORLD&nbsp;</h1>
            <h2 className="intro__title-shadow-small intro__title-shadow-small--world">WORLD WORLD WORLD WORLD WORLD WORLD WORLD WORLD&nbsp;</h2>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Intro;