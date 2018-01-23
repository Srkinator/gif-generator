import React, { Component } from 'react';
import { communication } from "../services/communicationService";
import Search from '../common/search';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfGifs: [],
            searchedString: "",
            previousGif: {}
        }
    }

    loadGif = (searchedString) => {
        communication.getGif(searchedString, (response) => {
            this.setState({
                listOfGifs: response
            })
        }, (error) => {
            console.log(error);
        })
    }

    catchSearch = (searchedString) => {
        this.loadGif(searchedString);
        this.setState({
            searchedString
        })
    }

    renderRandomGif = () => {
        console.log("usao");
        const maxNum = this.state.listOfGifs.length;
        const minNum = 0;
        let randomNum = Math.floor((Math.random() * maxNum) + minNum);

        return (
            <div className="row">
                <h2>random gif based on your search : {this.state.searchedString}</h2>
                <img style={{ width: "100%", height: "500px" }} src={this.state.listOfGifs[randomNum].images.original.url} />
            </div>
        )
    }

    render() {
        console.log(this.state.previousGif);
        if (this.state.listOfGifs.length == 0) {
            return (
                <div className="container">
                    <h1>Random GIF Generator</h1>
                    <div className="row">
                        <Search searchHandler={this.catchSearch} />
                    </div>
                </div>
            )
        }
        return (
            <div className="container">
                <h1>Random GIF Generator</h1>
                <div className="row">
                    <Search searchHandler={this.catchSearch} />
                </div>
                <div className="row">
                    {this.renderRandomGif()}
                </div>
            </div>
        );
    }
}

export default MainPage;