import { Component } from "react";
import imaage1 from "../images/heading-line-dec.png"
import image2 from "../images/pricing-table-01.png"



class Prices extends Component{

    render(){
        return(
            <div className="prices" style={{marginTop:"8em"}} id="price">
         <div className="container">
             <div className="row">
             <div className="col-sm-12 prices-header" style={{textAlign:"center"}} data-aos="fade-up">
                <h1>We Have The Best Pre-Order <span>Prices</span> You Can Get</h1>
                <img src={imaage1}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor<br></br> incididunt ut labore et dolore magna.</p>
             </div>
             <div className="row prices-row" >
             <div className="col-xl-3 price-block" data-aos="fade-right">
             <div className="style-top"></div>
             <div className="style-bot"></div>
             <span>$12</span>
             <div className="price-content">
                 <div>
             <h5>Standard Plan App</h5>
             <img src={image2} className="img-fluid"/>
             <ul>
                 <li>Lorem Ipsum Dolores</li>
                 <li>20 TB of Storage</li>
                 <li className="disactive">Life-time Support</li>
                 <li className="disactive">Premium Add-Ons</li>
                 <li className="disactive">Fastest Network</li>
                 <li className="disactive" >More Options</li>
                 <button>Purchase This Plan Now</button>

             </ul>
             </div>
             </div>
             </div>
             <div className="col-xl-3 price-block" data-aos="fade-up">
             <div className="style-top"></div>
             <div className="style-bot"></div>
             <span>$25</span>
             <div className="price-content">
                 <div>
             <h5>Business Plan App</h5>
             <img src={image2} className="img-fluid"/>
             <ul>
                 <li>Lorem Ipsum Dolores</li>
                 <li>20 TB of Storage</li>
                 <li>Life-time Support</li>
                 <li>Premium Add-Ons</li>
                 <li className="disactive">Fastest Network</li>
                 <li className="disactive">More Options</li>
                 <button>Purchase This Plan Now</button>

             </ul>
             </div>
             </div>
             </div>
             <div className="col-xl-3 price-block" data-aos="fade-left">
             <div className="style-top"></div>
             <div className="style-bot"></div>
             <span>$66</span>
             <div className="price-content">
                 <div>
             <h5>Premium Plan App</h5>
             <img src={image2} className="img-fluid"/>
             <ul>
                 <li>Lorem Ipsum Dolores</li>
                 <li>20 TB of Storage</li>
                 <li>Life-time Support</li>
                 <li>Premium Add-Ons</li>
                 <li>Fastest Network</li>
                 <li>More Options</li>
                 <button>Purchase This Plan Now</button>

             </ul>
             </div>
             </div>
             </div>
         </div>
         </div>
         </div>
            </div>
        )
    }
}
export default Prices