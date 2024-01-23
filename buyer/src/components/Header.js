// import pic1 from '../images/pic1.jpeg';
// import pic2 from '../images/pic2.jpeg';
// import pic3 from '../images/pic3.jpeg';
import '../styles/header.css'
import {useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareNodes, faCircle} from "@fortawesome/free-solid-svg-icons";

const Header = ({data}) => {
  // const [showCarousel, setShowCarousel] = useState(false)
  const navigate = useNavigate();
  
  const handleClick = () => {
    // console.log("images....",imagesProp1)
    // e.preventDefault()
    navigate('/images')
  }

	return ( 
		<>
      <div className='content grid5 mtop'>
          <div className='box' >
            <img className="img1" src={data.cover} alt='' />
            <button className="viewBtn1"> 
            <FontAwesomeIcon icon={faCircle} /> 3D Walkthrough 
            </button> 
            <button className="viewBtn2"> 
            <FontAwesomeIcon icon={faCircle} /> Street View
            </button> 
            <div className="img-div">
						  <img className="img2" src={data.img2} alt='' />
              {/* <div className="img3-container"> */}
						    <img className="img3" src={data.img3} alt=''/>
                <button className="img-button" onClick = {handleClick}> See all 36 images </button> 
              <div className="like-icons">
              <FontAwesomeIcon className="hicon" icon={faHeart} size="lg"/>
              <FontAwesomeIcon className="hicon" icon={faShareNodes} size="lg"/>
              <FontAwesomeIcon className="hicon" icon={faCircle} />
              </div>
              {/* </div> */}
            </div>
          </div>
      </div>
    </>
	 );
}
 
export default Header;