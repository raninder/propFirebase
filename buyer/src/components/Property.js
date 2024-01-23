
import useFetch from "../useFetch";
import { useParams } from "react-router";
import Overview from "./Overview";
import Header from "./Header";
import Price from "./Price";
import Similar from "./Similar";
import Highlights from "./Highlights";
import Sidebar from "./Sidebar";
import Details from "./Details";
import Nearby from "./Nearby";
import '../styles/property.css'

// const Property = ({ id, cover,price,location }) => {
  const Property = () => {
  const {id} = useParams(); 
  console.log("id",id)
	const {data,isPending,error} = useFetch('http://localhost:8000/properties/'+id);
  console.log("final data",data)
  return ( 
    <div>
      {isPending && <div>Loading....</div>}
      { error && <div>{error}</div>}
      { data && <Header data={data}/> }
      {data && (
      <div className="main">
        <div className="left">
          <Price data={data} />
          <Overview data={data}></Overview>
          <Highlights />
          <Details />
          <Similar />
          <Nearby />
        </div>
        <div className= "right">
          <Sidebar/>
        </div>
      </div> 
      
      ) } 
    </div>
   );
}
 

export default Property