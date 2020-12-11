import React from "react";
import './App.css';
import Collage from "./components/collage";
import Slider from "react-slick";
import Slides from "./components/slide";
import Banana from './images/Banana-cake.jpg';
import Birth from './images/ChocCake.jpg';
import Lava from './images/Lava-Choc.jpg';
import Cupa from './images/cupa.jpg';
import Tarts from './images/Tarts.jpg';

class SimpleSlider extends React.Component {
  constructor(){
    super();
    this.state = {
      collage: [],
    }
  }


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
      <Collage />
      <Slides />
      
        <div>
          <img src={Banana} alt="" className="con"/>
          <h3> Banana Cake </h3>
        </div>
        <div>
          <img src={Birth} alt="" className="con"/>
          <h3>Chocolate Cake</h3>
        </div>
        <div>
          <img src={Lava} alt="" className="con"/>
          <h3>Melted Lava Muffin</h3>
        </div>
        <div>
          <img src={Cupa} alt="" className="con"/>
          <h3>Cuppaccino Cake</h3>
        </div>
        <div>
          <img src={Tarts} alt="" className="con"/>
          <h3>Crusty Tart</h3>
        </div>
      </Slider>
    );
    
  }
}
export default SimpleSlider;
