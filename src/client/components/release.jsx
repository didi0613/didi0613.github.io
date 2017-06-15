import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-flexbox-grid";
import releaseAndFactStyles from "../styles/release-and-fact.css";
import ReleaseImg from "../images/release.gif";

const Release = () => {
  return (
    <Col xs={3} xsOffset={2} className={`${releaseAndFactStyles.contentBorder} ${releaseAndFactStyles.release}`}>
      <h2>New Releases</h2>
      <img src={ ReleaseImg } />

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

      <h4>Gitbook</h4>
      <p>
        Gitbook
      </p>
    </Col>
  );
};

Release.propTypes = {
};

export default Release;
