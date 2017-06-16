import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-flexbox-grid";

const Rank = (props) => {
  return (
    <Row>
      <Col><img src={props.rankImg} /></Col>
      <Col xs><p>{props.rankName}</p></Col>
      <Col xs><p>{props.rankStats}</p></Col>
    </Row>
  );
};

Rank.propTypes = {
  rankImg: PropTypes.string,
  rankName: PropTypes.string,
  rankStats: PropTypes.string
};

Rank.defaultProps = {
  rankImg: "",
  rankName: "",
  rankStats: ""
}

export default Rank;
