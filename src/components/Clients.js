import { Component } from "react";
import imaage1 from "../images/heading-line-dec.png"
import imaage2 from "../images/quote.png"
import imaage3 from "../images/client-image.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';


class Clients extends Component{
    componentDidMount(){
    $(".rate").click(function(){
        $(".rate").children("div#stars").children("svg#star").css({color:"grey"})

  $("path").removeClass("active")
$(".rate").removeClass("active")
        $(this).addClass("active")
        $(this).children("div#stars").children("svg#star").css({color:"#4e80ec"})

    })
    }

    render(){
        return(
            <div className="clients" style={{marginTop:"11em",textAlign:"center"}} >
         <div className="container">
             <div className="row">
                 <div className="col-sm-12" data-aos="fade-up">
                     <h1>Check What <span>The Clients Say</span> About Our App Dev</h1>
                     <img src={imaage1}/>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor<br></br> incididunt ut labore et dolore magna.</p>
                 </div>
                 <div className="row" style={{marginTop:"5em"}}>
                 <div className="col-lg-8">
                     <div>
<div className="rate" data-aos="fade-up">
    <div>
        <h4>David Martino Co</h4>
        <p>30 November 2021</p>

    </div>
    <p>Financial Apps</p>
    <div id="stars" >
        <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/> 4.8</div>
</div>


<div className="rate" data-aos="fade-up">
    <div>
        <h4>Jake Harris Nyo</h4>
        <p>29 November 2021</p>

    </div>
    <p>Digital Business</p>
    <div id="stars">
        <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/> 4.5</div>
</div>



<div className="rate" data-aos="fade-up">
    <div>
        <h4>May Catherina</h4>
        <p>27 November 2021</p>

    </div>
    <p>Business &#38; Economics</p>
    <div id="stars" >
        <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/> 4.7</div>
</div>



<div className="rate" data-aos="fade-up">
    <div>
        <h4>Random User</h4>
        <p>24 November 2021</p>

    </div>
    <p>New App Ecosystem</p>
    <div id="stars">
        <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/> 3.9</div>
</div>


<div className="rate" data-aos="fade-up">
    <div>
        <h4>Mark Amber Do</h4>
        <p>21 November 2021</p>

    </div>
    <p>Web Development</p>
    <div id="stars">
        <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/>
    <FontAwesomeIcon icon={faStar} id="star"/> 4.3</div>
</div>
</div>
                 </div>
             <div className="col-lg-4" data-aos="fade-left">
<div className="client-right">
<img src={imaage2}/>
<p>
    “Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”</p>
</div>

<div className="woman-image">
<img src= {imaage3}/>
<div>
    <h2>Mark Am</h2>
    <p>CTO, Amber Do Company</p>
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
export default Clients