import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "../styles/home.css";

const ReleasesAndFact = () => {
  return (
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
  );
};

ReleasesAndFact.propTypes = {
};

export default ReleasesAndFact;
