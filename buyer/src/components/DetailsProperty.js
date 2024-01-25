import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import '../styles/details.css'

const DetailsProperty = ({data}) => {
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
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Total Sapces: </span><b> {data.t_spaces}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Features: </span><b className="bdiv2">{data.features}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Garage Spaces: </span><b>  {data.g_spaces}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Covered Spaces: </span><b>{data.c_spaces}</b></p>
				</div>
				<div className="rooms2">
					<h5> Lot</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Lot Size: </span><b> {data.lot_size}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>{data.lot_dim}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Property</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Levels: </span><b>{data.levels}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Frontage Length: </span><b> {data.frontage}</b></p>
				</div>
				<div className="rooms2">
					<h5> Other Information</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Additional Structures Included: </span><b>{data.additional}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Parcel number: </span><b> {data.parcel_no}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Zoning Descripton: </span><b>{data.zoning}</b></p>
				</div>
			</div>
		
			
			</Typography>
			</AccordionDetails>
      </Accordion>
		</div>
	);
}
 
export default DetailsProperty;