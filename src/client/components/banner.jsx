import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-flexbox-grid";
import bannerStyles from "../styles/banner.css";
import electrodeLogo from "../images/electrode-logo.svg";
import June from "../images/june.png";

const Banner = () => {
  return (
    <div id={bannerStyles.banner}>
      {/* Electrode Logo */}
      <Grid>
        <Row>
          <Col id="mobile-logo-text" sm={8} smOffset={2} xs={10} xsOffset={1} className={bannerStyles.logoText}>
            <img src={electrodeLogo} alt="Electrode Logo" />
          </Col>
        </Row>
      </Grid>

      {/* Electrode Banner */}
      <Grid>
        <Row>
          <Col id="mobile-slogan" sm={8} smOffset={2} xs={10} xsOffset={1} className={bannerStyles.slogan}>
            <img src={June} alt="June"/>
            <h1>Newsletter</h1>
          </Col>
        </Row>
      </Grid>

      {/* Electrode Banner Info */}
      <Grid>
        <Row>
          <Col sm={8} smOffset={2} xs={10} xsOffset={1} className={bannerStyles.headerInfo}>
            <blockquote>
            It's important to be informed but I also think it's important to be inspired.
            I am creating a space where people can be inspired.
            <br/> --- Daryn Kagan.
            </blockquote>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

Banner.propTypes = {
};

export default Banner;
