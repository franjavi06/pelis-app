import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)

        this.state = {search: ''}
    }

    handleChange = (e)=>{
        this.setState({search: e.target.value})
    }

    render() {
        const {handleSearch} = this.props
        return (
            <div className="search-container">
                <input className="search-input" type="text" onChange={this.handleChange} value={this.state.search}/>
                <button className="search-btn" onClick={handleSearch}>Search</button>
            </div>
        )
    }
}
