import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "../styles/home.css";

const Thoughts = () => {
  return (
    <Grid>
      <Row>
        <Col sm={8} smOffset={2} xs={10} xsOffset={1} className={`${styles.contentBorder} ${styles.feedback}`}>
          <h2>
            Food For Thoughts
          </h2>
          <p>
            Blog posts, Electrode mentions, case studies, and your feedback.
          </p>
        </Col>
      </Row>
    </Grid>
  );
};

Thoughts.propTypes = {
};

export default Thoughts;
