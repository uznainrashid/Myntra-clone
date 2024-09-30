import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  const FoundElement = bagItems.indexOf(item.id) >= 0;

  const dispatch = useDispatch();
  const AddToHandle = () => {
    dispatch(bagActions.addTobag(item.id));
  };
  const RemoveToHandle = () => {
    dispatch(bagActions.removeTobag(item.id));
  };
  return (
    <div>
      <div className="item-container">
        <img className="item-image zoom" src={item.image} alt="hello" />
        <div className="ratings">
          {item.rating.stars} ⭐| {item.rating.count}
        </div>
        <div className="comapny-name">{item.company} </div>
        <div className="item-name">{item.item_name}</div>
        <div className="pricing">
          <span className="current-price">Rs{item.current_price}</span>
          <span className="original-price">Rs{item.original_price}</span>
          <span className="OFF">({item.discount_percentage}% OFF)</span>
        </div>
        {FoundElement ? (
          <button type="button" className="btn Bag-button btn-danger" onClick={RemoveToHandle}>
            Remove To Bag <AiFillDelete />
          </button>
        ) : (
          <button
            type="button"
            className=" btn  Bag-button btn-success "
            onClick={AddToHandle}
          >
            Add To Bag <IoMdAddCircleOutline />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeItem;
