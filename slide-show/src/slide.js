import React from "react";
// making it a react so it can display on the app

class Titles extends React.Component {

    render() {

        return (

            <div>

                <h1 className="title"><i><b>Slide Show</b></i></h1><br></br>
            {/*This heading is diplayed on top*/}
                <p className="p1"> Choose A Cake You Like</p>
            {/*with a slogan that appears under the heading*/}
            </div>
        )
    }
}

export default Titles;
// this js file is then exported so it can display in the original app.js