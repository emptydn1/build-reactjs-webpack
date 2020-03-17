import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";
import { createStructuredSelector } from "reselect";
import { slectorDirectorySections } from "../../redux/selectors/directorySelector";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: slectorDirectorySections
});

export default connect(mapStateToProps)(Directory);
