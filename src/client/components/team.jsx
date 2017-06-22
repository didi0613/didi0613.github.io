import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "../styles/home.css";
import teamStyles from "../styles/team.css";

import teamImg from "../images/team.jpg";

const Team = () => {
  return (
    <Grid id={teamStyles.team}>
      <Row>
        <Col className={teamStyles.thoughtsBorder} sm={8} smOffset={2} xs={10} xsOffset={1}>
          <h2 className={teamStyles.title}>Meet Our Team</h2>
            <Row className={teamStyles.content}>
              <Col xs className={teamStyles.contentLeft}>
                <img src={teamImg} />
                <p>(From left to right: Sheng, Joel, Animesh)</p>
              </Col>
              <Col xs className={teamStyles.contentRight}>
                <h4>Sheng Di</h4>
                <p className={teamStyles.contentSubtitle}>Software Engineer</p>
                <p>I am Sheng </p>

                <h4>Joel Chen</h4>
                <p className={teamStyles.contentSubtitle}>Distinguished Engineer</p>
                <p>I am the archetype and lead of Electrode team.</p>

                <h4>Animesh Dutta</h4>
                <p>Joel is the architect and lead of Electrode team</p>
               </Col>
            </Row>
        </Col>
      </Row>
    </Grid>
  );
};

Team.propTypes = {
};

export default Team;
