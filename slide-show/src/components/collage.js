import React from "react";
import './collage.css';
import {storage} from '../firebase';

class Collage extends React.Component {
  constructor(){
    super();
    this.state = {
      collage: [],
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
    .handleChange
    .bind(this);
    this.handleUpload = this.handleUpload.bind(this);

  }
  handleChange = e =>{
    if(e.target.files[0]){
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
    const {image} = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
    (snapshot) => {
        const progress = Math.round(( snapshot.bytesTransferred / snapshot.totalBytes ) * 100);
        this.setState({progress});
      },
     (error) =>{
       console.log(error);
     },
     () => {
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
        console.log(url);
        this.setState({url});
      })
     });
  }


  render() {
    return (
      <div className="Center">
        
            <h1 className="title"><i><b>Slide Show</b></i></h1><br></br>
            {/*This heading is diplayed on top*/}
                <p className="p1"> Choose A Cake You Like</p>
            {/*with a slogan that appears under the heading*/}
        <br />
        <progress value={this.state.progress} max="100"/>
        <br />
        
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        
        <br />
        <br />
        <div className="alig">
        <img src={this.state.url || "https://via.placeholder.com/150"} alt="Upload images" height="300" width="400"/>
        </div>
      </div>  
    );
  }
}
export default Collage;
