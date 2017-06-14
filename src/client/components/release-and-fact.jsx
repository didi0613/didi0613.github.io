import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-flexbox-grid";
import releaseAndFactStyles from "../styles/release-and-fact.css";

import Release from "../images/release.gif";

const ReleasesAndFact = () => {
  return (
    <Grid id={releaseAndFactStyles.releaseAndFact}>
      <Row>
        <Col xs={3} xsOffset={2} className={`${releaseAndFactStyles.contentBorder} ${releaseAndFactStyles.release}`}>
          <img src={ Release } />
          <h2>New Releases</h2>
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
            Eletrode Generator
          </h4>
          <p>
            Electrode provides developers with generators that generate an electrode application or component for them. The Open source generator generator-electrode contains an application generator yo electrode, a component generator yo electrode:component . With the new archetype structure, there is a generator specifically for adding more components to an existing repoyo electrode:component-add.
            The same functionality is extended by the walmart electrode generator @walmart/ generator-wml-electrode. This generator provides functionality specific to walmart such as adding a swapi-client to your app using yo @walmart/wml-electrode:add-swapi-client. Check out the latest generator by installing them using npm install -g @walmart/generator-wml-electrode.
          </p>
        </Col>
        <Col xs={3} className={`${releaseAndFactStyles.contentBorder} ${releaseAndFactStyles.fact}`}>
          <img src={"http://4.bp.blogspot.com/-V6fDG4Lr-wU/TjGSYM3kPNI/AAAAAAAABF0/7T2YJ0ov8Kw/s1600/DidYouKnow_title.gif"} />
          <h2>Fun Facts</h2>
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

          <h4>
            How long does it take to land on the ground when skydiving?
          </h4>
          <p>
            Freefall lasts about sixty seconds, depending a lot on body-weight, surface area, and a number of other factors. You will then have about five minutes under canopy to enjoy the view and the ride. In Chicagoland Skydiving Center's Super Twin Otter, it takes only about 12 - 15 minutes to get to 14,500 feet.
          </p>
        </Col>
      </Row>
    </Grid>
  );
};

ReleasesAndFact.propTypes = {
};

export default ReleasesAndFact;
