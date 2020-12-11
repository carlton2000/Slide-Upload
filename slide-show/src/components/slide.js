import React from "react";
import './collage.css';
// making it a react so it can display on the app

class Titles extends React.Component {
    constructor(){
        super();
        this.state = {
          collage: [],
          image: null,
          url: '',
        }
      }
// fetching the data from the express data 
      componentDidMount(){
        fetch("/api/collage")
        .then(res => res.json())
        .then(collage => this.setState({collage}, () => console.log('Images fetched ...', collage)));
      }

    render() {

        return (
                <div className="move">
                {this.state.collage.map(collage =>
                  <li key={collage.id}>{collage.img} {collage.size}</li>
                     )}
                     <br />

                </div>
        )
    }
}

export default Titles;
// this js file is then exported so it can display in the original app.js