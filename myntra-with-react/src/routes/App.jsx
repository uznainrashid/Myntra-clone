;

import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FetchItems from "../Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";




function App() {
  const FetchStatus = useSelector((store) => store.FetchStatus);
 
  return (
    <>
      <Header></Header>
      <FetchItems/>
      {FetchStatus.currentlyFetching ? <LoadingSpinner/> :   <Outlet></Outlet> }
     
    
      <Footer></Footer>
    </>
  );
}

export default App;
