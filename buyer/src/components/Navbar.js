import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell} from "@fortawesome/free-solid-svg-icons";
import '../styles/nav.css'
import { IoIosNotificationsOutline } from "react-icons/io";
import { Avatar } from '@mui/material';

const Navbar = () => {
	return ( 
		<>
      <header>
        <div className='nav-container nav-flex'>
          <div className='navlogo'>
            <img src='https://hosting.renderforestsites.com/21754072/1065231/media/943bd97358ebabb806a8aa1f5a171982.png' alt='' />
          </div>
					<form className="search-form">
            <input  type="search" className="search" placeholder="Search.."/> 
						<FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
						<span className="notif">
						<FontAwesomeIcon className="bell-icon" icon={faBell} size="2x"/>
						<Avatar />
						</span>
						</form>
				</div>
			</header>
		</>			
	 );
}
 
export default Navbar;