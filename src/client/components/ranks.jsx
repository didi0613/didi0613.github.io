import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-flexbox-grid";
import releaseAndFactStyles from "../styles/release-and-fact.css";
import FunFactsImg from "../images/funfacts.gif";

import rank1 from "../images/rank1.png";
import rank2 from "../images/rank2.png";
import rank3 from "../images/rank3.png";
import rank4 from "../images/rank4.png";
import rank5 from "../images/rank5.png";

import Rank from "./rank";

const Ranks = (props) => {
  return (
    <div>
      <h4>
        {props.title}
      </h4>
      <div className={releaseAndFactStyles.rank}>
        <Rank
          rankImg={rank1}
          rankName={props.rank1name}
          rankStats={props.rank1stats}
        />
        <Rank
          rankImg={rank2}
          rankName={props.rank2name}
          rankStats={props.rank2stats}
        />
        <Rank
          rankImg={rank3}
          rankName={props.rank3name}
          rankStats={props.rank3stats}
        />
        <Rank
          rankImg={rank4}
          rankName={props.rank4name}
          rankStats={props.rank4stats}
        />
        <Rank
          rankImg={rank5}
          rankName={props.rank5name}
          rankStats={props.rank5stats}
        />
      </div>
    </div>
  );
};

Ranks.propTypes = {
  title: PropTypes.string,
  rank1name: PropTypes.string,
  rank1stats: PropTypes.string,
  rank2name: PropTypes.string,
  rank2stats: PropTypes.string,
  rank3name: PropTypes.string,
  rank3stats: PropTypes.string,
  rank4name: PropTypes.string,
  rank4stats: PropTypes.string,
  rank5name: PropTypes.string,
  rank5stats: PropTypes.string
};

Ranks.defaultProps = {
  title: "",
  rank1name: "",
  rank1stats: "",
  rank2name: "",
  rank2stats: "",
  rank3name: "",
  rank3stats: "",
  rank4name: "",
  rank4stats: "",
  rank5name: "",
  rank5stats: ""
}

export default Ranks;
