import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-flexbox-grid";
import releaseAndFactStyles from "../styles/release-and-fact.css";
import ReleaseImg from "../images/release.gif";

const gitbookURL = "https://docs.electrode.io/";
const wmlGitbookURL = "http://gitbook.qa.walmart.com/books/electrode-dev-guide/";
const componentArchetypeIRL = "https://github.com/electrode-io/electrode/tree/master/packages/electrode-archetype-react-component";
const generatorURL = "https://github.com/electrode-io/electrode/tree/master/packages/generator-electrode";
const tempoCoreURL = "https://gecgithub01.walmart.com/electrode/tempo-core";

const Release = () => {
  return (
    <Col xs={3} xsOffset={2} className={`${releaseAndFactStyles.contentBorder} ${releaseAndFactStyles.release}`}>
      <h2>New Releases</h2>
      <img src={ ReleaseImg } />

        <h4>Gitbook</h4>
        <p>
          Gitbook is a modern customizable documentation format and toolchain using Git and Markdown.
          <br /><br />We recently converted our <a target="_blank" href={gitbookURL}> open source documentation </a> to the gitbook format and hosted on their servers.
            You can access it anywhere with a browser. We also have an internal server hosting our
            <a target="_blank" href={gitbookURL}> internal documentation </a> that's in gitbook format as well.
        </p>

      <h4>New Component Archetype</h4>
      <p>
        <a target="_blank" href={componentArchetypeIRL}>Electrode Component Archetype</a> helps developers to quickly build React components.
          Recently, electrode team significantly restructured the component directory using Lerna to manage the repo.
          Now you can have multiple components in the packages directory and a single demo app to test all of them.
          Generally you keep one component in one repo, but you can have multiple smaller components that complement each other.
          Demo-app has replaced demo-server that used to be inside each component.
          <br />
          If you want to try out the latest electrode component, please generate them by the latest
          <a target="_blank" href={generatorURL}> electrode-generator.</a>
      </p>

      <h4>
        Electrode Generator
      </h4>
      <p>
        We now have the yeoman generators for creating your new applications or components. We also have internal wml-generators that will create wml specific apps and components.
        With the new archetype structure, there is a generator specifically for adding more components to an existing repo.
        The internal generator also provides adding a swapi-client to your app.
        Check out the latest generator <a target="_blank" href={generatorURL}> here.</a>.
      </p>

      <h4>Tempo Core</h4>
      <p>
        <a target="_blank" href={tempoCoreURL}>Tempo-core </a> version 8 release is a major refactor that fixes many hidden problems.
        Key wins include a reduction of 100K in your app's JS bundle, properly refreshed quimby fallback static data, and the
        removal of the redundant file system fallback cache that drains a lot of resources.
      </p>
    </Col>
  );
};

Release.propTypes = {
};

export default Release;
