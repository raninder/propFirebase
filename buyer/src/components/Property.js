
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
  const [pending, isPending] = useState(true)
  const [finalData, setFinalData] = useState({});

  const {id} = useParams(); 

  const docRef1 = doc(db, "highlights", id)
  const docRef2 = doc(db, "properties", id)

  useEffect(()=>{

    //get single document from higlights collection in firebase
      onSnapshot(docRef1, (doc) => {
        setHighData(doc.data())
      })

      //get single document from properties collection in firebase
      onSnapshot(docRef2, (doc) => {
        setFinalData(doc.data())
      })
      isPending(false)
    
    },[])
     
  return ( 
    <div>
      {isPending && <div>Loading....</div>}
      {/* { error && <div>{error}</div>} */}
      { finalData && <Header data={finalData}/> }
      {finalData && (
      <div className="main">
        <div className="left">
          <Price data={finalData} />
          <Overview data={finalData}></Overview>
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