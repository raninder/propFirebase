
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

import { collection, onSnapshot } from "firebase/firestore"
import {db} from '../firebase';

// const Property = ({ id, cover,price,location }) => {
  const Property = () => {
  const [highData, setHighData] = useState([]);
  const {id} = useParams(); 
  console.log("id",id)
	const {data,isPending,error} = useFetch('http://localhost:8000/properties/'+id);
  
  console.log("final data",data)

  //get data from firebase
  const propRef = collection(db, "highlights")
  
    useEffect (()=> {
      onSnapshot(propRef, snapshot => {
        setHighData(snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }))
      })
    }, [])

    console.log("highdata", highData)

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