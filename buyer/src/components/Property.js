
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
import {useState, useEffect} from 'react'
import '../styles/property.css'

import { onSnapshot, doc } from "firebase/firestore"
import {db} from '../firebase';


  const Property = () => {
  const [highData, setHighData] = useState([]);
 

  const {id} = useParams(); 

	const {data,isPending,error} = useFetch('http://localhost:8000/properties/'+id);
  

  const docRef = doc(db, "highlights", id)

  useEffect(()=>{

    //get single document from higlights collection in firebase
      onSnapshot(docRef, (doc) => {
        setHighData(doc.data())
      })

    },[docRef])
     
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
          <Highlights data={highData}/>
          <Details id={id}/>
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