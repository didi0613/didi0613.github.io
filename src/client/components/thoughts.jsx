import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "../styles/home.css";
import thoughtsStyles from "../styles/thoughts.css";

import ThoughtsImg from "../images/thoughts.png";
import AlexBlog from "../images/alex-blog.png";

const Thoughts = () => {
  return (
    <Grid id={thoughtsStyles.thoughts}>
      <Row>
        <Col sm={8} smOffset={2} xs={10} xsOffset={1} className={`${thoughtsStyles.thoughtsBorder} ${thoughtsStyles.feedback}`}>
          <h2>Food For Thoughts</h2>
          <img src={ ThoughtsImg } alt="" />

          <h4 className={thoughtsStyles.contentTitle}>Blog Posts</h4>
          <p>Alex Blog Stats:</p>
          <img className={thoughtsStyles.blog} src={ AlexBlog } alt="" />

          <h4 className={thoughtsStyles.contentTitle}>Tempo Core</h4>
          <p>
            <a target="_blank" href="https://gecgithub01.walmart.com/electrode/tempo-core">Tempo-core </a> version 8 release is a major refactor that fixes many hidden problems.
            Key wins include a reduction of 100K in your app's JS bundle, Properly refreshed quimby fallback static data and
              no more huge resource draining but useless file system quimby cache.
          </p>

          <h4 className={thoughtsStyles.contentTitle}>Feeback</h4>
          <p>
            The Electrode platform allowed us to focus on building Cart and Checkout applications right from day zero,
            so we spent literally no time on create applications boilerplate.
            And a large library of components came as a very nice bonus.
          </p>
          <p className={thoughtsStyles.feedbackAuthor}>--- Sergey Chebykin</p>
        </Col>
      </Row>
    </Grid>
  );
};

Thoughts.propTypes = {
};

export default Thoughts;
