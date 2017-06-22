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

          <h4 className={thoughtsStyles.contentTitle}>Blog Posts & Stats</h4>

          <p className={thoughtsStyles.contentSubTitle}>Posts</p>
          <p>Optimizing HapiJS for Benchmarks: <a target="_blank" href="https://medium.com/@jchipnxd/optimizing-hapijs-for-benchmarks-e37f612670f7">link</a></p>
          <p>webpack optimization: <a target="_blank" href="https://medium.com/@jchipnxd/92b130334b6c">link</a></p>

          <p className={thoughtsStyles.contentSubTitle}>Stats:</p>
          <img className={thoughtsStyles.blog} src={ AlexBlog } alt="" />

          <h4 className={thoughtsStyles.contentTitle}>Feeback</h4>
          <p>
            The Electrode platform allowed us to focus on building Cart and Checkout applications right from day zero,
            so we spent literally no time on create applications boilerplate.
            And a large library of components came as a very nice bonus.
          </p>
          <p className={thoughtsStyles.feedbackAuthor}>--- Walmart Cart & Checkout</p>

          <p>
            I worked with electrode in the Sams on Pangaea initiative and it did exactly what any app platform should do - Let developers focus more on the business logic and take care of the rest of the app's infra. As a consumer, I didn't have to worry about bootstrapping a new app/component or make decisions on what coding standards to use etc. This is highly important for developer productivity and scales well across the org. Electrode also comes along with modules such as electrode-csrf which helps fix security issues across various apps merely by changing their config file to use it. The bundle analyzer is a cool nifty tool as well to help keep our bundle leaner. Keeping up with archetype version also helped me to be up to date with the company and share collective knowledge on how we work on different problems across projects. There are certainly areas that can be improved to make it even better, but I am sure it is just a matter of prioritization and I am excited about the direction in which they are headed to.
          </p>
          <p className={thoughtsStyles.feedbackAuthor}>--- Sam's Club</p>
        </Col>
      </Row>
    </Grid>
  );
};

Thoughts.propTypes = {
};

export default Thoughts;
