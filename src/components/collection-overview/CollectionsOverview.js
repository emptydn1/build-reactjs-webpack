import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectorShopCollections } from "../../redux/selectors/shopSelector";
import "./CollectionsOverview.scss";
import CollectionPreview from "../collection-preview/CollectionPreview";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectorShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
