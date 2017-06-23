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
                <p>
                  Electrode team develops and support the Electrode platform that is powering the WalmartLabs eCommerce sites.
                </p>

                <h4>Sheng Di</h4>
                <span className={teamStyles.contentSubtitle}>Software Engineer</span>
                <p>
                  Sheng thrives on finding ways to help consumers on resolving issues, sharing helpful documentations,
                  and always interested in connecting with new people. In her free time, she likes kpop dancing,
                  watching NBAs and attending music concerts.
                </p>

                <h4 className={teamStyles.hightlight}>Joel Chen</h4>
                <span className={`${teamStyles.contentSubtitle} ${teamStyles.hightlight}`}>Principal Architect</span>
                <p className={teamStyles.hightlight}>
                  Joel is the architect and lead of Electrode team. In his free time, he enjoys spending time with
                  his friends and family.
                </p>

                <h4>Animesh Dutta</h4>
                <span className={teamStyles.contentSubtitle}>Software Engineer</span>
                <p>
                  Animesh has been a bay area native for nearly 6 years now. He loves music and road-trips.
                  He likes going to rock concerts and his current bucket list includes Iron-maiden and AC/DC.
                  This year he also started running, and likes to run half marathons at scenic places.
                </p>

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
