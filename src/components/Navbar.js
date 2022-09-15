import { Component } from "react";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Close from '@material-ui/icons/Close';

import logo from "../images/logo.png"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component{
    componentDidMount(){
        

      
        $(window).scroll(function(){
          
            if( window.scrollY >=$("#home").offset().top-120){
                $(".link").removeClass("active")
                $("li.home").addClass("active")
            }
            if( window.scrollY >=$("#service").offset().top-120){
                $(".link").removeClass("active")
                $("li.service").addClass("active")
            }
            if( window.scrollY >=$("#about").offset().top-120){
                $(".link").removeClass("active")
                $("li.about").addClass("active")
            }
            if( window.scrollY >=$("#price  ").offset().top-120){
                $(".link").removeClass("active")
                $("li.project").addClass("active")
            }
            if( window.scrollY >=$("#news").offset().top-300){
                $(".link").removeClass("active")
                $("li.blog").addClass("active")
            }
        
      
        })
         
            
        $(".link").click(function(){
            $('html, body').animate({
                scrollTop: $("#"+$(this).attr("datatype")).offset().top-200
              },500);
        })
        $(window).scroll(function(){
            if($(window).scrollTop()>250){
                $("nav").css({position:"fixed"})
             
            }
            else{
                $("nav").css({position:"relative"})

 
            }
        })
        $(window).resize(function(){
                if($(window).width()>768){
                    $(".nav-bar-mob").slideDown();
                    $("#bars").fadeOut();
                    $(".moon").fadeOut();
                }
                if($(window).width()<768){
                    $("#bars").fadeOut();
                    $(".moon").fadeIn();


                }
             
        })
        if($(window).width()<768){
            $(".nav-bar-mob").slideUp()

        }
        $("#bars").click(function(){
            $(".nav-bar-mob").slideDown();
            $("#bars").fadeOut();
            $(".moon").fadeIn();
        })
        $(".moon").click(function(){
            $(".nav-bar-mob").slideUp();
            $("#bars").fadeIn();
            $(".moon").fadeOut();
        })
        
    }

    render(){
        return(
       <nav className="realtive">
           <div className="container">
               <div className="row">
               <div className="col-md-3">
                   <img src={logo}/>
               </div>
               <div className="col-md-9 " >
                   <ul className="nav-bar-mob" >
                   <li className="link home " datatype="home ">
                       home
                       <span></span>
                       <span></span>
                       <span></span>
                       </li>
              
                   <li className="link service" datatype="service">
                       services
                       <span></span>
                       <span></span>
                       <span></span>
                       </li>
                       <li className="link about" datatype="about">
                       about
                   <span></span>
                       <span></span>
                       <span></span>
                   </li>
                   <li className="link project" datatype="price">
                       Pricing
                       <span></span>
                       <span></span>
                       <span></span>

                   </li>
                   <li className="link blog" datatype="news">
                       Newsletter
                       <span></span>
                       <span></span>
                       <span></span>
                       </li>
                
                   <li> <FontAwesomeIcon icon={faArrowRightToBracket}  /> sign in now </li>
                   <li style={{opacity:"0"}}>blank</li>
                   </ul>
                   <FontAwesomeIcon icon={faBars} id="bars" style={{cursor:"pointer"}}/>
                   <Close className="icon moon" style={{cursor:"pointer"}}/>

                   </div>
               </div>
               </div>
       </nav>
        )
    }
}
export default Navbar