import React from 'react'
import PropTypes from 'prop-types'

const Peli = ({Title, Poster}) => {
    return (
        <div>
            <h1>{Title}</h1>
            <img src={Poster} alt="imagen"/>
        </div>
    )
}

Peli.propTypes = {
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired
}


export default Peli
