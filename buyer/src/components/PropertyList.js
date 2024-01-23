import { Link } from "react-router-dom";
import '../styles/propertylist.css'

const PropertyList = ({properties,title}) => {
	console.log("properties",properties)
  
    return (
        <div className="props-main">
          <h1> All Properties </h1>
          <div className="props-list">
            { properties.map((item) => (
              <div className="preview" key={item.id} >
                <Link to={`/properties/${item.id}`}>
                  <img src={item.cover} alt='property'></img>
                </Link>
              </div>  
            ))}
          </div>
       </div> 
    );  
  }
       
export default PropertyList;