import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectorShopDirectoryCollection } from "../../redux/selectors/shopSelector";
import "./CollectionPage.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection[0];
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items
          ? items.map(item => <CollectionItem key={item.id} item={item} />)
          : ""}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectorShopDirectoryCollection(
    ownProps.match.params.collectionId
  )(state)
});

export default connect(mapStateToProps)(CollectionPage);
