import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import '../styles/details.css'

const DetailsInterior = ({data}) => {
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
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Bedrooms: </span><b> {data.bed}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Bathrooms: </span><b>  {data.bath}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Partial Bathrooms: </span><b>{data.partial_bath}</b></p>
				</div>
				<div className="rooms2">
					<h5> Living Room</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>{data.l_level}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> {data.l_area}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>{data.l_dim}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Recreation room</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>{data.r_level}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> {data.r_area}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>{data.r_dim}</b></p>
				</div>
				<div className="rooms2">
					<h5> Dining Room</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>{data.d_level}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> {data.d_area}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>{data.d_dim}</b></p>
				</div>
			</div>
		
			<div className="rooms">
				<div className="rooms1">
					<h5> Kitchen</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>{data.k_level}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> {data.k_area}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>{data.k_dim}</b></p>
				</div>
				<div className="rooms2">
					<h5> Primary Bedroom</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>{data.pb_level}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> {data.pb_area}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>{data.pb_dim}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Bedroom</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>{data.b1_level}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> {data.b1_area}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>{data.b1_dim}</b></p>
				</div>
				<div className="rooms2">
					<h5> Bedroom</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Level: </span><b>{data.b2_level}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Area: </span><b> {data.b2_area}</b></p>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Dimesnsions: </span><b>{data.b2_dim}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Basement</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Basement: </span><b>{data.basement}</b></p>
				</div>
				<div className="rooms2">
					<h5> Flooring</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Flooring: </span><b>{data.flooring}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Heating</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Features: </span><b>{data.heating}</b></p>
				</div>
				<div className="rooms2">
					<h5> Cooling</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Features: </span><b>{data.cooling}</b></p>
				</div>
			</div>

			<div className="rooms">
				<div className="rooms1">
					<h5> Appliances</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Including:  </span><b className="bdiv1">{data.appliances}</b></p>
				</div>
				<div className="rooms2">
					<h5> Interior Features</h5>
					<p><FontAwesomeIcon icon={faCircle} /><span className="align">Windows: </span><b>{data.windows}</b></p>
				</div>
			</div>
			</Typography>
			</AccordionDetails>
      </Accordion>
		</div>
	);
}
 
export default DetailsInterior;