
import DetailsInterior from './DetailsInterior';
import DetailsProperty from './DetailsProperty';
import '../styles/details.css'
import MaterialAccordion from './MaterialAccordion';
import {useState, useEffect} from 'react';
import { onSnapshot, doc } from "firebase/firestore"
import {db} from '../firebase';


const Details = ({id}) => {
	const [interior, setInterior] = useState([]);
	const docRef = doc(db,"interior", id);

	useEffect(()=>{
      
      //get single document from bednbath subcollection, interior collection in firebase
      onSnapshot(docRef, (doc) => {
        setInterior(doc.data())
      })

    },[docRef])

	return ( 
		<div className="details-container">
			<h3>Home Details</h3>
			<DetailsInterior data={interior} />
			<DetailsProperty />
			<MaterialAccordion />
		</div>
	);
}
 
export default Details;