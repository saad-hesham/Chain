import { Component } from "react";
import image from "../images/slider-dec.png"
import AOS from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

class Header extends Component{
    componentDidMount() {
        AOS.init({
          duration : 2000
        });
      }
    render(){
        return(
            <div className="Header" id="home">
         <div className="container">
             <div className="row">
             <div className="col-lg-6 header-left " data-aos="fade-right">
                 <div>
            
                 <h1>Get The Latest App From App Stores</h1>
                 <p>Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.</p>
                 <button>Free quote <FontAwesomeIcon icon={faApple} /></button>
                 <button>Free quote <FontAwesomeIcon icon={faGooglePlay} /></button>
                 </div>
             </div>
             <div className="col-lg-6 wow header-right" data-aos="fade-left" ><img src={image} className="img-fluid"/></div>
             </div>
         </div>
                
            </div>
        )
    }
}
export default Header