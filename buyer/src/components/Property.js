
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
import { useLocation } from 'react-router-dom'


  const Property = () => {
  const [highData, setHighData] = useState([]);
  const [isPending, setIsPending] = useState(true)

  let {id} = useParams(); 
  const location = useLocation()
  const { data } = location.state

  //filter document data from properties collection based on id
  const filtered = data.filter((ele) => ele.id === id )
  const obj = {...filtered[0]}
	
  const docRef1 = doc(db, "highlights", id)
  // const docRef2 = doc(db, "properties", id)

  useEffect(()=>{

    //get single document from higlights collection in firebase
      onSnapshot(docRef1, (doc) => {
        setHighData(doc.data())
      })
      // onSnapshot(docRef2, (doc) => {
      //   setFinalData(doc.data())
      // })
      setIsPending(false)
    },[])
     
  return ( 
    <div>
      {isPending && <div>Loading....</div>}
      { data && <Header data={obj}/> }
      {data && (
      <div className="main">
        <div className="left">
          <Price data={obj} />
          <Overview data={obj}></Overview>
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