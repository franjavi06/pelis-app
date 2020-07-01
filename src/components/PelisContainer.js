import React, { Component } from 'react'
import Peli from './Peli';
import {getPelisBySearch,getPelisQ} from '../services/pelis'
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
       const responseJson2 = await getPelisQ('iron')
       console.log(responseJson2)       
       this.setState({pelis: responseJson.Search, cargando: false});

    }

    handleSearch= async (search) => {
        this.setState({cargando: true})
        const responseJson = await getPelisBySearch(search) 
        console.log(responseJson)
        if(responseJson.Response==="True")
            this.setState({cargando: false, pelis: responseJson.Search})
        else
            this.setState({cargando: false, pelis: []})
    }

    render() {

        const {pelis,cargando} = this.state;        
        return (
            <>
                <Search handleSearch={this.handleSearch}></Search>
                {
                    //cargando && 'Loading...'
                    cargando?'Loading':''
                }
                {
                    (!pelis.length && !cargando) && 'No pelis founded try another search'
                }
                {pelis.map( (peli)=><Peli Title={peli.Title} Poster={peli.Poster} key={peli.imdbID}></Peli> )}
            </>
        )
    }
}

export default PelisContainer
