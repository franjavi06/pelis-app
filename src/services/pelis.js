

const BASEURL = 'http://www.omdbapi.com/'
const APIKEY = 'ebac882e'


export async function getPelisBySearch(q) {
    let SEARCH = q
    //const response = await fetch("http://www.omdbapi.com/?apikey=&s=")
    const response = await fetch(`${BASEURL}?apikey=${APIKEY}&s=${SEARCH}`)
    const responseJson = await response.json()
    return responseJson
}

export default{
    getPelisBySearch
}