import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-flexbox-grid";
import releaseAndFactStyles from "../styles/release-and-fact.css";
import FunFactsImg from "../images/funfacts.gif";

import rank1 from "../images/rank1.png";
import rank2 from "../images/rank2.png";
import rank3 from "../images/rank3.png";

const FunFacts = () => {
  return (
    <Col xs={3} className={`${releaseAndFactStyles.contentBorder} ${releaseAndFactStyles.fact}`}>
      <h2>Fun Facts</h2>
      <img src={FunFactsImg} />

      <h4>
        Most Code Addtions:
      </h4>

      <p className={releaseAndFactStyles.rank}>
        <Row>
          <Col xs><img src={rank1} /> checkout</Col>
          <Col xs>14990</Col>
        </Row>
        <Row>
          <Col xs><img src={rank2} />article</Col>
          <Col xs>14,048</Col>
        </Row>
        <Row>
          <Col xs><img src={rank3} />home</Col>
          <Col xs>10,096</Col>
        </Row>
        <Row>
          <Col xs>ow-checkout</Col>
          <Col xs>3,605</Col>
        </Row>
        <Row>
          <Col xs>product</Col>
          <Col xs>3,004</Col>
        </Row>
      </p>

      <h4>
        What does moon smells like?
      </h4>
      <p>
        Moon Dust Smells Like Spent Gunpowder. Today I found out Moon dust smells like spent gunpowder. This is according to the astronauts that have had the opportunity to smell fresh Moon dust that had been tracked into the lunar module after excursions out on the surface of the Moon.
      </p>

      <h4>
        Are comets made of ice?
      </h4>
      <p>
        They are composed of rock, dust, ice and frozen gases such as carbon monoxide, carbon dioxide, methane, and ammonia. Sometimes called dirty snowballs, recent studies have shown that the ice of a comet is covered by a crust. Comets also contain a variety of organic compounds as well as the gases already mentioned.
      </p>

      <h4>
        How long does it take to land on the ground when skydiving?
      </h4>
      <p>
        Freefall lasts about sixty seconds, depending a lot on body-weight, surface area, and a number of other factors. You will then have about five minutes under canopy to enjoy the view and the ride. In Chicagoland Skydiving Center's Super Twin Otter, it takes only about 12 - 15 minutes to get to 14,500 feet.
      </p>
    </Col>
  );
};

FunFacts.propTypes = {
};

export default FunFacts;
