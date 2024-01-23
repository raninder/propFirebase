import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking, faBicycle, faBus} from "@fortawesome/free-solid-svg-icons";
import '../styles/overview.css'

const Overview = ({data}) => {
	return (
		<div className="overview-container">
			<div className="overview-heading">
				<h3>Overview</h3>
				
				<div className="mls">
					<input type="text" value="MLS#A1165993" readOnly></input>
					<input type="text" value="Brokerage BHHS EWM Realty" readOnly></input>
				</div>
			</div>
  
			<p className="overview-content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga inventore, deserunt modi mollitia quo vero nulla, distinctio sunt error esse rerum quia incidunt eligendi dolores obcaecati sed optio ducimus.
			</p>
			<br/>
			<hr/>
			<br/>
			<h3>Getting Around</h3>
			<div className="score">
				<div className="walk">
					<div className="icon">
						<FontAwesomeIcon icon={faPersonWalking} size="3x"/>
					</div>
					<div className="walkscore">
						<div>Walk Score</div>
						<div>70/100</div>
					</div>	
				</div>
			
				<div className="walk">
					<div className="icon">
						<FontAwesomeIcon icon={faBicycle} size="3x"/>
					</div>
					<div className="walkscore">
						<div>Bike Score</div>
						<div>83/100</div>
					</div>	
				</div>
			
				<div className="walk">
					<div className="icon">
						<FontAwesomeIcon icon={faBus} size="3x"/>
					</div>
					<div className="walkscore">
						<div>Bus Score</div>
						<div>88/100</div>
					</div>
				</div>
			</div>	
		
		</div>
	);
}
 
export default Overview;