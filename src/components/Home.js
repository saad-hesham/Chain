import { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Services from "./Services";
import About from "./About";
import Clients from "./Clients";
import Prices from "./Prices";
import Footer from "./Footer";



class Home extends Component{

    render(){
        return(
            <div>
                <Navbar/>

            <Header/>
            <Services/>
            <About/>
            <Clients/>
            <Prices/>
            <Footer/>
         
            </div>
        )
    }
}
export default Home