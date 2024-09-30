import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { FetchStatusAction} from "../store/FetchStatusSlice";


const FetchItems = () => {
  const FetchStatus = useSelector((store) => store.FetchStatus);

  const dispatch = useDispatch();
  console.log(FetchStatus);

  useEffect(() => {
    if (FetchStatus.FetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    
    // dispatch(FetchStatusAction.markFetchingStarted());
    fetch("http://localhost:8080/items", {signal})
      .then((res) => res.json())
      .then(({ items }) => {
        // dispatch(FetchStatusAction.markFetchingDone());
        // dispatch(FetchStatusAction.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items));
      });
    return () => {
      controller.abort();
    };
  }, [FetchStatus]);
  return (
    <>
      {/* <div> 
    Fetch Done : {FetchStatus.FetchDone}
    
   </div>FetchingCurrently : {FetchStatus.currentltFetching} */}
    </>
  );
};

export default FetchItems;
