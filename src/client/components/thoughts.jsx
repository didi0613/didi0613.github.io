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

          <p><a target="_blank" href="https://medium.com/@jchipnxd/optimizing-hapijs-for-benchmarks-e37f612670f7">Optimizing HapiJS for Benchmarks</a></p>

          <h4 className={thoughtsStyles.contentTitle}>Case Studies</h4>
          <p>Tempo Core</p>
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
