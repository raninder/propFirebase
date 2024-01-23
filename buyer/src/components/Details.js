
import DetailsInterior from './DetailsInterior';
import DetailsProperty from './DetailsProperty';
import '../styles/details.css'
import MaterialAccordion from './MaterialAccordion';

const Details = () => {
	return ( 
		<div className="details-container">
			<h3>Home Details</h3>
			<DetailsInterior />
			<DetailsProperty />
			<MaterialAccordion />
		</div>
	);
}
 
export default Details;