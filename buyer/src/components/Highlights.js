import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareParking,faCircle} from "@fortawesome/free-solid-svg-icons";
import '../styles/highlights.css'

const Highlights = () => {
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
						<span className="key-icon">4 Parking Spaces</span>
					</div>
					<div className="key">
					<span className="key-icon">full,finished</span>
					</div>
					<div className="key">
						<span className="key-icon">Yes</span>
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
						<span className="key-icon">None</span>
					</div>
					<div className="key">
					<span className="key-icon">235$</span>
					</div>
					<div className="key">
						<span className="key-icon">70 days ago</span>
					</div>
				</div>
			</div>	
		</div>
	);
}
 
export default Highlights;