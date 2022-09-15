import { Component } from "react";
import image1 from "../images/about-right-dec.png"
import image2 from "../images/heading-line-dec.png"


class About extends Component{

    render(){
        return(
            <div>
          <div className="about" style={{marginTop:"10em"}} id="about">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8"  >
                      <div>
                      <h1 data-aos="fade-right">About <span>What We Do</span> &#38; Who We Are</h1>
                      <img src={image2} data-aos="fade-right"/>
                      <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
                      <div className="row" >
                          <div className="block" data-aos="fade-right">
                              <h4>Maintance Problems</h4>
                              <p>Lorem Ipsum Text</p>
                          </div>

                          <div className="block" data-aos="fade-left">
                              <h4>24/7 Support &#38; Help</h4>
                              <p>Lorem Ipsum Text</p>
                          </div>


                          <div className="block" data-aos="fade-right">
                              <h4>Fixing Issues About</h4>
                              <p>Lorem Ipsum Text</p>
                          </div>


                          <div className="block" data-aos="fade-left">
                              <h4>Co. Development</h4>
                              <p>Lorem Ipsum Text</p>
                          </div>
                      </div>
                      <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing magna.</p>
                      <button data-aos="fade-right">Start 14-Day Free Trial</button>
                  </div>
                  </div>

                  <div className="col-lg-4">
                      <img src={image1} className="img-fluid" data-aos="fade-left"/>
                      
                  </div>
              </div>
              </div>
          </div>
         
            </div>
        )
    }
}
export default About