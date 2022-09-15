import { Component } from "react";
import logo from "../images/white-logo.png"

class Footer extends Component{

    render(){
        return(
            <div className="footer" style={{marginTop:"10em"}} id="news">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
              <h1>Join Our Mailing List To Receive The News &#38;<br></br> Latest Trends</h1>
              <form>
                  <input type="text" placeholder="Email Adress..."/>
                  <input type="submit" value="Subscribe Now"/>
              </form>

                        </div>
                        <div className="row footer-row">
                        <div className="col-lg-3" >
                            <h2>Contact Us</h2>
                            <p>
                            Rio de Janeiro - RJ, 22795-008, Brazil<br></br>
                            010-020-0340<br></br>
                            info@company.co
                            </p>
                        </div>
                    <div className="col-lg-3">
                        <h2>About us</h2>
                        <div  style={{display:"flex"}}>
                        <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Pricing</a></li>
                        </ul>
                        <ul>
                      
                        <li><a href="#">About</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Pricing</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h2>About us</h2>
                        <div  style={{display:"flex"}}>
                        <ul>
                        <li><a href="#">Free Apps</a></li>
                        <li><a href="#">App Engine</a></li>
                        <li><a href="#">Programming</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">App News</a></li>
                        </ul>
                        <ul>
                      
                        <li><a href="#">App Dev Team</a></li>
                        <li><a href="#">Digital Web</a></li>
                        <li><a href="#">Normal Apps</a></li>
                        </ul>
                        </div>
                    </div>  
                    <div className="col-lg-3" >
                    <h3> About Our Company</h3>
                    <img src={logo} style={{marginTop:"1em",marginBottom:"1em   "}}/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                    </div>
                    </div>
                    <footer style={{textAlign:"center", color:"white",lineHeight:"2em"}} >Copyright © 2022 Chain App Dev Company. All Rights Reserved.<br></br>
Design: <a href="https://templatemo.com/">TemplateMo</a> Built By:S.Hesham</footer>
                    </div>
                    
                </div>
                
            </div>
        )
    }

}
export default Footer