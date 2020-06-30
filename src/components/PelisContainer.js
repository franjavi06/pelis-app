import React, { Component } from 'react'
import Peli from './Peli';
import {getPelisBySearch} from '../services/pelis'
import Search from './Search';

export class PelisContainer extends Component {

    constructor(props){
        super(props)

        this.state = {
            pelis: [],
            cargando: true
        }
    }

    async componentDidMount(){
        
       const responseJson = await getPelisBySearch('star')
       console.log(responseJson)
       this.setState({pelis: responseJson.Search, cargando: false});

    }

    handleSearch= (e)=>{
        console.log(e);
    }

    render() {

        const {pelis,cargando} = this.state;

        if(cargando){
            return <>Loading...</>
        }
        
        return (
            <>
                <Search handleSearch={this.handleSearch}></Search>
                {pelis.map( (peli)=><Peli Title={peli.Title} Poster={peli.Poster} key={peli.imdbID}></Peli> )}
            </>
        )
    }
}

export default PelisContainer
