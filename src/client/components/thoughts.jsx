import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "../styles/home.css";
import thoughtsStyles from "../styles/thoughts.css";

import thoughts from "../images/thoughts.png";

const Thoughts = () => {
  return (
    <Grid id={thoughtsStyles.thoughts}>
      <Row>
        <Col sm={8} smOffset={2} xs={10} xsOffset={1} className={`${thoughtsStyles.thoughtsBorder} ${thoughtsStyles.feedback}`}>
          <h2>Food For Thoughts</h2>
          <img src={ thoughts } alt="" />

          <h4 className={thoughtsStyles.contentTitle}>Blog Posts</h4>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>

          <h4 className={thoughtsStyles.contentTitle}>Tempo Core</h4>
          <p>
            <a target="_blank" href="https://gecgithub01.walmart.com/electrode/tempo-core">tempo-core </a> version 8 release is a major refactor that fixes many hidden problems.
            <br />Key wins are:
            <br />
              － A reduction of 100K in your app's JS bundle<br />
            － Properly refreshed quimby fallback static data<br />
          － No more huge resource draining but useless file system quimby cache
          </p>

          <h4 className={thoughtsStyles.contentTitle}>Feeback</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
        </Col>
      </Row>
    </Grid>
  );
};

Thoughts.propTypes = {
};

export default Thoughts;
