import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import '../styles/details.css'

const DetailsProperty = () => {
	return ( 
		<div className="property-container">
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Property</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
			<div className="rooms">
				<div className="rooms1">
					<h5> Parking</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Total Sapces: </span><b> 4</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Features: </span><b className="bdiv2">1 Garage attached, Inside Entrance, Oversized</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Garage Spaces: </span><b>  1</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Covered Spaces: </span><b>1</b></p>
				</div>
				<div className="rooms2">
					<h5> Lot</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Lot Size: </span><b> 3,730 Sqft</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>15.5"x10.8"</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Property</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Levels: </span><b>2</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Frontage Length: </span><b> 39.83</b></p>
				</div>
				<div className="rooms2">
					<h5> Other Information</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Additional Structures Included: </span><b>Storage Shed</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Parcel number: </span><b> 041590009</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Zoning Descripton: </span><b>Residential</b></p>
				</div>
			</div>
		
			
			</Typography>
			</AccordionDetails>
      </Accordion>
		</div>
	);
}
 
export default DetailsProperty;