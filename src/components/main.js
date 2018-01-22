import React, { Component } from 'react';
import { communication } from "../services/communicationService";

class MainPage extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.loadGif();
    }

    loadGif = () => {
        communication.getGif("lebron james", (response)=>{
            console.log(response)
        }, (error)=>{
            console.log(error);
        })
    }
    
    render() {
        return (
            <div>
                <h1>raasddi</h1>        
            </div>
        );
    }
}

export default MainPage;