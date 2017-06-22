import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-flexbox-grid";
import releaseAndFactStyles from "../styles/release-and-fact.css";
import FunFactsImg from "../images/funfacts.gif";

import rank1 from "../images/rank1.png";
import rank2 from "../images/rank2.png";
import rank3 from "../images/rank3.png";
import rank4 from "../images/rank4.png";
import rank5 from "../images/rank5.png";

import Ranks from "./ranks";

const FunFacts = () => {
  return (
    <Col xs={3} className={`${releaseAndFactStyles.contentBorder} ${releaseAndFactStyles.fact}`}>
      <h2>Fun Facts</h2>
      <img src={FunFactsImg} />

      <Ranks
        title="Most Code Addtions:"
        rank1name="checkout"
        rank1stats="14,990"
        rank2name="article"
        rank2stats="14,048"
        rank3name="home"
        rank3stats="10,096"
        rank4name="ow-checkout"
        rank4stats="3,605"
        rank5name="product"
        rank5stats="3,004"
      />

      <Ranks
        title="Most Commits:"
        rank1name="back-to-school"
        rank1stats="68"
        rank2name="grocery-electrode"
        rank2stats="62"
        rank3name="gop-bath-migration"
        rank3stats="58"
        rank4name="checkout"
        rank4stats="47"
        rank5name="ow-checkout"
        rank5stats="33"
      />

      <Ranks
        title="Time For Commits:"
        rank1name="checkout"
        rank1stats="169 commits, Thurday, 4PM"
        rank2name="gproduct"
        rank2stats="108 commits, Monday, 3PM"
        rank3name="grocery-redux"
        rank3stats="78 commits, Thursday, 11AM"
        rank4name="cart"
        rank4stats="71 commits, Tuesday, 2PM"
        rank5name="collections"
        rank5stats="46 commits, Wednesday, 3PM"
      />

    <p>* All the stats are for the last two weeks</p>
    </Col>

  );
};

FunFacts.propTypes = {};

export default FunFacts;
