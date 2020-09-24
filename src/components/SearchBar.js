import React from 'react'

export default function SearchBar(props) {

    let handleSearch = (event) => {
        props.onSearch(event.target.value)
    }

    let handleStock = (event) =>{
        props.stock(event.target.checked)
    }


    return (
        <div>
            <h1>Search</h1>
            <input type='text' onChange={handleSearch} value={props.search}/>
            <input type='checkbox' onChange={handleStock} checked={props.inStock}/><lable>Only show products in stock</lable>
        </div>
    )
}
