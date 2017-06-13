import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-flexbox-grid";
import releaseAndFactStyles from "../styles/release-and-fact.css";

const ReleasesAndFact = () => {
  return (
    <Grid id={releaseAndFactStyles.releaseAndFact}>
      <Row>
        <Col xs={3} xsOffset={2} className={releaseAndFactStyles.contentBorder}>
          <h2>
            New Releases
          </h2>
          <h4>New Component Archetype</h4>
          <p>
            Electrode Component Archetype helps developers to quickly build react components.
            Recently, electrode team released a new component archetype which applied by Lerna structure to manage and demo components separately.
            With the new structure, developers are no longer facing chicken-egg issues caused by demoing and testing react component within component itself.
            <br />In the latest Electrode Component Archetype structure, we removed demo-server,
            imported components from packages and demoed components through demo app.
            We keep providing babel, eslint, karma and webpack config files as before, files can be found under config folder.
            If you want to try out the latest electrode component, please generate them by the latest electrode-generator.
          </p>
          <h4>
            Lorem Ipsum
          </h4>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>
        <Col xs={3} className={`${releaseAndFactStyles.contentBorder} ${releaseAndFactStyles.leftOffset}`}>
          <h2>
            Fun Facts
          </h2>
          <h4>
            How many teeth does cow have?
          </h4>
          <p>
            Cow's teeth are different from ours. On the top front, cows have a tough pad of skin instead of teeth. They have 8 incisors on the bottom front and 6 strong molars on the top and bottom of each side to grind their food. Cows have a total of 32 teeth.
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
        </Col>
      </Row>
    </Grid>
  );
};

ReleasesAndFact.propTypes = {
};

export default ReleasesAndFact;
