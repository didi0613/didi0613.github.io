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

const FunFacts = () => {
  return (
    <Col xs={3} className={`${releaseAndFactStyles.contentBorder} ${releaseAndFactStyles.fact}`}>
      <h2>Fun Facts</h2>
      <img src={FunFactsImg} />

      <h4>
        Most Code Addtions:
      </h4>
      <div className={releaseAndFactStyles.rank}>
        <Row>
          <Col xs><img src={rank1} /><p>checkout</p></Col>
          <Col xs><p>14,990</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank2} /><p>article</p></Col>
          <Col xs><p>14,048</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank3} /><p>home</p></Col>
          <Col xs><p>10,096</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank4} /><p>ow-checkout</p></Col>
          <Col xs><p>3,605</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank5} /><p>product</p></Col>
          <Col xs><p>3,004</p></Col>
        </Row>
      </div>

      <h4>
        Most Commits:
      </h4>
      <div className={releaseAndFactStyles.rank}>
        <Row>
          <Col xs><img src={rank1} /><p>back-to-school</p></Col>
          <Col xs><p>68</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank2} /><p>grocery-electrode</p></Col>
          <Col xs><p>62</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank3} /><p>gop-bath-migration</p></Col>
          <Col xs><p>58</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank4} /><p>checkout</p></Col>
          <Col xs><p>47</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank5} /><p>ow-checkout</p></Col>
          <Col xs><p>33</p></Col>
        </Row>
      </div>

      <h4>
        Time For Commits:
      </h4>
      <div className={releaseAndFactStyles.rank}>
        <Row>
          <Col xs><img src={rank1} /><p>checkout</p></Col>
          <Col xs><p>169 commits, Thurdays, 4PM</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank2} /><p>product</p></Col>
          <Col xs><p>108 commits, Monday, 3PM </p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank3} /><p>grocery-redux</p></Col>
          <Col xs><p>78 commits, Thursday, 11PM</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank4} /><p>cart</p></Col>
          <Col xs><p>71 commits, Tuesday, 2PM</p></Col>
        </Row>
        <Row>
          <Col xs><img src={rank5} /><p>collections</p></Col>
          <Col xs><p>46 commits, Wednesday, 3PM</p></Col>
        </Row>
      </div>
    </Col>
  );
};

FunFacts.propTypes = {};

export default FunFacts;
