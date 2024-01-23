import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import '../styles/details.css'

const DetailsInterior = () => {
	return ( 
		<div className="interior-container">
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Interior</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
			{/* <h4> Interior</h4> */}
			<div className="rooms">
				<div className="rooms1">
					<h5> Bedrooms & Bathrooms</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Bedrooms: </span><b> 3</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Bathrooms: </span><b>  3</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Partial Bathrooms: </span><b>1</b></p>
				</div>
				<div className="rooms2">
					<h5> Living Room</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>Main</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> 156.22 Sqft</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>15.5"x10.8"</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Recreation room</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>Main</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> 156.22 Sqft</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>15.5"x10.8"</b></p>
				</div>
				<div className="rooms2">
					<h5> Dining Room</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>Main</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> 156.22 Sqft</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>15.5"x10.8"</b></p>
				</div>
			</div>
		
			<div className="rooms">
				<div className="rooms1">
					<h5> Kitchen</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>Main</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> 156.22 Sqft</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>15.5"x10.8"</b></p>
				</div>
				<div className="rooms2">
					<h5> Primary Bedroom</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>Main</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> 156.22 Sqft</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>15.5"x10.8"</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Bedroom</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>Main</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> 156.22 Sqft</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>15.5"x10.8"</b></p>
				</div>
				<div className="rooms2">
					<h5> Bedroom</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>Main</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> 156.22 Sqft</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>15.5"x10.8"</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Basement</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Basement: </span><b>Full,Finished</b></p>
				</div>
				<div className="rooms2">
					<h5> Flooring</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Flooring: </span><b>Carpet W/W & Mixed, Tile</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Heating</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Features: </span><b>Natural Gas, Forced Air</b></p>
				</div>
				<div className="rooms2">
					<h5> Cooling</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Features: </span><b>Central Air Conditioning</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Appliances</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Including:  </span><b className="bdiv1">Dishwasher, Dryer, stove, Refrigerator, Washer</b></p>
				</div>
				<div className="rooms2">
					<h5> Interior Features</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Windows: </span><b>Drapes, Blinds</b></p>
				</div>
			</div>
			</Typography>
			</AccordionDetails>
      </Accordion>
		</div>
	);
}
 
export default DetailsInterior;