import { CiPlay1, CiFacebook } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaTwitter  } from "react-icons/fa";
import '../styles/footer.css'

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
         </svg>
      </div>
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
      <img className = "mobile"  src= 'https://s3-alpha-sig.figma.com/img/8b9b/cab7/6878ae0b42d8961105fa4679f4afc0cc?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fwwt6PLyLhUXMRZ6BGk82WHxxaw8b7jWUTQLcsn9i-oMAKT4NQwGU~Ir2HM86IYpXcw~C5DA3oINZRvQ8bmtmZh~CnalpZqDMRrc8cXLVgCFUtzrQjpvBpu6flZkrWywUk3JeQOy5L1hr9rdpDDdfEAtu6TdzPhLbo-PuREuJKOKkhZTiCLmSX57W1wMFfKHS6WWfkePdMfBMPPmb1eWbL0P-tQjCMetbdrYLBKt91~8bo9egvI-X0RYjj-VJ67aT5lkwUKaTIAkYt8GZMbck-Z59ZJ7ia0CBy3kLDQr-fODI7diL0lhaec-HNXg0VIGdNmYjZzNNvfsiuZ9V4ABmw__' alt='mobile' />
    </div>
   );
}
 
export default Footer;
