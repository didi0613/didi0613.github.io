import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "../styles/home.css";
import electrodeLogo from "../images/electrode-logo.svg";

const Banner = () => {
  return (
    <div>
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
    </div>
  );
};

Banner.propTypes = {
};

export default Banner;
