import React from 'react';
import { BrowseContainer } from '../containers/browse';
import selectionFilter from '../utils/selection-filter'

const Browse = (props) => {
    const user = props.location.state

    var series =[ 
        {title: "Tigre Rei", slug:"tiger-king", genre:"documentaries", id:"272727272727ab", maturity: "0", description:"a descrição mais braba das series"},
        {title:"Tiro Longo", slug:"long-shot", genre:"crime", id:"cdcdcdcdcd", maturity: "0", description:"a descrição mais braba das 2 series"},
    ]
    
    var films = [ 
        {title: "Zodiac", slug:"zodiac", genre:"suspense", id:"2828282828ab", maturity: "0", description:"a descrição mais braba dos filmes"},
        {title: "Frozen", slug:"frozen", genre:"children", id:"efefefefefef", maturity: "0", description:"a descrição mais braba dos 2 filmes"},
        {title: "A quiet Place", slug:"a-quiet-place", genre:"thriller", id:"eghghghghgh", maturity: "18", description:"a descrição mais braba dos 33 filmes"},
    ]
    const slides = selectionFilter ({series, films})

    return <BrowseContainer slides = {slides} />
}

export default Browse