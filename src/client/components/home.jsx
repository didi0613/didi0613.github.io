import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import styles from "../styles/home.css";

import Banner from "./banner";
import ReleasesAndFact from "./release-and-fact";
import Team from "./team";
import Thoughts from "./thoughts";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={`${styles.containerFluid} ${styles.nightSky}`}>
          <div className={`${styles.headerContent} ${styles.inverseColors}`}>
            {/* Electrode Banner */}
            <Banner />

            {/* Releases and Fun Facts */}
            <ReleasesAndFact />

            {/* Meet The Team */}
            <Team />

            {/* Thoughts */}
            <Thoughts />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
