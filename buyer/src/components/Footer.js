import { CiPlay1, CiFacebook } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaTwitter  } from "react-icons/fa";
import '../styles/footer.css'

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="content">
        <h3>Get the App now</h3>
        <p className="stores">
          <button><CiPlay1 />Playstore </button>
          <button><FaApple />Applestore </button>
        </p>
        <div className='box'>
          <div className='logo'>
            <img src='https://hosting.renderforestsites.com/21754072/1065231/media/943bd97358ebabb806a8aa1f5a171982.png' alt='' />
          </div>
					<div className="links">
          <div className="box1">
            <h3>Our Markets</h3>
            <ul>
              <li>Toronto</li>
              <li>Ottawa</li>
              <li>Vancouver</li>
              <li>Victoria</li>
              <li>Kelowna</li>
              <li>Peteborough</li>
              <li>Etobicoke</li>
              <li>Winnipeg</li>
            </ul>
          </div>

          <div className="box1">
            <h3>Resources</h3>
            <ul>
              <li>Media Inquiries</li>
              <li>Search homes</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Agents</li>
            </ul>
          </div>

          <div className="box1">
            <h3>Connect</h3>
            <div className="box12">
              <ul>
                <li><CiFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaTiktok /></li>
                <li><FaTwitter /> </li>
              </ul>
              <ul>
                <li>Facebook</li>
                <li>Instagarm</li>
                <li>Tiktok</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
					</div>  
        </div>
      </div>
      <img className = "mobile"  src= 'https://www.reso.com.au/static/c0f90c726df9a97816fd4e3573ed6edd/f8d9b/home-agent-dashboard.png' alt='mobile' />
    </div>
   );
}
 
export default Footer;
