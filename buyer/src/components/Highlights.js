import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareParking,faCircle} from "@fortawesome/free-solid-svg-icons";
import '../styles/highlights.css'

const Highlights = ({data}) => {
	console.log("props data", data[0].parking);
	return (
		<div className="highlights-container">
			<h3> Home Highlights</h3>
			<div className="highlights-content">
				<div className="column1">
					<div className="key">
						<FontAwesomeIcon icon={faSquareParking} /><span className="key-icon">Parking</span>
					</div>
					<div className="key">
						<FontAwesomeIcon icon={faCircle} /><span className="key-icon">Basement</span>
					</div>
					<div className="key">
						<FontAwesomeIcon icon={faCircle} /><span className="key-icon">Cooling</span>
					</div>
				</div>

				<div className="column2">
					<div className="key">
						<span className="key-icon">{data[0].parking}</span>
					</div>
					<div className="key">
					<span className="key-icon">{data[0].basement}</span>
					</div>
					<div className="key">
						<span className="key-icon">{data[0].cooling}</span>
					</div>
				</div>

				<div className="column3">
					<div className="key">
						<FontAwesomeIcon icon={faCircle} /><span className="key-icon">HOA</span>
					</div>
					<div className="key">
						<FontAwesomeIcon icon={faCircle} /><span className="key-icon">Price/Sqft</span>
					</div>
					<div className="key">
						<FontAwesomeIcon icon={faCircle} /><span className="key-icon">Listed</span>
					</div>
				</div>

				<div className="column4">
					<div className="key">
						<span className="key-icon">{data[0].HOA}</span>
					</div>
					<div className="key">
					<span className="key-icon">{data[0].price}</span>
					</div>
					<div className="key">
						<span className="key-icon">{data[0].listed}</span>
					</div>
				</div>
			</div>	
		</div>
	);
}
 
export default Highlights;