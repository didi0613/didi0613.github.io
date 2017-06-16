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

      <h4>New Open Source Component Archetype</h4>
      <p>
        <a target="_blank" href="https://github.com/electrode-io/electrode/tree/master/packages/electrode-archetype-react-component">Electrode Component Archetype</a> helps developers to quickly build react components.
          Recently, electrode team made a significant restructure to the component directory using Lerna to manage component structure.
          With the new structure you can have multiple components inside of package directory and a single demo app to test all the components.
          Generally you keep one component in one repo, but you can have multiple smaller components that complement each other.

        <br /><br />In addition, we moved demo-server to a directory outside of the packages, imported components from packages and demoed components through demo app.
          If you want to try out the latest electrode component, please generate them by the latest <a target="_blank" href="https://github.com/electrode-io/electrode/tree/master/packages/generator-electrode"> electrode-generator.</a>
      </p>

      <h4>
        Eletrode Generator
      </h4>
      <p>
        Electrode provides developers with generators that generate an electrode application or component for them.
        The Open source generator generator-electrode contains an application generator yo electrode, a component generator yo electrode:component.
        With the new archetype structure, there is a generator specifically for adding more components to an existing repoyo electrode:component-add.
        <br /><br />The same functionality is extended by the walmart electrode generator @walmart/ generator-wml-electrode.
        This generator provides functionality specific to walmart such as adding a swapi-client to your app using yo @walmart/wml-electrode:add-swapi-client.
        Check out the latest generator by installing them using npm install -g @walmart/generator-wml-electrode.
      </p>

      <h4>Gitbook</h4>
      <p>
        Gitbook is a modern customizable documentation format and toolchain using Git and Markdown.
        <br /><br />Electrode team released a new version of documentations <a target="_blank" href="https://electrode.gitbooks.io/electrode/content/"> here </a>, hosted by gitbook for writing and hosting electrode official documentations.
        It can be used either on your computer for building local books or on GitBook.com for hosting them.
      </p>
    </Col>
  );
};

Release.propTypes = {
};

export default Release;
