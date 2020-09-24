import React, { Component } from 'react'
import data from '../data.json'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default class FilterableProductTable extends Component {
    state = {
        data: data.data,
        search: '',
        inStock: false
    }

    handleStock = (stock) => {
        this.setState({
            inStock: stock
        })
    }

    handleSearch = (search) => {
        this.setState({
            search: search
        })
    }

    render() {
        let filteredProducts = this.state.data.filter((product) => product.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase()))

        if (this.state.inStock===true) {
            filteredProducts = filteredProducts.filter((product) => product.stocked )
        }

        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar onSearch={this.handleSearch} 
                search={this.state.search} 
                stock={this.handleStock}
                inStock={this.inStock}/>
                <ProductTable allData={filteredProducts}/>
            </div>
        )
    }
}
