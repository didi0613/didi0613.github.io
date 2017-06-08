import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import styles from "../styles/home.css";
import { Grid, Row, Col } from 'react-flexbox-grid';
import electrodeLogo from "../images/electrode-logo.svg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={`${styles.containerFluid} ${styles.nightSky}`}>
          <div className={`${styles.headerContent} ${styles.inverseColors}`}>
            {/* Electrode Logo */}
            <Grid>
              <Row>
                <Col id="mobile-logo-text" sm={8} smOffset={2} xs={10} xsOffset={1} className={styles.logoText}>
                  <img src={electrodeLogo} alt="Electrode Logo" />
                </Col>
              </Row>
            </Grid>

            {/* Electrode Banner */}
            <Grid>
              <Row>
                <Col id="mobile-slogan" sm={8} smOffset={2} xs={10} xsOffset={1} className={styles.slogan}>
                  <h1>
                    Monthly Newsletter
                  </h1>
                </Col>
              </Row>
            </Grid>

            {/* Electrode Banner Info */}
            <Grid>
              <Row>
                <Col sm={8} smOffset={2} xs={10} xsOffset={1} className={styles.headerInfo}>
                  It's important to be informed but I also think it's important to be inspired.
                  I am creating a space where people can be inspired. Daryn Kagan.
                </Col>
              </Row>
            </Grid>

            {/* Releases & Fun */}
            <Grid>
              <Row>
                <Col xsOffset={2} xs={3} className={styles.contentBorder}>
                  <h2>
                    New Releases
                  </h2>
                  <p>
                    The latest release of Electrode includes new features & and fixes to make your experience and our product faster and better than ever. See what is new.
                  </p>
                </Col>
                <Col xsOffset={2} xs={3} className={styles.contentBorder}>
                  <h2>
                    Fun Facts
                  </h2>
                  <p>
                    Digest of different Electrode stats, interesting conversations on Electrode Channel, and more.
                  </p>
                </Col>
              </Row>
            </Grid>

            {/* Thoughts */}
            <Grid>
              <Row>
                <Col sm={8} smOffset={2} xs={10} xsOffset={1} className={styles.contentBorder}>
                  <h2>
                    Food For Thoughts
                  </h2>
                  <p>
                    Blog posts, Electrode mentions, case studies, and your feedback.
                  </p>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
