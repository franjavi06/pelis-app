import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="search-container">
                <input className="search-input" type="text"/>
                <button className="search-btn">Search</button>
            </div>
        )
    }
}
