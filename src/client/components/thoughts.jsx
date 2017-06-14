import React from "react";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "../styles/home.css";
import thoughtsStyles from "../styles/thoughts.css";

const Thoughts = () => {
  return (
    <Grid id={thoughtsStyles.thoughts}>
      <Row>
        <Col sm={8} smOffset={2} xs={10} xsOffset={1} className={`${thoughtsStyles.thoughtsBorder} ${thoughtsStyles.feedback}`}>
          <h2>Food For Thoughts</h2>
          <img src={"https://cdn2.iconfinder.com/data/icons/gunther/128/thoughts-128.png"} alt="" />

          <h4 className={thoughtsStyles.contentTitle}>Blog posts</h4>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <h4 className={thoughtsStyles.contentTitle}>Electrode mentions</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even slightly believable. <br />
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
            middle of text. <br /> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
            making this the first true generator on the Internet. <br /> It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. <br />
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
          <h4 className={thoughtsStyles.contentTitle}>case studies</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
            ollege in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
            and going through the cites of the word in classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
            by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
          <h4 className={thoughtsStyles.contentTitle}>feeback</h4>
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
