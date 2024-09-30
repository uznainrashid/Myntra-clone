import React from "react";
import BagSummary from "../Components/BagSummary";
import BagItems from "../Components/BagItems";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemsIndex = bagItems.indexOf(item.id);
    return itemsIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItems item={item} />
          ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
