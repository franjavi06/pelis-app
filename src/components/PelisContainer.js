import React, { Component } from 'react'
import Peli from './Peli';
import {getPelisBySearch} from '../services/pelis'

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

    render() {

        const {pelis,cargando} = this.state;

        if(cargando){
            return <>Loading...</>
        }
        
        return (
            pelis.map( (peli)=><Peli Title={peli.Title} Poster={peli.Poster} key={peli.imdbID}></Peli> )
        )
    }
}

export default PelisContainer
