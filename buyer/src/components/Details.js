
import DetailsInterior from './DetailsInterior';
import DetailsProperty from './DetailsProperty';
import '../styles/details.css'
import MaterialAccordion from './MaterialAccordion';
import {useState, useEffect} from 'react';
import { onSnapshot, doc } from "firebase/firestore"
import {db} from '../firebase';


const Details = ({id}) => {
	const [interior, setInterior] = useState([]);
	const [property, setProperty] = useState([]);
	const docRef1 = doc(db,"interior", id);
	const docRef2 = doc(db,"property", id);

	useEffect(()=>{
      
      //get single document from interior collection in firebase
      onSnapshot(docRef1, (doc) => {
        setInterior(doc.data())
      })

			//get single document from property collection in firebase
      onSnapshot(docRef2, (doc) => {
        setProperty(doc.data())
      })
    },[])

	return ( 
		<div className="details-container">
			<h3>Home Details</h3>
			<DetailsInterior data={interior} />
			<DetailsProperty data={property}/>
			<MaterialAccordion />
		</div>
	);
}
 
export default Details;