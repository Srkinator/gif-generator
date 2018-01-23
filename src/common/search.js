import React, { Component } from 'react';

import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);

    }

    searchHandler = (event) => {
        if (event.key == "Enter") {
            this.props.searchHandler(event.target.value)
            event.preventDefault();
            event.target.value="";
        }
    }

    render() {
        return (
            <form>
                <input onKeyDownCapture={this.searchHandler} type="text" name="name" className="question" id="nme" required autoComplete="off" />
                <label htmlFor="nme"><span>Search for your favorite gif :)</span></label>
            </form>
        );
    }
}

export default Search;