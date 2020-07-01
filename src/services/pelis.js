import axios from 'axios'

const BASEURL = process.env.REACT_APP_BASEURL;
const APIKEY = process.env.REACT_APP_APIKEY;


export async function getPelisBySearch(q) {
    let SEARCH = q
    //const response = await fetch("http://www.omdbapi.com/?apikey=&s=")
    const response = await fetch(`${BASEURL}?apikey=${APIKEY}&s=${SEARCH}`)
    const responseJson = await response.json()
    return responseJson
}

export async function getPelisQ(q){
    let SEARCH = q
    try{
        const response = await axios({
            url: `${BASEURL}?apikey=${APIKEY}&s=${SEARCH}`,
            method: 'GET'
        })
        return response
    }catch(e){
        console.log(e)
    }
}

