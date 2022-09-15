import { Component } from "react";
import dots from "../images/heading-line-dec.png"
import icon from "../images/service-icon-01.png"
import icon2 from "../images/service-icon-02.png"
import icon3 from "../images/service-icon-03.png"
import icon4 from "../images/service-icon-04.png"



class Services extends Component{

    render(){
        return(
            <div className="services" id="service">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 parent" data-aos="fade-up">
                        <h1>Amazing <span>Services &#38; Features</span> For You</h1>
                        <img src={dots}/>
                        <p>if you need the greatest collection of HTML templates for your business,
                             please
                             <br></br>
                              visit<span> TooCSS</span> Blog. If you need to have a contact
                             <br></br> form PHP script,
                              go to<span> our contact</span> page for more information.

                        </p>
                    </div>
                   <div className="row ser">
                    <div className="col-lg-2 col-sm-12 mt-sm-5 " data-aos="fade-right">
                        <img src={icon}/>
                        <h6>App Maintenance</h6 >
                        <p>You are not allowed to redistribute this template ZIP file on any other website.</p>
                        <button>read more</button>
                    </div>
                    <div className="col-lg-2 col-sm-12 mt-sm-5" data-aos="fade-up">
                        <img src={icon2}/>
                        <h6>Rocket Speed of App</h6 >
                        <p>You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.</p>
                        <button>read more</button>
                    </div>
                    <div className="col-lg-2 col-sm-12 mt-sm-5" data-aos="fade-up">
                        <img src={icon3}/>
                        <h6>Multi Workflow Idea</h6 >
                        <p>if this template is beneficial for your work, please support us a little via PayPal. Thank you.</p>
                        <button>read more</button>
                    </div>
                    <div className="col-lg-2 col-sm-12 mt-sm-5" data-aos="fade-left">
                        <img src={icon4}/>
                        <h6>24/7 Help &#38; Support</h6 >
                        <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
                        <button>read more</button>
                    </div>
                    </div>
                </div>
                </div>
          
         
            </div>
        )
    }
}
export default Services