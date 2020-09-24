import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
    console.log(props.allData)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {props.allData.map(product => <ProductRow 
                key={product.name} name={product.name} 
                price={product.price} 
                stock={product.stocked}/>)}
            </table>
        </div>
    )
}