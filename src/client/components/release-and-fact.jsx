import React from "react";
import PropTypes from "prop-types";

import { Grid, Row } from "react-flexbox-grid";
import releaseAndFactStyles from "../styles/release-and-fact.css";

import Release from "./release";
import FunFacts from "./facts";

const ReleasesAndFact = () => {
  return (
    <Grid id={releaseAndFactStyles.releaseAndFact}>
      <Row>
        {/* New Releases*/ }
        <Release />

        {/* Fun Facts */}
        <FunFacts />
      </Row>
    </Grid>
  );
};

ReleasesAndFact.propTypes = {
};

export default ReleasesAndFact;
